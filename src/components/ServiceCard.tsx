"use client";

import { motion } from "framer-motion";
import {
  FaBriefcaseMedical,
  FaHeartbeat,
  FaNotesMedical,
  FaPlaneDeparture,
  FaSyringe,
  FaTruck
} from "react-icons/fa";

const icons = {
  heart: FaHeartbeat,
  travel: FaPlaneDeparture,
  truck: FaTruck,
  briefcase: FaBriefcaseMedical,
  syringe: FaSyringe,
  notes: FaNotesMedical
};

export function ServiceCard({
  title,
  description,
  icon
}: {
  title: string;
  description: string;
  icon: keyof typeof icons;
}) {
  const Icon = icons[icon];

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="glass-panel rounded-2xl p-6"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl text-[#1677b9]">
        <Icon aria-hidden />
      </div>
      <h3 className="mt-5 text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </motion.article>
  );
}
