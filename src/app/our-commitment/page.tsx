import type { Metadata } from "next";
import { CommitmentContent } from "./CommitmentContent";

export const metadata: Metadata = {
  title: "Our Commitment to Patient-Centered Care",
  description:
    "Learn how All Care Family Medicine supports patient-centered healthcare through care coordination, preventive services, quality improvement, and evidence-based primary care practices.",
  keywords: ["patient centered care", "primary care", "preventive care", "care coordination", "quality improvement", "PCMH principles"],
  alternates: { canonical: "/our-commitment" },
};

export default function OurCommitmentPage() {
  return <CommitmentContent />;
}
