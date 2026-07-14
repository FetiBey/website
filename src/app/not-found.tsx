import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-background px-6 pt-28">
      <div className="text-center">
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">404</p>
        <h1 className="mt-6 text-5xl font-extrabold tracking-[-0.06em] md:text-7xl">Sayfa bulunamadı.</h1>
        <p className="mx-auto mt-6 max-w-lg text-muted">Aradığınız sayfa taşınmış veya artık yayında olmayabilir.</p>
        <div className="mt-8"><ButtonLink href="/">Ana sayfaya dön</ButtonLink></div>
      </div>
    </main>
  );
}
