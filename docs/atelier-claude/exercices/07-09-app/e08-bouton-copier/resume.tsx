import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { ArrowDownRight, ArrowUpRight, Check, Copy, Gauge, RefreshCw } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { formatUsdFcfa } from "@/data/signaux";
import { getMarketOverview } from "@/lib/market.functions";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Résumé du jour — KaayNioujangat" },
      {
        name: "description",
        content:
          "Le résumé quotidien du marché crypto en français courant : ce qui bouge, pourquoi, et ce qu'il faut surveiller.",
      },
      { property: "og:title", content: "Résumé du jour — KaayNioujangat" },
      {
        property: "og:description",
        content: "Ce qui bouge, pourquoi, et à surveiller aujourd'hui.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  const marketFn = useServerFn(getMarketOverview);
  const market = useQuery({ queryKey: ["market"], queryFn: () => marketFn(), refetchInterval: 60_000 });
  const date = new Date().toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const assets = market.data?.assets ?? [];
  const sorted = [...assets].sort((a, b) => b.variation24h - a.variation24h);
  const winner = sorted[0], loser = sorted.at(-1);
  const average = assets.length ? assets.reduce((sum, item) => sum + item.variation24h, 0) / assets.length : 0;
  const rising = assets.filter((item) => item.variation24h > 0).length;
  const mood = average > 1 ? "Dynamique positive" : average < -1 ? "Marché sous pression" : "Marché partagé";
  const points = [
    { titre: "Ce qui bouge", texte: winner && loser ? `${winner.symbole} mène la hausse à ${winner.variation24h.toFixed(2)} %, tandis que ${loser.symbole} recule de ${Math.abs(loser.variation24h).toFixed(2)} % sur 24 heures.` : "Les données sont en cours de chargement." },
    { titre: "Comment le comprendre", texte: `${rising} crypto${rising > 1 ? "s" : ""} sur ${assets.length} progressent. Une seule journée ne suffit pas pour confirmer une tendance : compare aussi les volumes et plusieurs jours.` },
    { titre: "À surveiller aujourd’hui", texte: "Observe si Bitcoin conserve sa direction et si les autres grandes cryptos suivent. Une hausse isolée est moins solide qu’un mouvement partagé." },
  ];
  const [copyState, setCopyState] = useState<"idle" | "done" | "error">("idle");
  const canCopy = assets.length > 0 && !!market.data;
  const copySummary = async () => {
    if (!market.data) return;
    const lines = [
      `Résumé du jour — KaayNioujangat (${date})`,
      "",
      `${mood} : variation moyenne de ${average >= 0 ? "+" : ""}${average.toFixed(2)} % sur 24 heures, ${rising}/${assets.length} cryptos en hausse.`,
      "",
      ...points.map((p) => `${p.titre} : ${p.texte}`),
      "",
      `Source : ${market.data.source} · mis à jour à ${new Date(market.data.updatedAt).toLocaleTimeString("fr-FR")}`,
      "Ceci n'est pas un conseil financier.",
    ];
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopyState("done");
    } catch {
      setCopyState("error");
    }
    setTimeout(() => setCopyState("idle"), 2000);
  };

  return (
    <PageLayout>
      <div className="mx-auto max-w-6xl px-4 py-12">
        <p className="text-sm font-medium uppercase tracking-wide text-primary">
          Résumé du jour
        </p>
        <h1 className="mt-2 text-3xl font-extrabold md:text-4xl">
          Le marché ce matin
        </h1>
        <p className="mt-1 text-sm capitalize text-muted-foreground">{date}</p>

        <div className="mt-6 flex flex-wrap items-center gap-3"><span className="inline-flex items-center gap-2 text-sm text-muted-foreground"><span className="h-2 w-2 rounded-full bg-success" />{market.isLoading ? "Chargement des prix réels…" : !market.data ? "Serveur injoignable · réessayez avec « Actualiser »" : market.data.error ?? `Marché actualisé · ${market.data.source} · ${new Date(market.data.updatedAt).toLocaleTimeString("fr-FR")}`}</span><Button variant="ghost" size="sm" onClick={() => market.refetch()} disabled={market.isFetching}><RefreshCw className={market.isFetching ? "animate-spin" : ""}/> Actualiser</Button><Button variant="ghost" size="sm" onClick={copySummary} disabled={!canCopy}>{copyState === "done" ? <Check /> : <Copy />} {copyState === "done" ? "Copié" : copyState === "error" ? "Échec de la copie" : "Copier"}</Button></div>

        {market.data?.xofRate && <p className="mt-3 text-sm text-muted-foreground">1 $ ≈ {Math.round(market.data.xofRate).toLocaleString("fr-FR")} FCFA · Prix en dollars (FCFA entre parenthèses)</p>}
        <section className="mt-8 border-y border-border py-7">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><div className="flex items-center gap-2 text-primary"><Gauge className="h-5 w-5"/><span className="text-sm font-semibold">Lecture du marché</span></div><h2 className="mt-3 text-2xl font-bold md:text-3xl">{mood}</h2><p className="mt-2 max-w-2xl text-muted-foreground">La variation moyenne des cryptos suivies est de <strong className={average >= 0 ? "text-success" : "text-destructive"}>{average >= 0 ? "+" : ""}{average.toFixed(2)} %</strong> sur les dernières 24 heures.</p></div><div className="rounded-lg bg-muted px-4 py-3 text-sm"><span className="text-muted-foreground">En hausse</span><strong className="ml-3 text-xl text-success">{rising}/{assets.length}</strong></div></div>
        </section>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {winner && <div className="rounded-lg border border-success/30 bg-card p-5"><ArrowUpRight className="h-5 w-5 text-success"/><p className="mt-3 text-xs text-muted-foreground">Meilleure progression</p><p className="mt-1 text-xl font-bold">{winner.symbole}</p><p className="text-success">+{winner.variation24h.toFixed(2)} %</p></div>}
          {loser && <div className="rounded-lg border border-destructive/30 bg-card p-5"><ArrowDownRight className="h-5 w-5 text-destructive"/><p className="mt-3 text-xs text-muted-foreground">Plus fort recul</p><p className="mt-1 text-xl font-bold">{loser.symbole}</p><p className="text-destructive">{loser.variation24h.toFixed(2)} %</p></div>}
          {assets[0] && <div className="rounded-lg border border-border bg-card p-5"><p className="text-xs text-muted-foreground">Bitcoin maintenant</p><p className="mt-3 text-xl font-bold">{formatUsdFcfa(assets[0].prixUsd, market.data?.xofRate)}</p><Link to="/crypto/$symbole" params={{ symbole: "btc" }} className="mt-2 inline-block text-sm text-primary hover:underline">Voir le graphique →</Link></div>}
        </div>

        <Accordion type="single" collapsible defaultValue="Ce qui bouge" className="mt-8 border-t border-border">
          {points.map((p) => (
            <AccordionItem key={p.titre} value={p.titre}><AccordionTrigger className="text-base text-primary">{p.titre}</AccordionTrigger><AccordionContent className="max-w-3xl text-sm leading-7 text-muted-foreground">{p.texte}</AccordionContent></AccordionItem>
          ))}
        </Accordion>

        <Link
          to="/signaux"
          className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-4 font-semibold text-primary-foreground transition-colors hover:bg-primary-hover sm:w-auto"
        >
          Voir tous les signaux
        </Link>
      </div>
    </PageLayout>
  );
}
