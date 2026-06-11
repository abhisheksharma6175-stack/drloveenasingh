import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://drloveenasingh.vercel.app/"),
  title: {
    default: "All Care Family Medicine, PC | Queens & Long Island",
    template: "%s | All Care Family Medicine, PC"
  },
  description:
    "Modern preventive medicine and family care for adults, children, and families across Queens, Ozone Park, Richmond Hill, and Hicksville.",
  keywords: [
    "All Care Family Medicine",
    "Dr Loveena Singh",
    "Preventive Medicine Queens",
    "Family Medicine Queens",
    "Primary Care Richmond Hill",
    "Immigration Medical New York",
    "TLC CDL Medical Exam"
  ],
  openGraph: {
    title: "All Care Family Medicine, PC | Queens & Long Island",
    description:
      "Board-certified family physician providing compassionate preventive medicine, wellness visits, physicals, vaccinations, screenings, and medical exams.",
    url: "https://drloveenasingh.vercel.app/",
    siteName: "All Care Family Medicine, PC",
    images: [
      {
        url: "/images/environment.jpg",
        width: 1024,
        height: 1024,
        alt: "All Care Family Medicine, PC"
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
