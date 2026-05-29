"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaAward, FaMapMarkerAlt, FaUserMd, FaCalendarCheck, FaStar } from "react-icons/fa";
import { CtaButton } from "@/components/CtaButton";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    ease: [0.25, 0.1, 0.25, 1] as const,
    delay,
  },
});
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-blue-50">
      {/* Subtle background decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-blue-100/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sky-100/50 blur-2xl"
      />

      <div className="container-shell relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1fr_0.88fr]">

        {/* ── Left column ── */}
        <div className="flex flex-col">

          {/* Badge */}
          <motion.div {...fadeUp(0)}>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#075985] shadow-sm">
              <FaAward className="text-[#1677b9]" aria-hidden />
              Preventive medicine &amp; family care
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="mt-6 font-[var(--font-serif)] text-4xl font-semibold leading-[1.08] text-slate-950 sm:text-5xl lg:text-[3.4rem]"
          >
            Preventive medicine that helps families{" "}
            <span className="relative inline-block text-[#075985]">
              stay ahead
              <svg
                aria-hidden
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 6 C40 2, 100 2, 198 5"
                  stroke="#38bdf8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            of their health.
          </motion.h1>

          {/* Body */}
          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-slate-600"
          >
            Dr. Loveena Singh provides annual wellness visits, screenings,
            vaccinations, medical exams, and ongoing prevention-focused care for
            patients across Queens and Long Island.
          </motion.p>

          {/* CTA row */}
          <motion.div
            {...fadeUp(0.3)}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <CtaButton href="/contact">
              <FaCalendarCheck aria-hidden className="mr-2 inline-block" />
              Book an Appointment
            </CtaButton>
            <CtaButton href="/services" variant="secondary">
              Explore Services 
            </CtaButton>
          </motion.div>

          {/* Stat cards */}
          <motion.div
            {...fadeUp(0.4)}
            className="mt-9 grid gap-3 sm:grid-cols-3"
          >
            {[
              {
                icon: <FaUserMd className="text-[#1677b9]" aria-hidden />,
                label: "Patients",
                value: "Prevention for all ages",
              },
              {
                icon: <FaMapMarkerAlt className="text-[#1677b9]" aria-hidden />,
                label: "Locations",
                value: "Queens & Hicksville",
              },
              {
                icon: <FaStar className="text-[#1677b9]" aria-hidden />,
                label: "Approach",
                value: "Holistic family care",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="glass-panel flex flex-col gap-1.5 rounded-2xl p-4"
              >
                <div className="flex items-center gap-2">
                  {s.icon}
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    {s.label}
                  </span>
                </div>
                <p className="text-sm font-semibold text-slate-900">{s.value}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right column — photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.18, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[500px]"
        >
          {/* Glow halo */}
          <div
            aria-hidden
            className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-blue-200/60 to-sky-100/40 blur-2xl"
          />

          {/* Photo frame */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-2xl shadow-blue-950/10">
            <Image
              src="/images/loveena-singh.jpg"
              alt="Dr. Loveena Singh in a modern clinical setting"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 92vw"
              className="object-cover"
            />
          </div>

          {/* Floating trust badge — top left */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="glass-panel absolute -left-5 top-10 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg shadow-blue-950/8"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50">
              <FaCalendarCheck className="text-emerald-600" aria-hidden />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Accepting patients</p>
              <p className="text-[11px] text-slate-500">New &amp; existing welcome</p>
            </div>
          </motion.div>

          {/* Floating info card — bottom */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="glass-panel absolute -bottom-6 left-4 right-4 rounded-2xl p-4 shadow-xl shadow-blue-950/10 sm:left-auto sm:w-72"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-content rounded-full bg-blue-50">
                <FaAward className="mx-auto text-[#1677b9]" aria-hidden />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-950">
                  Wellness &amp; screening visits
                </p>
                <p className="mt-0.5 text-xs leading-relaxed text-slate-500">
                  Call for preventive care availability at Queens and Long Island
                  offices.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}