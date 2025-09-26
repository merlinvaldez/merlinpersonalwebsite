import { Resend } from "resend";
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

  const resend = new Resend(process.env.RESEND_API_KEY);

  const ToRecipientAddress = "merlinvaldez@gmail.com";
  const fromSenderAddress = "Contact Form <onboarding@resend.dev>";

  const emailSubject = `New message from ${visitorName || "Website visitor"}`;
  const emailTextBody =
    `From: ${visitorName || "N/A"} <${visitorEmail}>\n\n` + `${visitorMessage}`;

  try {
    await resend.emails.send({
      from: fromSenderAddress,
      to: ToRecipientAddress,
      replyTo: visitorEmail,
      subject: emailSubject,
      text: emailTextBody,
    });
  } catch (sendError) {
    console.error("Email send failed:", sendError);
    return response
      .status(500)
      .json({ error: "Email failed to send. Please try again later." });
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
