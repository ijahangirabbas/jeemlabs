import { NextResponse } from "next/server";
import { inquirySchema, fieldErrors } from "@/lib/validations";
import { checkRateLimit, clientKey } from "@/lib/rate-limit";

/**
 * POST /api/inquiry — project inquiries.
 *
 * Server-side validation is the authority (client checks are only UX).
 * Defences: schema validation, honeypot, fixed-window rate limiting,
 * size caps via the schema, no secrets in the client bundle.
 *
 * Delivery: when an email provider is configured (EMAIL_API_KEY), wire the
 * send here. Until then, valid submissions are logged server-side — the
 * boundary is deliberately one function to change.
 */
export async function POST(request: Request) {
  // Rate limit: 5 submissions per 10 minutes per client.
  const limit = checkRateLimit(clientKey(request, "inquiry"), 5, 10 * 60_000);
  if (!limit.ok) {
    return NextResponse.json(
      {
        ok: false,
        message: `Too many attempts. Please wait ${limit.retryAfter} seconds and try again.`,
      },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfter) },
      },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "The request was malformed." },
      { status: 400 },
    );
  }

  const parsed = inquirySchema.safeParse(body);
  if (!parsed.success) {
    // Honeypot triggered → pretend success, discard silently.
    if (parsed.error.issues.some((i) => i.path[0] === "companyWebsite")) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { ok: false, errors: fieldErrors(parsed.error) },
      { status: 422 },
    );
  }

  const inquiry = parsed.data;

  try {
    await deliverInquiry(inquiry);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[inquiry] delivery failed", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "We couldn't deliver your inquiry just now. Please try again in a moment — or email hello@thejeemlabs.com directly.",
      },
      { status: 502 },
    );
  }
}

async function deliverInquiry(inquiry: unknown): Promise<void> {
  // Extension point: transactional email / CRM webhook.
  // Server-side only — INQUIRY_NOTIFY_EMAIL and EMAIL_API_KEY never ship
  // to the client.
  if (!process.env.EMAIL_API_KEY) {
    console.info("[inquiry] received (delivery not yet configured):", {
      ts: new Date().toISOString(),
      inquiry,
    });
    return;
  }
  // const resend = new Resend(process.env.EMAIL_API_KEY);
  // await resend.emails.send({ ... });
}
