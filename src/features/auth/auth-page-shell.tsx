import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type AuthPageShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  /** Wider card for multi-field forms like signup */
  wide?: boolean;
};

export function AuthPageShell({
  title,
  description,
  children,
  wide = false,
}: AuthPageShellProps) {
  return (
    <div className="relative flex min-h-dvh flex-col overflow-x-hidden bg-slate-50">
      {/* Soft atmosphere — mobile + desktop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.12),transparent_55%),linear-gradient(180deg,#f8fafc_0%,#f1f5f9_100%)]"
      />

      {/* Brand pill → homepage (same chrome as marketing navbar logo) */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-3 pt-4 sm:px-6 sm:pt-6 lg:px-8">
        <Link
          href="/"
          aria-label={`${siteConfig.name} — Home`}
          className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 bg-white/70 px-2 shadow-lg backdrop-blur-xl transition-opacity hover:opacity-90 sm:h-14 sm:gap-2.5 sm:px-3"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteConfig.logoMark}
            alt=""
            width={36}
            height={36}
            className="size-7 shrink-0 rounded-md object-cover shadow-sm sm:size-9 sm:rounded-lg"
          />
          <span className="pr-1.5 font-heading text-sm font-semibold tracking-tight whitespace-nowrap text-slate-900 sm:pr-3 sm:text-base">
            {siteConfig.name}
          </span>
        </Link>
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-10">
        <div
          className={cn(
            "w-full border border-slate-200/80 bg-white shadow-sm",
            "rounded-2xl p-5 sm:p-8 md:p-10",
            wide ? "max-w-lg" : "max-w-md"
          )}
        >
          <div className="mb-6 text-center sm:mb-8">
            <h1 className="text-balance text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              {title}
            </h1>
            <p className="mt-2 max-w-sm mx-auto text-pretty text-sm leading-relaxed text-slate-500">
              {description}
            </p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
