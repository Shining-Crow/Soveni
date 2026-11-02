import Link from "next/link";
import { Icon } from "./Icon";

const base =
  "group inline-flex min-h-11 items-center justify-center gap-2.5 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-200";

const variants = {
  primary:
    "bg-gradient-to-b from-accent-strong to-accent text-accent-ink shadow-[0_8px_30px_-8px_rgb(31_139_255/0.7),inset_0_1px_0_rgb(255_255_255/0.2)] hover:shadow-[0_10px_40px_-6px_rgb(31_139_255/0.9),inset_0_1px_0_rgb(255_255_255/0.25)] hover:brightness-110",
  secondary:
    "border border-line-strong bg-white/[0.02] text-fg hover:border-accent/60 hover:bg-accent/10",
  ghost: "px-0 text-sky hover:text-fg",
};

export type ButtonVariant = keyof typeof variants;

export function buttonClass(variant: ButtonVariant = "primary", extra = "") {
  return `${base} ${variants[variant]} ${extra}`;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = true,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  arrow?: boolean;
}) {
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {children}
      {arrow && (
        <Icon
          name="arrow"
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </Link>
  );
}
