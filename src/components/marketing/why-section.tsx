import { whyPoints } from "@/data/features";
import { FadeIn } from "@/components/ui/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

export function WhySection() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-2xl">
          <p className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-600 ring-1 ring-inset ring-teal-500/20">
            Why MY DETAIL OS
          </p>
          <h2 className="mt-6 text-balance font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Designed for workshops that want clarity as they grow.
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8" staggerChildren={0.1}>
          {whyPoints.map((point) => {
            const Icon = point.icon;
            return (
              <StaggerItem
                key={point.title}
                className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-md"
              >
                <div>
                  <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-slate-50 text-slate-600 transition-colors group-hover:bg-teal-50 group-hover:text-teal-600">
                    <Icon className="size-6" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{point.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {point.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
