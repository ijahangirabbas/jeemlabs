import { NextResponse } from "next/server";
import { contactSchema, fieldErrors } from "@/lib/validations";
import { checkRateLimit, clientKey } from "@/lib/rate-limit";

/**
 * POST /api/contact — general inquiries (partnerships, universities,
 * media, careers…). Project inquiries are guided to /start-project.
 * Same defence stack as /api/inquiry.
 */
export async function POST(request: Request) {
  const limit = checkRateLimit(clientKey(request, "contact"), 5, 10 * 60_000);
  if (!limit.ok) {
    return NextResponse.json(
      {
        ok: false,
        message: `Too many attempts. Please wait ${limit.retryAfter} seconds and try again.`,
      },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
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

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    if (parsed.error.issues.some((i) => i.path[0] === "companyWebsite")) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { ok: false, errors: fieldErrors(parsed.error) },
      { status: 422 },
    );
  }

  try {
    console.info("[contact] received:", {
      ts: new Date().toISOString(),
      ...parsed.data,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] delivery failed", error);
    return NextResponse.json(
      { ok: false, message: "Something didn't go as planned. Please try again." },
      { status: 502 },
    );
  }
}
