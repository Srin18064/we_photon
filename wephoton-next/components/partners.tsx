import {
  Building2,
  Landmark,
  Store,
  Factory,
  Hotel,
  Stethoscope,
  GraduationCap,
  Truck,
} from "lucide-react";

/* Placeholder partner marks — swap each icon + name for a real partner logo image */
const partners = [
  { icon: Building2, name: "Northgate Group" },
  { icon: Store, name: "Urban Basket" },
  { icon: Hotel, name: "Cascade Stays" },
  { icon: Stethoscope, name: "MediBridge" },
  { icon: Factory, name: "Kore Industries" },
  { icon: GraduationCap, name: "Scholars Point" },
  { icon: Truck, name: "SwiftHaul Logistics" },
  { icon: Landmark, name: "Vertex Capital" },
];

export default function Partners() {
  const track = [...partners, ...partners];

  return (
    <section aria-label="Our trusted partners" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center font-display text-xs font-medium uppercase tracking-widest text-amber">
          Our Trusted Partners
        </p>
      </div>

      <div className="group relative mt-10 overflow-hidden">
        {/* Edge fades */}
        <div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-abyss to-transparent" />
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-abyss to-transparent" />

        <ul className="flex w-max animate-marquee gap-6 group-hover:[animation-play-state:paused]">
          {track.map(({ icon: Icon, name }, i) => (
            <li
              key={`${name}-${i}`}
              aria-hidden={i >= partners.length}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 md:backdrop-blur-md"
            >
              <Icon className="size-5 shrink-0 text-platinum/70" aria-hidden />
              <span className="whitespace-nowrap font-display text-sm font-semibold tracking-wide text-platinum/80">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
