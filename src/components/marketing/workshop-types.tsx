import { FadeIn } from "@/components/ui/fade-in";
import {
  Car,
  Bike,
  Zap,
  Truck,
  Bus,
  Paintbrush,
  Disc,
  Battery,
  Network,
  User,
  type LucideIcon,
} from "lucide-react";

const workshopTypes = [
  { name: "Car Garages", icon: Car },
  { name: "Bike Workshops", icon: Bike },
  { name: "EV Garages", icon: Zap },
  { name: "Truck Workshops", icon: Truck },
  { name: "Fleet Workshops", icon: Bus },
  { name: "Car Detailing", icon: Paintbrush },
  { name: "Tyre Shops", icon: Disc },
  { name: "Battery Shops", icon: Battery },
  { name: "Multi-Branch Garages", icon: Network },
  { name: "Independent Garages", icon: User },
];

function WorkshopIconFace({
  Icon,
  variant,
}: {
  Icon: LucideIcon;
  variant: "front" | "back";
}) {
  const isBack = variant === "back";

  return (
    <span
      className={
        isBack
          ? "workshop-type-face workshop-type-face--back absolute inset-0 flex items-center justify-center rounded-full"
          : "workshop-type-face workshop-type-face--front absolute inset-0 flex items-center justify-center rounded-full"
      }
    >
      <span
        aria-hidden
        className={
          isBack
            ? "absolute inset-0 rounded-full border-2 border-teal-500/40"
            : "absolute inset-0 rounded-full border-2 border-slate-300"
        }
      />
      <span
        className={
          isBack
            ? "relative flex size-[4.1rem] items-center justify-center rounded-full border-[1.5px] border-teal-600 bg-teal-600 text-white sm:size-[4.35rem]"
            : "relative flex size-[4.1rem] items-center justify-center rounded-full border-[1.5px] border-slate-400 bg-white text-slate-600 sm:size-[4.35rem]"
        }
      >
        <Icon className="size-7 stroke-[1.5]" aria-hidden />
      </span>
    </span>
  );
}

export function WorkshopTypes() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Garage Software Built for Every Type of{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10">Automotive Workshop</span>
              <span className="absolute -bottom-1 right-0 left-0 h-1 bg-teal-500" />
            </span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Choose the solution designed specifically for your garage business model.
          </p>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 md:grid-cols-5 md:gap-y-12">
          {workshopTypes.map((type) => {
            const Icon = type.icon;
            return (
              <div
                key={type.name}
                className="group flex cursor-pointer flex-col items-center text-center"
              >
                <div className="workshop-type-scene relative size-[4.75rem] sm:size-20">
                  <div className="workshop-type-flip relative h-full w-full">
                    <WorkshopIconFace Icon={Icon} variant="front" />
                    <WorkshopIconFace Icon={Icon} variant="back" />
                  </div>
                </div>
                <h3 className="mt-4 text-xs font-semibold tracking-wide text-slate-800 uppercase transition-colors duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-teal-700 sm:text-[13px]">
                  {type.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
