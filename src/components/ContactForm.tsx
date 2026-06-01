"use client";

import { FormEvent, useState } from "react";

type SubmissionState = {
  type: "idle" | "sending" | "success" | "error";
  message?: string;
};

export function ContactForm() {
  const [submission, setSubmission] = useState<SubmissionState>({ type: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmission({ type: "sending" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData))
      });
      const result = (await response.json()) as { detail?: string; error?: string; message?: string };

      if (!response.ok) {
        throw new Error(result.detail || result.error || "Unable to send your request.");
      }

      form.reset();
      setSubmission({
        type: "success",
        message: result.message || "Your appointment request has been sent. The office will contact you soon."
      });
    } catch (error) {
      setSubmission({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to send your request."
      });
    }
  }

  return (
    <form className="mt-8 grid gap-4" aria-label="Appointment request form" onSubmit={handleSubmit}>
      {submission.message && (
        <div
          className={`rounded-xl border px-4 py-3 text-sm font-medium ${
            submission.type === "success"
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
          role="alert"
        >
          {submission.message}
        </div>
      )}
      <label className="sr-only" htmlFor="name">Full name</label>
      <input id="name" name="name" required className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#1677b9]" placeholder="Full name" />
      <label className="sr-only" htmlFor="phone">Phone number</label>
      <input id="phone" name="phone" type="tel" required className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#1677b9]" placeholder="Phone number" />
      <label className="sr-only" htmlFor="email">Email address</label>
      <input id="email" name="email" type="email" required className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#1677b9]" placeholder="Email address" />
      <label className="sr-only" htmlFor="reason">Reason for visit</label>
      <select id="reason" name="reason" required className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#1677b9]" defaultValue="">
        <option value="" disabled>Reason for visit</option>
        <option>Preventive care visit</option>
        <option>Medical exam</option>
        <option>Vaccination or testing</option>
        <option>Other</option>
      </select>
      <label className="sr-only" htmlFor="message">How can we help?</label>
      <textarea id="message" name="message" className="min-h-32 rounded-xl border border-slate-200 bg-white p-4 text-sm outline-none transition focus:border-[#1677b9]" placeholder="How can we help?" />
      <button type="submit" disabled={submission.type === "sending"} className="h-12 rounded-full bg-[#1677b9] px-6 text-sm font-bold text-white transition hover:bg-[#075985] disabled:cursor-wait disabled:opacity-70">
        {submission.type === "sending" ? "Sending..." : "Send Request"}
      </button>
    </form>
  );
}
