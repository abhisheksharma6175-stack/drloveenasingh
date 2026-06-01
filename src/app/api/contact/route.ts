import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactRequest = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  reason?: unknown;
  message?: unknown;
};

function getRequiredText(value: unknown, field: string) {
  if (typeof value !== "string" || !value.trim()) {
    throw new Error(`${field} is required.`);
  }
  return value.trim();
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Unknown email error.";
}

function getRequiredEmail(value: unknown) {
  const email = getRequiredText(value, "Email address");

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error("Email address is invalid.");
  }

  return email;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildHtmlEmail({
  name,
  phone,
  email,
  reason,
  message,
}: {
  name: string;
  phone: string;
  email: string;
  reason: string;
  message: string;
}) {
  const timestamp = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone);
  const safeEmail = escapeHtml(email);
  const safeReason = escapeHtml(reason);
  const safeMessage = escapeHtml(message);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Appointment Request</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Georgia, serif;
      background-color: #eef4f9;
      padding: 40px 16px;
      color: #1a2a3a;
    }
    .wrapper {
      max-width: 600px;
      margin: 0 auto;
    }
    /* Header */
    .header {
      background-color: #0d2d4e;
      border-radius: 12px 12px 0 0;
      padding: 32px 36px;
      text-align: center;
    }
    .header-badge {
      display: inline-block;
      background-color: rgba(255,255,255,0.12);
      color: #a8d8f0;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 5px 14px;
      border-radius: 20px;
      margin-bottom: 14px;
      border: 1px solid rgba(168, 216, 240, 0.3);
    }
    .header h1 {
      color: #ffffff;
      font-size: 22px;
      font-weight: 400;
      letter-spacing: -0.3px;
      line-height: 1.3;
    }
    .header h1 span {
      color: #5bc4e8;
      font-style: italic;
    }
    .header-sub {
      color: #7bafc8;
      font-size: 13px;
      margin-top: 6px;
    }
    /* Card body */
    .card {
      background: #ffffff;
      padding: 36px 36px 28px;
      border-left: 1px solid #dce8f2;
      border-right: 1px solid #dce8f2;
    }
    .alert-bar {
      display: flex;
      align-items: center;
      gap: 10px;
      background-color: #e8f5e9;
      border: 1px solid #a5d6a7;
      border-radius: 8px;
      padding: 12px 16px;
      margin-bottom: 28px;
    }
    .alert-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #2e7d32;
      flex-shrink: 0;
    }
    .alert-bar p {
      font-size: 13px;
      color: #1b5e20;
      font-weight: 500;
    }
    .section-label {
      font-size: 10.5px;
      font-weight: 700;
      letter-spacing: 1.8px;
      text-transform: uppercase;
      color: #7bafc8;
      margin-bottom: 16px;
    }
    /* Field rows */
    .field-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 14px;
      margin-bottom: 14px;
    }
    .field {
      background-color: #f5f9fc;
      border: 1px solid #dce8f2;
      border-radius: 8px;
      padding: 14px 16px;
    }
    .field.full {
      grid-column: 1 / -1;
    }
    .field-key {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: #7bafc8;
      margin-bottom: 5px;
    }
    .field-val {
      font-size: 15px;
      color: #0d2d4e;
      font-weight: 500;
      line-height: 1.4;
    }
    /* Reason highlight */
    .reason-field {
      background-color: #e8f4fb;
      border-color: #a8d8f0;
    }
    .reason-field .field-val {
      color: #0a4a6e;
    }
    /* Divider */
    .divider {
      height: 1px;
      background: linear-gradient(to right, transparent, #dce8f2, transparent);
      margin: 24px 0;
    }
    /* Message block */
    .message-block {
      background-color: #f5f9fc;
      border: 1px solid #dce8f2;
      border-left: 3px solid #5bc4e8;
      border-radius: 0 8px 8px 0;
      padding: 16px 18px;
    }
    .message-block p {
      font-size: 14px;
      color: #2c4a60;
      line-height: 1.7;
    }
    .no-message {
      font-style: italic;
      color: #9ab5c8;
    }
    /* CTA */
    .cta-row {
      margin-top: 28px;
      text-align: center;
    }
    .cta-btn {
      display: inline-block;
      background-color: #0d5a8a;
      color: #ffffff;
      font-size: 14px;
      font-weight: 600;
      text-decoration: none;
      padding: 13px 28px;
      border-radius: 8px;
      letter-spacing: 0.2px;
    }
    /* Footer */
    .footer {
      background-color: #0d2d4e;
      border-radius: 0 0 12px 12px;
      padding: 22px 36px;
      text-align: center;
    }
    .footer p {
      font-size: 12px;
      color: #5a8aaa;
      line-height: 1.7;
    }
    .footer a {
      color: #7bafc8;
      text-decoration: none;
    }
    .footer-divider {
      height: 1px;
      background-color: rgba(255,255,255,0.08);
      margin: 14px 0;
    }
    .footer-brand {
      color: #7bafc8;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.3px;
    }
    .footer-sub {
      color: #3d6882;
      font-size: 11px;
    }
    /* Timestamp strip */
    .timestamp-strip {
      background-color: #f5f9fc;
      border: 1px solid #dce8f2;
      border-top: none;
      border-left: 1px solid #dce8f2;
      border-right: 1px solid #dce8f2;
      padding: 10px 36px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .timestamp-strip p {
      font-size: 11.5px;
      color: #7bafc8;
    }
    .timestamp-strip span {
      font-size: 11px;
      color: #aacde0;
      background: #e8f4fb;
      border: 1px solid #c0dff0;
      border-radius: 20px;
      padding: 3px 10px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="wrapper">

    <!-- Header -->
    <div class="header">
      <div class="header-badge">Appointment Request</div>
      <h1>New patient inquiry for<br><span>All Care Family Medicine PC</span></h1>
      <p class="header-sub">Dr. Loveena Singh MD &nbsp;|&nbsp; Queens &amp; Hicksville</p>
    </div>

    <!-- Timestamp strip -->
    <div class="timestamp-strip">
      <p>${timestamp}</p>
      <span>New Request</span>
    </div>

    <!-- Card -->
    <div class="card">

      <!-- Alert -->
      <div class="alert-bar">
        <div class="alert-dot"></div>
        <p>A patient has submitted an appointment request through the website. Please follow up promptly.</p>
      </div>

      <!-- Patient info -->
      <p class="section-label">Patient information</p>
      <div class="field-grid">
        <div class="field">
          <p class="field-key">Full Name</p>
          <p class="field-val">${safeName}</p>
        </div>
        <div class="field">
          <p class="field-key">Phone Number</p>
          <p class="field-val">${safePhone}</p>
        </div>
        <div class="field">
          <p class="field-key">Email Address</p>
          <p class="field-val">${safeEmail}</p>
        </div>
        <div class="field full reason-field">
          <p class="field-key">Reason for Visit</p>
          <p class="field-val">${safeReason}</p>
        </div>
      </div>

      <div class="divider"></div>

      <!-- Message -->
      <p class="section-label">Additional message</p>
      <div class="message-block">
        <p${!message ? ' class="no-message"' : ""}>${safeMessage || "No additional message provided."}</p>
      </div>

    </div>

    <!-- Footer -->
    <div class="footer">
      <p class="footer-brand">All Care Family Medicine PC</p>
      <p class="footer-sub">Dr. Loveena Singh MD</p>
      <div class="footer-divider"></div>
      <p>
        This is an automated notification from your website contact form.<br>
        Do not reply to this email directly. Contact the patient using the details above.
      </p>
    </div>

  </div>
</body>
</html>`;
}

function buildPatientConfirmationEmail({
  name,
  phone,
  email,
  reason,
}: {
  name: string;
  phone: string;
  email: string;
  reason: string;
}) {
  const firstName = escapeHtml(name.split(" ")[0]);
  const safeName = escapeHtml(name);
  const safePhone = escapeHtml(phone);
  const safeEmail = escapeHtml(email);
  const safeReason = escapeHtml(reason);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Appointment Request Received</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background-color: #eef4f9;
      padding: 40px 16px;
      color: #1a2a3a;
    }
    .wrapper { max-width: 600px; margin: 0 auto; }
    .header {
      background-color: #0d2d4e;
      border-radius: 12px 12px 0 0;
      padding: 40px 36px 36px;
      text-align: center;
    }
    .header-icon {
      width: 56px; height: 56px; border-radius: 50%;
      background: rgba(91,196,232,0.15);
      border: 1.5px solid rgba(91,196,232,0.35);
      display: inline-flex; align-items: center; justify-content: center;
      margin-bottom: 18px;
    }
    .header-badge {
      display: inline-block;
      background: rgba(255,255,255,0.10);
      color: #a8d8f0;
      font-size: 10.5px; font-weight: 700;
      letter-spacing: 2.5px; text-transform: uppercase;
      padding: 5px 14px; border-radius: 20px; margin-bottom: 14px;
      border: 1px solid rgba(168,216,240,0.25);
    }
    .header h1 {
      color: #fff; font-size: 24px; font-weight: 400;
      letter-spacing: -0.4px; line-height: 1.3;
      font-family: Georgia, 'Times New Roman', serif;
      margin-bottom: 8px;
    }
    .header h1 em { color: #5bc4e8; font-style: normal; }
    .header-sub { color: #7bafc8; font-size: 13px; }
    .card {
      background: #fff; padding: 40px 36px 32px;
      border-left: 1px solid #dce8f2; border-right: 1px solid #dce8f2;
    }
    .greeting {
      font-size: 22px; color: #0d2d4e; font-weight: 400;
      line-height: 1.3; margin-bottom: 10px;
      font-family: Georgia, 'Times New Roman', serif;
    }
    .greeting em { color: #0d5a8a; font-style: italic; }
    .intro {
      font-size: 15px; color: #3a5a70; line-height: 1.75; margin-bottom: 32px;
    }
    .section-label {
      font-size: 10.5px; font-weight: 700; letter-spacing: 1.8px;
      text-transform: uppercase; color: #7bafc8; margin-bottom: 16px;
    }
    .steps { list-style: none; padding: 0; margin-bottom: 32px; }
    .step {
      display: flex; align-items: flex-start; gap: 14px;
      padding: 14px 0; border-bottom: 1px solid #eef4f9;
    }
    .step:last-child { border-bottom: none; }
    .step-num {
      width: 28px; height: 28px; border-radius: 50%;
      background: #e8f4fb; border: 1.5px solid #a8d8f0;
      color: #0d5a8a; font-size: 12px; font-weight: 700;
      display: inline-flex; align-items: center; justify-content: center;
      flex-shrink: 0; margin-top: 1px;
    }
    .step-title { font-size: 14px; font-weight: 600; color: #0d2d4e; margin-bottom: 3px; }
    .step-desc { font-size: 13px; color: #5a8aaa; line-height: 1.5; }
    .divider {
      height: 1px;
      background: linear-gradient(to right, transparent, #dce8f2, transparent);
      margin: 28px 0;
    }
    .summary-card {
      background: #f5f9fc; border: 1px solid #dce8f2; border-radius: 8px;
      padding: 18px 20px;
    }
    .summary-row { padding: 7px 0; border-bottom: 1px solid #e8f0f7; }
    .summary-row:last-child { border-bottom: none; }
    .s-key {
      display: inline-block; width: 36%;
      font-size: 11px; color: #7bafc8; font-weight: 700;
      letter-spacing: 0.8px; text-transform: uppercase;
    }
    .s-val {
      display: inline-block; width: 62%;
      font-size: 14px; color: #0d2d4e; font-weight: 500;
      text-align: right;
    }
    .notice {
      background: #fffbf0; border: 1px solid #ffe8a0;
      border-left: 3px solid #f0b429; border-radius: 0 8px 8px 0;
      padding: 14px 16px; margin-top: 28px;
    }
    .notice p { font-size: 13px; color: #7a5800; line-height: 1.6; }
    .notice strong { color: #5a4000; }
    .cta-area {
      margin-top: 32px; text-align: center; padding: 24px;
      background: #f0f7fd; border-radius: 10px; border: 1px solid #c8e0f0;
    }
    .cta-area p { font-size: 14px; color: #3a5a70; margin-bottom: 14px; line-height: 1.6; }
    .cta-btn {
      display: inline-block; background: #0d5a8a; color: #ffffff;
      font-size: 14px; font-weight: 600; text-decoration: none;
      padding: 12px 26px; border-radius: 8px; letter-spacing: 0.2px;
    }
    .footer {
      background: #0d2d4e; border-radius: 0 0 12px 12px;
      padding: 24px 36px; text-align: center;
    }
    .footer-brand { color: #7bafc8; font-size: 14px; font-weight: 500; letter-spacing: 0.3px; }
    .footer-sub { color: #3d6882; font-size: 12px; margin-top: 2px; margin-bottom: 14px; }
    .footer-divider { height: 1px; background: rgba(255,255,255,0.08); margin: 14px 0; }
    .footer-note { font-size: 12px; color: #4a7a98; line-height: 1.7; }
  </style>
</head>
<body>
  <div class="wrapper">

    <!-- Header -->
    <div class="header">
      <div class="header-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
             stroke="#5bc4e8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <div class="header-badge">Appointment Request Received</div>
      <h1>We'll be in touch,<br><em>${firstName}</em></h1>
      <p class="header-sub">All Care Family Medicine PC &nbsp;|&nbsp; Dr. Loveena Singh MD</p>
    </div>

    <!-- Card -->
    <div class="card">
      <p class="greeting">Thank you for reaching out,<br><em>we've got your request.</em></p>
      <p class="intro">
        Our team at All Care Family Medicine has received your appointment request and will
        contact you shortly to confirm availability and walk you through next steps.
      </p>

      <!-- Steps -->
      <p class="section-label">What happens next</p>
      <ul class="steps">
        <li class="step">
          <div class="step-num">1</div>
          <div>
            <p class="step-title">Our team reviews your request</p>
            <p class="step-desc">We'll look at your information and check availability, typically within 1-2 business days.</p>
          </div>
        </li>
        <li class="step">
          <div class="step-num">2</div>
          <div>
            <p class="step-title">We'll contact you to confirm</p>
            <p class="step-desc">Expect a call or email from our office to confirm your appointment date and time.</p>
          </div>
        </li>
        <li class="step">
          <div class="step-num">3</div>
          <div>
            <p class="step-title">Prepare for your visit</p>
            <p class="step-desc">We'll share any forms or information you need before your appointment.</p>
          </div>
        </li>
      </ul>

      <div class="divider"></div>

      <!-- Summary -->
      <p class="section-label">Your request summary</p>
      <div class="summary-card">
        <div class="summary-row">
          <span class="s-key">Name</span>
          <span class="s-val">${safeName}</span>
        </div>
        <div class="summary-row">
          <span class="s-key">Phone</span>
          <span class="s-val">${safePhone}</span>
        </div>
        <div class="summary-row">
          <span class="s-key">Email</span>
          <span class="s-val">${safeEmail}</span>
        </div>
        <div class="summary-row">
          <span class="s-key">Reason for visit</span>
          <span class="s-val">${safeReason}</span>
        </div>
      </div>

      <!-- Notice -->
      <div class="notice">
        <p><strong>Need to reach us sooner?</strong> Please call our office directly.
        Do not reply to this automated email - it is not monitored.</p>
      </div>

      <!-- CTA -->
      <div class="cta-area">
        <p>Need to update your request or have a question before we call?</p>
        <a class="cta-btn" href="https://allcarefamilymedicine.com/contact">Contact the office</a>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <p class="footer-brand">All Care Family Medicine PC</p>
      <p class="footer-sub">Dr. Loveena Singh MD &nbsp;|&nbsp; Queens &amp; Hicksville</p>
      <div class="footer-divider"></div>
      <p class="footer-note">
        This is an automated confirmation from your appointment request.<br>
        Please do not reply to this email. Contact the office directly if you need immediate assistance.
      </p>
    </div>

  </div>
</body>
</html>`;
}

export async function POST(req: Request) {
  try {
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;

    if (!emailUser || !emailPass) {
      console.error("Missing EMAIL_USER or EMAIL_PASS environment variable.");
      return Response.json({ error: "Email service is not configured." }, { status: 500 });
    }

    const body = (await req.json()) as ContactRequest;
    const name = getRequiredText(body.name, "Full name");
    const phone = getRequiredText(body.phone, "Phone number");
    const email = getRequiredEmail(body.email);
    const reason = getRequiredText(body.reason, "Reason for visit");
    const message = typeof body.message === "string" ? body.message.trim() : "";

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const officeHtmlBody = buildHtmlEmail({ name, phone, email, reason, message });
    const patientHtmlBody = buildPatientConfirmationEmail({ name, phone, email, reason });

    await Promise.all([
      // Email to the office
      transporter.sendMail({
        from: `"All Care Family Medicine" <${emailUser}>`,
        to: process.env.EMAIL_TO || emailUser,
        subject: `Appointment request from ${name} - ${reason}`,
        text: [
          `New Appointment Request`,
          `========================`,
          `Received: ${new Date().toLocaleString()}`,
          ``,
          `Name: ${name}`,
          `Phone number: ${phone}`,
          `Email address: ${email}`,
          `Reason for visit: ${reason}`,
          ``,
          `Message:`,
          message || "No additional message provided.",
        ].join("\n"),
        html: officeHtmlBody,
      }),
      // Confirmation email to the patient
      transporter.sendMail({
        from: `"All Care Family Medicine" <${emailUser}>`,
        to: email,
        subject: `We received your appointment request, ${name.split(" ")[0]}`,
        text: [
          `Hello ${name},`,
          ``,
          `Thank you for contacting All Care Family Medicine PC.`,
          `We received your appointment request. Our office will contact you soon to confirm availability and next steps.`,
          ``,
          `Your request summary:`,
          `  Name: ${name}`,
          `  Phone: ${phone}`,
          `  Email: ${email}`,
          `  Reason for visit: ${reason}`,
          ``,
          `Please do not reply to this automated email. If you need immediate assistance, call the office directly.`,
          ``,
          `All Care Family Medicine PC`,
          `Dr. Loveena Singh MD`,
        ].join("\n"),
        html: patientHtmlBody,
      }),
    ]);

    return Response.json({
      message: "Appointment request sent. Please check your email for confirmation.",
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Response.json({ error: "Invalid request body." }, { status: 400 });
    }

    if (error instanceof Error && error.message.endsWith(" is required.")) {
      return Response.json({ error: error.message }, { status: 400 });
    }

    if (error instanceof Error && error.message === "Email address is invalid.") {
      return Response.json({ error: error.message }, { status: 400 });
    }

    console.error("Unable to send appointment request:", error);
    return Response.json(
      {
        error: "Unable to send your request. Please call the office instead.",
        ...(process.env.NODE_ENV === "development" && { detail: getErrorMessage(error) }),
      },
      { status: 500 }
    );
  }
}
