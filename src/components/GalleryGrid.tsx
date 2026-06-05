"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { gallery } from "@/data/gallery";

export function GalleryGrid({ limit }: { limit?: number }) {
  const [selected, setSelected] = useState<(typeof gallery)[number] | null>(null);
  const items = limit ? gallery.slice(0, limit) : gallery;

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <motion.button
            type="button"
            key={item.src}
            whileHover={{ y: -6 }}
            onClick={() => setSelected(item)}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100 text-left shadow-sm"
            >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-5 text-sm font-semibold text-white">
              {item.title}
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/82 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="relative h-[72vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white"
              onClick={(event) => event.stopPropagation()}
            >
              <Image src={selected.src} alt={selected.alt} fill sizes="90vw" className="object-cover" />
              <button
                type="button"
                aria-label="Close gallery preview"
                onClick={() => setSelected(null)}
                className="focus-ring absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg"
              >
                <FaTimes aria-hidden />
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
