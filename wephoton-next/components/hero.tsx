import Link from "next/link";
import { ArrowRight, ShieldCheck, Cpu, Rocket } from "lucide-react";

const stats = [
  { icon: Cpu, label: "Enterprise-grade architecture" },
  { icon: ShieldCheck, label: "Secure by design" },
  { icon: Rocket, label: "Built to scale" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28">
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[36rem] w-[56rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(237,167,53,0.18),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgba(237,167,53,0.08),transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-xs font-medium uppercase tracking-widest text-amber">
          Software Engineering Studio
        </p>

        <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-br from-white via-white to-amber bg-clip-text text-transparent">
            We engineer software
          </span>
          <br />
          <span className="bg-gradient-to-r from-amber via-amber to-white/70 bg-clip-text text-transparent">
            that runs enterprises.
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-platinum">
          WePhoton designs and builds custom enterprise software and
          high-performance mobile applications — scalable backends, native and
          cross-platform apps, and the Dawingo Multiverse — our own SaaS
          product family.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/dawingo"
            className="group inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 font-display font-semibold text-abyss shadow-[0_0_28px_rgba(237,167,53,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_48px_rgba(237,167,53,0.6)]"
          >
            Explore Multiverse
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/#pricing"
            className="inline-flex items-center rounded-full border border-amber/60 px-7 py-3.5 font-display font-semibold text-amber transition-all duration-300 hover:-translate-y-1 hover:border-amber hover:bg-amber/10 hover:shadow-[0_0_28px_rgba(237,167,53,0.25)]"
          >
            View Pricing
          </Link>
        </div>

        <ul className="mt-16 flex flex-wrap gap-x-10 gap-y-4">
          {stats.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2.5 text-sm text-platinum">
              <Icon className="size-4 text-amber" aria-hidden />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
