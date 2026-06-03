"use client";
import Link from "next/link";
import Image from "next/image";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaFax } from "react-icons/fa";
import { navItems, site } from "@/lib/site";

const locations = [
  {
    label: "Queens",
    address: "112-20 Liberty Ave, Richmond Hill, NY 11419",
    phone: "718-554-6600",
    fax: "718-554-0016",
    email: "allcarefm@gmail.com",
    mapsUrl: "https://goo.gl/maps/FRLSbYqG2ffc9Zx19",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3!2d-73.8496!3d40.6953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f5a5e5a5e5a%3A0x5a5e5a5e5a5e5a5a!2s112-20+Liberty+Ave%2C+Richmond+Hill%2C+NY+11419!5e0!3m2!1sen!2sus!4v1600000000000",
  },
  {
    label: "Ozone Park",
    address: "105-34 Rockaway Blvd, Ozone Park, NY 11417",
    phone: "718-690-7339",
    fax: "718-554-0016",
    email: "allcarefm@gmail.com",
    mapsUrl: "https://goo.gl/maps/FRLSbYqG2ffc9Zx19",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.1!2d-73.8496!3d40.6853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25f5a5e5a5e5a%3A0x5a5e5a5e5a5e5a5a!2s105-34+Rockaway+Blvd%2C+Ozone+Park%2C+NY+11417!5e0!3m2!1sen!2sus!4v1600000000001",
  },
  {
    label: "Hicksville",
    address: "55W Old Country Rd, Hicksville, NY 11801",
    phone: "516-433-0009",
    fax: "718-554-0016",
    email: "allcarefm@gmail.com",
    mapsUrl: "https://goo.gl/maps/ts7qqcJxDuDgeWNQ7",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.1!2d-73.5247!3d40.7682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c27e5e5e5e5e5e%3A0x5e5e5e5e5e5e5e5e!2s55W+Old+Country+Rd%2C+Hicksville%2C+NY+11801!5e0!3m2!1sen!2sus!4v1600000000002",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#1677b9] text-white">
      <div className="container-shell py-12">

        {/* ── Top grid: Brand / Explore / Contact / Map ── */}
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr_1.8fr]">

          {/* Brand */}
          <div>
            <Image src="/images/logo.png" alt={`${site.name} logo`} width={200} height={0} className="logo-one" />
            <p className="mt-3 max-w-md text-sm leading-6 text-blue-100/80">
              {site.description}
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="font-semibold tracking-wide">Explore</p>
            <nav aria-label="Footer navigation" className="mt-4 grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-blue-100/80 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-semibold tracking-wide">Contact</p>
            <address className="mt-4 grid gap-3 text-sm text-blue-100/80 not-italic">
              <span className="flex gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-[#71d7d7]" aria-hidden />
                {site.address}
              </span>
              <a className="flex gap-3 transition hover:text-white" href={`tel:${site.phone}`}>
                <FaPhoneAlt className="mt-1 shrink-0 text-[#71d7d7]" aria-hidden />
                {site.phone}
              </a>
              <a className="flex gap-3 transition hover:text-white" href={`mailto:${site.email}`}>
                <FaEnvelope className="mt-1 shrink-0 text-[#71d7d7]" aria-hidden />
                {site.email}
              </a>
            </address>
          </div>

          {/* Location map — active tab defaults to first location */}
          <LocationMapWidget />
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 text-center text-xs text-blue-100/50">
        Copyright {new Date().getFullYear()} {site.practice}. All rights reserved.
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────
   Tabbed location map widget (client component)
───────────────────────────────────────────── */

import { useState } from "react";

function LocationMapWidget() {
  const [active, setActive] = useState(0);
  const loc = locations[active];

  return (
    <div>
      <p className="font-semibold tracking-wide">Locations</p>

      {/* Tab pills */}
      <div className="mt-3 flex gap-1.5 flex-wrap">
        {locations.map((l, i) => (
          <button
            key={l.label}
            onClick={() => setActive(i)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition ${
              i === active
                ? "bg-[#71d7d7] text-[#1677b9]"
                : "bg-white/10 text-blue-100/70 hover:bg-white/20 hover:text-white"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>

      {/* Map embed */}
      <div className="mt-3 overflow-hidden rounded-xl border border-white/10 shadow-lg shadow-black/30">
        <iframe
          key={loc.embedUrl}
          title={`${loc.label} office map`}
          src={loc.embedUrl}
          width="100%"
          height="180"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Address + contact under map */}
      <div className="mt-2.5 grid gap-1 text-xs text-blue-100/70">
        <span className="flex items-start gap-1.5">
          <FaMapMarkerAlt className="mt-0.5 shrink-0 text-[#71d7d7]" aria-hidden />
          {loc.address}
        </span>
        <a href={`tel:${loc.phone}`} className="flex items-center gap-1.5 transition hover:text-white">
          <FaPhoneAlt className="shrink-0 text-[#71d7d7]" aria-hidden />
          {loc.phone}
        </a>
        <a
          href={loc.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 transition hover:text-white"
        >
          <FaMapMarkerAlt className="shrink-0 text-[#71d7d7]" aria-hidden />
          Open in Google Maps ↗
        </a>
      </div>
    </div>
  );
}
