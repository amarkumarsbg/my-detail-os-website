import Link from "next/link";
import { solutionFeatures } from "@/data/features";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";

export function TrustStrip() {
  return (
    <section className="border-b border-slate-200 bg-slate-50 pt-10 pb-12 sm:pt-14 sm:pb-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <p className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-600 ring-1 ring-inset ring-teal-500/20">
            Platform Features
          </p>
          <h2 className="mt-4 text-balance font-heading text-2xl font-bold tracking-tight text-slate-900 sm:mt-5 sm:text-4xl">
            Everything you need to run your workshop
          </h2>
          <p className="mt-2.5 text-base leading-relaxed text-slate-600 sm:mt-3 sm:text-lg">
            A complete suite of tools designed specifically for modern auto detailing and repair businesses.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4" staggerChildren={0.1}>
          {solutionFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <Link
                  href={item.href ?? "/#features"}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/50 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600/40"
                >
                  <div>
                    <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                      <Icon className="size-6" aria-hidden />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  <span className="mt-8 inline-flex items-center text-sm font-semibold text-teal-600 transition-colors group-hover:text-teal-700">
                    Explore Feature
                    <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
