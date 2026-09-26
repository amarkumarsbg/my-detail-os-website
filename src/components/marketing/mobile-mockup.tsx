import Image from "next/image";

type MobileScreen = "workshop" | "customer";

const SCREENS: Record<
  MobileScreen,
  { src: string; alt: string; label: string }
> = {
  workshop: {
    src: "/images/mobile-workshop-v2.png",
    alt: "MY DETAIL OS workshop mobile dashboard",
    label: "Workshop App",
  },
  customer: {
    src: "/images/mobile-customer-v2.png",
    alt: "MY DETAIL OS customer portal on mobile",
    label: "Customer Portal",
  },
};

/** Slim bezel-less phone frame with punch-hole camera. */
export function MobileMockup({
  screen = "workshop",
  className = "",
  showLabel = false,
}: {
  screen?: MobileScreen;
  className?: string;
  showLabel?: boolean;
}) {
  const { src, alt, label } = SCREENS[screen];

  return (
    <div className={`relative mx-auto w-[min(100%,220px)] sm:w-[236px] md:w-[252px] ${className}`}>
      {showLabel ? (
        <p className="mb-3 text-center text-xs font-semibold tracking-wide text-slate-500 uppercase">
          {label}
        </p>
      ) : null}

      <div className="relative">
        <div className="rounded-[1.65rem] bg-gradient-to-b from-slate-600 via-slate-800 to-slate-900 p-[2px] shadow-[0_20px_40px_-18px_rgba(15,23,42,0.45)] sm:shadow-[0_28px_50px_-20px_rgba(15,23,42,0.55)]">
          <div className="relative overflow-hidden rounded-[1.55rem] bg-white">
            <div
              aria-hidden
              className="pointer-events-none absolute top-2.5 left-1/2 z-20 flex size-[11px] -translate-x-1/2 items-center justify-center rounded-full bg-slate-950 shadow-[inset_0_0_0_1.5px_rgba(30,41,59,0.9)]"
            >
              <span className="size-[4px] rounded-full bg-slate-700/90 ring-1 ring-sky-900/40" />
            </div>

            <Image
              src={src}
              alt={alt}
              width={390}
              height={844}
              sizes="(max-width: 640px) 220px, 252px"
              className="h-auto w-full"
              priority={false}
            />

            <div
              aria-hidden
              className="pointer-events-none absolute bottom-1.5 left-1/2 h-[3px] w-16 -translate-x-1/2 rounded-full bg-slate-900/25"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
