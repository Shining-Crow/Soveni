import Link from "next/link";
import { Icon } from "./Icon";

const base =
  "group inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200";

const variants = {
  primary: "bg-champagne text-champagne-ink hover:bg-champagne-strong",
  secondary: "border border-line-strong text-fg hover:border-champagne hover:text-champagne",
  ghost: "px-0 text-champagne hover:text-fg",
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
