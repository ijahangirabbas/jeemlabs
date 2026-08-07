import { forwardRef, type ComponentProps, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Form primitives. Accessible by construction:
 * every control is paired with a <label>, errors are linked with
 * aria-describedby, and invalid state is exposed with aria-invalid.
 */

const controlBase =
  "w-full rounded border border-line-strong bg-surface px-3.5 text-primary " +
  "placeholder:text-muted transition-colors duration-200 " +
  "hover:border-line-bold focus-visible:border-accent " +
  "aria-[invalid=true]:border-error";

export function Field({
  label,
  htmlFor,
  error,
  hint,
  optional = false,
  children,
  className,
}: {
  label: string;
  htmlFor: string;
  error?: string | undefined;
  hint?: string;
  optional?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={htmlFor}
        className="flex items-baseline justify-between text-sm font-medium text-primary"
      >
        <span>{label}</span>
        {optional && (
          <span className="mono-meta text-[11px] uppercase text-muted">
            Optional
          </span>
        )}
      </label>
      {children}
      {hint && !error && (
        <p id={`${htmlFor}-hint`} className="text-sm text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p
          id={`${htmlFor}-error`}
          role="alert"
          className="flex items-center gap-2 text-sm text-error"
        >
          <span aria-hidden="true">×</span>
          {error}
        </p>
      )}
    </div>
  );
}

export const Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  function Input({ className, ...props }, ref) {
    return (
      <input ref={ref} className={cn(controlBase, "h-11", className)} {...props} />
    );
  },
);

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  ComponentProps<"textarea">
>(function Textarea({ className, rows = 5, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(controlBase, "min-h-32 py-2.5 leading-relaxed", className)}
      {...props}
    />
  );
});

export const Select = forwardRef<HTMLSelectElement, ComponentProps<"select">>(
  function Select({ className, children, ...props }, ref) {
    return (
      <select ref={ref} className={cn(controlBase, "h-11", className)} {...props}>
        {children}
      </select>
    );
  },
);
