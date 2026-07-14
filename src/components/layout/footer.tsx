import { site } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-primary px-6 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-2xl font-extrabold tracking-[-0.04em]">Seyfeli Gayrimenkul</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/65">Kumrular Group güvencesiyle Ankara'da premium gayrimenkul ve yatırım danışmanlığı.</p>
        </div>
        <div className="text-sm text-white/65 md:text-right">
          <p>Powered by {site.parent}</p>
          <p className="mt-2">© 2026 Seyfeli Gayrimenkul. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}
