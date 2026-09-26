"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, X } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";

const HERO_SLIDES = [
  {
    src: "/images/hero/01-job-cards.png",
    alt: "Vehicle check-in and job card inspection in the workshop",
    feature: "Job Card Management",
    blurb: "Check-in to delivery — every job status in one place.",
    position: "object-[72%_center] sm:object-[65%_center] lg:object-right",
  },
  {
    src: "/images/hero/02-detailing-ops.png",
    alt: "Foam wash detailing operations on the workshop floor",
    feature: "Workshop Operations",
    blurb: "Run detailing, wash, and service work without desk chaos.",
    position: "object-[70%_center] sm:object-[65%_center] lg:object-right",
  },
  {
    src: "/images/hero/03-billing.png",
    alt: "Workshop front desk billing and customer check-in",
    feature: "Billing & Payments",
    blurb: "Invoices and payments tied directly to each job.",
    position: "object-[68%_center] sm:object-[60%_center] lg:object-right",
  },
  {
    src: "/images/hero/04-inventory.png",
    alt: "Detailing chemicals and parts inventory shelves",
    feature: "Inventory Control",
    blurb: "Parts, pads, and chemicals tracked against real demand.",
    position: "object-[70%_center] sm:object-[62%_center] lg:object-right",
  },
  {
    src: "/images/hero/05-staff.png",
    alt: "Workshop staff detailing a vehicle together",
    feature: "Staff Management",
    blurb: "Roles, assignments, and floor visibility for your team.",
    position: "object-[68%_center] sm:object-[58%_center] lg:object-right",
  },
  {
    src: "/images/hero/06-customer-portal.png",
    alt: "Finished detailed car ready for customer handover",
    feature: "Customer Portal",
    blurb: "Customers follow progress, invoices, and history on mobile.",
    position: "object-[72%_center] sm:object-[65%_center] lg:object-right",
  },
] as const;

const SLIDE_MS = 5000;

const line1 = ["Run", "Your", "Workshop"];
const line2Accent = "Smarter.";
const line3 = ["Grow", "Your", "Business"];
const line3Accent = "Faster.";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

const lineVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const line2Variants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.55 },
  },
};

function AccentWord({ children, underlineDelay }: { children: string; underlineDelay: number }) {
  return (
    <motion.span variants={wordVariants} className="hero-accent-word relative inline-block whitespace-nowrap">
      <span className="hero-accent-word__text">{children}</span>
      <motion.span
        aria-hidden
        className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-teal-400/90"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.55, delay: underlineDelay, ease: EASE_OUT }}
      />
    </motion.span>
  );
}

function AnimatedHeadline() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <h1 className="mt-4 max-w-xl text-balance text-left font-heading text-[1.75rem] font-semibold leading-snug tracking-tight text-white sm:text-5xl sm:leading-tight lg:text-[3.75rem] lg:leading-[1.1]">
        Run Your Workshop <span className="text-teal-300">Smarter.</span>
        <span className="mt-1.5 block text-slate-300 sm:mt-2">
          Grow Your Business <span className="text-teal-300">Faster.</span>
        </span>
      </h1>
    );
  }

  return (
    <h1 className="mt-4 max-w-xl text-left font-heading text-[1.75rem] font-semibold leading-snug tracking-tight text-white sm:text-5xl sm:leading-tight lg:text-[3.75rem] lg:leading-[1.1]">
      <motion.span
        className="inline-flex flex-wrap items-baseline justify-start gap-x-[0.28em]"
        variants={lineVariants}
        initial="hidden"
        animate="show"
      >
        {line1.map((word) => (
          <motion.span key={word} variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        ))}
        <AccentWord underlineDelay={0.72}>{line2Accent}</AccentWord>
      </motion.span>
      <motion.span
        className="mt-1.5 flex flex-wrap items-baseline justify-start gap-x-[0.28em] text-slate-300 sm:mt-2"
        variants={line2Variants}
        initial="hidden"
        animate="show"
      >
        {line3.map((word) => (
          <motion.span key={word} variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        ))}
        <AccentWord underlineDelay={1.15}>{line3Accent}</AccentWord>
      </motion.span>
    </h1>
  );
}

function HeroBackgroundCarousel({ active }: { active: number }) {
  return (
    <div className="absolute inset-0 z-0" aria-hidden>
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.src}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1400ms] ease-in-out",
            index === active ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className={cn("object-cover", slide.position)}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent sm:from-black sm:via-black/60 sm:to-transparent lg:via-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/35" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(15,118,110,0.18),transparent_50%)]" />
    </div>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = HERO_SLIDES[activeSlide];

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <>
      <section className="relative isolate -mt-14 overflow-hidden border-b border-white/5 bg-black sm:-mt-16">
        <HeroBackgroundCarousel active={activeSlide} />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-5 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:min-h-[560px] lg:px-8 lg:pt-36 lg:pb-28">
          <div className="max-w-xl text-left lg:max-w-2xl">
            <FadeIn direction="none" duration={0.4}>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-teal-400 uppercase drop-shadow-sm sm:text-xs">
                Built for modern auto workshops
              </p>
            </FadeIn>

            <AnimatedHeadline />

            <div className="mt-5 max-w-lg sm:mt-6" aria-live="polite">
              <p key={slide.feature} className="text-sm font-semibold text-teal-300 sm:text-base">
                {slide.feature}
              </p>
              <p key={slide.blurb} className="mt-1.5 text-pretty text-[15px] leading-6 text-slate-300 sm:text-lg sm:leading-7">
                {slide.blurb}
              </p>
            </div>

            <FadeIn delay={0.9} className="mt-8 sm:mt-10">
              <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
                <Link href="/signup" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="btn-marketing group h-12 w-full rounded-full px-6 text-base font-semibold shadow-xl transition-all hover:scale-105 sm:h-14 sm:px-8 sm:text-lg"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsVideoOpen(true)}
                  className="btn-marketing group h-12 w-full rounded-full border-white/30 bg-white/5 px-6 text-base font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-white/10 hover:text-white sm:h-14 sm:w-auto sm:px-8 sm:text-lg"
                >
                  <Play className="mr-2 size-5 fill-white/80 transition-transform group-hover:scale-110" />
                  Watch Demo
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-6 lg:p-12"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-2xl bg-slate-900 shadow-2xl ring-1 ring-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 flex size-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white transition-colors hover:bg-black"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video"
            >
              <X className="size-5" />
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
