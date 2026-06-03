import type { Metadata } from "next";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { AnimatedSection } from "@/components/AnimatedSection";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact All Care Family Medicine, PC to request a preventive medicine appointment or ask about family medicine services."
};

export default function ContactPage() {
  return (
    <AnimatedSection className="section-padding bg-white">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.86fr_1fr]">
        <SectionHeading
          align="left"
          eyebrow="Contact"
          title="Request a preventive care appointment or speak with the office."
          description="For urgent medical concerns, call emergency services or seek immediate care. For wellness visits, screenings, vaccines, and routine care, use the details below."
        />
        <div className="glass-panel rounded-3xl p-7">
          <div className="grid gap-5">
            <a href={`tel:${site.phone}`} className="flex gap-4 rounded-2xl bg-white p-4 transition hover:bg-blue-50">
              <FaPhoneAlt className="mt-1 text-[#1677b9]" aria-hidden />
              <span><strong className="block text-slate-950">Phone</strong>{site.phone}</span>
            </a>
            <a href={`mailto:${site.email}`} className="flex gap-4 rounded-2xl bg-white p-4 transition hover:bg-blue-50">
              <FaEnvelope className="mt-1 text-[#1677b9]" aria-hidden />
              <span><strong className="block text-slate-950">Email</strong>{site.email}</span>
            </a>
            <div className="flex gap-4 rounded-2xl bg-white p-4">
              <FaMapMarkerAlt className="mt-1 text-[#1677b9]" aria-hidden />
              <span><strong className="block text-slate-950">Main Office</strong>{site.address}</span>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </AnimatedSection>
  );
}
