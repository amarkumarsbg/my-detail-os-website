"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

const line1 = ["Run", "Your", "Workshop"];
const line2Accent = "Smarter.";
const line3 = ["Grow", "Your", "Business"];
const line3Accent = "Faster.";

const wordVariants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

function AccentWord({ children, underlineDelay }: { children: string; underlineDelay: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      variants={wordVariants}
      className="hero-accent-word relative inline-block whitespace-nowrap"
    >
      <span className="hero-accent-word__text">{children}</span>
      {!reduceMotion && <span className="hero-accent-word__shine" aria-hidden />}
      <motion.span
        aria-hidden
        className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-500 sm:-bottom-1.5 sm:h-1"
        initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: underlineDelay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.span>
  );
}

function AnimatedHeadline() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <h1 className="mt-4 text-balance font-heading text-[1.75rem] font-semibold leading-snug tracking-tight text-white sm:text-5xl sm:leading-tight lg:text-[4rem] lg:leading-[1.1]">
        Run Your Workshop <span className="text-teal-300">Smarter.</span>
        <span className="mt-1.5 block text-slate-300 sm:mt-2">
          Grow Your Business <span className="text-teal-300">Faster.</span>
        </span>
      </h1>
    );
  }

  return (
    <h1 className="mt-4 text-balance font-heading text-[1.75rem] font-semibold leading-snug tracking-tight text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] sm:text-5xl sm:leading-tight sm:text-shadow-none sm:drop-shadow-md lg:text-[4rem] lg:leading-[1.1]">
      <motion.span
        className="inline-flex flex-wrap items-baseline justify-center gap-x-[0.28em]"
        variants={lineVariants}
        initial="hidden"
        animate="show"
      >
        {line1.map((word) => (
          <motion.span key={word} variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        ))}
        <AccentWord underlineDelay={0.7}>{line2Accent}</AccentWord>
      </motion.span>

      <motion.span
        className="mt-1.5 flex flex-wrap items-baseline justify-center gap-x-[0.28em] text-slate-300 sm:mt-2"
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.08, delayChildren: 0.42 },
          },
        }}
        initial="hidden"
        animate="show"
      >
        {line3.map((word) => (
          <motion.span key={word} variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        ))}
        <AccentWord underlineDelay={1.05}>{line3Accent}</AccentWord>
      </motion.span>
    </h1>
  );
}

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="relative isolate -mt-14 overflow-hidden border-b border-border/60 bg-slate-950 sm:-mt-16">
        <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
          <img
            src="/hero-bg.png"
            alt="Background"
            className="h-full w-full object-cover opacity-60 mix-blend-screen"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(15,118,110,0.5),transparent_70%)]"
        />
        <div aria-hidden className="hero-orb hero-orb--a pointer-events-none absolute z-0" />
        <div aria-hidden className="hero-orb hero-orb--b pointer-events-none absolute z-0" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 pt-28 pb-14 sm:px-6 sm:pt-32 sm:pb-16 lg:px-8 lg:pt-40 lg:pb-20">
          <StaggerContainer
            className="mx-auto max-w-4xl text-center"
            delayChildren={0.05}
            staggerChildren={0.12}
          >
            <StaggerItem>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-teal-400 uppercase drop-shadow-sm sm:text-xs">
                Built for modern auto workshops
              </p>
            </StaggerItem>

            <StaggerItem>
              <AnimatedHeadline />
            </StaggerItem>

            <StaggerItem>
              <p className="mx-auto mt-5 max-w-2xl text-pretty px-1 text-[15px] leading-6 text-slate-300 drop-shadow-sm sm:mt-6 sm:px-0 sm:text-lg sm:leading-7 lg:text-xl">
                Manage customers, vehicles, job cards, billing, inventory, staff, rewards and
                customer communication — all from one powerful platform.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 px-1 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-5 sm:px-0">
                <Link
                  href="/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="btn-marketing group h-12 w-full animate-float rounded-full px-6 text-base font-semibold shadow-xl transition-all hover:scale-105 sm:h-14 sm:px-8 sm:text-lg"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsVideoOpen(true)}
                  className="btn-marketing group h-12 w-full animate-float-delayed rounded-full border-white/30 bg-white/5 px-6 text-base font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-white/10 hover:text-white sm:h-14 sm:w-auto sm:px-8 sm:text-lg"
                >
                  <Play className="mr-2 size-5 fill-white/80 transition-transform group-hover:scale-110" />
                  Watch Demo
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {isVideoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm transition-opacity duration-300 sm:p-6 lg:p-12"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative aspect-video w-full max-w-5xl animate-in overflow-hidden rounded-2xl bg-slate-900 shadow-2xl ring-1 ring-white/20 zoom-in-95 duration-300"
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
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
