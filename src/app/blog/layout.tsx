import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Blog",
    template: "%s | Blog | All Care Family Medicine, PC",
  },
  description:
    "Helpful primary care articles, wellness tips, and preventive care guidance from All Care Family Medicine, PC.",
  keywords: [
    "health blog",
    "family medicine blog",
    "preventive healthcare",
    "wellness tips",
    "medical articles",
    "Queens healthcare",
    "Long Island healthcare",
  ],
  openGraph: {
    title: "Blog | All Care Family Medicine, PC",
    description:
      "Helpful primary care articles, wellness tips, and preventive care guidance from All Care Family Medicine, PC.",
    url: "/blog",
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/blog-banner.jpg",
        width: 1200,
        height: 630,
        alt: "All Care Family Medicine Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | All Care Family Medicine, PC",
    description:
      "Helpful primary care articles, wellness tips, and preventive care guidance from All Care Family Medicine, PC.",
    images: ["/images/blog-banner.jpg"],
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}