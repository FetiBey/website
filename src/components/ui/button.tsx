import Link from "next/link";
import { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light" | "outline";
};

export function ButtonLink({ href, children, className, variant = "primary", ...props }: ButtonLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("https://wa.me");
  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold tracking-[-0.01em] transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
    variant === "primary" && "bg-primary text-white hover:bg-[#123a32]",
    variant === "light" && "bg-white text-primary hover:bg-white/90",
    variant === "outline" && "border border-white/35 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
    className
  );

  if (isExternal) {
    return <a href={href} className={classes} target="_blank" rel="noreferrer" {...props}>{children}</a>;
  }
  return <Link href={href} className={classes} {...props}>{children}</Link>;
}
