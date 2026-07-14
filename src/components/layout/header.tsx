import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navItems, site } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/25 bg-white/70 px-4 py-3 shadow-[0_20px_60px_rgba(17,17,17,0.08)] backdrop-blur-2xl md:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Seyfeli Gayrimenkul ana sayfa">
          <span className="grid size-10 place-items-center rounded-full bg-primary text-sm font-bold text-white">SG</span>
          <span className="hidden leading-none sm:block">
            <span className="block text-sm font-extrabold tracking-[-0.03em]">Seyfeli Gayrimenkul</span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">Kumrular Group</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Ana navigasyon">
          {navItems.map((item) => <Link key={item.href} href={item.href} className="text-sm font-medium text-foreground/70 transition hover:text-primary">{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/en" className="rounded-full border border-foreground/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary transition hover:border-primary/30 hover:bg-primary/5" aria-label="Switch to English">EN</Link>
          <ButtonLink href={site.portfolioUrl} className="hidden sm:inline-flex" variant="primary">Portföy <ArrowUpRight className="ml-2 size-4" /></ButtonLink>
        </div>
      </div>
    </header>
  );
}
