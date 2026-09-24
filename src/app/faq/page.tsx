import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faqs";
import { PageShell } from "@/features/shared/page-shell";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "FAQ",
  description:
    "Answers about MY DETAIL OS trials, plans, branches, users, customer portal, billing, and inventory.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <PageShell
      title="Frequently asked questions"
      description="Clear answers based on current and planned product capabilities."
    >
      <div className="rounded-2xl border border-border bg-white px-4 sm:px-6">
        <Accordion>
          {faqItems.map((item) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </PageShell>
  );
}
