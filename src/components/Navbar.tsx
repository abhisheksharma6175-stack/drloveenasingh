"use client";

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaCalendarCheck, FaTimes } from "react-icons/fa";
import { navItems, site } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/82 backdrop-blur-xl">
      <nav className="container-shell flex h-20 items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="focus-ring group">
          <span className="block text-lg font-bold text-slate-950">{site.name}</span>
          <span className="block text-xs font-medium text-[#1677b9]">{site.practice}</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition hover:text-[#1677b9] ${
                  active ? "text-[#1677b9]" : "text-slate-700"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="focus-ring inline-flex h-11 items-center gap-2 rounded-full bg-[#1677b9] px-5 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition hover:bg-[#075985]"
          >
            <FaCalendarCheck aria-hidden />
            Appointment
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FaTimes aria-hidden /> : <FaBars aria-hidden />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-xl lg:hidden">
          <div className="mx-auto grid max-w-sm gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-blue-50 hover:text-[#1677b9]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#1677b9] px-5 text-sm font-semibold text-white"
            >
              <FaCalendarCheck aria-hidden />
              Book Appointment
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
