import { z } from "zod";

/**
 * Form schemas — the single source of truth for both client-side feedback
 * and server-side validation. The server always re-validates; the client
 * schema exists only to give fast, accessible feedback.
 */

const trimmed = (min: number, max: number, label: string) =>
  z
    .string()
    .trim()
    .min(min, `${label} is required.`)
    .max(max, `${label} is too long.`);

export const projectTypes = [
  "website",
  "web-application",
  "mobile-application",
  "ai-system",
  "automation",
  "cloud-infrastructure",
  "custom-software",
  "not-sure",
] as const;

export const projectTypeLabels: Record<(typeof projectTypes)[number], string> = {
  website: "Website",
  "web-application": "Web application",
  "mobile-application": "Mobile application",
  "ai-system": "AI system",
  automation: "Automation",
  "cloud-infrastructure": "Cloud / infrastructure",
  "custom-software": "Custom software",
  "not-sure": "Not sure yet",
};

export const budgetRanges = [
  "under-1k",
  "1k-5k",
  "5k-15k",
  "15k-50k",
  "50k-plus",
  "not-sure",
] as const;

export const budgetLabels: Record<(typeof budgetRanges)[number], string> = {
  "under-1k": "Under $1K",
  "1k-5k": "$1K – $5K",
  "5k-15k": "$5K – $15K",
  "15k-50k": "$15K – $50K",
  "50k-plus": "$50K+",
  "not-sure": "Not sure",
};

export const timelines = ["asap", "1-2-months", "3-6-months", "flexible"] as const;

export const timelineLabels: Record<(typeof timelines)[number], string> = {
  asap: "ASAP",
  "1-2-months": "1–2 months",
  "3-6-months": "3–6 months",
  flexible: "Flexible",
};

const email = z
  .string()
  .trim()
  .min(1, "Email is required.")
  .max(254, "Email is too long.")
  .email("Enter a valid email address.");

/** Honeypot — must stay empty. Bots fill it; humans never see it. */
const honeypot = z.string().max(0);

export const inquirySchema = z.object({
  types: z
    .array(z.enum(projectTypes))
    .min(1, "Select at least one — 'Not sure yet' is a fine answer."),
  description: trimmed(
    20,
    5000,
    "Project description (at least a sentence)",
  ),
  budget: z.enum(budgetRanges, { message: "Choose a budget range." }),
  timeline: z.enum(timelines, { message: "Choose a timeline." }),
  name: trimmed(2, 120, "Name"),
  company: z.string().trim().max(160, "Company name is too long.").optional(),
  email,
  companyWebsite: honeypot,
});

export const contactSchema = z.object({
  topic: trimmed(2, 80, "Topic"),
  message: trimmed(10, 5000, "Message"),
  name: trimmed(2, 120, "Name"),
  email,
  companyWebsite: honeypot,
});

export type InquiryInput = z.infer<typeof inquirySchema>;
export type ContactInput = z.infer<typeof contactSchema>;

/** Flattened, field-keyed error map for accessible form rendering. */
export function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !(key in out)) {
      out[key] = issue.message;
    }
  }
  return out;
}
