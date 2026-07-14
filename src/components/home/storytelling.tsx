import { Reveal } from "./reveal";

const lines = ["Biz ilan satmıyoruz.", "Doğru yatırımı buluyoruz.", "Geleceği, güvenle planlıyoruz."];

export function Storytelling() {
  return (
    <section className="bg-background px-6 py-28 md:py-40">
      <div className="mx-auto max-w-7xl">
        {lines.map((line, index) => (
          <Reveal key={line} delay={index * 0.08}>
            <p className="border-b border-foreground/10 py-10 text-5xl font-extrabold leading-none tracking-[-0.065em] text-foreground md:text-7xl lg:text-8xl">
              {line}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
