import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Services from "@/components/services";
import WhoAreWe from "@/components/who-are-we";
import DawingoTeaser from "@/components/dawingo-teaser";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Partners />
        <Services />
        <WhoAreWe />
        <DawingoTeaser />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
