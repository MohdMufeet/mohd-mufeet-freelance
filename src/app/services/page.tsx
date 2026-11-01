import { EmptyState } from "@/components/shared/EmptyState";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Section } from "@/components/shared/Section";
import { getServices } from "@/lib/content";

export default function ServicesPage() {
  const services = getServices();

  return (
    <main id="main" className="section-shell">
      <Section id="services" eyebrow="Services" title="How I can help" description="Web development work for businesses and individuals.">
        {services.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No active services are published"
            description="Please check back later or get in touch to discuss your project."
            action={{ label: "Contact me", href: "/contact" }}
          />
        )}
      </Section>
    </main>
  );
}
