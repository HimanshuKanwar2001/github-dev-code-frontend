
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { SuccessStories } from "@/components/SuccessStories";
import { WhoIsThisFor } from "@/components/WhoIsThisFor";
import { FAQ } from "@/components/FAQ";
import { StrategyCall } from "@/components/StrategyCall";
import { Testimonials } from "@/components/Testimonials";
import { Navbar } from "@/components/Navbar";
import { CTABar } from "@/components/CTABar";
import { Stats } from "@/components/Stats";

export default function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhoIsThisFor />
      <SuccessStories />
      <StrategyCall />
      <Features />
      <Testimonials />
      <Stats />
      <FAQ />
      <CTABar />
    </main>
  );
}
