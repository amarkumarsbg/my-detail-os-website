"use client";

import { GitBranch } from "lucide-react";
import { ConnectedWorkflow } from "@/components/marketing/connected-workflow";
import { FadeIn } from "@/components/ui/fade-in";

export function SolutionSection() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-slate-950 py-16 sm:py-20 lg:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-[320px] w-full max-w-3xl -translate-x-1/2 rounded-full bg-teal-500/15 blur-[120px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto mb-8 max-w-3xl text-center lg:mb-10">
          <p className="inline-flex items-center gap-2 rounded-full bg-teal-500/10 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-teal-400 uppercase ring-1 ring-inset ring-teal-500/20">
            <GitBranch className="size-3.5" aria-hidden />
            Connected Workflow
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Everything your workshop needs.
            <span className="block">Connected in one system.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-400 sm:text-lg">
            From vehicle check-in to customer delivery, My Detail OS keeps your workshop, team,
            customers, billing, and inventory connected.
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <ConnectedWorkflow />
        </FadeIn>

        <FadeIn delay={0.12} className="mt-6 text-center lg:mt-8">
          <p className="text-sm text-slate-500">
            Every module shares the same jobs, customers, and branch data — live.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
