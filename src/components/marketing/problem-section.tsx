"use client";

import Link from "next/link";
import {
  ClipboardList,
  Users,
  Receipt,
  Package,
  History,
  MessageSquare,
  UserCog,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { problemItems } from "@/data/features";
import { FadeIn } from "@/components/ui/fade-in";

const PROBLEM_ICONS: Record<(typeof problemItems)[number]["icon"], LucideIcon> = {
  clipboard: ClipboardList,
  users: Users,
  receipt: Receipt,
  package: Package,
  history: History,
  message: MessageSquare,
  staff: UserCog,
};

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export function ProblemSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/40 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 right-0 h-[380px] w-[380px] translate-x-1/3 rounded-full bg-teal-200/25 blur-[90px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start lg:gap-20">
          <FadeIn className="lg:sticky lg:top-28">
            <p className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-700 ring-1 ring-inset ring-teal-500/20">
              The Challenge
            </p>
            <h2 className="mt-6 text-balance font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Running a workshop shouldn&apos;t mean managing everything manually.
            </h2>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              Paper notes, spreadsheets, and chat threads create delays and limited visibility when
              the day gets busy.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-teal-400" />
              <p className="text-sm font-medium text-slate-500">
                {problemItems.length} common workshop friction points
              </p>
            </div>

            <Link
              href="/#solutions"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-800"
            >
              See how MY DETAIL OS fixes this
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeIn>

          <ol className="space-y-3">
            {problemItems.map((item, index) => {
              const Icon = PROBLEM_ICONS[item.icon];
              const num = String(index + 1).padStart(2, "0");

              return (
                <motion.li
                  key={item.title}
                  initial={reduceMotion ? false : { opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: EASE_OUT }}
                >
                  <div className="group flex items-start gap-4 rounded-2xl border border-slate-200/90 bg-white px-4 py-4 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-300/70 hover:shadow-[0_18px_40px_-24px_rgba(15,118,110,0.35)] sm:gap-5 sm:px-5 sm:py-5">
                    <span className="mt-0.5 flex size-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-500/15 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-[11px] font-semibold tracking-wider text-teal-600/80">
                          {num}
                        </span>
                        <p className="text-[15px] font-semibold tracking-tight text-slate-900 sm:text-base">
                          {item.title}
                        </p>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
