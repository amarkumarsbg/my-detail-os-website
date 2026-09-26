import { HeroSection } from "@/components/marketing/hero-section";
import { FeatureMarquee } from "@/components/marketing/feature-marquee";
import { TrustStrip } from "@/components/marketing/trust-strip";
import { WorkshopTypes } from "@/components/marketing/workshop-types";
import { ProblemSection } from "@/components/marketing/problem-section";
import { SolutionSection } from "@/components/marketing/solution-section";
import { ProductShowcase } from "@/components/marketing/product-showcase";
import { PortalSection } from "@/components/marketing/portal-section";
import { MobileSection } from "@/components/marketing/mobile-section";
import { WhySection } from "@/components/marketing/why-section";
import { HowItWorksSection } from "@/components/marketing/how-it-works";
import { PricingSection } from "@/components/marketing/pricing-section";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { FaqSection } from "@/components/marketing/faq-section";
import { CtaSection } from "@/components/marketing/cta-section";
import { ContactSection } from "@/components/marketing/contact-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureMarquee />
      <TrustStrip />
      <WorkshopTypes />
      <ProblemSection />

      <div id="solutions">
        <SolutionSection />
      </div>

      <div id="features">
        <ProductShowcase />
        <PortalSection />
      </div>

      <MobileSection />

      <div id="about">
        <WhySection />
        <HowItWorksSection />
      </div>

      <div id="pricing">
        <PricingSection />
      </div>

      <CtaSection
        title="Ready to modernize your workshop?"
        description="Start a free trial and see how MY DETAIL OS centralizes workshop operations."
        secondaryLabel="View Pricing"
        secondaryHref="/pricing"
      />
      <TestimonialsSection />
      <FaqSection />

      <div id="contact">
        <ContactSection />
      </div>
    </>
  );
}
