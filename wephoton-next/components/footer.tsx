import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const companyLinks = [
  { href: "/#services", label: "Services" },
  { href: "/dawingo", label: "Dawingo Multiverse" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const policyLinks = [
  { href: "/policies/terms", label: "Terms & Conditions" },
  { href: "/policies/privacy", label: "Privacy Policy" },
  { href: "/policies/payments-refunds", label: "Payments, Cancellations & Refunds" },
];

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function PinterestIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.853 0 1.265.64 1.265 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 0 1 .069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.472 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.527-2.292-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  );
}

/* Update handles when official pages exist */
const socials = [
  { href: "https://instagram.com/wephoton", label: "Instagram", Icon: InstagramIcon },
  { href: "https://facebook.com/wephoton", label: "Facebook", Icon: FacebookIcon },
  { href: "https://x.com/wephoton", label: "X", Icon: XIcon },
  { href: "https://linkedin.com/company/wephoton", label: "LinkedIn", Icon: LinkedinIcon },
  { href: "https://pinterest.com/wephoton", label: "Pinterest", Icon: PinterestIcon },
  { href: "https://youtube.com/@wephoton", label: "YouTube", Icon: YoutubeIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-midnight/60">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Image
              src="/brand/wephoton-logo.png"
              alt="Wephoton · Bridge to People"
              width={190}
              height={51}
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-platinum">
              Custom software, enterprise mobile applications, and the Dawingo
              Multiverse · engineered in India, built for the world.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-platinum">
              <li>
                <a href="mailto:support@wephoton.in" className="flex items-center gap-2.5 transition-colors hover:text-amber">
                  <Mail className="size-4 text-amber" aria-hidden />
                  support@wephoton.in
                </a>
              </li>
              <li>
                <a href="tel:+918939129202" className="flex items-center gap-2.5 transition-colors hover:text-amber">
                  <Phone className="size-4 text-amber" aria-hidden />
                  +91 89391 29202
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 text-amber" aria-hidden />
                India
              </li>
            </ul>
          </div>

          <nav aria-label="Site">
            <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-platinum transition-colors hover:text-amber">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h3 className="font-display text-xs font-semibold uppercase tracking-widest text-white">
              Policies
            </h3>
            <ul className="mt-5 space-y-3">
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-platinum transition-colors hover:text-amber">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-platinum/70">
            © {new Date().getFullYear()} Wephoton. All rights reserved.
          </p>
          <ul className="flex items-center gap-3" aria-label="Social media">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Wephoton on ${label}`}
                  className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-platinum transition-all duration-300 hover:-translate-y-1 hover:border-amber/50 hover:text-amber hover:shadow-[0_0_20px_rgba(237,167,53,0.25)]"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
