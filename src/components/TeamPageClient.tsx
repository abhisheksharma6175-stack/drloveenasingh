'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageBanner } from "@/components/PageBanner";
import { SectionHeading } from "@/components/SectionHeading";

const teamMembers = [
  {
    name: "Dr. Loveena Singh",
    role: "Medical Director",
    image: "/images/loveena-singh.jpg",
    initials: "LS",
    description:
      "Dr. Loveena Singh provides prevention-centered family medicine with careful listening, clear guidance, and practical next steps for patients of all ages.",
  },
  {
    name: "Dr. Ramanpreet Kaur",
    role: "Physician",
    initials: "RK",
    description:
      "Providing attentive, patient-focused medical care as part of the All Care Family Medicine team.",
  },
  {
    name: "Fenny Chand, PA-C",
    role: "Physician Assistant - Board Certified",
    initials: "FC",
    description:
      "Supporting patients with accessible, compassionate care and clear communication throughout each visit.",
  },
  {
    name: "Manjit S. Saini, FNP-C",
    role: "Family Nurse Practitioner - Board Certified",
    initials: "MS",
    description:
      "Delivering family-focused care with an emphasis on prevention, wellness, and ongoing patient support.",
  },
  {
    name: "Gursimran Sidhu, PA-C",
    role: "Physician Assistant - Board Certified",
    initials: "GS",
    description:
      "Helping patients navigate routine care, preventive visits, and follow-up needs with a thoughtful approach.",
  },
  {
    name: "Maninder Kaur, FNP-C",
    role: "Family Nurse Practitioner - Board Certified",
    initials: "MK",
    description:
      "Providing approachable family medicine support for patients across different ages and stages of life.",
  },
  {
    name: "Taranpreet Singh, FNP-C",
    role: "Family Nurse Practitioner - Board Certified",
    initials: "TS",
    description:
      "Offering patient-centered care focused on wellness, communication, and practical health guidance.",
  },
  {
    name: "Roshani Ratanasingham, PA-C",
    role: "Physician Assistant - Board Certified",
    initials: "RR",
    description:
      "Working with patients to make primary care visits clear, supportive, and responsive to their needs.",
  },
  {
    name: "Farah Fahim, FNP-C",
    role: "Family Nurse Practitioner - Board Certified",
    image: "/images/farah.jpg",
    description:
      "Supporting preventive and family medicine visits with attentive care and a patient-first perspective.",
    fullBio: `
      Farah Fahim is a board-certified Family Nurse Practitioner dedicated to delivering comprehensive, compassionate, and evidence-based care.

      She holds a Master of Science in Nursing (MSN) from Pace University, Class of 2024, and is a proud inductee of Sigma Theta Tau International Honor Society of Nursing, recognizing excellence in nursing scholarship, leadership, and service.

      Farah began her academic journey at Hunter College, earning a Bachelor of Science in Neurobiophysics in 2016. During her undergraduate years, she was inducted into Epsilon Sigma Phi, reflecting her commitment to academic achievement and civic engagement.

      She later earned her Bachelor of Science in Nursing (BSN) from Pace University in 2022 with honors and consistently demonstrated clinical excellence throughout her training.

      Her professional experience includes serving as an Emergency Medical Technician (EMT) in New York City, working in Interventional Radiology at NewYork-Presbyterian/Weill Cornell during the COVID-19 pandemic, and later practicing as an Operating Room Nurse at NewYork-Presbyterian/Columbia.

      Farah's clinical interests include preventive care, chronic disease management, patient education, and advocacy. She is committed to improving health outcomes through personalized, culturally competent, and holistic care.
    `,
  },
];

export function TeamPageClient() {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  return (
    <main className="bg-[#f8fbff]">
      <PageBanner title="Our Team" imageSrc="/images/coordinated-team.jpg" />

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

                  <div className="mt-6 flex flex-wrap gap-3">
                    {member.fullBio && (
                      <button
                        type="button"
                        onClick={() => setSelectedMember(member)}
                        className="focus-ring inline-flex rounded-full border border-[#1677b9] px-5 py-2.5 text-sm font-semibold text-[#1677b9] transition hover:bg-[#1677b9] hover:text-white"
                      >
                        Read More
                      </button>
                    )}

                    {/* <Link
                      href="/contact"
                      className="focus-ring inline-flex rounded-full bg-[#1677b9] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-900/15 transition hover:bg-[#075985]"
                    >
                      Contact the Practice
                    </Link> */}
                  </div>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">{selectedMember.name}</h2>
                <p className="mt-2 text-lg font-medium text-[#1677b9]">{selectedMember.role}</p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedMember(null)}
                className="text-3xl leading-none text-slate-500 hover:text-slate-900"
                aria-label="Close member details"
              >
                ×
              </button>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr] lg:items-start">
              {selectedMember.image ? (
                <div className="relative mx-auto h-64 w-full max-w-[280px] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-sm lg:h-80">
                  <Image
                    src={selectedMember.image}
                    alt={`${selectedMember.name}, ${selectedMember.role}`}
                    fill
                    sizes="(min-width: 1024px) 280px, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-64 w-full max-w-[280px] items-center justify-center rounded-3xl bg-blue-50 text-5xl font-bold text-[#1677b9] shadow-sm lg:h-80">
                  {selectedMember.initials || selectedMember.name.slice(0, 2).toUpperCase()}
                </div>
              )}

              <div className="whitespace-pre-line leading-8 text-slate-700">
                {selectedMember.fullBio}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
