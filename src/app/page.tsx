import {
  AboutPreview,
  AppointmentCta,
  BlogPreview,
  ContactSection,
  FaqSection,
  GalleryPreview,
  PcmhOverview,
  ServicesPreview,
  TestimonialsSection,
  WhyChooseUs
} from "@/sections/HomeSections";
import { Hero } from "@/sections/Hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <PcmhOverview />
      <ServicesPreview />
      <WhyChooseUs />
      <AppointmentCta />
      <TestimonialsSection />
      <GalleryPreview />
      <BlogPreview />
      <FaqSection />
      <ContactSection />
    </>
  );
}
