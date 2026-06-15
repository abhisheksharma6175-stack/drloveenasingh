import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Preventive medicine, wellness visits, immigration medicals, TLC and CDL exams, job physicals, vaccinations, testing, and screening services."
};

export default function ServicesPage() {
  return (
    <main>
      <PageBanner title="Services" imageSrc="/images/service.jpg" />
      <AnimatedSection className="section-padding bg-[#f8fbff]">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Services"
            title="Preventive medicine services designed for modern families."
            description="Choose the care category that fits your visit. The office team can help confirm screenings, vaccines, documentation, timing, and what to bring."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
