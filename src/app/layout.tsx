import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.drloveenasingh.com"),
  title: {
    default: "Dr. Loveena Singh MD | Family Medicine in Queens & Long Island",
    template: "%s | Dr. Loveena Singh MD"
  },
  description:
    "Modern preventive medicine and family care for adults, children, and families across Queens, Ozone Park, Richmond Hill, and Hicksville.",
  keywords: [
    "Dr Loveena Singh",
    "Preventive Medicine Queens",
    "Family Medicine Queens",
    "Primary Care Richmond Hill",
    "Immigration Medical New York",
    "TLC CDL Medical Exam"
  ],
  openGraph: {
    title: "Dr. Loveena Singh MD | Family Medicine",
    description:
      "Board-certified family physician providing compassionate preventive medicine, wellness visits, physicals, vaccinations, screenings, and medical exams.",
    url: "https://www.drloveenasingh.com",
    siteName: "Dr. Loveena Singh MD",
    images: [
      {
        url: "/images/loveena-singh.jpg",
        width: 1024,
        height: 1024,
        alt: "Dr. Loveena Singh premium medical website"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
