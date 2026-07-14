import type { Metadata } from "next";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export const metadata: Metadata = {
  title: "PCMH  Information",
  description: "Frequently asked questions about Patient-Centered Medical Home care."
};

type Faq = {
  question: string;
  paragraphs: string[];
  items?: string[];
};

const faqs: Faq[] = [
  {
    question: "What is a Patient-Centered Medical Home?",
    paragraphs: [
      "A Medical Home is all about you. Caring about you is the most important job of your Patient-Centered Medical Home. In this personal model of health care, your primary care provider leads a team of health care professionals that collectively take responsibility for your care. They make sure you get the care you need.",
      "Your personal provider and an extended team of health professionals build a relationship in which they know you, your family situation, your medical history, and health issues. In turn, you come to trust and rely on them for expert, evidence-based health care answers that are suited entirely to you or to your family."
    ]
  },
  {
    question: "How will a Medical Home lead to better care for me?",
    paragraphs: ["There are many benefits to being in a Medical Home:"],
    items: [
      "Comprehensive care means your Medical Home helps you address any health issue at any given stage of your life.",
      "Coordination of care occurs when any combination of services you and your provider decide you need are connected and ordered in a rational way, including the use of resources in your community.",
      "Continuous care occurs over time and you can expect continuity in accurate, effective, and timely communication from any member of your health care team.",
      "Accessible care allows you to initiate the interaction you need for any health issue with a physician or other team member through your desired method—office visit, phone call, or electronically. You can expect elimination of barriers to access and instructions on obtaining care during and after hours.",
      "Proactive care ensures you and your provider will build a care plan to address your health care goals to keep you well, plus be available for you when you get sick.",
      "Evidence-based care means that your care team keeps up to date with the latest medical research and clinical practice guidelines, and will work with you to personalize your care to fit your preferences and goals."
    ]
  },
  {
    question: "Who is my Medical Home Team?",
    paragraphs: [
      "Your team may include a doctor, nurse practitioner, licensed practice nurse, medical assistant, or health educator, as well as other health professionals. These professionals work together to help you get healthy, stay healthy, and get the care and services that are right for you.",
      "When needed, your personal doctor arranges for appropriate care with qualified specialists."
    ]
  },
  {
    question: "What does my Medical Home Team do for me?",
    paragraphs: [
      "The Medical Home team is your team. They provide you with the care you need, when you need it, and customize your care to meet your needs and expectations. We help you set appropriate health goals and work with you to meet them.",
      "We will spend enough time with you to ensure you understand what you need to do to successfully meet your goals and answer any questions you might have. We help you understand all your options for care so you can decide what care is best for you. We will always treat you with the respect you deserve as a full partner in your health care."
    ]
  },
  {
    question: "What type of services does my Medical Home provide for me?",
    paragraphs: ["We provide comprehensive, compassionate, and continuous care for people of all ages."],
    items: [
      "Same-day appointments.",
      "Preventive care and physicals, including health risk assessments, sports physicals, and school physicals.",
      "Chronic disease management, such as diabetes, heart disease, arthritis, asthma, and more.",
      "Acute care for illnesses and injuries.",
      "Well-child visits, screenings, and vaccinations.",
      "Well-woman exams.",
      "Group visits and classes to help you lead a healthy lifestyle.",
      "24/7 phone access to your care team.",
      "Online electronic access to your medical records.",
      "Referrals to vetted specialists and mental health providers.",
      "Management of multi-specialty care plans, including mental health."
    ]
  },
  {
    question: "Will my Medical Home help me take care of myself?",
    paragraphs: ["The care you receive in a Medical Home goes beyond the office visit with your personal clinician."],
    items: [
      "We want to make sure you develop a clear idea of how to care for yourself.",
      "We want to help you set goals for your care and help you meet your goals one step at a time.",
      "We want to encourage you to fully participate in recommended preventive screenings and services.",
      "We will recommend tools and education materials you can use to improve your condition and manage your health.",
      "We will give you information about classes, support groups, or other services to help you learn more about your condition and stay healthy.",
      "We will provide information about resources in your community to help you manage your health and wellbeing.",
      "We will provide resources and, if needed, appropriate referrals to behavioral health specialists to help you make and sustain healthy lifestyle changes or address mental health conditions for you and other family members."
    ]
  },
  {
    question: "How can my Medical Home help if I need to see specialists or go to a hospital?",
    paragraphs: [
      "Your Medical Home team will coordinate your care with all your other health care providers. They will recommend quality specialists for you and your family and will work with your specialist and the hospital to continuously plan and manage your care.",
      "With your consent, your Medical Home team will inform specialists and hospitals about your medical conditions, your preferences, and your goals, and will follow up to obtain information after your specialty visit or hospital stay. We will also follow up with you and your family to make sure you get the care you need and understand your plan of care."
    ]
  },
  {
    question: "Can my Medical Home help me when I have an emergency?",
    paragraphs: [
      "If you have a medical emergency, please dial 9-1-1.",
      "For other clinical problems or medical advice, call your Medical Home first. Depending on the nature of the problem, we may be able to save you an expensive and inconvenient trip to the emergency room for problems best addressed by your personal primary care provider. You can reach Medical Home team members by telephone 24/7, and same-day appointments are always available.",
      "If you do go to the emergency room, please let the staff know who your primary care provider is and ask that they contact your Medical Home as soon as possible so we can help them take better care of you and your family."
    ]
  },
  {
    question: "What can I do to help my Medical Home team take better care of me?",
    paragraphs: ["You are encouraged to actively participate in your care."],
    items: [
      "Understand that you are a full partner in your own health care.",
      "Learn about your condition and what you can do to stay as healthy as possible.",
      "As best you can, follow the care plan that you and your medical team have agreed is important for your health.",
      "Do your best to communicate with your Medical Home team.",
      "Tell us about your health, your medical history, and the health history of your family.",
      "Bring a list of questions to each appointment, along with a list of any medicines, vitamins, or remedies you use.",
      "If you do not understand something your doctor or other team member says, ask them to explain it in a different way.",
      "If you get care from other health professionals, always tell your Medical Home team so they can help coordinate the best care possible.",
      "Talk openly with your care team about your experience getting care from the Medical Home so they can keep making your care better."
    ]
  },
  
  {
    question: "How do I transfer my records to my Medical Home?",
    paragraphs: [
      "We will need your consent to obtain your medical records from your previous primary care provider or specialists you have seen in the past. Consent forms are available in your new-patient package.",
      "You can also call our front desk during business hours if you need extra copies sent to you, or ask our coordinator for assistance on the phone or when you visit with us."
    ]
  },
  {
    question: "Can I be in a Medical Home if I do not have health insurance?",
    paragraphs: [
      "We accept many insurance plans and, in some cases, cash patients. Call us to discuss your particular situation.",
      "Once you become a patient in our practice, we provide you with the same access and care regardless of your health insurance status."
    ]
  }
];

export default function PcmhInformationPage() {
  return (
    <main className="min-h-screen bg-[#f8fbff]">
      <section className="medical-gradient border-b border-teal-100">
        <div className="container-shell py-16 text-center sm:py-20">
          <p className="inline-flex rounded-full bg-teal-700 px-4 py-2 text-xs font-bold tracking-[0.16em] text-white">PCMH  INFORMATION</p>
          <h1 className="mt-5 font-[var(--font-serif)] text-4xl font-semibold text-slate-950 sm:text-6xl">Frequently Asked Questions</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">Everything you need to know about your Patient-Centered Medical Home and the care you can expect from our team.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0} className="group rounded-3xl border border-slate-200 bg-white px-6 py-5 shadow-sm sm:px-8">
                <summary className="cursor-pointer list-none pr-8 text-lg font-bold text-slate-900 marker:hidden">
                  {faq.question}
                  <span className="float-right text-2xl text-teal-600 transition group-open:rotate-45">+</span>
                </summary>
                <div className="mt-5 space-y-4 border-t border-slate-100 pt-5 leading-7 text-slate-600">
                  {faq.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {faq.items ? (
                    <ul className="space-y-3 pt-1">
                      {faq.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <FaCheckCircle className="mt-1 shrink-0 text-teal-600" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/contact" className="focus-ring inline-flex rounded-full bg-teal-700 px-6 py-3 font-bold text-white transition hover:bg-teal-800">Contact Our Office</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
