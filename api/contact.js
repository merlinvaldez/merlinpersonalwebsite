import { Resend } from "resend";

const contactForm = document.getElementById("contactForm");
const sendButton = document.getElementById("sendButton");
const formStatus = document.getElementById("formStatus");

function setStatus(message) {
  formStatus.textContent = message;
}

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

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const firstName = formData.get("first_name" || "");
  const lastName = formData.get("last_name" || "");
  const email = formData.get("email" || "");
  const message = formData.get("message" || "");
  const website = formData.get("website" || ""); //this is for the honeypot
  const payload = {
    name: `${firstName} ${lastName}`.trim(),
    email,
    message,
    website,
  };
});

setStatus("Sending...");
sendButton.disabled = true;

try {
  const response = await fetch("/api/contact.js", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const text = await response.text();
  let data = null;
  try {
    data = JSON.parse(text);
  } catch {}
  if (response.ok && data?.ok) {
    setStatus("Thanks! Your message was sent.");
    contactForm.reset();
  } else if (response.status === 400) {
    setStatus(data?.error || "Please check your inputs and try again.");
  } else if (response.status === 405) {
    setStatus("This endpoint only accepts POST requests.");
  } else {
    setStatus("Sorry, something went wrong. Please try again.");
    console.error("Server response:", response.status, text);
  }
} catch (networkError) {
  setStatus("Network error. Check your connection and try again.");
  console.error("Network error:", networkError);
} finally {
  sendButton.disabled = false;
}
