import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build a mobile app?",
    a: "A typical business app takes 8–16 weeks from kickoff to store submission, depending on scope. Simple MVPs can ship in 4–6 weeks; large enterprise apps with custom backends run longer. You get a milestone plan with dates before work begins.",
  },
  {
    q: "Do you build native apps or cross-platform?",
    a: "Both. We recommend cross-platform (one codebase for iOS and Android) for most business apps because it cuts cost and time, and go native when a product demands maximum performance or deep platform features. We'll advise the right fit for your requirements at scoping.",
  },
  {
    q: "How much does a website or app cost?",
    a: "Websites start from ₹4,000, mobile apps from ₹35,000, and enterprise e-commerce platforms from ₹45,000. These are starting points — final pricing depends on features, integrations, and design scope, and is confirmed in a written quotation before any work starts.",
  },
  {
    q: "Will my app be published on the Play Store and App Store?",
    a: "Yes. Store submission is part of our app development engagements — we handle store listings, review requirements, and publishing under your developer accounts, and guide you through account creation if you don't have them yet.",
  },
  {
    q: "Who owns the source code after the project?",
    a: "You do. On full payment, complete source code and deployment credentials for your custom build are handed over to you. Our own pre-existing tools and the Dawingo products remain WePhoton property.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Defects reported within 30 days of handover are fixed free. Beyond that, we offer ongoing maintenance plans covering updates, monitoring, feature additions, and OS-version compatibility for apps.",
  },
  {
    q: "Can you take over or modernise an existing app or website?",
    a: "Yes. We audit the existing codebase first, then either extend it or propose a rebuild with a migration path — whichever is cheaper and safer for your timeline. Legacy system modernisation is one of our core engagements.",
  },
  {
    q: "What do you need from me to get started?",
    a: "A clear idea of the problem, any branding or content you have, and a point of contact for decisions. We turn that into a written scope, quote, and milestone plan — usually within a few business days of the first call.",
  },
];

export default function Faq() {
  return (
    <section aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="font-display text-2xl font-bold sm:text-3xl">
        Frequently asked questions
      </h2>
      <p className="mt-3 text-sm text-platinum">
        App, software, and website development — answered before you ask.
      </p>

      <div className="mt-8 space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md transition-colors open:border-amber/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display font-semibold text-white [&::-webkit-details-marker]:hidden">
              {faq.q}
              <ChevronDown
                className="size-5 shrink-0 text-amber transition-transform duration-300 group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <p className="px-6 pb-6 text-sm leading-relaxed text-platinum">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
