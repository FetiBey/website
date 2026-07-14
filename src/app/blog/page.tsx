import type { Metadata } from "next";

export const metadata: Metadata = { title: "Blog" };

export default function Page() {
  return (
    <main className="min-h-screen bg-background px-6 pb-24 pt-40">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Seyfeli Gayrimenkul</p>
        <h1 className="mt-6 text-5xl font-extrabold leading-[.98] tracking-[-0.06em] md:text-7xl">Blog</h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">Gayrimenkul, yatırım ve Ankara pazarı hakkında seçilmiş kurumsal içgörüler yakında burada.</p>
      </section>
    </main>
  );
}
