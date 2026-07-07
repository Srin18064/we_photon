"use client";

import { useState } from "react";
import { Send } from "lucide-react";

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-platinum/50 backdrop-blur-md transition-colors focus:border-amber/60 focus:outline-none";

/**
 * Opens the visitor's email client with a prefilled message to
 * support@wephoton.in. Swap handleSubmit for an API route or form service
 * when a backend is available.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(
      `Project enquiry — ${data.get("interest")} (${data.get("name")})`
    );
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Phone: ${data.get("phone") || "—"}`,
        `Interested in: ${data.get("interest")}`,
        "",
        `${data.get("message")}`,
      ].join("\n")
    );
    window.location.href = `mailto:support@wephoton.in?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section aria-labelledby="contact-form-heading">
      <h2 id="contact-form-heading" className="font-display text-2xl font-bold sm:text-3xl">
        Get in touch
      </h2>
      <p className="mt-3 text-sm text-platinum">
        Tell us what you&apos;re building. We reply within one business day.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block font-display text-xs font-semibold uppercase tracking-widest text-platinum">
              Name
            </label>
            <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your full name" className={inputClasses} />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block font-display text-xs font-semibold uppercase tracking-widest text-platinum">
              Email
            </label>
            <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={inputClasses} />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="mb-2 block font-display text-xs font-semibold uppercase tracking-widest text-platinum">
              Phone <span className="normal-case text-platinum/50">(optional)</span>
            </label>
            <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91" className={inputClasses} />
          </div>
          <div>
            <label htmlFor="interest" className="mb-2 block font-display text-xs font-semibold uppercase tracking-widest text-platinum">
              I&apos;m interested in
            </label>
            <select id="interest" name="interest" required className={inputClasses} defaultValue="Mobile App Development">
              <option>Mobile App Development</option>
              <option>Custom Website Development</option>
              <option>Enterprise E-commerce Platform</option>
              <option>Custom Software / Backend</option>
              <option>Dawingo Resto (Live)</option>
              <option>Other Dawingo Products</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block font-display text-xs font-semibold uppercase tracking-widest text-platinum">
            Project details
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="What are you building, for whom, and by when?"
            className={inputClasses}
          />
        </div>

        <button
          type="submit"
          className="group inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 font-display font-semibold text-abyss shadow-[0_0_28px_rgba(237,167,53,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_48px_rgba(237,167,53,0.6)]"
        >
          Send Message
          <Send className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </button>

        {sent && (
          <p role="status" className="text-sm text-emerald-300">
            Your email app should now be open with the message ready to send.
            If it didn&apos;t open, write to us directly at support@wephoton.in.
          </p>
        )}
      </form>
    </section>
  );
}
