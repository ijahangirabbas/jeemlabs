"use client";

import { useRef, useState, type FormEvent } from "react";
import {
  budgetLabels,
  budgetRanges,
  fieldErrors,
  inquirySchema,
  projectTypeLabels,
  projectTypes,
  timelineLabels,
  timelines,
} from "@/lib/validations";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { Field, Input, Textarea } from "@/components/ui/field";
import { Arrow } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Project inquiry — the site's primary conversion instrument.
 *
 * Accessible by construction: fieldsets with legends, labels on every
 * control, errors linked via aria-describedby, focus moved to the first
 * error and then to the success panel. Validates on the client for fast
 * feedback; the server re-validates everything (client checks are UX,
 * never security).
 */
export function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [types, setTypes] = useState<string[]>([]);
  const [serverMessage, setServerMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);

  function markStarted() {
    if (!startedRef.current) {
      startedRef.current = true;
      track("project_form_start");
    }
  }

  function toggleType(value: string) {
    markStarted();
    setTypes((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value],
    );
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      types,
      description: String(data.get("description") ?? ""),
      budget: String(data.get("budget") ?? ""),
      timeline: String(data.get("timeline") ?? ""),
      name: String(data.get("name") ?? ""),
      company: String(data.get("company") ?? "") || undefined,
      email: String(data.get("email") ?? ""),
      companyWebsite: String(data.get("companyWebsite") ?? ""),
    };

    // Client-side validation for feedback. The server decides for real.
    const parsed = inquirySchema.safeParse(payload);
    if (!parsed.success) {
      const errs = fieldErrors(parsed.error);
      setErrors(errs);
      const firstKey = Object.keys(errs)[0];
      if (firstKey) {
        const el = form.querySelector<HTMLElement>(`[name="${firstKey}"]`) ??
          form.querySelector<HTMLElement>(`#field-${firstKey}`);
        el?.focus();
      }
      track("project_form_error", { stage: "client" });
      return;
    }

    setErrors({});
    setStatus("submitting");
    track("project_form_submit");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const body = (await res.json()) as {
        ok: boolean;
        errors?: Record<string, string>;
        message?: string;
      };

      if (res.ok && body.ok) {
        setStatus("success");
        track("project_form_success");
        requestAnimationFrame(() => successRef.current?.focus());
        return;
      }

      if (body.errors) {
        setErrors(body.errors);
        setStatus("idle");
      } else {
        setServerMessage(
          body.message ?? "Something didn't go as planned. Please try again.",
        );
        setStatus("error");
      }
      track("project_form_error", { stage: "server" });
    } catch {
      setServerMessage(
        "The request couldn't be sent. Check your connection and try again.",
      );
      setStatus("error");
      track("project_form_error", { stage: "network" });
    }
  }

  if (status === "success") {
    return (
      <div
        ref={successRef}
        tabIndex={-1}
        role="status"
        className="flex flex-col gap-5 rounded-lg border border-signal bg-signal-subtle p-8 focus:outline-none lg:p-10"
      >
        <p className="mono-label flex items-center gap-2 text-success">
          <span aria-hidden="true" className="size-2 rounded-full bg-signal" />
          RECEIVED
        </p>
        <h2 className="t-h3 text-primary text-balance">
          Thank you — that&rsquo;s with us now.
        </h2>
        <p className="max-w-lg leading-relaxed text-secondary">
          A real engineer will read what you wrote and reply within one hour.
        </p>
        <p className="mono-meta text-xs text-muted">
          REF / {new Date().toISOString().slice(0, 10)}
        </p>
      </div>
    );
  }

  const busy = status === "submitting";

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      aria-label="Project inquiry"
      className="flex flex-col gap-10"
    >
      {status === "error" && (
        <div
          role="alert"
          className="rounded-md border border-error bg-error-subtle px-5 py-4 text-sm text-error"
        >
          <strong className="font-medium">Something didn&rsquo;t go as planned.</strong>{" "}
          {serverMessage}
        </div>
      )}

      {/* 01 — WHAT DO YOU NEED? */}
      <fieldset className="flex flex-col gap-4">
        <legend className="flex w-full items-baseline justify-between text-sm font-medium text-primary">
          <span>What do you need?</span>
          <span className="mono-meta text-[11px] uppercase text-muted">
            01 — Select all that apply
          </span>
        </legend>
        <div
          id="field-types"
          role="group"
          aria-describedby={errors.types ? "types-error" : undefined}
          className="flex flex-wrap gap-2"
        >
          {projectTypes.map((value) => {
            const checked = types.includes(value);
            return (
              <label
                key={value}
                className={cn(
                  "flex min-h-11 cursor-pointer items-center rounded border px-4 text-sm transition-colors duration-200",
                  "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent",
                  checked
                    ? "border-accent bg-accent-subtle text-primary"
                    : "border-line-strong text-secondary hover:border-line-bold hover:text-primary",
                )}
              >
                <input
                  type="checkbox"
                  name="types"
                  value={value}
                  checked={checked}
                  onChange={() => toggleType(value)}
                  className="sr-only"
                  aria-invalid={Boolean(errors.types)}
                />
                <span aria-hidden="true" className="mr-2 text-accent">
                  {checked ? "●" : "+"}
                </span>
                {projectTypeLabels[value]}
              </label>
            );
          })}
        </div>
        {errors.types && (
          <p id="types-error" role="alert" className="text-sm text-error">
            {errors.types}
          </p>
        )}
        <p className="text-sm text-muted">
          &ldquo;Not sure yet&rdquo; is a perfectly good answer — describing
          the problem is enough.
        </p>
      </fieldset>

      {/* 02 — DESCRIPTION */}
      <div>
        <Field
          label="Tell us about the project"
          htmlFor="description"
          error={errors.description}
          hint="What are you trying to achieve, and what's in the way? Plain words are perfect."
        >
          <Textarea
            id="description"
            name="description"
            rows={6}
            onChange={markStarted}
            aria-invalid={Boolean(errors.description)}
            aria-describedby={errors.description ? "description-error" : "description-hint"}
            placeholder="We need a way for customers to…"
            disabled={busy}
          />
        </Field>
      </div>

      {/* 03 — BUDGET */}
      <fieldset className="flex flex-col gap-4">
        <legend className="flex w-full items-baseline justify-between text-sm font-medium text-primary">
          <span>Approximate budget</span>
          <span className="mono-meta text-[11px] uppercase text-muted">03</span>
        </legend>
        <div
          className="flex flex-wrap gap-2"
          role="radiogroup"
          aria-invalid={Boolean(errors.budget)}
          aria-describedby={errors.budget ? "budget-error" : undefined}
        >
          {budgetRanges.map((value) => (
            <label
              key={value}
              className={cn(
                "flex min-h-11 cursor-pointer items-center rounded border px-4 text-sm transition-colors duration-200",
                "has-[:checked]:border-accent has-[:checked]:bg-accent-subtle has-[:checked]:text-primary",
                "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent",
                "border-line-strong text-secondary hover:border-line-bold hover:text-primary",
              )}
            >
              <input
                type="radio"
                name="budget"
                value={value}
                onChange={markStarted}
                className="sr-only"
                disabled={busy}
              />
              {budgetLabels[value]}
            </label>
          ))}
        </div>
        {errors.budget && (
          <p id="budget-error" role="alert" className="text-sm text-error">
            {errors.budget}
          </p>
        )}
      </fieldset>

      {/* 04 — TIMELINE */}
      <fieldset className="flex flex-col gap-4">
        <legend className="flex w-full items-baseline justify-between text-sm font-medium text-primary">
          <span>Timeline</span>
          <span className="mono-meta text-[11px] uppercase text-muted">04</span>
        </legend>
        <div
          className="flex flex-wrap gap-2"
          role="radiogroup"
          aria-invalid={Boolean(errors.timeline)}
          aria-describedby={errors.timeline ? "timeline-error" : undefined}
        >
          {timelines.map((value) => (
            <label
              key={value}
              className={cn(
                "flex min-h-11 cursor-pointer items-center rounded border px-4 text-sm transition-colors duration-200",
                "has-[:checked]:border-accent has-[:checked]:bg-accent-subtle has-[:checked]:text-primary",
                "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent",
                "border-line-strong text-secondary hover:border-line-bold hover:text-primary",
              )}
            >
              <input
                type="radio"
                name="timeline"
                value={value}
                onChange={markStarted}
                className="sr-only"
                disabled={busy}
              />
              {timelineLabels[value]}
            </label>
          ))}
        </div>
        {errors.timeline && (
          <p id="timeline-error" role="alert" className="text-sm text-error">
            {errors.timeline}
          </p>
        )}
      </fieldset>


      {/* 05 — CONTACT */}
      <fieldset className="flex flex-col gap-6">
        <legend className="flex w-full items-baseline justify-between text-sm font-medium text-primary">
          <span>Where do we reply?</span>
          <span className="mono-meta text-[11px] uppercase text-muted">05</span>
        </legend>
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
          <Field label="Company" htmlFor="company" error={errors.company} optional>
            <Input
              id="company"
              name="company"
              autoComplete="organization"
              aria-invalid={Boolean(errors.company)}
              aria-describedby={errors.company ? "company-error" : undefined}
              disabled={busy}
            />
          </Field>
        </div>
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

        {/* Honeypot: invisible to humans, irresistible to bots. */}
        <div aria-hidden="true" className="absolute left-[-9999px] top-0 h-0 overflow-hidden">
          <label htmlFor="companyWebsite">Company website</label>
          <input
            id="companyWebsite"
            name="companyWebsite"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      </fieldset>

      <div className="flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-sm text-muted">
          Replies come from a person, within one hour. Your
          information is used only to answer you — see our{" "}
          <a href="/privacy" className="underline underline-offset-4 hover:text-primary">
            privacy note
          </a>
          .
        </p>
        <button
          type="submit"
          disabled={busy}
          className={cn(
            "group relative isolate inline-flex h-12 items-center justify-center gap-2.5 overflow-hidden rounded px-5 font-medium whitespace-nowrap sm:px-7",
            "bg-primary text-inverse transition-colors duration-200 hover:text-on-accent",
            "before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0",
            "before:bg-accent before:transition-transform before:duration-300 before:ease-out-quart hover:before:scale-x-100",
            "active:translate-y-px disabled:pointer-events-none disabled:opacity-60",
          )}
        >
          {busy ? "Sending…" : "Start the conversation"}
          <Arrow className={cn(busy && "hidden")} />
        </button>
      </div>
    </form>
  );
}

