import { ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/lib/constants";
import { Reveal } from "./reveal";

export function PortfolioCta() {
  return (
    <section className="bg-background px-6 pb-28">
      <Reveal>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#111] p-8 text-white md:p-14 lg:p-20">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Resmî Portföy</p>
          <h2 className="mt-8 max-w-4xl text-5xl font-extrabold leading-[.98] tracking-[-0.06em] md:text-7xl">Tüm portföyümüz resmî Sahibinden kurumsal mağazamızda yayınlanır.</h2>
          <div className="mt-10">
            <ButtonLink href={site.portfolioUrl} variant="light">Portföyü Görüntüle <ArrowUpRight className="ml-2 size-4" /></ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
