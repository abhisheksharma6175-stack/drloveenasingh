"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from "react-icons/fa";
import { testimonials } from "@/data/testimonials";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];
  const stars = useMemo(() => Array.from({ length: 5 }), []);

  const move = (direction: number) => {
    setIndex((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="glass-panel relative overflow-hidden rounded-3xl p-7 sm:p-10">
        <FaQuoteLeft className="text-3xl text-[#1677b9]/25" aria-hidden />
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
          >
            <div className="mt-5 flex gap-1 text-amber-400">
              {stars.map((_, starIndex) => (
                <FaStar key={starIndex} aria-hidden />
              ))}
            </div>
            <p className="mt-5 text-xl font-medium leading-8 text-slate-900">"{testimonial.quote}"</p>
            <div className="mt-8">
              <p className="font-bold text-slate-950">{testimonial.name}</p>
              <p className="text-sm text-slate-500">{testimonial.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => move(-1)}
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 transition hover:border-[#1677b9] hover:text-[#1677b9]"
        >
          <FaChevronLeft aria-hidden />
        </button>
        <div className="flex gap-2">
          {testimonials.map((item, dotIndex) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial ${dotIndex + 1}`}
              onClick={() => setIndex(dotIndex)}
              className={`h-2.5 rounded-full transition ${
                dotIndex === index ? "w-8 bg-[#1677b9]" : "w-2.5 bg-slate-300"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => move(1)}
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 transition hover:border-[#1677b9] hover:text-[#1677b9]"
        >
          <FaChevronRight aria-hidden />
        </button>
      </div>
    </div>
  );
}
