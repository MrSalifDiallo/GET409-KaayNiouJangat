// Génère print.html puis le PDF à partir de atelier-claude-kaaynioujangat.md
// Usage : node docs/atelier-claude/build.mjs
// Les cadres "CAPTURE" se remplissent seuls : dépose le fichier dans img/ avec le nom indiqué, puis relance.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const SRC = join(dir, "atelier-claude-kaaynioujangat.md");
const HTML = join(dir, "print.html");
const PDF = join(dir, "atelier-claude-kaaynioujangat.pdf");
const CHROME = "C:/Program Files/Google/Chrome/Application/chrome.exe";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const inline = (s) =>
  esc(s)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

function figure(kind, file, caption) {
  const found = existsSync(join(dir, "img", file));
  if (found) return `<figure><img src="img/${file}" alt=""><figcaption>${inline(caption)}</figcaption></figure>`;
  if (kind === "IMG") throw new Error(`Image manquante : img/${file}`);
  return `<figure class="slot"><div>Capture à insérer<br><small>img/${esc(file)}</small></div><figcaption>${inline(caption)}</figcaption></figure>`;
}

const lines = readFileSync(SRC, "utf8").split(/\r?\n/);
const out = [];
let i = 0, para = [], list = null;
const flushPara = () => { if (para.length) { out.push(`<p>${inline(para.join(" "))}</p>`); para = []; } };
const flushList = () => { if (list) { out.push(`</${list}>`); list = null; } };

while (i < lines.length) {
  const l = lines[i];
  let m;
  if (l.startsWith("```")) {
    flushPara(); flushList();
    const buf = []; i++;
    while (i < lines.length && !lines[i].startsWith("```")) buf.push(lines[i++]);
    out.push(`<pre>${esc(buf.join("\n"))}</pre>`); i++; continue;
  }
  if ((m = l.match(/^!\[\[(IMG|CAPTURE):\s*([^|]+?)\s*\|\s*(.+?)\]\]$/))) {
    flushPara(); flushList(); out.push(figure(m[1], m[2], m[3])); i++; continue;
  }
  if (l.startsWith("|")) {
    flushPara(); flushList();
    const rows = [];
    while (i < lines.length && lines[i].startsWith("|")) rows.push(lines[i++]);
    const cells = (r) => r.replace(/^\||\|$/g, "").split("|").map((c) => c.trim());
    const [head, , ...body] = rows;
    out.push(`<table><thead><tr>${cells(head).map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>${body
      .map((r) => `<tr>${cells(r).map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>`);
    continue;
  }
  if ((m = l.match(/^(#{1,2})\s+(.*)/))) {
    flushPara(); flushList();
    out.push(`<h${m[1].length}>${inline(m[2])}</h${m[1].length}>`); i++; continue;
  }
  if ((m = l.match(/^[-*]\s+(.*)/))) {
    flushPara(); if (list !== "ul") { flushList(); out.push("<ul>"); list = "ul"; }
    out.push(`<li>${inline(m[1])}</li>`); i++; continue;
  }
  if (!l.trim()) { flushPara(); flushList(); i++; continue; }
  flushList(); para.push(l.trim()); i++;
}
flushPara(); flushList();

// Première page : le H1 et les paragraphes qui suivent jusqu'au premier H2 forment la page de garde.
let body = out.join("\n");
const firstH2 = body.indexOf("<h2>");
body = `<section class="cover">${body.slice(0, firstH2)}</section>\n${body.slice(firstH2)}`;

const css = `
@page { size: A4; margin: 16mm 14mm; }
:root { --green:#127a4a; --ink:#121a22; --muted:#54687c; --line:#d5dfe9; }
* { box-sizing: border-box; }
body { font: 10.5pt/1.5 "Segoe UI", "Trebuchet MS", sans-serif; color: var(--ink); margin: 0; }
.cover { min-height: 245mm; display: flex; flex-direction: column; justify-content: center; page-break-after: always; border-left: 6px solid #7af2a2; padding-left: 14mm; }
.cover h1 { font-size: 30pt; line-height: 1.15; margin: 0 0 10mm; }
h2 { font-size: 17pt; color: var(--green); border-bottom: 2px solid #7af2a2; padding-bottom: 3px; margin: 0 0 6mm; page-break-before: always; break-after: avoid; }
.cover + h2 { page-break-before: auto; }
p { margin: 0 0 3mm; } ul { margin: 0 0 3mm 5mm; padding: 0; }
code { font: 9pt Consolas, monospace; background: #eef2f8; padding: 0 3px; border-radius: 3px; }
pre { font: 8.4pt/1.4 Consolas, monospace; background: #0f1418; color: #edf2f9; padding: 3mm 4mm; border-radius: 6px; white-space: pre-wrap; word-break: break-word; margin: 0 0 4mm; break-inside: avoid; }
table { border-collapse: collapse; width: 100%; margin: 0 0 4mm; font-size: 9.5pt; break-inside: avoid; }
th, td { border: 1px solid var(--line); padding: 2mm 3mm; text-align: left; } th { background: #e9eef4; }
figure { margin: 0 0 5mm; text-align: center; break-inside: avoid; }
figure img { max-width: 100%; max-height: 120mm; border: 1px solid var(--line); border-radius: 6px; }
figure img[src*="mobile"] { max-height: 150mm; }
figcaption { font-size: 9pt; color: var(--muted); margin-top: 1.5mm; }
.slot div { border: 2px dashed #9aaec3; border-radius: 6px; padding: 12mm 4mm; color: var(--muted); background: #f7fafc; }
.slot small { font: 8pt Consolas, monospace; }
`;

writeFileSync(HTML, `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Atelier Claude Code — KaayNioujangat</title><style>${css}</style></head><body>${body}</body></html>`);
console.log("print.html écrit");

execFileSync(CHROME, ["--headless=new", "--disable-gpu", "--no-pdf-header-footer", `--print-to-pdf=${PDF}`, pathToFileURL(HTML).href], { stdio: "ignore" });
console.log("PDF écrit :", PDF);
