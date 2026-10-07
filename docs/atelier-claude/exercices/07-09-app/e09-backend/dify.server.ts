type DifyResponse = { data?: { outputs?: Record<string, unknown> }; answer?: string; message?: string };

export type DifyCall = {
  question: string;
  userId: string;
  marketContext?: string | undefined;
  timeoutMs?: number | undefined;
  signal?: AbortSignal | undefined;
};

export async function callDify({ question, userId, marketContext, timeoutMs = 30000, signal }: DifyCall): Promise<string> {
  const apiKey = process.env['DIFY_API_KEY'];
  if (!apiKey) throw new Error("L’agent n’est pas configuré.");
  const baseUrl = (process.env['DIFY_API_URL'] ?? "https://api.dify.ai/v1").replace(/\/+$/, "");
  const timeout = AbortSignal.timeout(timeoutMs);
  let response: Response;
  try {
    response = await fetch(`${baseUrl}/workflows/run`, {
      method: "POST", signal: signal ? AbortSignal.any([timeout, signal]) : timeout,
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ inputs: { query: question, market_context: marketContext ?? "" }, response_mode: "blocking", user: userId }),
    });
  } catch { throw new Error("L’agent met trop de temps à répondre. Réessayez."); }
  const body = (await response.json().catch(() => ({}))) as DifyResponse;
  if (!response.ok) throw new Error(response.status === 429 ? "L’agent reçoit trop de demandes. Réessayez plus tard." : "L’agent est indisponible pour le moment.");
  const outputs = body.data?.outputs;
  const answer = body.answer ?? outputs?.['answer'] ?? outputs?.['text'] ?? outputs?.['result'];
  if (typeof answer !== "string" || !answer.trim()) throw new Error("L’agent n’a pas renvoyé de réponse lisible.");
  return answer;
}
