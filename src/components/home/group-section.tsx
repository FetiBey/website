import { Building2, ShieldCheck, TrendingUp } from "lucide-react";
import { Reveal } from "./reveal";

const items = [
  { icon: Building2, title: "Kurumsal güç", text: "Seyfeli Gayrimenkul, Kumrular Group'un yatırım vizyonunu sahaya taşıyan premium markasıdır." },
  { icon: ShieldCheck, title: "Güven mimarisi", text: "Süreçler; şeffaflık, doğru analiz ve uzun vadeli itibar üzerine kurulur." },
  { icon: TrendingUp, title: "Gelecek odağı", text: "Her lokasyon, yalnızca bugünkü değeriyle değil yarınki potansiyeliyle değerlendirilir." }
];

export function GroupSection() {
  return (
    <section className="bg-surface px-6 py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Kumrular Group</p>
          <h2 className="mt-6 text-5xl font-extrabold leading-[.98] tracking-[-0.06em] md:text-7xl">Güçlü bir grup. Güvenilir bir gelecek.</h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted">Seyfeli Gayrimenkul, yalnızca gayrimenkul danışmanlığı sunmaz; kurumsal hafızası, saha sezgisi ve yatırım disipliniyle karar anını daha güvenli hale getirir.</p>
        </Reveal>
        <div className="space-y-4">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <div className="rounded-[2rem] border border-foreground/10 bg-background p-7 shadow-[0_24px_80px_rgba(17,17,17,.05)]">
                <item.icon className="size-7 text-primary" />
                <h3 className="mt-5 text-2xl font-extrabold tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
