import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * The official JEEM LABS mark — a geometric interpretation of ج (jeem)
 * with its nuqta. Used exactly as supplied: never redrawn, recoloured,
 * shadowed, glowed or distorted. Clear space is preserved by padding.
 */
export function LogoMark({
  size = 32,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "block shrink-0 overflow-hidden rounded-sm border border-line",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src="/brand/jeem-logo.png"
        alt=""
        width={size}
        height={size}
        priority
        className="block size-full object-cover"
      />
    </span>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="JEEM LABS — home"
      className={cn(
        "group inline-flex items-center gap-3 text-primary",
        className,
      )}
    >
      <LogoMark size={30} />
      <span className="text-[15px] font-semibold tracking-[-0.01em]">
        JEEM LABS
      </span>
    </Link>
  );
}
