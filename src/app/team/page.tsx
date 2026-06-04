import type { Metadata } from "next";
import { TeamPageClient } from "@/components/TeamPageClient";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Our dedicated team of physicians, physician assistants, and family nurse practitioners is committed to providing compassionate, personalized healthcare for patients of all ages. Together, we deliver comprehensive medical care focused on your health, wellness, and long-term well-being.",
};

export default function TeamPage() {
  return <TeamPageClient />;
}
