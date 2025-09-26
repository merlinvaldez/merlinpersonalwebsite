export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  // Handle both parsed and raw string bodies
  const body =
    typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
  const { name, email, message, website } = body;

  return res
    .status(200)
    .json({ ok: true, received: { name, email, message, website } });
}
