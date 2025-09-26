export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).end();
  }

  const rawBody =
    typeof request.body === "string"
      ? JSON.parse(request.body)
      : request.body || {};

  const visitorName = rawBody.name ?? "";
  const visitorEmail = rawBody.email ?? "";
  const visitorMessage = rawBody.message ?? "";

  const botTrapWebsiteField = rawBody.website ?? "";

  if (botTrapWebsiteField) {
    return response.status(200).json({ ok: true });
  }

  if (!visitorEmail || !visitorMessage) {
    return response
      .status(400)
      .json({ error: "Missing required fields: email and message." });
  }

  return response.status(200).json({
    ok: true,
    received: {
      visitorName,
      visitorEmail,
      visitorMessage,
    },
  });
}
