import type { LucideIcon } from "lucide-react";
import {
  Package,
  Zap,
  BellRing,
  MessageCircle,
  ClipboardList,
  Receipt,
  Smartphone,
  UserCog,
  Gift,
  BarChart3,
} from "lucide-react";

const MARQUEE_ITEMS: { label: string; icon: LucideIcon }[] = [
  { label: "Inventory Management", icon: Package },
  { label: "Hassle-Free Setup", icon: Zap },
  { label: "Automated Service Alerts", icon: BellRing },
  { label: "Free WhatsApp Integration", icon: MessageCircle },
  { label: "Job Card Management", icon: ClipboardList },
  { label: "GST Billing & Invoices", icon: Receipt },
  { label: "Customer Portal Access", icon: Smartphone },
  { label: "Staff & Attendance", icon: UserCog },
  { label: "Rewards & Membership", icon: Gift },
  { label: "Real-Time Reports", icon: BarChart3 },
];

function MarqueeTrack({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="feature-marquee__track flex shrink-0 items-center gap-10 pe-10 sm:gap-14 sm:pe-14"
      aria-hidden={ariaHidden || undefined}
    >
      {MARQUEE_ITEMS.map(({ label, icon: Icon }) => (
        <li
          key={label}
          className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-sm font-medium text-slate-700 sm:text-[15px]"
        >
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600 ring-1 ring-teal-500/15">
            <Icon className="size-3.5" aria-hidden />
          </span>
          {label}
        </li>
      ))}
    </ul>
  );
}

/** Infinite horizontal feature ticker — sits under the hero. */
export function FeatureMarquee() {
  return (
    <section
      aria-label="Platform highlights"
      className="overflow-hidden border-b border-slate-200 bg-white py-4 sm:py-5"
    >
      <div className="feature-marquee relative flex w-full overflow-hidden">
        <div className="feature-marquee__fade feature-marquee__fade--left" aria-hidden />
        <div className="feature-marquee__fade feature-marquee__fade--right" aria-hidden />
        <div className="feature-marquee__viewport flex w-max">
          <MarqueeTrack />
          <MarqueeTrack ariaHidden />
        </div>
      </div>
      <p className="sr-only">
        Includes inventory management, hassle-free setup, automated service alerts, WhatsApp
        integration, job cards, billing, customer portal, staff tools, rewards, and reports.
      </p>
    </section>
  );
}
