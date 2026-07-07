import {
  Server,
  Smartphone,
  Database,
  GitBranch,
  Layers,
  Gauge,
  TabletSmartphone,
  Workflow,
} from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-display text-xs font-medium uppercase tracking-widest text-amber">
          Core Engineering
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Two disciplines. One standard: production-grade.
        </h2>

        {/* Asymmetric split: 7/5 on desktop */}
        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Custom Software Development — dominant cell */}
          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-[0_0_48px_rgba(237,167,53,0.15)] lg:col-span-7 lg:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(237,167,53,0.14),transparent)] opacity-70 transition-opacity duration-300 group-hover:opacity-100"
            />
            <div className="relative">
              <div className="inline-flex rounded-2xl border border-amber/30 bg-amber/10 p-3">
                <Server className="size-7 text-amber" aria-hidden />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold sm:text-3xl">
                Custom Software Development
              </h3>
              <p className="mt-4 max-w-xl leading-relaxed text-platinum">
                Enterprise architecture and scalable backend web systems,
                engineered for reliability under real-world load. From domain
                modelling to deployment pipelines, we own the full stack.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Layers, text: "Enterprise architecture & system design" },
                  { icon: Database, text: "Scalable backend & data platforms" },
                  { icon: Workflow, text: "API-first integrations & automation" },
                  { icon: GitBranch, text: "CI/CD & cloud-native delivery" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-platinum">
                    <Icon className="mt-0.5 size-4 shrink-0 text-amber" aria-hidden />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Mobile Application Development */}
          <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 hover:shadow-[0_0_48px_rgba(237,167,53,0.15)] lg:col-span-5 lg:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(237,167,53,0.12),transparent)]"
            />
            <div className="relative">
              <div className="inline-flex rounded-2xl border border-amber/30 bg-amber/10 p-3">
                <Smartphone className="size-7 text-amber" aria-hidden />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold sm:text-3xl">
                Mobile Application Development
              </h3>
              <p className="mt-4 leading-relaxed text-platinum">
                High-performance iOS and Android applications — native where it
                matters, cross-platform where it&apos;s smart.
              </p>
              <ul className="mt-8 grid gap-4">
                {[
                  { icon: TabletSmartphone, text: "Native iOS & Android engineering" },
                  { icon: Layers, text: "Cross-platform with a native feel" },
                  { icon: Gauge, text: "Performance tuning & offline-first UX" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-platinum">
                    <Icon className="mt-0.5 size-4 shrink-0 text-amber" aria-hidden />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
