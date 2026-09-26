"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { showcaseSections } from "@/data/features";
import { FadeIn } from "@/components/ui/fade-in";
import { CheckCircle2 } from "lucide-react";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

function SlideIn({
  children,
  from,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  from: "left" | "right";
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const x = from === "left" ? -64 : 64;

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.75, delay, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

export function ProductShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="space-y-24 overflow-x-clip bg-white py-24 sm:py-32 lg:space-y-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto mb-20 max-w-2xl text-center lg:mb-24">
          <p className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-600 ring-1 ring-inset ring-teal-500/20">
            Product showcase
          </p>
          <h2 className="mt-6 text-balance font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Built around how workshops actually operate.
          </h2>
        </FadeIn>

        <div className="space-y-24 lg:space-y-32">
          {showcaseSections.map((section, index) => {
            const imageOnLeft = index % 2 === 1;
            const textFrom = imageOnLeft ? "right" : "left";
            const imageFrom = imageOnLeft ? "left" : "right";

            return (
              <div
                key={section.id}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                  imageOnLeft ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <SlideIn from={textFrom} className="min-w-0">
                  <p className="text-sm font-semibold tracking-wide text-teal-600 uppercase">
                    {section.eyebrow}
                  </p>
                  <h3 className="mt-4 text-balance font-heading text-2xl font-bold text-slate-900 sm:text-3xl">
                    {section.title}
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">
                    {section.description}
                  </p>
                  <ul className="mt-8 space-y-4">
                    {section.points.map((point, pointIndex) => (
                      <motion.li
                        key={point}
                        className="flex items-center gap-3 text-base text-slate-700"
                        initial={
                          reduceMotion ? false : { opacity: 0, x: textFrom === "left" ? -20 : 20 }
                        }
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                          duration: 0.45,
                          delay: 0.22 + pointIndex * 0.09,
                          ease: EASE_OUT,
                        }}
                      >
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 ring-1 ring-teal-500/15">
                          <CheckCircle2 className="size-3.5" />
                        </span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </SlideIn>

                <SlideIn from={imageFrom} delay={0.1}>
                  <motion.div
                    className="group relative aspect-[5/4] overflow-hidden rounded-3xl border border-slate-200 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.35)] ring-1 ring-slate-900/5"
                    initial={reduceMotion ? false : { scale: 0.94 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: EASE_OUT }}
                  >
                    <Image
                      src={section.image.src}
                      alt={section.image.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
                    <motion.div
                      className="absolute inset-x-0 bottom-0 p-5 sm:p-6"
                      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.5, delay: 0.3, ease: EASE_OUT }}
                    >
                      <p className="text-[11px] font-bold tracking-wider text-teal-300 uppercase">
                        {section.image.label}
                      </p>
                      <p className="mt-1 text-lg font-semibold text-white">{section.title}</p>
                    </motion.div>
                  </motion.div>
                </SlideIn>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
