"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaArrowRight,
  FaCalendarCheck,
  FaChartLine,
  FaCheckCircle,
  FaClipboardCheck,
  FaFlask,
  FaHandHoldingHeart,
  FaHeartbeat,
  FaNotesMedical,
  FaPills,
  FaShieldAlt,
  FaStethoscope,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";

type Card = { title: string; items: string[]; icon: IconType };

const principles: Card[] = [
  { title: "Comprehensive Care", icon: FaStethoscope, items: ["Preventive care", "Annual wellness visits", "Chronic disease management", "Acute care"] },
  { title: "Patient-Centered Care", icon: FaHandHoldingHeart, items: ["Shared decision making", "Personalized treatment", "Family engagement", "Respectful communication"] },
  { title: "Coordinated Care", icon: FaUserFriends, items: ["Specialist referrals", "Lab coordination", "Imaging coordination", "Follow-up management"] },
  { title: "Accessible Services", icon: FaCalendarCheck, items: ["Convenient appointments", "Telehealth when appropriate", "Online scheduling", "Responsive communication"] },
  { title: "Quality & Safety", icon: FaShieldAlt, items: ["Evidence-based care", "Medication review", "Preventive screenings", "Clinical quality improvement"] },
  { title: "Care Team Collaboration", icon: FaUsers, items: ["Physicians", "Nurse Practitioners", "Medical Assistants", "Administrative staff"] },
];

const journey: { title: string; icon: IconType }[] = [
  { title: "Patient Registration", icon: FaClipboardCheck },
  { title: "Health Assessment", icon: FaNotesMedical },
  { title: "Preventive Screening", icon: FaHeartbeat },
  { title: "Personalized Care Plan", icon: FaClipboardCheck },
  { title: "Care Coordination", icon: FaUserFriends },
  { title: "Follow-up & Continuous Monitoring", icon: FaChartLine },
];

const initiatives: { title: string; text: string; icon: IconType }[] = [
  { title: "Preventive Services", text: "Timely screenings and wellness care to help patients stay ahead of health concerns.", icon: FaCalendarCheck },
  { title: "Care Coordination", text: "Clear communication around visits, referrals, and follow-up needs.", icon: FaUserFriends },
  { title: "Evidence-Based Guidelines", text: "Current clinical guidance helps inform care decisions.", icon: FaNotesMedical },
  { title: "Continuous Quality Improvement", text: "Reviewing processes to find meaningful opportunities to improve care.", icon: FaChartLine },
  { title: "Patient Education", text: "Practical information that helps patients take an active role in their health.", icon: FaHandHoldingHeart },
  { title: "Clinical Follow-up", text: "Appropriate reminders and next steps to help keep care plans moving.", icon: FaFlask },
];

const experience = [
  ["Personalized Care", FaHandHoldingHeart], ["Health Education", FaNotesMedical], ["Referral Support", FaUserFriends],
  ["Medication Review", FaPills], ["Preventive Reminders", FaCalendarCheck], ["Care Navigation", FaClipboardCheck],
] as const;

const faqs = [
  ["What is Patient-Centered Care?", "It is an approach that respects each patient's needs, preferences, and goals while encouraging shared decision-making with their care team."],
  ["How do we coordinate care?", "We support communication around referrals, testing, follow-up, and other next steps so patients have a clearer path through their care."],
  ["How do we improve quality?", "Our team reviews clinical workflows and patient care processes to identify practical opportunities for ongoing improvement."],
  ["How do patients participate in their care?", "Patients can ask questions, share their priorities, discuss treatment options, and work with the care team on a plan that fits their needs."],
  ["What preventive services do you offer?", "Services may include wellness visits, screenings, vaccinations, and health counseling based on a patient's age, history, and needs."],
];

const fadeUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6, ease: "easeOut" } } as const;

export function CommitmentContent() {
  return (
    <>
      <section className="overflow-hidden bg-[radial-gradient(circle_at_88%_15%,rgba(45,212,191,.25),transparent_28%),linear-gradient(125deg,#0f172a,#075985_58%,#0f766e)] py-20 text-white sm:py-28">
        <div className="container-shell"><motion.div {...fadeUp} className="max-w-4xl"><p className="mb-5 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-bold tracking-[.18em]">PATIENT-CENTERED CARE</p><h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">Our Commitment to Patient-Centered Care</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">Delivering coordinated, accessible, high-quality healthcare through evidence-based practices and continuous improvement.</p><Link href="/contact" className="focus-ring mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-slate-900 transition hover:bg-cyan-50">Schedule Appointment <FaArrowRight /></Link></motion.div></div>
      </section>

      <section className="section-padding"><div className="container-shell grid items-center gap-10 md:grid-cols-2"><motion.div {...fadeUp} className="rounded-[28px] border border-cyan-100 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 shadow-xl shadow-slate-200/60 sm:p-10"><div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-4xl text-teal-600 shadow-lg"><FaHandHoldingHeart /></div><div className="mt-20"><h2 className="text-2xl font-bold text-slate-900">Care built around you</h2><p className="mt-3 leading-7 text-slate-600">Listening closely, planning thoughtfully, and making each next step easier to understand.</p></div><p className="mt-8 flex items-center gap-2 font-semibold text-[#1677b9]"><FaCheckCircle /> A partnership in your health</p></motion.div><div><Eyebrow>WHY IT MATTERS</Eyebrow><h2 className="font-[var(--font-serif)] text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">Why Patient-Centered Care Matters</h2><p className="mt-5 leading-8 text-slate-600">Patient-centered care helps make healthcare more personal, connected, and proactive. Our workflows and quality initiatives support meaningful relationships and informed choices at every stage of care.</p><ul className="mt-6 grid gap-3 sm:grid-cols-2">{["Better patient outcomes", "Strong provider-patient relationships", "Coordinated care", "Preventive care", "Continuous improvement"].map((item) => <li key={item} className="flex items-center gap-2 font-semibold text-slate-700"><FaCheckCircle className="text-teal-600" />{item}</li>)}</ul></div></div></section>

      <section className="section-padding bg-slate-50">
        <div className="container-shell">
          <div className="mx-auto mb-6 flex max-w-3xl items-center justify-center gap-3 rounded-2xl border border-teal-200 bg-teal-50 px-5 py-4 text-center shadow-sm">
            <span className="rounded-lg bg-teal-700 px-3 py-1.5 text-sm font-black tracking-[0.16em] text-white">PCMH</span>
            <p className="text-sm font-semibold text-teal-950 sm:text-base">Patient-Centered Medical Home principles guide how we support your care.</p>
          </div>
          <Heading eyebrow="HOW WE WORK" title="PCMH Principles We Support" text="Our organization aligns its clinical workflows, patient care processes, and quality improvement initiatives with these patient-centered best practices." />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {principles.map(({ title, icon: Icon, items }, index) => (
              <motion.article
                {...fadeUp}
                key={`principle-${index}`}
                transition={{ ...fadeUp.transition, delay: index * .07 }}
                className="rounded-[24px] border border-slate-100 bg-white p-7 shadow-lg shadow-slate-200/50"
              >
                <div>
                  <Icon className="text-3xl text-[#1677b9]" />
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                    {items.map((item, itemIndex) => <li key={`principle-${index}-item-${itemIndex}`}>• {item}</li>)}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding"><div className="container-shell"><Heading eyebrow="YOUR CARE JOURNEY" title="Our Commitment in Action" text="A connected approach that helps guide patients from their first visit through ongoing care." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">{journey.map(({ title, icon: Icon }, index) => <div key={title} className="relative text-center"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-700"><Icon /></div><p className="mt-3 text-sm font-bold text-slate-800">{title}</p>{index < journey.length - 1 ? <span aria-hidden className="absolute -right-3 top-5 hidden text-xl text-teal-400 lg:block">→</span> : null}</div>)}</div></div></section>

      <section className="section-padding bg-slate-50"><div className="container-shell"><Heading eyebrow="QUALITY INITIATIVES" title="Improving Care Every Day" text="Our team supports practical systems that make high-quality care easier to deliver and easier to navigate." /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{initiatives.map(({ title, text, icon: Icon }) => <article key={title} className="rounded-[24px] bg-white p-7 shadow-lg shadow-slate-200/50"><Icon className="text-3xl text-teal-600" /><h3 className="mt-4 text-xl font-bold text-slate-900">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></article>)}</div></div></section>

      <section className="section-padding"><div className="container-shell"><Heading eyebrow="STANDARDS WE SUPPORT" title="Best Practices, Thoughtfully Applied" text="Our organization supports these best practices through its care processes and ongoing improvement efforts." /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{["Evidence-Based Clinical Practice", "Preventive Health Guidelines", "Care Coordination", "Patient Safety", "HIPAA Privacy", "Population Health", "Team-Based Care", "Continuous Quality Improvement"].map((item) => <div key={item} className="flex items-start gap-3 rounded-2xl border border-teal-100 bg-white p-5"><FaCheckCircle className="mt-0.5 shrink-0 text-teal-600" /><p className="font-semibold text-slate-700">{item}</p></div>)}</div></div></section>

      <section className="section-padding bg-slate-50"><div className="container-shell"><Heading eyebrow="PATIENT EXPERIENCE" title="Support Beyond the Exam Room" /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{experience.map(([title, Icon]) => <div key={title} className="rounded-2xl border border-cyan-100 bg-white p-6 text-center"><Icon className="mx-auto text-3xl text-[#1677b9]" /><p className="mt-3 font-bold text-slate-800">{title}</p></div>)}</div></div></section>

      <section className="section-padding"><div className="container-shell max-w-3xl"><Heading eyebrow="FREQUENTLY ASKED QUESTIONS" title="Helpful Answers" /><div className="mt-10 space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-sm"><summary className="cursor-pointer list-none pr-6 font-bold text-slate-800 marker:hidden">{question}<span className="float-right text-xl text-teal-600 transition group-open:rotate-45">+</span></summary><p className="mt-3 leading-7 text-slate-600">{answer}</p></details>)}</div></div></section>

      <section className="container-shell pb-16"><div className="flex gap-4 rounded-[28px] border border-teal-200 bg-teal-50 p-7 sm:p-10"><FaShieldAlt className="mt-1 shrink-0 text-3xl text-teal-700" /><div><h2 className="text-2xl font-bold text-slate-900">Our Commitment to Continuous Improvement</h2><p className="mt-3 leading-7 text-slate-600">Our organization continuously reviews and improves its clinical workflows, operational processes, and patient care practices to support patient-centered healthcare delivery, care coordination, preventive medicine, and ongoing quality improvement.</p></div></div></section>

      <section className="bg-gradient-to-r from-slate-900 to-[#075985] py-16 text-center text-white"><div className="container-shell max-w-3xl"><h2 className="font-[var(--font-serif)] text-3xl font-semibold sm:text-5xl">Experience Compassionate, Coordinated Healthcare</h2><p className="mt-5 text-lg text-slate-200">Connect with our team to discuss your care needs and next steps.</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/contact" className="focus-ring rounded-xl bg-white px-6 py-3.5 font-bold text-slate-900 transition hover:bg-cyan-50">Schedule Appointment</Link><Link href="/contact" className="focus-ring rounded-xl border border-white/70 px-6 py-3.5 font-bold transition hover:bg-white/10">Contact Us</Link></div></div></section>
    </>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="mb-3 text-sm font-semibold uppercase tracking-[.18em] text-[#1677b9]">{children}</p>; }
function Heading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) { return <div className="mx-auto max-w-3xl text-center"><Eyebrow>{eyebrow}</Eyebrow><h2 className="font-[var(--font-serif)] text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl">{title}</h2>{text ? <p className="mt-5 leading-7 text-slate-600 sm:text-lg">{text}</p> : null}</div>; }
