import { GroupSection } from "@/components/home/group-section";
import { Hero } from "@/components/home/hero";
import { PortfolioCta } from "@/components/home/portfolio-cta";
import { ProjectsPreview } from "@/components/home/projects-preview";
import { ServicesPreview } from "@/components/home/services-preview";
import { Storytelling } from "@/components/home/storytelling";
import { site } from "@/lib/constants";

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: site.name,
    parentOrganization: { "@type": "Organization", name: site.parent },
    address: { "@type": "PostalAddress", addressLocality: "Ankara", addressCountry: "TR" },
    url: site.url,
    sameAs: [site.portfolioUrl]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Hero />
      <Storytelling />
      <ServicesPreview />
      <GroupSection />
      <ProjectsPreview />
      <PortfolioCta />
    </main>
  );
}
