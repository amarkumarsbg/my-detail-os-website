"use client";

import {
  ClipboardList,
  Users,
  Receipt,
  Package,
  History,
  MessageSquare,
  UserCog,
  type LucideIcon,
} from "lucide-react";
import { problemItems } from "@/data/features";
import { FadeIn } from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

const PROBLEM_ICONS: Record<(typeof problemItems)[number]["icon"], LucideIcon> = {
  clipboard: ClipboardList,
  users: Users,
  receipt: Receipt,
  package: Package,
  history: History,
  message: MessageSquare,
  staff: UserCog,
};

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-rose-100/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-16">
          <FadeIn className="lg:sticky lg:top-28">
            <p className="inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-600 ring-1 ring-inset ring-rose-500/20">
              The Challenge
            </p>
            <h2 className="mt-6 text-balance font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Running a workshop shouldn&apos;t mean managing everything manually.
            </h2>
            <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
              Paper notes, spreadsheets, and chat threads create delays and limited visibility when
              the day gets busy.
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
              <span className="h-px w-8 bg-rose-300" />
              Common workshop friction points
            </div>
          </FadeIn>

          <StaggerContainer className="grid gap-3 sm:grid-cols-2" staggerChildren={0.06}>
            {problemItems.map((item, index) => {
              const Icon = PROBLEM_ICONS[item.icon];
              return (
                <StaggerItem
                  key={item.title}
                  className={
                    index === problemItems.length - 1 && problemItems.length % 2 === 1
                      ? "sm:col-span-2"
                      : undefined
                  }
                >
                  <div className="group flex h-full items-start gap-4 rounded-2xl border border-slate-200/80 bg-white px-4 py-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-200 hover:shadow-md sm:px-5 sm:py-5">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600 ring-1 ring-rose-500/10 transition-colors group-hover:bg-rose-100">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <p className="text-[15px] font-semibold tracking-tight text-slate-900">
                        {item.title}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
