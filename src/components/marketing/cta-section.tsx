"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const proofPoints = [
  "Job cards, billing & inventory in one place",
  "Customer updates without WhatsApp chaos",
  "Live in days — not a long IT project",
] as const;

function AnimatedTitle({ text, reduceMotion }: { text: string; reduceMotion: boolean | null }) {
  const words = text.trim().split(/\s+/);

  if (reduceMotion) {
    return (
      <h2 className="mt-3 text-balance font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[2rem] lg:leading-tight">
        {text}
      </h2>
    );
  }

  return (
    <h2 className="mt-3 flex flex-wrap gap-x-[0.28em] gap-y-1 text-balance font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-[2rem] lg:leading-tight">
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.06 + i * 0.04, ease: EASE_OUT }}
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
}

export function CtaSection({
  title = "Run your workshop like a detailing studio.",
  description = "Start a free trial and see how MY DETAIL OS keeps jobs, billing, and customers in one place.",
  primaryLabel = "Start Free Trial",
  primaryHref = "/signup",
  secondaryLabel = "Contact Us",
  secondaryHref = "/#contact",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-[28rem] overflow-hidden bg-slate-950 sm:min-h-[32rem] lg:min-h-[36rem]">
      <div className="absolute inset-0">
        <Image
          src="/images/cta-studio-premium.jpg"
          alt="Premium detailing studio with a polished sports car under soft teal lighting"
          fill
          priority={false}
          className="object-cover object-[78%_55%] sm:object-[82%_50%] lg:object-[88%_48%] lg:scale-105"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent sm:w-[58%] lg:w-[42%]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/70 to-transparent lg:h-16"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-slate-950/50 to-transparent"
        />
      </div>

      <div className="relative mx-auto flex min-h-[28rem] w-full max-w-7xl items-center px-4 py-10 sm:min-h-[32rem] sm:px-6 sm:py-12 lg:min-h-[36rem] lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className={cn(
            "w-full max-w-[22rem] border border-white/15 bg-slate-950/55 p-5 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.75)] backdrop-blur-md",
            "rounded-2xl sm:max-w-sm sm:p-6"
          )}
        >
          <p className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-teal-400 uppercase sm:text-xs">
            <span aria-hidden className="inline-block h-px w-5 bg-teal-400" />
            {siteConfig.name}
          </p>

          <AnimatedTitle text={title} reduceMotion={reduceMotion} />

          <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
            {description}
          </p>

          <ul className="mt-4 space-y-2">
            {proofPoints.map((point, i) => (
              <motion.li
                key={point}
                initial={reduceMotion ? false : { opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.35, delay: 0.15 + i * 0.06, ease: EASE_OUT }}
                className="flex items-start gap-2 text-[13px] leading-snug text-slate-200"
              >
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 ring-1 ring-teal-400/30">
                  <Check className="size-2.5" strokeWidth={3} aria-hidden />
                </span>
                {point}
              </motion.li>
            ))}
          </ul>

          <div className="mt-5 flex w-full flex-col items-stretch gap-2.5 sm:flex-row sm:items-center">
            <Link
              href={primaryHref}
              className="block w-full sm:w-auto"
              {...(primaryHref === "/signup" || primaryHref === "/login"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <Button
                size="lg"
                className="trial-cta group relative h-11 w-full overflow-hidden rounded-full bg-teal-500 px-5 text-xs font-semibold tracking-wide text-slate-950 uppercase transition-transform hover:bg-teal-400 sm:w-auto"
              >
                <span className="relative z-10 inline-flex items-center">
                  {primaryLabel}
                  <ArrowRight className="ml-1.5 size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </Button>
            </Link>
            <Link href={secondaryHref} className="block w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="h-11 w-full rounded-full border-white/35 bg-white/5 px-5 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur-sm hover:border-white/55 hover:bg-white/10 hover:text-white sm:w-auto"
              >
                {secondaryLabel}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <div
        aria-hidden
        className="relative h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"
      />
    </section>
  );
}
