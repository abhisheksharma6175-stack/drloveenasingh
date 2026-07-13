import Image from "next/image";
import Link from "next/link";
import {
  FaCheckCircle,
  FaClock,
  FaFilePdf,
  FaLanguage,
  FaShieldAlt,
} from "react-icons/fa";

import { AnimatedSection } from "@/components/AnimatedSection";
import { CtaButton } from "@/components/CtaButton";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { posts } from "@/data/blog";
import { services } from "@/data/services";
import { site } from "@/lib/site";

// ================= ABOUT =================

export function AboutPreview() {
  return (
    <AnimatedSection className="section-padding bg-white">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[0.82fr_1fr]">

        <div className="rounded-3xl bg-[#eaf6fb] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1677b9]">
            About the Doctor
          </p>

          <h2 className="mt-4 font-[var(--font-serif)] text-xl font-semibold text-slate-950 sm:text-4xl">
            A prevention-focused medical partner for every stage of family life.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-8 text-slate-600">
            Dr. Loveena Singh is a board-certified family physician focused on
            preventive medicine, early detection, and practical long-term health
            planning. Her team supports wellness visits, medical exams,
            vaccinations, screenings, and ongoing health management with clear
            communication and patient-first service.
          </p>

          <div className="mt-7">
            <CtaButton href="/about" variant="secondary">
              Learn About Dr. Singh
            </CtaButton>
          </div>
        </div>

      </div>
    </AnimatedSection>
  );
}

// ================= PCMH OVERVIEW =================

export function PcmhOverview() {
  const principles = [
    "Care coordinated around your needs",
    "Prevention and wellness at every stage",
    "Clear communication and shared decisions",
  ];

  return (
    <AnimatedSection className="section-padding bg-[#f8fbff]">
      <div className="container-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1fr]">
        <div>
          <p className="inline-flex rounded-full bg-teal-100 px-4 py-2 text-xs font-bold tracking-[0.16em] text-teal-800">
            PCMH-ALIGNED CARE
          </p>
          <h2 className="mt-5 font-[var(--font-serif)] text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">
            Patient-centered care, designed around you.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Our approach reflects Patient-Centered Medical Home principles: a connected care team, proactive prevention, and support that helps make each next step clearer.
          </p>
          <div className="mt-7">
            <CtaButton href="/our-commitment" variant="secondary">
              Explore Our Commitment
            </CtaButton>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-3xl border border-teal-100 bg-white p-7 shadow-lg shadow-slate-200/50 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-teal-300 hover:shadow-2xl hover:shadow-teal-200/70 sm:p-9">
          <div aria-hidden className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal-200/40 blur-3xl transition-transform duration-700 ease-out group-hover:scale-150 group-hover:bg-cyan-200/60" />
          <div className="relative flex items-center gap-4">
            <span className="rounded-xl bg-teal-700 px-3 py-2 text-sm font-black tracking-[0.14em] text-white shadow-md shadow-teal-700/20 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3">PCMH</span>
            <p className="font-semibold text-slate-900 transition-colors duration-300 group-hover:text-teal-800">Patient-Centered Medical Home principles</p>
          </div>
          <ul className="relative mt-7 space-y-4">
            {principles.map((principle) => (
              <li key={principle} className="flex items-start gap-3 text-slate-700 transition-transform duration-300 ease-out group-hover:translate-x-1">
                <FaCheckCircle className="mt-0.5 shrink-0 text-lg text-teal-600 transition-transform duration-300 group-hover:scale-110" aria-hidden />
                <span className="font-medium">{principle}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/images/PCMH%20TC09_%20Patient%20Information%20(3).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-7 inline-flex items-center gap-2 rounded-xl border border-teal-200 bg-teal-50 px-4 py-3 text-sm font-bold text-teal-800 transition duration-300 hover:-translate-y-0.5 hover:border-teal-300 hover:bg-teal-100"
          >
            <FaFilePdf className="text-base" aria-hidden />
            View PCMH Patient Information
          </Link>
        </div>
      </div>
    </AnimatedSection>
  );
}

// ================= SERVICES =================

export function ServicesPreview() {
  return (
    <AnimatedSection className="section-padding bg-[#f8fbff]">
      <div className="container-shell">

        <SectionHeading
          eyebrow="Services"
          title="Preventive care, organized around real patient needs."
          description="From annual wellness visits and screenings to required medical exams, the practice is designed to make prevention clear, efficient, and personal."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

      </div>
    </AnimatedSection>
  );
}

// ================= WHY CHOOSE US =================


export function WhyChooseUs() {

  const points = [
    {
      icon: FaShieldAlt,
      title: "Prevention-first care",
      text: "Board-certified family medicine with an emphasis on continuity, screening, and prevention."
    },
    {
      icon: FaClock,
      title: "Efficient visits",
      text: "Practical scheduling, clear instructions, and organized documentation."
    },
    {
      icon: FaLanguage,
      title: "Community centered",
      text: "A culturally aware team serving diverse Queens and Long Island families."
    },
    {
      icon: FaCheckCircle,
      title: "Whole-person focus",
      text: "Care plans that consider history, lifestyle, family, and long-term goals."
    }
  ];

  return (
    <AnimatedSection className="section-padding bg-white">

      <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1fr]">

        <SectionHeading
          align="left"
          eyebrow="Why Choose Us"
          title="A polished office experience with prevention at the center."
          description="Patients choose the practice for reliable guidance, attentive visits, and a team that helps them understand screenings, vaccines, risk factors, and next steps."
        />

        <div className="grid gap-4 sm:grid-cols-2">

          {points.map((point) => (

            <div
              key={point.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >

              <point.icon
                className="text-2xl text-[#1677b9]"
                aria-hidden
              />

              <h3 className="mt-4 font-bold text-slate-950">
                {point.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {point.text}
              </p>

            </div>

          ))}

        </div>

      </div>

    </AnimatedSection>
  );
}

// ================= APPOINTMENT CTA =================

export function AppointmentCta() {
  return (
    <AnimatedSection className="bg-[#075985] py-16 text-white">

      <div className="container-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
            Appointments
          </p>

          <h2 className="mt-3 font-[var(--font-serif)] text-xl font-semibold sm:text-4xl">
            Ready to plan your preventive care visit?
          </h2>

          <p className="mt-3 max-w-2xl text-blue-50">
            {site.hours}. Call ahead for location availability.
          </p>

        </div>

        <Link
          href="/contact"
          className="focus-ring inline-flex h-12 items-center rounded-full bg-white px-6 text-sm font-bold text-[#075985] transition hover:bg-blue-50"
        >
          Request Appointment
        </Link>

      </div>

    </AnimatedSection>
  );
}

// ================= TESTIMONIALS =================

export function TestimonialsSection() {
  return (
    <AnimatedSection className="section-padding bg-[#f8fbff]">

      <div className="container-shell">

        <SectionHeading
          eyebrow="Testimonials"
          title="Kind words from patients."
        />

        <div className="mt-12">
          <TestimonialCarousel />
        </div>

      </div>

    </AnimatedSection>
  );
}

// ================= GALLERY =================

export function GalleryPreview() {
  return (
    <AnimatedSection className="section-padding bg-white">

      <div className="container-shell">

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <SectionHeading
            align="left"
            eyebrow="Gallery"
            title="A calm, modern setting for family care."
            description="Preview the kind of bright, organized clinical experience patients can expect."
          />

          <CtaButton href="/gallery" variant="secondary">
            View Gallery
          </CtaButton>

        </div>

        <div className="mt-10">
          <GalleryGrid limit={3} />
        </div>

      </div>

    </AnimatedSection>
  );
}

// ================= FAQ =================

export function FaqSection() {

  const faqs = [
  {
    question: "What is primary care?",
    answer: "Primary care focuses on preventive healthcare, routine checkups, diagnosis and treatment of common illnesses, and long-term management of chronic conditions."
  },
  {
    question: "What services does a primary care provider offer?",
    answer: "Primary care providers offer annual wellness exams, preventive screenings, vaccinations, chronic disease management, sick visits, and health counseling."
  },
  {
    question: "When should I see a primary care doctor?",
    answer: "You should visit a primary care doctor for routine checkups, preventive care, chronic condition management, medication reviews, and non-emergency health concerns."
  },
  {
    question: "What is the difference between primary care and urgent care?",
    answer: "Primary care focuses on ongoing healthcare and preventive services, while urgent care treats non-life-threatening illnesses and injuries that require prompt attention."
  },
  {
    question: "Can a primary care physician manage chronic conditions?",
    answer: "Yes. Primary care physicians commonly manage conditions such as diabetes, high blood pressure, asthma, heart disease, and high cholesterol."
  },
  {
    question: "Do you offer medical exams for work or licensing?",
    answer: "Yes. The practice supports job physicals, TLC and CDL medical exams, and related documentation."
  },
  {
    question: "Can new patients request an appointment?",
    answer: "Yes. Call the office or use the contact page to request availability and confirm your preferred location."
  },
  {
    question: "What should I bring to my visit?",
    answer: "Bring photo ID, insurance details, medication lists, relevant forms, vaccine records, and any recent test results."
  }
];

  return (
    <AnimatedSection className="section-padding bg-[#f8fbff]">

      <div className="container-shell">

        <SectionHeading
          eyebrow="FAQ"
          title="Helpful answers before your visit."
        />

        <div className="mx-auto mt-10 grid max-w-4xl gap-4">

          {faqs.map((faq) => (

            <details
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >

              <summary className="cursor-pointer font-bold text-slate-950">
                {faq.question}
              </summary>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {faq.answer}
              </p>

            </details>

          ))}

        </div>

      </div>

    </AnimatedSection>
  );
}

// ================= BLOG PREVIEW WITH IMAGE =================

export function BlogPreview() {
  return (
    <AnimatedSection className="section-padding bg-white">

      <div className="container-shell">

        <SectionHeading
          eyebrow="Health Notes"
          title="Practical guidance for preventive care visits."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {posts.map((post) => (

            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Blog Image */}
              <div className="relative aspect-[16/10] overflow-hidden">

                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              {/* Blog Content */}
              <div className="p-5">

                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1677b9]">
                  {post.readTime}
                </p>

                <h3 className="mt-3 text-lg font-bold leading-snug text-slate-950 transition group-hover:text-[#1677b9]">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {post.excerpt}
                </p>

                <div className="mt-4 inline-flex items-center text-sm font-semibold text-[#1677b9]">
                  Read More →
                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </AnimatedSection>
  );
}

// ================= CONTACT =================

export function ContactSection() {
  return (
    <AnimatedSection className="section-padding bg-white">

      <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1fr]">

        <SectionHeading
          align="left"
          eyebrow="Contact"
          title="Call or send a request to plan your preventive visit."
          description="The office team can help confirm wellness visits, screenings, vaccines, medical exams, location, hours, insurance details, and appointment availability."
        />

        <div className="glass-panel rounded-3xl p-7">

          <div className="grid gap-4 text-sm text-slate-700">

            <p>
              <strong className="text-slate-950">Phone:</strong>{" "}
              {site.phone}
            </p>

            <p>
              <strong className="text-slate-950">Email:</strong>{" "}
              {site.email}
            </p>

            <p>
              <strong className="text-slate-950">Main office:</strong>{" "}
              {site.address}
            </p>

            <p>
              <strong className="text-slate-950">Hours:</strong>{" "}
              {site.hours}
            </p>

          </div>

          <div className="mt-7">
            <CtaButton href="/contact">
              Open Contact Page
            </CtaButton>
          </div>

        </div>

      </div>

    </AnimatedSection>
  );
}
