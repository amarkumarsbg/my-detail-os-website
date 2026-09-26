import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function CtaSection({
  title = "Ready to modernize your workshop?",
  description = "Start your free trial, explore pricing, or talk to sales about a rollout for your team.",
  primaryLabel = "Start Free Trial",
  primaryHref = "/signup",
  secondaryLabel = "View Pricing",
  secondaryHref = "/pricing",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <FadeIn className="relative overflow-hidden rounded-3xl px-6 py-16 text-center shadow-2xl sm:px-16 sm:py-20 lg:px-24 border border-white/10">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/cta-bg.png"
            alt="Sports car detailing"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </div>
        
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/40" />
        
        {/* Subtle Background Glow */}
        <div className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[400px] w-[600px] rounded-full bg-teal-500/20 blur-[100px] mix-blend-screen" />
        </div>
        
        <h2 className="mx-auto max-w-2xl text-balance font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300 drop-shadow-md">
          {description}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 relative z-10">
          <Link
            href={primaryHref}
            {...(primaryHref === "/signup" || primaryHref === "/login"
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <Button size="lg" className="rounded-full bg-teal-500 px-8 py-6 text-base font-semibold text-white transition-all hover:bg-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] border border-teal-400/50">
              {primaryLabel}
              <ArrowRight className="ml-2 size-5" />
            </Button>
          </Link>
          <Link href={secondaryHref}>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/30 bg-black/40 px-8 py-6 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/50"
            >
              {secondaryLabel}
            </Button>
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
