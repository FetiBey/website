import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const services = [
  ["Konut", "Yaşam kalitesi, lokasyon değeri ve uzun vadeli güveni aynı denklemde buluşturan seçici danışmanlık."],
  ["Ticari", "Markalar, yatırımcılar ve kurumlar için doğru metrekareyi stratejik büyüme kararına dönüştüren süreç yönetimi."],
  ["Arsa & Kentsel Dönüşüm", "Potansiyeli yüksek bölgelerde imar, dönüşüm ve değer artışı odağında kapsamlı analiz."],
  ["Yatırım Danışmanlığı", "Veri, saha bilgisi ve Kumrular Group vizyonuyla sadeleştirilmiş gayrimenkul yatırım stratejileri."],
  ["Değerleme", "Karar öncesi netlik sağlayan, piyasa gerçekleriyle uyumlu profesyonel değer perspektifi."]
];

export function ServicesPreview() {
  return (
    <section className="bg-primary px-6 py-28 text-white md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Hizmet Alanları</p>
            <h2 className="mt-6 text-5xl font-extrabold leading-[.98] tracking-[-0.06em] md:text-7xl">Her karar için ayrı bir uzmanlık.</h2>
          </div>
        </Reveal>
        <div className="mt-20 divide-y divide-white/12 border-y border-white/12">
          {services.map(([title, text], index) => (
            <Reveal key={title} delay={index * 0.04}>
              <article className="group grid gap-8 py-10 md:grid-cols-[.8fr_1.4fr_auto] md:items-center">
                <h3 className="text-3xl font-extrabold tracking-[-0.045em] md:text-5xl">{title}</h3>
                <p className="max-w-3xl text-lg leading-8 text-white/67">{text}</p>
                <ArrowUpRight className="size-9 text-accent transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
