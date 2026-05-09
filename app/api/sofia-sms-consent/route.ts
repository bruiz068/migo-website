import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Normalize a US mobile number to E.164 format (+1XXXXXXXXXX).
 * Returns null if the number doesn't look like a valid US mobile.
 */
function normalizeUsPhone(input: string): string | null {
  const digits = input.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return null;
}

/**
 * Best-effort client IP extraction. Trusts standard Vercel/proxy headers.
 */
function getClientIp(request: Request): string {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return (
    request.headers.get("x-real-ip") ||
    request.headers.get("cf-connecting-ip") ||
    "unknown"
  );
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { firstName, lastName, phone, businessName, consentGivenAt, source } = data ?? {};

    // Basic validation
    if (!firstName || !lastName || !phone) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const normalizedPhone = normalizeUsPhone(String(phone));
    if (!normalizedPhone) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid U.S. mobile number." },
        { status: 400 }
      );
    }

    // Build the consent record
    const consentRecord = {
      firstName: String(firstName).trim(),
      lastName: String(lastName).trim(),
      phone: normalizedPhone,
      businessName: businessName ? String(businessName).trim() : "",
      consentGivenAt: consentGivenAt || new Date().toISOString(),
      source: source || "sofia-sms-consent-page",
      ipAddress: getClientIp(request),
      userAgent: request.headers.get("user-agent") || "unknown",
      consentLanguage:
        "Operator agreed to receive SMS messages from Sofia AI (Migo Advertisement LLC) at the mobile number provided, including AI-generated call summaries. Message frequency varies. Message & data rates may apply. Reply STOP to opt out, HELP for help. Consent is not a condition of any purchase or service. Consent given separately from any service agreement.",
    };

    console.log("Sofia AI SMS consent recorded:", consentRecord);

    // ---- Send confirmation SMS via Twilio ----
    const twilioSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioFrom = process.env.TWILIO_FROM_NUMBER; // E.164 format, e.g. +14805550100
    const twilioMessagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID; // optional, preferred once campaign is approved

    let smsSent = false;
    let smsError: string | null = null;

    if (twilioSid && twilioToken && (twilioFrom || twilioMessagingServiceSid)) {
      try {
        const body =
          "Sofia AI: You're confirmed for call-summary SMS notifications from Migo Advertisement. Msg frequency varies. Reply STOP to unsubscribe, HELP for help. Msg & data rates may apply.";

        const params = new URLSearchParams();
        params.append("To", normalizedPhone);
        params.append("Body", body);
        if (twilioMessagingServiceSid) {
          params.append("MessagingServiceSid", twilioMessagingServiceSid);
        } else if (twilioFrom) {
          params.append("From", twilioFrom);
        }

        const auth = Buffer.from(`${twilioSid}:${twilioToken}`).toString("base64");
        const twilioRes = await fetch(
          `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`,
          {
            method: "POST",
            headers: {
              Authorization: `Basic ${auth}`,
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params.toString(),
          }
        );

        if (twilioRes.ok) {
          smsSent = true;
        } else {
          const text = await twilioRes.text();
          smsError = `Twilio API ${twilioRes.status}: ${text}`;
          console.error(smsError);
        }
      } catch (err) {
        smsError = err instanceof Error ? err.message : String(err);
        console.error("Twilio send error:", smsError);
      }
    } else {
      smsError = "Twilio not configured (TWILIO_ACCOUNT_SID / TWILIO_AUTH_TOKEN / TWILIO_FROM_NUMBER missing).";
      console.log(smsError);
    }

    // ---- Email Bernardo a notification with the consent record ----
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
          },
        });

        await transporter.sendMail({
          from: process.env.GMAIL_USER,
          to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
          subject: `[Sofia AI SMS Consent] ${consentRecord.firstName} ${consentRecord.lastName} (${consentRecord.phone})`,
          html: `
            <h2>New Sofia AI SMS Consent Record</h2>
            <p>An operator has provided affirmative SMS consent through the dedicated consent page.</p>
            <table cellpadding="6" style="border-collapse:collapse;">
              <tr><td><strong>Name</strong></td><td>${consentRecord.firstName} ${consentRecord.lastName}</td></tr>
              <tr><td><strong>Phone (E.164)</strong></td><td>${consentRecord.phone}</td></tr>
              <tr><td><strong>Business</strong></td><td>${consentRecord.businessName || "(not provided)"}</td></tr>
              <tr><td><strong>Consent timestamp</strong></td><td>${consentRecord.consentGivenAt}</td></tr>
              <tr><td><strong>IP address</strong></td><td>${consentRecord.ipAddress}</td></tr>
              <tr><td><strong>User agent</strong></td><td>${consentRecord.userAgent}</td></tr>
              <tr><td><strong>Source</strong></td><td>${consentRecord.source}</td></tr>
              <tr><td><strong>SMS confirmation sent?</strong></td><td>${smsSent ? "Yes" : `No — ${smsError ?? "unknown reason"}`}</td></tr>
            </table>
            <hr/>
            <p><strong>Consent language shown to operator:</strong></p>
            <blockquote style="border-left:3px solid #ccc;padding-left:12px;color:#444;">
              ${consentRecord.consentLanguage}
            </blockquote>
            <p style="color:#666;font-size:12px;">Retain this record for at least 4 years per A2P 10DLC compliance recordkeeping requirements.</p>
          `,
        });
      } catch (mailErr) {
        console.error("Failed to email consent record:", mailErr);
      }
    }

    // Return success regardless of whether SMS or email actually fired —
    // the consent itself was captured, and we don't want to confuse the
    // operator if our notification path is misconfigured. Surface a hint
    // in dev only.
    return NextResponse.json({
      ok: true,
      message:
        "Your SMS consent has been recorded. If your phone number was correct, a confirmation text will arrive shortly.",
      smsSent,
      ...(process.env.NODE_ENV !== "production" && smsError ? { smsError } : {}),
    });
  } catch (err) {
    console.error("Error handling Sofia SMS consent:", err);
    return NextResponse.json(
      { ok: false, error: "Failed to record consent. Please try again." },
      { status: 500 }
    );
  }
}
