import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";


export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Our dedicated team of physicians, physician assistants, and family nurse practitioners is committed to providing compassionate, personalized healthcare for patients of all ages. Together, we deliver comprehensive medical care focused on your health, wellness, and long-term well-being."
};

const teamMembers = [
  {
    name: "Dr. Loveena Singh",
    role: "Medical Director",
    image: "/images/loveena-singh.jpg",
    initials: "LS",
    description:
      "Dr. Loveena Singh provides prevention-centered family medicine with careful listening, clear guidance, and practical next steps for patients of all ages."
  },
  {
    name: "Dr. Ramanpreet Kaur",
    role: "Physician",
    initials: "RK",
    description:
      "Providing attentive, patient-focused medical care as part of the All Care Family Medicine team."
  },
  {
    name: "Fenny Chand, PA-C",
    role: "Physician Assistant - Board Certified",
    initials: "FC",
    description:
      "Supporting patients with accessible, compassionate care and clear communication throughout each visit."
  },
  {
    name: "Manjit S. Saini, FNP-C",
    role: "Family Nurse Practitioner - Board Certified",
    initials: "MS",
    description:
      "Delivering family-focused care with an emphasis on prevention, wellness, and ongoing patient support."
  },
  {
    name: "Gursimran Sidhu, PA-C",
    role: "Physician Assistant - Board Certified",
    initials: "GS",
    description:
      "Helping patients navigate routine care, preventive visits, and follow-up needs with a thoughtful approach."
  },
  {
    name: "Maninder Kaur, FNP-C",
    role: "Family Nurse Practitioner - Board Certified",
    initials: "MK",
    description:
      "Providing approachable family medicine support for patients across different ages and stages of life."
  },
  {
    name: "Taranpreet Singh, FNP-C",
    role: "Family Nurse Practitioner - Board Certified",
    initials: "TS",
    description:
      "Offering patient-centered care focused on wellness, communication, and practical health guidance."
  },
  {
    name: "Roshani Ratanasingham, PA-C",
    role: "Physician Assistant - Board Certified",
    initials: "RR",
    description:
      "Working with patients to make primary care visits clear, supportive, and responsive to their needs."
  },
  {
    name: "Farah Fahim, FNP-C",
    role: "Family Nurse Practitioner - Board Certified",
    initials: "FF",
    description:
      "Supporting preventive and family medicine visits with attentive care and a patient-first perspective."
  }
];

// Team page
export default function TeamPage() {
  return (
    <main className="bg-[#f8fbff]">
      <AnimatedSection className="medical-gradient px-4 py-16 sm:px-6 sm:py-20">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Our Team"
            title="Meet the clinicians who care for your family."
            description="Our physicians, physician assistants, and family nurse practitioners work together to provide accessible, prevention-centered care across Queens and Long Island."
          />
        </div>
      </AnimatedSection>

      <section className="px-4 pb-20 sm:px-6">
        <div className="container-shell grid gap-7">
          {teamMembers.map((member, index) => (
            <AnimatedSection
              key={member.name}
              delay={Math.min(index * 0.04, 0.2)}
              className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-lg shadow-slate-900/5"
            >
              <article className="grid md:grid-cols-[260px_1fr]">
                <div className="relative flex min-h-64 items-center justify-center overflow-hidden bg-[#1677b9] px-8 py-10">
                  <div
                    aria-hidden="true"
                    className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/10"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-[#71d7d7]/25"
                  />
                  <div className="relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-blue-50 shadow-xl">
                    {member.image ? (
                      <Image
                        src={member.image}
                        alt={`${member.name}, ${member.role}`}
                        fill
                        sizes="160px"
                        className="object-cover"
                      />
                    ) : (
                      <span className="text-4xl font-bold tracking-wide text-[#1677b9]">
                        {member.initials}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col justify-center px-7 py-8 sm:px-10 sm:py-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#11a6a6]">
                    All Care Family Medicine
                  </p>
                  <h2 className="mt-2 font-[var(--font-serif)] text-3xl font-semibold text-slate-950">
                    {member.name}
                  </h2>
                  <p className="mt-2 text-base font-semibold text-[#1677b9]">{member.role}</p>
                  <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600">
                    {member.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="focus-ring inline-flex rounded-full bg-[#1677b9] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-900/15 transition hover:bg-[#075985]"
                    >
                      Contact the Practice
                    </Link>
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </main>
  );
}
