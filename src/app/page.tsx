import {
  AboutPreview,
  AppointmentCta,
  BlogPreview,
  ContactSection,
  FaqSection,
  GalleryPreview,
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
