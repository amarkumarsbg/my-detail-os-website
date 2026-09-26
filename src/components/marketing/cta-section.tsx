import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";

export function CtaSection({
  title = "Run your workshop like a detailing studio.",
  description = "Start a free trial and see how MY DETAIL OS keeps jobs, billing, and customers in one place.",
  primaryLabel = "Start Free Trial",
  primaryHref = "/signup",
  secondaryLabel = "Contact Us",
  secondaryHref = "/#contact",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/images/cta-workshop-storefront.png"
          alt="Modern auto detailing workshop lit at night"
          fill
          priority={false}
          className="object-cover object-[60%_center] sm:object-center"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30 sm:via-black/70 sm:to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/45"
        />
      </div>

      <div className="relative mx-auto flex min-h-[420px] w-full max-w-7xl items-center px-4 py-16 sm:min-h-[480px] sm:px-6 sm:py-20 lg:min-h-[520px] lg:px-8">
        <FadeIn className="max-w-xl">
          <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-teal-400 uppercase">
            <span aria-hidden className="inline-block h-px w-5 bg-teal-400" />
            Get our platform
          </p>
          <h2 className="mt-5 text-balance font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-300 sm:text-lg">
            {description}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href={primaryHref}
              {...(primaryHref === "/signup" || primaryHref === "/login"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <Button
                size="lg"
                className="rounded-none bg-teal-600 px-8 py-6 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-teal-500"
              >
                {primaryLabel}
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
            <Link href={secondaryHref}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-none border-white/35 bg-transparent px-8 py-6 text-sm font-semibold tracking-wide text-white uppercase hover:border-white/55 hover:bg-white/10 hover:text-white"
              >
                {secondaryLabel}
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
