import type { Metadata } from "next";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Dr. Loveena Singh MD to request a preventive medicine appointment or ask about family medicine services."
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
          <form className="mt-8 grid gap-4" aria-label="Appointment request form" action={`mailto:${site.email}`} method="post" encType="text/plain">
            <label className="sr-only" htmlFor="name">Full name</label>
            <input id="name" name="name" className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#1677b9]" placeholder="Full name" />
            <label className="sr-only" htmlFor="contact">Phone or email</label>
            <input id="contact" name="contact" className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#1677b9]" placeholder="Phone or email" />
            <label className="sr-only" htmlFor="reason">Reason for visit</label>
            <select id="reason" name="reason" className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#1677b9]" defaultValue="">
              <option value="" disabled>Reason for visit</option>
              <option>Preventive care visit</option>
              <option>Medical exam</option>
              <option>Vaccination or testing</option>
              <option>Other</option>
            </select>
            <label className="sr-only" htmlFor="message">How can we help?</label>
            <textarea id="message" name="message" className="min-h-32 rounded-xl border border-slate-200 bg-white p-4 text-sm outline-none transition focus:border-[#1677b9]" placeholder="How can we help?" />
            <button type="submit" className="h-12 rounded-full bg-[#1677b9] px-6 text-sm font-bold text-white transition hover:bg-[#075985]">
              Send Request
            </button>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
