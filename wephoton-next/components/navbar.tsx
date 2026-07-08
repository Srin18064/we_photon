"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/dawingo", label: "Dawingo Multiverse" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? "border-amber/15 bg-[#12100a]/95 md:bg-[#12100a]/60 md:backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <Link href="/" className="flex items-center gap-2" aria-label="WePhoton home">
          <Image
            src="/brand/wephoton-logo.png"
            alt="WePhoton — Bridge to People"
            width={168}
            height={45}
            preload
            className="h-9 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm tracking-wide text-platinum transition-colors hover:text-amber"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-amber px-5 py-2 font-display text-sm font-semibold text-abyss shadow-[0_0_20px_rgba(237,167,53,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_36px_rgba(237,167,53,0.6)]"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6 text-platinum" /> : <Menu className="size-6 text-platinum" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-amber/15 bg-[#12100a]/95 md:hidden">
          <ul className="space-y-1 px-4 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-platinum transition-colors hover:bg-white/5 hover:text-amber"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="mt-2 block rounded-full bg-amber px-5 py-2 text-center font-display font-semibold text-abyss"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
