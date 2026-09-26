"use client";

import { useEffect, useRef } from "react";
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
      className="feature-marquee__track flex shrink-0 items-center pe-8 sm:pe-12"
      aria-hidden={ariaHidden || undefined}
    >
      {MARQUEE_ITEMS.map(({ label, icon: Icon }) => (
        <li key={label} className="feature-marquee__item group flex shrink-0 items-center">
          <span className="flex items-center gap-3 whitespace-nowrap px-5 py-0.5 sm:px-7">
            <span className="feature-marquee__icon flex size-8 shrink-0 items-center justify-center text-teal-400/90 transition-colors duration-300 group-hover:text-teal-300">
              <Icon className="size-4" strokeWidth={1.75} aria-hidden />
            </span>
            <span className="text-[13px] leading-5 font-medium tracking-wide text-white/75 transition-colors duration-300 group-hover:text-white sm:text-sm sm:leading-5">
              {label}
            </span>
          </span>
          <span className="feature-marquee__sep" aria-hidden />
        </li>
      ))}
    </ul>
  );
}

/** Infinite feature ticker — glass strip matched to dark hero. */
export function FeatureMarquee() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const viewport = root.querySelector<HTMLElement>(".feature-marquee__viewport");
    if (!viewport) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        viewport.style.animationPlayState = entry.isIntersecting ? "running" : "paused";
      },
      { rootMargin: "80px 0px", threshold: 0 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      role="region"
      aria-label="Platform highlights"
      className="feature-marquee-bar"
    >
      <div className="feature-marquee relative flex w-full overflow-hidden py-4 sm:py-5">
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
    </div>
  );
}
