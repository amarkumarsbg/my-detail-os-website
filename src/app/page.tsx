import { HeroSection } from "@/components/marketing/hero-section";
import { TrustStrip } from "@/components/marketing/trust-strip";
import { WorkshopTypes } from "@/components/marketing/workshop-types";
import { ProblemSection } from "@/components/marketing/problem-section";
import { SolutionSection } from "@/components/marketing/solution-section";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { MobileSection } from "@/components/marketing/mobile-section";
import { WhySection } from "@/components/marketing/why-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works";
import { PricingSection } from "@/components/marketing/pricing-section";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { FaqSection } from "@/components/marketing/faq-section";
import { CtaSection } from "@/components/marketing/cta-section";
import { ContactSection } from "@/components/marketing/contact-section";

const sectionAnchor =
  "scroll-mt-[calc(3.5rem+env(safe-area-inset-top)+0.5rem)] sm:scroll-mt-[calc(4rem+env(safe-area-inset-top)+0.5rem)]";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <WorkshopTypes />
      <ProblemSection />

      <div id="solutions" className={sectionAnchor}>
        <SolutionSection />
      </div>

      <div id="features" className={sectionAnchor}>
        <ProductShowcase />
      </div>

      <MobileSection />

      <div id="about" className={sectionAnchor}>
        <WhySection />
        <HowItWorksSection />
      </div>

      <div id="pricing" className={sectionAnchor}>
        <PricingSection />
      </div>

      <CtaSection
        title="Get premium workshop software. Feel free to contact us."
        description="Start a free trial and see how MY DETAIL OS centralizes workshop operations."
        secondaryLabel="Contact Us"
        secondaryHref="/#contact"
      />
      <TestimonialsSection />
      <FaqSection />

      <div id="contact" className={sectionAnchor}>
        <ContactSection />
      </div>
    </>
  );
}
