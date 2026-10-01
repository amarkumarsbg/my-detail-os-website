import { testimonials, testimonialsDisclaimer } from "@/data/testimonials";
import { FadeIn } from "@/components/ui/fade-in";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-10 sm:py-14 lg:py-16">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
        <div className="h-[400px] w-[600px] rounded-full bg-teal-500/10 blur-[120px]" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3">
        <div className="h-[400px] w-[600px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-400">
            From the floor
          </p>
          <h2 className="mt-3 text-balance text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            Clearer operations.<br/>Less manual chase.
          </h2>
          <p className="mt-4 text-sm text-slate-400">{testimonialsDisclaimer}</p>
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => {
            // Get initials for avatar (e.g. "Arjun Mehta" -> "AM")
            const initials = item.name.split(" ").map(n => n[0]).join("").substring(0, 2);
            
            // Generate a deterministic gradient color based on index
            const gradientClasses = [
              "from-teal-400 to-emerald-600",
              "from-blue-400 to-indigo-600",
              "from-purple-400 to-pink-600",
            ];
            const gradient = gradientClasses[index % gradientClasses.length];

            return (
              <FadeIn key={item.id} delay={index * 0.15} className="h-full flex">
                <figure className="relative flex w-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md transition-all hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10">
                  <Quote className="absolute top-8 right-8 size-10 text-white/5 rotate-180" />
                  
                  <div>
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <blockquote className="text-base leading-relaxed text-slate-200">
                      "{item.quote}"
                    </blockquote>
                  </div>
                  
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                    <div className={cn("flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br shadow-inner text-white font-bold tracking-wider", gradient)}>
                      {initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{item.name}</p>
                      <p className="mt-1 text-xs text-slate-400 line-clamp-1">
                        {item.role}, {item.workshop}
                      </p>
                      <p className="text-xs text-slate-500">{item.location}</p>
                    </div>
                  </figcaption>
                </figure>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
