"use client";

import { useEffect, useState } from "react";
import { howItWorksSteps } from "@/data/features";
import { FadeIn } from "@/components/ui/fade-in";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";

const STEP_MS = 2800;

export function HowItWorksSection() {
  const reduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setActiveStep((prev) => (prev + 1) % howItWorksSteps.length);
    }, STEP_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <section className="border-t border-slate-100 bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-600 ring-1 ring-inset ring-teal-500/20">
            How it works
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-slate-900 sm:mt-6 sm:text-4xl">
            From signup to daily operations in four simple steps.
          </h2>
        </FadeIn>

        <ol className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4 lg:gap-8">
          {howItWorksSteps.map((step, index) => {
            const isActive = activeStep === index;
            const isComplete = activeStep > index;
            const lineFilled = activeStep > index;

            return (
              <li key={step.step} className="relative">
                {/* Desktop connector — fills as sequence advances */}
                {index < howItWorksSteps.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute top-6 left-[calc(50%+1.75rem)] hidden h-[2px] w-[calc(100%-3.5rem)] overflow-hidden rounded-full bg-slate-100 lg:block"
                  >
                    <div
                      className={cn(
                        "h-full origin-left rounded-full bg-teal-500 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                        lineFilled ? "scale-x-100" : "scale-x-0"
                      )}
                    />
                  </div>
                )}

                <button
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className="flex w-full cursor-pointer flex-col items-center text-center"
                  aria-current={isActive ? "step" : undefined}
                >
                  <span
                    className={cn(
                      "relative z-10 flex size-12 items-center justify-center rounded-full border-2 text-lg font-bold transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isActive
                        ? "scale-110 border-teal-500 bg-teal-50 text-teal-600 shadow-[0_0_0_6px_rgba(20,184,166,0.12)]"
                        : isComplete
                          ? "border-teal-400 bg-teal-500 text-white"
                          : "border-slate-100 bg-slate-50 text-slate-400"
                    )}
                  >
                    {step.step}
                  </span>
                  <h3
                    className={cn(
                      "mt-6 text-lg font-bold transition-colors duration-500",
                      isActive || isComplete ? "text-slate-900" : "text-slate-600"
                    )}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-3 text-sm leading-relaxed transition-opacity duration-500",
                      isActive ? "text-slate-600 opacity-100" : "text-slate-500 opacity-75"
                    )}
                  >
                    {step.description}
                  </p>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
