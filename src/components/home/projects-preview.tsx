import Image from "next/image";
import { Reveal } from "./reveal";

const projects = [
  { title: "Kurumsal Yatırım Analizi", location: "Ankara", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop" },
  { title: "Premium Yaşam Bölgeleri", location: "Çankaya & İncek", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop" }
];

export function ProjectsPreview() {
  return (
    <section className="bg-background px-6 py-28 md:py-36">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-accent">Projeler</p>
              <h2 className="mt-6 max-w-3xl text-5xl font-extrabold leading-[.98] tracking-[-0.06em] md:text-7xl">İlan değil, şirket projeleri.</h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-muted">Portföy ayrı bir kanalda yayınlanır. Burada yalnızca kurumun yaklaşımını anlatan proje ve çalışma alanları yer alır.</p>
          </div>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <article className="group overflow-hidden rounded-[2rem] bg-surface shadow-[0_30px_90px_rgba(17,17,17,.08)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={project.image} alt={project.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-7">
                  <p className="text-sm font-bold uppercase tracking-[0.22em] text-accent">{project.location}</p>
                  <h3 className="mt-3 text-3xl font-extrabold tracking-[-0.045em]">{project.title}</h3>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
