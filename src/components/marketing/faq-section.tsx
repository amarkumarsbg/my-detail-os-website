import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faqs";
import { FadeIn } from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FaqSection() {
  return (
    <section
      className="scroll-mt-[calc(3.5rem+env(safe-area-inset-top)+0.5rem)] bg-slate-50 py-10 sm:scroll-mt-[calc(4rem+env(safe-area-inset-top)+0.5rem)] sm:py-14 lg:py-16"
      id="faq"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <p className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-600 ring-1 ring-inset ring-teal-500/20">
            Frequently Asked Questions
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to know.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Have a different question? Reach out to our support team and we&apos;ll get back to you
            as soon as we can.
          </p>
          <div className="mt-4 sm:mt-5">
            <Link
              href="/#contact"
              className="inline-flex items-center text-sm font-semibold text-teal-600 transition-colors hover:text-teal-500 sm:text-base"
            >
              Contact support
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-8 sm:mt-10" staggerChildren={0.08}>
          <Accordion className="w-full space-y-3">
            {faqItems.map((item) => (
              <StaggerItem key={item.question}>
                <AccordionItem
                  value={item.question}
                  className="rounded-2xl border border-slate-200 bg-white px-5 py-1 shadow-sm transition-all duration-200 hover:border-teal-200 hover:shadow-md data-[state=open]:border-teal-200 data-[state=open]:shadow-md data-[state=open]:ring-1 data-[state=open]:ring-teal-500/10 sm:px-6 sm:py-2"
                >
                  <AccordionTrigger className="min-h-12 py-3.5 text-left text-base font-bold text-slate-900 transition-colors hover:text-teal-600 hover:no-underline sm:py-2.5">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-1 text-base leading-relaxed text-slate-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </StaggerItem>
            ))}
          </Accordion>
        </StaggerContainer>
      </div>
    </section>
  );
}
