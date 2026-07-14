"use client";

import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";
import { FaArrowRight, FaTimes } from "react-icons/fa";

export function PcmhPosterButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-6 text-sm font-semibold text-slate-900 transition hover:border-[#1677b9] hover:text-[#075985]"
      >
        View PCMH Brochure
        <FaArrowRight aria-hidden className="text-xs" />
      </button>

      {isOpen
        ? createPortal(
            <div
              className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/90 backdrop-blur-sm"
              role="dialog"
              aria-modal="true"
              aria-label="PCMH brochure poster"
              onClick={() => setIsOpen(false)}
            >
              <div
                className="relative flex h-full w-full items-center justify-center bg-slate-950"
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src="/images/Poster.png"
                  alt="All Care Family Medicine Patient-Centered Medical Home brochure"
                  width={1536}
                  height={1024}
                  sizes="(min-width: 1024px) 90vw, 100vw"
                  className="h-auto max-h-full w-auto max-w-full object-contain"
                  priority
                />
                <button
                  type="button"
                  aria-label="Close PCMH brochure"
                  onClick={() => setIsOpen(false)}
                  className="focus-ring absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition hover:bg-white"
                >
                  <FaTimes aria-hidden />
                </button>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
