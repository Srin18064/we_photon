import type { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

type PolicyPageProps = {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
};

export default function PolicyPage({ eyebrow, title, updated, children }: PolicyPageProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="font-display text-xs font-medium uppercase tracking-widest text-amber">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-platinum/70">Last updated: {updated}</p>

          <div className="prose-policy mt-12 space-y-10 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_p]:mt-3 [&_p]:leading-relaxed [&_p]:text-platinum [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_li]:leading-relaxed [&_li]:text-platinum [&_a]:underline [&_a]:decoration-amber/50 [&_a]:underline-offset-4">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
