import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { site } from "@/lib/site";

/* ─── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "About Us",
  description:
    "Learn about All Care Family Medicine, PC, a board-certified family practice delivering prevention-centered, compassionate primary care for patients of all ages across Queens and Long Island, NY.",
  keywords: [
    "All Care Family Medicine",
    "family physician Queens",
    "preventive medicine Queens",
    "board-certified family doctor",
    "primary care Richmond Hill",
    "family doctor Hicksville",
    "preventive care Long Island",
    "wellness visits Queens",
    "family medicine Ozone Park",
  ],
  openGraph: {
    title: "About All Care Family Medicine",
    description:
      "Board-certified family medicine providing preventive, patient-centered care across Queens and Long Island.",
    url: "/about",
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: ["/images/about.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About All Care Family Medicine",
    description:
      "Prevention-centered family medicine serving Queens and Long Island.",
    images: ["/images/about.jpg"],
  },
  alternates: {
    canonical: "/about",
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

/* ─── JSON-LD structured data ─────────────────────────────── */
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: site.name,
  description:
    "All Care Family Medicine, PC is a board-certified family practice focused on accessible, prevention-centered primary care for patients of all ages across Queens and Long Island, NY.",
  url: `${site.url}/about`,
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
};

/* ─── Data ────────────────────────────────────────────────── */
const stats = [
  { value: "5,000+", label: "Patients Served" },
  { value: "100%", label: "Prevention-Centered Care" },
  { value: "All Ages", label: "Comprehensive Family Care" },
];

const coreValues = [
  {
    label: "Listen First",
    detail: "Your concerns, history, and goals shape every visit.",
  },
  {
    label: "Prevent, Don't Just Treat",
    detail: "Early detection is always better than late management.",
  },
  {
    label: "Speak Plainly",
    detail: "No jargon — just clear, actionable guidance you can act on.",
  },
];

const approachCards = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Patient-Centered",
    desc: "Every care plan is built around you — your unique history, lifestyle, and health goals, not a generic template.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    title: "Proactive, Not Reactive",
    desc: "We prioritize catching risks early through regular screenings, health tracking, and preventive counseling.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Accessible & Inclusive",
    desc: "We welcome patients from all backgrounds and ensure healthcare remains approachable for everyone.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-5 w-5" aria-hidden="true">
        <rect x="8" y="2" width="8" height="4" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" />
      </svg>
    ),
    title: "Evidence-Based Practice",
    desc: "All treatment decisions follow current clinical guidelines and the latest medical evidence — no guesswork.",
  },
];

const locations = ["Richmond Hill", "Ozone Park", "Queens", "Hicksville"];

function AboutBanner() {
  return (
    <section
      aria-labelledby="about-banner-heading"
      className="relative h-[420px] overflow-hidden sm:h-[480px] lg:h-[520px]"
    >
      <Image
        src="/images/about.jpg"
        alt="All Care Family Medicine team providing compassionate primary care"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div aria-hidden="true" className="absolute inset-0 bg-slate-900/55" />
      <div aria-hidden="true" className="absolute inset-0 bg-blue-900/20" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6">
        <h1
          id="about-banner-heading"
          className="mb-4 text-3xl font-bold tracking-tight text-white drop-shadow-md sm:text-4xl lg:text-5xl"
        >
          About Us
        </h1>

        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm sm:text-base">
            <li>
              <Link
                href="/"
                className="flex items-center gap-1.5 font-medium text-white/90 transition hover:text-white"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Home
              </Link>
            </li>

            <li aria-hidden="true">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-blue-300"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>

            <li>
              <span className="font-semibold text-blue-300">About Us</span>
            </li>
          </ol>
        </nav>

        <div className="mt-6 max-w-3xl rounded-3xl border border-white/15 bg-white/10 px-4 py-4 text-left text-white shadow-lg backdrop-blur-md sm:px-6 sm:py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-100">
            Practice information
          </p>
          <p className="mt-2 text-sm leading-6 text-white/90 sm:text-base">
            All Care Family Medicine, PC provides prevention-centered family medicine for patients across Queens and Long Island.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100">Location</p>
              <p className="mt-1 text-sm text-white/90">{site.address}</p>
            </div>
            <div className="rounded-2xl bg-white/10 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100">Phone</p>
              <p className="mt-1 text-sm text-white/90">{site.phone}</p>
            </div>
            <div className="rounded-2xl bg-white/10 px-4 py-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100">Hours</p>
              <p className="mt-1 text-sm text-white/90">{site.hours}</p>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-50/30 to-transparent"
      />
    </section>
  );
}

/* ─── Page ────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        strategy="afterInteractive"
      />

      <main>
        <AboutBanner />

        {/* ── Hero ── */}
        <section
          aria-labelledby="about-heading"
          className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/40 to-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-20"
        >
          {/* Decorative blobs */}
          <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full bg-sky-100/40 blur-3xl" />

          <div className="relative mx-auto max-w-7xl">

            {/* Mobile / tablet heading — shown below lg */}
            <div className="mb-8 lg:hidden">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-600 sm:text-sm">
                About Us
              </p>
              <h1
                id="about-heading"
                className="text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl"
              >
                Trusted family medicine{" "}
                <span className="italic text-color">
                  rooted in prevention.
                </span>
              </h1>
            </div>

            <div className="grid items-center gap-10 lg:grid-cols-[5fr_6fr] lg:gap-20">

              {/* Photo column */}
              <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none">
                <div aria-hidden="true" className="absolute -inset-3 rounded-[2.25rem] border-2 border-blue-200/60" />

                {/* Board certified badge */}
                <div className="absolute -bottom-4 -right-2 z-10 flex items-center gap-2 rounded-2xl border border-blue-100 bg-white px-3 py-2 shadow-lg shadow-blue-950/8 sm:-bottom-5 sm:-right-4 sm:px-4 sm:py-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white sm:h-9 sm:w-9">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="h-4 w-4" aria-hidden="true">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-900 sm:text-xs">Board Certified</p>
                    <p className="text-[10px] text-slate-500 sm:text-[11px]">Family Medicine</p>
                  </div>
                </div>

                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-blue-950/15">
                  <Image
                    src="/images/about.jpg"
                    alt="All Care Family Medicine practice — compassionate primary care in Queens and Long Island, NY"
                    fill
                    priority
                    sizes="(min-width: 1024px) 42vw, (min-width: 640px) 70vw, 92vw"
                    className="object-cover"
                  />
                  <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/30 to-transparent" />
                </div>
              </div>

              {/* Copy column */}
              <div>
                {/* Desktop heading — hidden below lg */}
                <div className="hidden lg:block">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-color">
                    About Us
                  </p>
                  <h1
                    id="about-heading"
                    className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]"
                  >
                    Trusted family medicine{" "}
                    <span className="italic text-color">rooted in prevention.</span>
                  </h1>
                </div>

                {/* Mission quote */}
                <blockquote className="mt-0 border-l-4 border-blue-600 bg-blue-50/60 py-3 pl-4 pr-3 text-sm italic leading-relaxed text-slate-600 sm:py-4 sm:pl-5 sm:pr-4 sm:text-[15px] lg:mt-6">
                  "At All Care Family Medicine, we believe exceptional healthcare begins with listening — and that the best outcomes come from catching problems before they become crises."
                </blockquote>

                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
                  We provide compassionate, evidence-based primary care for patients of all ages. Our practice is built on long-term relationships, proactive wellness planning, and clear communication every step of the way.
                </p>

                {/* Core value bullets */}
                <ul
                  className="mt-6 space-y-3 sm:mt-8"
                  role="list"
                  aria-label="Core practice values"
                >
                  {coreValues.map((v) => (
                    <li key={v.label} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600/10"
                      >
                        <span className="h-2 w-2 rounded-full bg-blue-600" />
                      </span>
                      <span className="text-sm text-slate-700 sm:text-base">
                        <strong className="font-semibold text-slate-900">{v.label}.</strong>{" "}
                        {v.detail}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="mt-8 flex flex-col gap-3 xs:flex-row xs:flex-wrap sm:mt-10">
                  <a
                    href="/appointment"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#1677b9] px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:bg-[#1677b9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 xs:w-auto xs:px-6"
                  >
                    Book an Appointment
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
                      <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-[#1677b9] hover:text-[#1677b9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 xs:w-auto xs:px-6"
                  >
                    Contact the Practice
                  </a>
                </div>

                <div className="mt-8 rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm backdrop-blur sm:mt-10 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                    Practice information
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Location</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{site.address}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Phone</p>
                      <a href={`tel:${site.phone}`} className="mt-1 inline-block text-sm leading-6 text-slate-600 transition hover:text-[#1677b9]">
                        {site.phone}
                      </a>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">Hours</p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">{site.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <section
          aria-label="Practice highlights"
          className="border-y border-slate-100 bg-white"
        >
          <div className="mx-auto max-w-7xl">
            {/*
              Mobile: stack vertically with horizontal dividers
              sm+:    3-column grid with vertical dividers
            */}
            <dl className="grid grid-cols-1 divide-y divide-slate-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {stats.map((s) => (
                <div key={s.label} className="px-6 py-8 text-center sm:px-8 sm:py-10">
                  <dt className="text-xs font-medium text-slate-500 sm:text-sm">{s.label}</dt>
                  <dd className="mt-1 text-3xl font-bold text-color sm:text-4xl">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── Our approach ── */}
        <section
          aria-labelledby="approach-heading"
          className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <h2
              id="approach-heading"
              className="mb-8 text-xl font-bold tracking-tight text-slate-900 sm:mb-10 sm:text-2xl lg:text-3xl"
            >
              Our approach to care
            </h2>
            {/*
              Mobile:  1 column
              sm:      2 columns
              lg:      4 columns
            */}
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {approachCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6"
                >
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 sm:mb-4">
                    {card.icon}
                  </span>
                  <h3 className="mb-1 text-sm font-semibold text-slate-900 sm:mb-2 sm:text-base">
                    {card.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Locations strip ── */}
        <section
          aria-labelledby="locations-heading"
          className="bg-[#1677b9] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:gap-8 md:text-left">
              <div className="flex-shrink-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 sm:text-sm">
                  Serving New York
                </p>
                <h2
                  id="locations-heading"
                  className="mt-1 text-xl font-bold text-white sm:mt-2 sm:text-2xl lg:text-3xl"
                >
                  Patients from across Queens &amp; Long Island
                </h2>
              </div>
              <ul
                className="flex flex-wrap justify-center gap-2 sm:gap-3 md:justify-end"
                role="list"
                aria-label="Service locations"
              >
                {locations.map((loc) => (
                  <li
                    key={loc}
                    className="rounded-full border border-blue-400/60 bg-blue-500/50 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm sm:px-5 sm:py-2 sm:text-sm"
                  >
                    {loc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}