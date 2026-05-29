import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TestimonialsSection } from "@/sections/HomeSections";

/* ─── Full SEO Metadata ─────────────────────────────────────── */
export const metadata: Metadata = {
  title: "About Dr. Loveena Singh MD | Board-Certified Family Physician Queens & Long Island",
  description:
    "Meet Dr. Loveena Singh MD, a board-certified family physician specializing in preventive medicine. Serving Richmond Hill, Ozone Park, Queens, and Hicksville with compassionate, prevention-centered care for all ages.",
  keywords: [
    "Dr. Loveena Singh",
    "family physician Queens",
    "preventive medicine Queens",
    "board-certified family doctor",
    "primary care Richmond Hill",
    "family doctor Hicksville",
    "preventive care Long Island",
    "wellness visits Queens",
    "medical exams Queens NY",
    "family medicine Ozone Park",
  ],
  authors: [{ name: "Dr. Loveena Singh MD" }],
  creator: "Dr. Loveena Singh MD",
  openGraph: {
    title: "About Dr. Loveena Singh MD | Family Physician Queens & Long Island",
    description:
      "Board-certified family physician providing preventive, patient-centered care across Queens and Long Island. Learn more about Dr. Singh's approach and practice.",
    url: "https://www.yourpracticesite.com/about",
    siteName: "Dr. Loveena Singh MD",
    images: [
      {
        url: "/images/loveena-singh.jpg",
        width: 800,
        height: 1000,
        alt: "Dr. Loveena Singh MD, board-certified family physician in Queens, NY",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dr. Loveena Singh MD | Family Physician Queens & Long Island",
    description:
      "Meet Dr. Loveena Singh MD — preventive medicine expert serving Queens and Long Island.",
    images: ["/images/loveena-singh.jpg"],
  },
  alternates: {
    canonical: "https://www.yourpracticesite.com/about",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ─── JSON-LD structured data ────────────────────────────────── */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Loveena Singh MD",
  jobTitle: "Board-Certified Family Physician",
  description:
    "Dr. Loveena Singh is a board-certified family physician focused on accessible, prevention-centered care for patients of all ages across Queens and Long Island, NY.",
  image: "https://www.yourpracticesite.com/images/loveena-singh.jpg",
  url: "https://www.yourpracticesite.com/about",
  medicalSpecialty: "Family Medicine",
  areaServed: [
    { "@type": "City", name: "Richmond Hill" },
    { "@type": "City", name: "Ozone Park" },
    { "@type": "City", name: "Queens" },
    { "@type": "City", name: "Hicksville" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "NY",
    addressCountry: "US",
  },
  knowsAbout: [
    "Preventive Medicine",
    "Family Care",
    "Medical Examinations",
    "Vaccinations",
    "Preventive Screenings",
    "Wellness Visits",
  ],
};

/* ─── Stats data ─────────────────────────────────────────────── */
const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "5,000+", label: "Patients Served" },
  { value: "4", label: "Communities Covered" },
];

/* ─── Services ───────────────────────────────────────────────── */
const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Family Care",
    desc: "Comprehensive care for every stage of life, from children to seniors.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
        <rect x="8" y="2" width="8" height="4" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" />
      </svg>
    ),
    title: "Medical Exams",
    desc: "Annual physicals, DOT exams, and employment health clearances.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Preventive Visits",
    desc: "Early risk detection, screenings, vaccines, and wellness planning.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Chronic Care",
    desc: "Ongoing management and follow-up for long-term health conditions.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Patient Education",
    desc: "Clear explanations and practical guidance so you understand your health.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Community Focus",
    desc: "Serving Richmond Hill, Ozone Park, Queens, and Hicksville families.",
  },
];

/* ─── Values ─────────────────────────────────────────────────── */
const values = [
  { label: "Listen First", detail: "Every visit starts with understanding you — your concerns, history, and goals." },
  { label: "Prevent, Don't Just Treat", detail: "Catching issues early is always better than managing them later." },
  { label: "Speak Plainly", detail: "Medical jargon stays out; clear, actionable guidance comes in." },
];

/* ─── Page ───────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      {/* Structured data for Google */}
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        strategy="afterInteractive"
      />

      <main>
        {/* ── Hero / Intro ── */}
        <AnimatedSection
          aria-labelledby="about-heading"
          className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-20"
        >
          {/* Decorative blob */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-sky-100/40 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl">

  {/* Mobile Heading */}
  <div className="mb-10 lg:hidden">
    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-color">
      About Dr. Singh
    </p>

    <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900">
      Compassionate preventive medicine with{" "}
      <span className="text-color">clear communication.</span>
    </h1>
  </div>

  <div className="grid items-center gap-12 lg:grid-cols-[5fr_6fr] lg:gap-20">

              {/* Photo column */}
              
<div className="relative mx-auto w-full max-w-sm lg:max-w-none">
                {/* Decorative ring */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-[2.25rem] border-2 border-blue-200/60"
                />
                {/* Accent badge */}
                <div className="absolute -bottom-5 -right-4 z-10 flex items-center gap-2 rounded-2xl border border-blue-100 bg-white px-4 py-3 shadow-lg shadow-blue-950/8 sm:-right-6">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="h-4 w-4" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-slate-900">Board Certified</p>
                    <p className="text-[11px] text-slate-500">Family Medicine</p>
                  </div>
                </div>

                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-blue-950/15">
                  <Image
                    src="/images/loveena-singh.jpg"
                    alt="Dr. Loveena Singh MD, board-certified family physician serving Queens and Long Island, NY"
                    fill
                    priority
                    sizes="(min-width: 1024px) 42vw, (min-width: 640px) 70vw, 92vw"
                    className="object-cover"
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/30 to-transparent"
                  />
                </div>
              </div>

              {/* Content column */}
              <div>
                {/* Mobile Heading */}
                <div className="hidden lg:block">
  <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-color">
    About Dr. Singh
  </p>

  <h1
    id="about-heading"
    className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]"
  >
    Compassionate preventive medicine with{" "}
    <span className="text-color">clear communication.</span>
  </h1>
</div>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  Dr. Loveena Singh is a board-certified family physician focused on accessible, prevention-centered care for patients of all ages across Queens and Long Island.
                </p>

                <div className="mt-7 space-y-4 text-base leading-8 text-slate-600">
                  <p>
                    Her approach combines preventive care, careful listening, early risk recognition, and practical next steps — so patients feel fully informed before they leave the office.
                  </p>
                  <p>
                    The practice supports wellness visits, medical exams, vaccinations, testing, preventive screenings, and follow-up care for families in Richmond Hill, Ozone Park, Queens, and Hicksville.
                  </p>
                </div>

                {/* Values list */}
                <ul className="mt-8 space-y-3" role="list" aria-label="Dr. Singh's core practice values">
                  {values.map((v) => (
                    <li key={v.label} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600/10"
                      >
                        <span className="h-2 w-2 rounded-full bg-blue-600" />
                      </span>
                      <span className="text-slate-700">
                        <strong className="font-semibold text-slate-900">{v.label}.</strong>{" "}
                        {v.detail}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="/appointment"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#1677b9] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-blue-700 hover:shadow-blue-600/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Book an Appointment
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-blue-300 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Contact the Practice
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* ── Locations strip ── */}
        <section
          aria-labelledby="locations-heading"
          className="bg-[#1677b9] px-4 py-14 sm:px-6 sm:py-16 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                  Serving New York
                </p>
                <h2 id="locations-heading" className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Patients from across Queens &amp; Long Island
                </h2>
              </div>
              <ul
                className="flex flex-wrap justify-center gap-3 md:justify-end"
                role="list"
                aria-label="Service locations"
              >
                {["Richmond Hill", "Ozone Park", "Queens", "Hicksville"].map((loc) => (
                  <li
                    key={loc}
                    className="rounded-full border border-blue-400/60 bg-blue-500/50 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm"
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <TestimonialsSection />
      </main>
    </>
  );
}