import { Code2, HeartHandshake, Compass } from "lucide-react";

const pillars = [
  {
    icon: Code2,
    title: "Engineers first",
    text: "Every product we ship is architected, coded, and stress-tested by our own engineering team — no outsourced shortcuts.",
  },
  {
    icon: HeartHandshake,
    title: "Partners, not vendors",
    text: "We stay accountable long after launch, from the first commit through scaling, support, and every release that follows.",
  },
  {
    icon: Compass,
    title: "Product thinkers",
    text: "Dawingo, our own SaaS multiverse, is proof: we build for ourselves with the same rigour we bring to client work.",
  },
];

export default function WhoAreWe() {
  return (
    <section id="who-are-we" className="relative scroll-mt-20 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 -right-40 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgba(237,167,53,0.08),transparent)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-display text-xs font-medium uppercase tracking-widest text-amber">
              About Us
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Who are{" "}
              <span className="bg-gradient-to-r from-amber to-white/80 bg-clip-text text-transparent">
                WE
              </span>
              ?
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-platinum">
              <strong className="text-white">WE</strong> are WePhoton — a
              software engineering company that designs, builds, and runs
              enterprise software and mobile applications. The{" "}
              <strong className="text-white">WE</strong> is deliberate: every
              project is a partnership between your business and our engineers,
              a bridge between your idea and the people it serves.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-platinum">
              From custom backends to the Dawingo Multiverse — our own family
              of SaaS products — everything we ship carries the same standard:
              production-grade, scalable, and built to last.
            </p>
          </div>

          <ul className="space-y-4">
            {pillars.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="group flex gap-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-[0_0_36px_rgba(237,167,53,0.15)]"
              >
                <div className="inline-flex h-fit rounded-2xl border border-amber/30 bg-amber/10 p-3">
                  <Icon className="size-5 text-amber" aria-hidden />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-platinum">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
