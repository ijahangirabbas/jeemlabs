"use client";

import { useRef, useState, type FormEvent } from "react";
import { contactSchema, fieldErrors } from "@/lib/validations";
import { contactTopics } from "@/content/company";
import { track } from "@/lib/analytics";
import { Field, Input, Select, Textarea } from "@/components/ui/field";
import { Arrow } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

/** General contact — deliberately lighter than the project inquiry. */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const successRef = useRef<HTMLDivElement>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const payload = {
      topic: String(data.get("topic") ?? ""),
      message: String(data.get("message") ?? ""),
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      companyWebsite: String(data.get("companyWebsite") ?? ""),
    };

    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      setErrors(fieldErrors(parsed.error));
      return;
    }
    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const body = (await res.json()) as {
        ok: boolean;
        errors?: Record<string, string>;
      };
      if (res.ok && body.ok) {
        setStatus("success");
        track("contact_form_success");
        requestAnimationFrame(() => successRef.current?.focus());
      } else if (body.errors) {
        setErrors(body.errors);
        setStatus("idle");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="flex flex-col gap-4 rounded-lg border border-signal bg-signal-subtle p-8 focus:outline-none"
      >
        <p className="mono-label flex items-center gap-2 text-success">
          <span aria-hidden="true" className="size-2 rounded-full bg-signal" />
          RECEIVED
        </p>
        <p className="text-lg font-medium text-primary">
          Thank you — we&rsquo;ll reply within one hour.
        </p>
        <p className="text-sm text-secondary">
          If your question is about a project, the fastest route is{" "}
          <a href="/start-project" className="text-accent underline underline-offset-4">
            Start a Project
          </a>
          .
        </p>
      </div>
    );
  }

  const busy = status === "submitting";

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Contact" className="flex flex-col gap-7">
      {status === "error" && (
        <div role="alert" className="rounded-md border border-error bg-error-subtle px-5 py-4 text-sm text-error">
          <strong className="font-medium">Something didn&rsquo;t go as planned.</strong>{" "}
          Please try again, or email us directly.
        </div>
      )}

      <Field label="What's this about?" htmlFor="topic" error={errors.topic}>
        <Select
          id="topic"
          name="topic"
          defaultValue=""
          aria-invalid={Boolean(errors.topic)}
          aria-describedby={errors.topic ? "topic-error" : undefined}
          disabled={busy}
        >
          <option value="" disabled>
            Choose a topic
          </option>
          {contactTopics.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </Select>
      </Field>

      <Field label="Message" htmlFor="message" error={errors.message}>
        <Textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          disabled={busy}
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name}>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            disabled={busy}
          />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email}>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            disabled={busy}
          />
        </Field>
      </div>

      <div aria-hidden="true" className="absolute left-[-9999px] top-0 h-0 overflow-hidden">
        <label htmlFor="companyWebsite">Company website</label>
        <input id="companyWebsite" name="companyWebsite" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex justify-end border-t border-line pt-6">
        <button
          type="submit"
          disabled={busy}
          className={cn(
            "group relative isolate inline-flex h-11 items-center gap-2.5 overflow-hidden rounded bg-primary px-5 font-medium text-inverse whitespace-nowrap sm:px-6",
            "transition-colors duration-200 hover:text-on-accent",
            "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0",
            "before:bg-accent before:transition-transform before:duration-300 before:ease-out-quart hover:before:scale-x-100",
            "active:translate-y-px disabled:pointer-events-none disabled:opacity-60",
          )}
        >
          {busy ? "Sending…" : "Send message"}
          <Arrow className={cn(busy && "hidden")} />
        </button>
      </div>
    </form>
  );
}
