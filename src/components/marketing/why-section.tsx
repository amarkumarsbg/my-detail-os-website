"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const GALLERY = [
  {
    src: "/images/why/01-hands.png",
    alt: "Detailer applying coating to a polished car panel in studio",
  },
  {
    src: "/images/why/02-studio-bay.png",
    alt: "Sports car staged in a premium detailing studio bay",
  },
  {
    src: "/images/why/03-polishing.png",
    alt: "Paint correction with a dual-action polisher in the workshop",
  },
  {
    src: "/images/why/04-wash-bay.png",
    alt: "Vehicle foam wash in a professional detailing wash bay",
  },
  {
    src: "/images/why/05-ceramic.png",
    alt: "Ceramic coating applied by hand in a detailing studio",
  },
  {
    src: "/images/why/06-interior.png",
    alt: "Interior detailing of a luxury car cabin in the workshop",
  },
] as const;

const REASONS = [
  {
    number: "01",
    title: "Built for detailing workshops",
    description:
      "Workflows made for detailing studios, auto spas, service centers, and busy floor teams.",
  },
  {
    number: "02",
    title: "One system for the whole shop",
    description:
      "Jobs, billing, inventory, staff, and customers stay connected — no spreadsheet juggling.",
  },
  {
    number: "03",
    title: "Customers stay in the loop",
    description:
      "A mobile customer portal for progress, invoices, and history — fewer follow-up calls.",
  },
] as const;

const GALLERY_MS = 4200;
const REASON_MS = 3400;
const ENTRANCE_MS = 1100;
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.32,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_OUT },
  },
};

/** Split “Why Choose Us” — auto-scrolling studio gallery + numbered reasons. */
export function WhySection() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [activeReason, setActiveReason] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [cycleReady, setCycleReady] = useState(false);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % GALLERY.length);
    }, GALLERY_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  // Wait for 01 → 02 → 03 entrance, then start highlight cycle
  useEffect(() => {
    if (reduceMotion) {
      setCycleReady(true);
      return;
    }
    const id = window.setTimeout(() => setCycleReady(true), ENTRANCE_MS);
    return () => window.clearTimeout(id);
  }, [reduceMotion]);

  useEffect(() => {
    if (reduceMotion || hovered !== null || !cycleReady) return;
    const id = window.setInterval(() => {
      setActiveReason((prev) => (prev + 1) % REASONS.length);
    }, REASON_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, hovered, cycleReady]);

  return (
    <section className="overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-[560px]">
          {GALLERY.map((image, index) => (
            <div
              key={image.src}
              className={cn(
                "absolute inset-0 transition-opacity duration-[1400ms] ease-in-out",
                index === active ? "opacity-100" : "opacity-0"
              )}
              aria-hidden={index !== active}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority={index === 0}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/40"
              />
            </div>
          ))}
        </div>

        <div className="why-panel relative flex flex-col justify-center overflow-hidden px-5 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-20">
          <div aria-hidden className="why-panel__glow" />
          <div aria-hidden className="why-panel__streaks" />

          <div className="relative z-10">
            <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-teal-700 uppercase">
              <span aria-hidden className="inline-flex gap-1">
                <span className="h-px w-4 self-center bg-teal-600" />
                <span className="h-px w-2 self-center bg-teal-600/50" />
              </span>
              About our platform
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Choose Us?
            </h2>

            <motion.ul
              className="mt-8 space-y-6 sm:mt-10 sm:space-y-8 lg:mt-12 lg:space-y-10"
              variants={reduceMotion ? undefined : listVariants}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "show"}
              viewport={{ once: true, amount: 0.25 }}
            >
              {REASONS.map((reason, index) => {
                const isActive =
                  hovered === index || (hovered === null && activeReason === index);

                return (
                  <motion.li
                    key={reason.number}
                    variants={reduceMotion ? undefined : itemVariants}
                    className="group flex cursor-pointer gap-4 sm:gap-5"
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(index)}
                    onBlur={() => setHovered(null)}
                    onClick={() => {
                      setHovered(index);
                      setActiveReason(index);
                    }}
                  >
                    <div className="why-number-scene relative size-12 shrink-0 sm:size-14">
                      <div
                        className={cn(
                          "why-number-flip relative h-full w-full",
                          isActive && "why-number-flip--active"
                        )}
                      >
                        <span className="why-number-face why-number-face--front absolute inset-0 flex items-center justify-center rounded-full border border-slate-300 bg-white text-sm font-bold text-teal-600 shadow-sm sm:text-base">
                          {reason.number}
                        </span>
                        <span className="why-number-face why-number-face--back absolute inset-0 flex items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white shadow-md sm:text-base">
                          {reason.number}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      className="min-w-0 pt-0.5"
                      animate={
                        reduceMotion
                          ? undefined
                          : {
                              opacity: isActive ? 1 : 0.62,
                              x: isActive ? 0 : -2,
                            }
                      }
                      transition={{ duration: 0.55, ease: EASE_OUT }}
                    >
                      <h3
                        className={cn(
                          "text-lg font-bold transition-colors duration-500 sm:text-xl",
                          isActive ? "text-slate-900" : "text-slate-700"
                        )}
                      >
                        {reason.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                        {reason.description}
                      </p>
                    </motion.div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
