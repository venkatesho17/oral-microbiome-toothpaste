import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ProblemSection from "@/components/problem-section";
import SolutionSection from "@/components/solution-section";
import BenefitsSection from "@/components/benefits-section";
import CtaSection from "@/components/cta-section";
import Footer from "@/components/footer";
import MicrobiomeSceneWrapper from "@/components/microbiome-scene-wrapper";

export default function Page() {
  return (
    <main className="relative">
      <MicrobiomeSceneWrapper />
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
