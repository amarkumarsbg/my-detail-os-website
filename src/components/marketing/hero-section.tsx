"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { FeatureMarquee } from "@/components/marketing/feature-marquee";
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

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const line1 = ["Run", "Your", "Workshop"];
const line3 = ["Grow", "Your", "Business"];

function AnimatedHeadline() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<0 | 1>(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev === 0 ? 1 : 0));
    }, 2600);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <h1 className="mt-4 max-w-xl text-left font-heading text-[1.75rem] font-semibold leading-[1.2] tracking-tight text-white sm:text-5xl sm:leading-[1.15] lg:text-[3.5rem] lg:leading-[1.15]">
        <span className="block">
          Run Your Workshop{" "}
          <span className="inline-block rounded-md bg-teal-300 px-[0.35em] pt-[0.12em] pb-[0.18em] leading-none text-slate-950">
            Smarter.
          </span>
        </span>
        <span className="mt-2 block text-slate-200 sm:mt-2.5">
          Grow Your Business <span className="text-teal-200">Faster.</span>
        </span>
      </h1>
    );
  }

  return (
    <h1 className="mt-4 max-w-xl text-left font-heading text-[1.75rem] font-semibold leading-[1.2] tracking-tight text-white sm:text-5xl sm:leading-[1.15] lg:text-[3.5rem] lg:leading-[1.15]">
      <span className="flex flex-wrap items-baseline gap-x-[0.28em]">
        {line1.map((word, i) => (
          <motion.span
            key={word}
            className="inline-block"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: EASE_OUT }}
          >
            {word}
          </motion.span>
        ))}
        <motion.span
          className="inline-block"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: EASE_OUT }}
        >
          <span
            className={cn(
              "inline-block rounded-md px-[0.35em] pt-[0.12em] pb-[0.18em] leading-none transition-[background-color,color,box-shadow] duration-500",
              active === 0
                ? "bg-teal-300 text-slate-950 shadow-[0_0_28px_rgba(94,234,212,0.4)]"
                : "bg-teal-300/20 text-teal-100/75"
            )}
          >
            Smarter.
          </span>
        </motion.span>
      </span>

      <span className="mt-2 flex flex-wrap items-baseline gap-x-[0.28em] text-slate-200 sm:mt-2.5">
        {line3.map((word, i) => (
          <motion.span
            key={word}
            className="inline-block"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 + i * 0.07, ease: EASE_OUT }}
          >
            {word}
          </motion.span>
        ))}
        <motion.span
          className="inline-block"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7, ease: EASE_OUT }}
        >
          <span
            className={cn(
              "inline-block rounded-md px-[0.35em] pt-[0.12em] pb-[0.18em] leading-none transition-[background-color,color,box-shadow] duration-500",
              active === 1
                ? "bg-teal-300 text-slate-950 shadow-[0_0_28px_rgba(94,234,212,0.4)]"
                : "bg-transparent text-teal-200/75"
            )}
          >
            Faster.
          </span>
        </motion.span>
      </span>
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

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-transparent sm:from-slate-950/70 sm:via-slate-950/35 sm:to-transparent lg:via-slate-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/25" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(251,134,18,0.12),transparent_55%)]" />
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
      <section className="relative isolate -mt-14 flex min-h-[100svh] flex-col overflow-x-clip bg-slate-950 sm:-mt-16">
        <div className="relative flex min-h-0 flex-1 flex-col">
          <HeroBackgroundCarousel active={activeSlide} />

          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pt-28 pb-8 sm:px-6 sm:pt-32 sm:pb-10 lg:px-8 lg:pt-36 lg:pb-12">
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
                  <motion.div
                    className="hero-cta-float w-full sm:w-auto"
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.05, duration: 0.5, ease: EASE_OUT }}
                  >
                    <Link href="/signup" target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto">
                      <Button
                        size="lg"
                        className="hero-cta hero-cta--primary btn-marketing group relative h-12 w-full overflow-hidden rounded-full px-6 text-base font-semibold shadow-xl transition-transform duration-300 hover:scale-[1.04] sm:h-14 sm:px-8 sm:text-lg"
                      >
                        <span className="relative z-10 inline-flex items-center">
                          Start Free Trial
                          <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </span>
                      </Button>
                    </Link>
                  </motion.div>
                  <motion.div
                    className="hero-cta-float hero-cta-float--delayed w-full sm:w-auto"
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.18, duration: 0.5, ease: EASE_OUT }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setIsVideoOpen(true)}
                      className="hero-cta hero-cta--ghost btn-marketing group h-12 w-full rounded-full border-white/30 bg-white/5 px-6 text-base font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-[1.04] hover:border-white/50 hover:bg-white/10 hover:text-white sm:h-14 sm:w-auto sm:px-8 sm:text-lg"
                    >
                      <Play className="mr-2 size-5 fill-white/80 transition-transform duration-300 group-hover:scale-125" />
                      Watch Demo
                    </Button>
                  </motion.div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        <div className="relative z-10 shrink-0 bg-slate-950">
          <FeatureMarquee />
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
            <video
              className="size-full object-contain bg-black"
              src="/videos/demo.mp4"
              controls
              autoPlay
              playsInline
              preload="metadata"
            >
              Your browser does not support the demo video.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
