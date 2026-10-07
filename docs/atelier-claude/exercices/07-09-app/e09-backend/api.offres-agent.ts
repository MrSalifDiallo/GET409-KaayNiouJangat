import { createFileRoute } from "@tanstack/react-router";
import { cleanAgentAnswer, questionSchema } from "@/lib/dify.functions";

const json = (payload: unknown, status = 200) =>
  new Response(JSON.stringify(payload), { status, headers: { "Content-Type": "application/json; charset=utf-8" } });

export const Route = createFileRoute("/api/offres-agent")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const input = questionSchema.safeParse(await request.json().catch(() => null));
        if (!input.success) return json({ error: "La question doit contenir entre 3 et 600 caractères." }, 400);

        const { callDify } = await import("@/lib/dify.server");
        const { question } = input.data;
        const abort = new AbortController();
        const encoder = new TextEncoder();
        let keepAlive: ReturnType<typeof setInterval> | undefined;

        const stream = new ReadableStream<Uint8Array>({
          async start(controller) {
            // Un espace toutes les 5 s garde la connexion active (Netlify coupe après ~30 s de silence).
            const ping = () => { try { controller.enqueue(encoder.encode(" ")); } catch { /* flux fermé */ } };
            ping();
            keepAlive = setInterval(ping, 5000);
            let payload: { answer: string } | { error: string };
            try {
              const answer = await callDify({ question, userId: `user-greensprint-${crypto.randomUUID()}`, timeoutMs: 60000, signal: abort.signal });
              payload = { answer: cleanAgentAnswer(answer) };
            } catch (error) {
              payload = { error: error instanceof Error ? error.message : "L’agent est indisponible pour le moment." };
            }
            clearInterval(keepAlive);
            try { controller.enqueue(encoder.encode(JSON.stringify(payload))); controller.close(); } catch { /* client parti */ }
          },
          cancel() {
            clearInterval(keepAlive);
            abort.abort();
          },
        });

        return new Response(stream, { headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" } });
      },
    },
  },
});
