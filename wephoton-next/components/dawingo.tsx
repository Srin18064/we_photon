import Image from "next/image";
import { Info } from "lucide-react";
import { dawingoProducts } from "@/lib/dawingo";

function LiveTag() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-3 py-1 font-display text-[11px] font-bold uppercase tracking-widest text-emerald-300 animate-pulse-live">
      <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden />
      Live
    </span>
  );
}

function ComingSoonTag() {
  return (
    <span className="inline-flex items-center rounded-full border border-platinum/25 bg-white/5 px-3 py-1 font-display text-[11px] font-medium uppercase tracking-widest text-platinum/80">
      Coming Soon
    </span>
  );
}

export default function DawingoGrid() {
  const [resto, ...upcoming] = dawingoProducts;
  const RestoIcon = resto.icon;

  return (
    <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* Featured live cell · Dawingo Resto, 2×2 square */}
      <article className="group relative overflow-hidden rounded-3xl border border-amber/30 bg-white/[0.04] p-8 md:backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber/60 hover:shadow-[0_0_56px_rgba(237,167,53,0.25)] sm:col-span-2 sm:row-span-2">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[radial-gradient(closest-side,rgba(237,167,53,0.2),transparent)]"
        />
        <div className="relative flex h-full flex-col">
          <div className="flex items-start justify-between gap-4">
            <div className="inline-flex rounded-2xl border border-amber/30 bg-amber/10 p-3">
              <RestoIcon className="size-7 text-amber" aria-hidden />
            </div>
            <LiveTag />
          </div>

          <Image
            src="/brand/dawingo-resto-v2.png"
            alt="Dawingo Resto"
            width={280}
            height={85}
            className="mt-8 h-14 w-auto self-start"
          />

          <p className="mt-6 leading-relaxed text-platinum">
            {resto.tagline}. Orders, kitchen displays, billing, inventory, and
            analytics for restaurants · live today and running in production.
          </p>

          <div className="mt-auto pt-8">
            <a
              href="/contact"
              className="inline-flex items-center rounded-full bg-amber px-6 py-3 font-display text-sm font-semibold text-abyss shadow-[0_0_24px_rgba(237,167,53,0.3)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(237,167,53,0.55)]"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </article>

      {upcoming.map((product) => {
        const Icon = product.icon;
        return (
          <article
            key={product.name}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-[0_0_36px_rgba(237,167,53,0.15)]"
          >
            <div className="flex items-start justify-between gap-3">
              {/* Sub-logo placeholder: brand mark slot */}
              <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-2.5 transition-colors group-hover:border-amber/30 group-hover:bg-amber/10">
                <Icon className="size-5 text-platinum transition-colors group-hover:text-amber" aria-hidden />
              </div>
              <ComingSoonTag />
            </div>
            <h3 className="mt-5 font-display text-lg font-bold">{product.name}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-platinum/90">{product.tagline}</p>
            {product.note && (
              <p className="mt-3 flex items-start gap-1.5 text-xs text-amber/90">
                <Info className="mt-0.5 size-3.5 shrink-0" aria-hidden />
                {product.note}
              </p>
            )}
          </article>
        );
      })}
    </div>
  );
}
