"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaAward,
  FaMapMarkerAlt,
  FaUserMd,
  FaCalendarCheck,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.7,
    delay,
  },
});

export function Hero() {
  return (
    <section className="relative min-h-[80svh] overflow-hidden sm:min-h-screen">
      {/* Background Image */}
      <Image
        src="/images/home-banner.jpg"
        alt="Healthcare Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container-shell flex min-h-[80svh] items-center py-12 sm:min-h-screen sm:py-20">
        <div className="grid w-full gap-16 lg:grid-cols-[1fr_0.9fr]">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">

            {/* Badge */}
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">
                <FaAward className="text-cyan-300" />
                <span className="text-[12px] sm:text-sm  font-medium text-white">
                  Preventive Medicine & Family Care
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              {...fadeUp(0.1)}
              className="mt-8 max-w-4xl text-2xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
            >
              Preventive Healthcare
              <br />
              <span className="italic text-cyan-300">
                For Every Stage
              </span>
              <br />
              Of Life
            </motion.h1>

            {/* Description */}
            <motion.p
              {...fadeUp(0.2)}
              className="mt-6 max-w-xl text-sm leading-relaxed text-slate-200"
            >
              Dr. Loveena Singh provides annual wellness visits,
              screenings, vaccinations, medical exams, and
              prevention-focused care for patients across
              Queens and Long Island.
            </motion.p>

            {/* Buttons */}
            <motion.div
              {...fadeUp(0.3)}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                <FaCalendarCheck />
                Book Appointment
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
  {...fadeUp(0.4)}
  className="hidden lg:grid mt-12 gap-4 lg:grid-cols-3"
>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <FaUserMd className="mb-3 text-2xl text-cyan-300" />
                <p className="text-xs uppercase tracking-wider text-slate-300">
                  Patients
                </p>
                <h4 className="mt-1 font-semibold text-white">
                  Prevention For All Ages
                </h4>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <FaMapMarkerAlt className="mb-3 text-2xl text-cyan-300" />
                <p className="text-xs uppercase tracking-wider text-slate-300">
                  Locations
                </p>
                <h4 className="mt-1 font-semibold text-white">
                  Queens & Hicksville
                </h4>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                <FaStar className="mb-3 text-2xl text-cyan-300" />
                <p className="text-xs uppercase tracking-wider text-slate-300">
                  Approach
                </p>
                <h4 className="mt-1 font-semibold text-white">
                  Holistic Family Care
                </h4>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative hidden lg:flex items-center justify-center">

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-[650px] w-[450px] overflow-hidden rounded-[32px] border border-white/20 shadow-2xl">
                <Image
                  src="/images/loveena-singh.jpg"
                  alt="Dr Loveena Singh"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -left-16 top-16 rounded-3xl bg-white p-5 shadow-xl">
                <p className="text-xs text-slate-500">
                  ACCEPTING PATIENTS
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">
                  New Patients Welcome
                </h3>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -right-10 bottom-24 rounded-3xl bg-white p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-100 p-3">
                    <FaCalendarCheck className="text-emerald-600" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      Wellness Visits
                    </h4>
                    <p className="text-sm text-slate-500">
                      Annual Health Screenings
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Card 3 */}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}