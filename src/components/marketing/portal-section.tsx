import { customerPortal, workshopPortal } from "@/data/features";
import { FadeIn } from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";
import { CheckCircle2 } from "lucide-react";

export function PortalSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-14 sm:py-20 lg:py-24">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="max-w-2xl">
          <p className="inline-flex items-center rounded-full bg-teal-500/10 px-3 py-1 text-sm font-semibold text-teal-400 ring-1 ring-inset ring-teal-500/20">
            Two connected experiences
          </p>
          <h2 className="mt-4 text-balance font-heading text-3xl font-bold tracking-tight text-white sm:mt-6 sm:text-4xl">
            Built for your workshop team and your customers.
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-2 lg:gap-8" staggerChildren={0.2}>
          <StaggerItem className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 transition-all hover:bg-white/10 hover:border-white/20">
            <h3 className="text-2xl font-bold text-white">{workshopPortal.title}</h3>
            <p className="mt-3 text-sm font-medium text-teal-400">
              For {workshopPortal.audience.join(", ")}
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {workshopPortal.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="size-4 text-teal-500 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </StaggerItem>

          <StaggerItem className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 transition-all hover:bg-white/10 hover:border-white/20">
            <h3 className="text-2xl font-bold text-white">{customerPortal.title}</h3>
            <p className="mt-3 text-sm font-medium text-teal-400">
              For {customerPortal.audience.join(", ")}
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {customerPortal.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="size-4 text-teal-500 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
