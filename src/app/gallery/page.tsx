import type { Metadata } from "next";
import { AnimatedSection } from "@/components/AnimatedSection";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Explore a premium visual gallery for Dr. Loveena Singh's family medicine practice."
};

export default function GalleryPage() {
  return (
    <AnimatedSection className="section-padding bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Gallery"
          title="A brighter, more welcoming care environment."
          description="A modern visual direction for the practice: clean, calm, accessible, and professional."
        />
        <div className="mt-12">
          <GalleryGrid />
        </div>
      </div>
    </AnimatedSection>
  );
}
