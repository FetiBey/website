import { ArrowUpRight, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/constants";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2400&auto=format&fit=crop')] bg-cover bg-center opacity-55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(181,138,60,.30),transparent_30%),linear-gradient(90deg,rgba(12,35,31,.92),rgba(24,76,66,.62)_42%,rgba(17,17,17,.18))]" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-16 pt-36 md:pb-24">
        <Reveal>
          <p className="mb-6 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] backdrop-blur-md">Kumrular Group güvencesiyle</p>
          <h1 className="max-w-5xl text-5xl font-extrabold leading-[0.95] tracking-[-0.07em] md:text-7xl lg:text-8xl">Gayrimenkul, yalnızca bir yatırım değildir. Bir gelecektir.</h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/78 md:text-2xl">Kumrular Group güvencesiyle Ankara&apos;da premium gayrimenkul danışmanlığı.</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={site.whatsappUrl} variant="light"><MessageCircle className="mr-2 size-4" /> WhatsApp</ButtonLink>
            <ButtonLink href={site.portfolioUrl} variant="outline">Portföyü Gör <ArrowUpRight className="ml-2 size-4" /></ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
