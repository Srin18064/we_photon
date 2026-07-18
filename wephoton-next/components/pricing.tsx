import Link from "next/link";
import { Check, Globe, Smartphone, ShoppingCart } from "lucide-react";

const tiers = [
  {
    name: "Custom Website Development",
    price: "₹4,000",
    icon: Globe,
    popular: false,
    description:
      "Fast, secure, search-ready websites engineered on modern frameworks.",
    features: [
      "Responsive, performance-first build",
      "SEO-ready semantic markup",
      "CMS or headless integration",
      "SSL, hosting & deployment setup",
    ],
  },
  {
    name: "Mobile App Development",
    price: "₹55,000",
    icon: Smartphone,
    popular: true,
    description:
      "High-performance iOS & Android apps, native or cross-platform.",
    features: [
      "iOS & Android from one codebase",
      "API & backend integration",
      "Push notifications & analytics",
      "Play Store / App Store publishing",
    ],
  },
  {
    name: "Enterprise E-commerce Platforms",
    price: "₹85,000",
    icon: ShoppingCart,
    popular: false,
    description:
      "Full-scale commerce architecture built for catalogue depth and traffic.",
    features: [
      "Custom storefront & checkout",
      "Payment gateway integration",
      "Inventory & order management",
      "Scalable cloud infrastructure",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-xs font-medium uppercase tracking-widest text-amber">
          Pricing
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Transparent starting points.
        </h2>
        <p className="mt-4 max-w-xl text-platinum">
          Every engagement is scoped to your requirements · these are the
          floors, not the ceilings.
        </p>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <article
                key={tier.name}
                className={`relative flex flex-col rounded-3xl border p-8 md:backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${
                  tier.popular
                    ? "border-amber/60 bg-white/[0.05] shadow-[0_0_44px_rgba(237,167,53,0.22)] hover:shadow-[0_0_64px_rgba(237,167,53,0.35)]"
                    : "border-white/10 bg-white/[0.03] hover:border-amber/40 hover:shadow-[0_0_36px_rgba(237,167,53,0.15)]"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-amber px-4 py-1 font-display text-[11px] font-bold uppercase tracking-widest text-abyss">
                    Most Popular
                  </span>
                )}

                <div className="inline-flex w-fit rounded-2xl border border-amber/30 bg-amber/10 p-3">
                  <Icon className="size-6 text-amber" aria-hidden />
                </div>

                <h3 className="mt-6 font-display text-xl font-bold">{tier.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-platinum">{tier.description}</p>

                <p className="mt-6">
                  <span className="text-xs uppercase tracking-widest text-platinum/70">
                    Starting from
                  </span>
                  <span className="mt-1 block font-display text-4xl font-bold text-white">
                    {tier.price}
                  </span>
                </p>

                <ul className="mt-8 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-platinum">
                      <Check className="mt-0.5 size-4 shrink-0 text-amber" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-10">
                  <Link
                    href="/contact"
                    className={`block rounded-full px-6 py-3 text-center font-display text-sm font-semibold transition-all duration-300 hover:-translate-y-1 ${
                      tier.popular
                        ? "bg-amber text-abyss shadow-[0_0_24px_rgba(237,167,53,0.3)] hover:shadow-[0_0_40px_rgba(237,167,53,0.55)]"
                        : "border border-amber/60 text-amber hover:bg-amber/10 hover:shadow-[0_0_24px_rgba(237,167,53,0.2)]"
                    }`}
                  >
                    Get a Quote
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-xs text-platinum/70">
          Prices in INR, exclusive of applicable GST. See our{" "}
          <Link href="/policies/payments-refunds" className="underline decoration-amber/50 underline-offset-4 hover:text-amber">
            payment, cancellation &amp; refund policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
