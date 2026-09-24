import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BrandMark } from "@/components/brand/brand-mark";
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

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12">
        <div
          className={cn(
            "w-full border border-slate-200/80 bg-white shadow-sm",
            "rounded-2xl p-5 sm:p-8 md:p-10",
            wide ? "max-w-lg" : "max-w-md"
          )}
        >
          <div className="mb-6 flex flex-col items-center text-center sm:mb-8">
            <Link
              href="/"
              aria-label={siteConfig.name}
              className="mb-4 flex flex-col items-center gap-2.5 transition-opacity hover:opacity-90"
            >
              <BrandMark size={52} className="size-12 rounded-2xl shadow-sm sm:size-14" />
              <span className="font-heading text-sm font-semibold tracking-tight text-slate-800">
                {siteConfig.name}
              </span>
            </Link>
            <h1 className="text-balance text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              {title}
            </h1>
            <p className="mt-2 max-w-sm text-pretty text-sm leading-relaxed text-slate-500">
              {description}
            </p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
