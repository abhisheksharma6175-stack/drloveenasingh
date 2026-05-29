import Link from "next/link";
import type { ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

export function CtaButton({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const classes =
    variant === "primary"
      ? "bg-[#1677b9] text-white shadow-lg shadow-blue-900/15 hover:bg-[#075985]"
      : "border border-slate-200 bg-white/80 text-slate-900 hover:border-[#1677b9] hover:text-[#075985]";

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition ${classes}`}
    >
      {children}
      <FaArrowRight aria-hidden className="text-xs" />
    </Link>
  );
}
