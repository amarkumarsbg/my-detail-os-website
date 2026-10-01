"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export function PageShell({
  title,
  description,
  children,
  showCta = true,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  showCta?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const words = title.trim().split(/\s+/);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      <header className="mb-6 max-w-3xl sm:mb-8">
        <motion.p
          className="eyebrow"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: EASE_OUT }}
        >
          MY DETAIL OS
        </motion.p>
        <h1 className="mt-2 flex flex-wrap gap-x-[0.28em] gap-y-1 text-balance text-3xl font-semibold tracking-tight sm:mt-3 sm:text-4xl lg:text-5xl">
          {reduceMotion
            ? title
            : words.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  className="inline-block"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.06 + i * 0.035, ease: EASE_OUT }}
                >
                  {word}
                </motion.span>
              ))}
        </h1>
        <motion.p
          className="mt-3 text-pretty text-muted-foreground sm:mt-4"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: EASE_OUT }}
        >
          {description}
        </motion.p>
      </header>

      <FadeIn delay={0.12} direction="up" duration={0.45}>
        {children}
      </FadeIn>

      {showCta && (
        <FadeIn delay={0.18} className="mt-8 sm:mt-10">
          <div className="rounded-2xl border border-border bg-white p-5 sm:p-6">
            <h2 className="text-xl font-semibold sm:text-2xl">Ready to get started?</h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Start a free trial or review plans for your workshop size.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/signup" target="_blank" rel="noopener noreferrer">
                <Button className="trial-cta btn-marketing group bg-teal-600 text-white hover:bg-teal-500">
                  <span className="inline-flex items-center gap-1.5">
                    Start Free Trial
                    <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" className="btn-marketing">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      )}
    </section>
  );
}
