import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Faq from "@/components/faq";
import ContactForm from "@/components/contact-form";
import { Mail, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with WePhoton for app, software, and website development — or browse answers to frequently asked questions.",
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "support@wephoton.in",
    href: "mailto:support@wephoton.in",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 89391 29202",
    href: "tel:+918939129202",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within one business day",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 h-[26rem] w-[60rem] max-w-full -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(237,167,53,0.1),transparent)]"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-xs font-medium uppercase tracking-widest text-amber">
            Contact
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold tracking-tight sm:text-6xl">
            Let&apos;s build your next release.
          </h1>

          <ul className="mt-10 flex flex-wrap gap-4">
            {channels.map(({ icon: Icon, label, value, href }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3.5 md:backdrop-blur-md"
              >
                <Icon className="size-4 text-amber" aria-hidden />
                <span className="text-xs uppercase tracking-widest text-platinum/60">{label}</span>
                {href ? (
                  <a href={href} className="text-sm font-semibold text-white transition-colors hover:text-amber">
                    {value}
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-white">{value}</span>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-16 grid gap-16 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:backdrop-blur-md sm:p-10">
              <ContactForm />
            </div>
            <Faq />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
