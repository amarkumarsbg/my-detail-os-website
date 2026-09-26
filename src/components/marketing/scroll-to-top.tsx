"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    let last = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const next = window.scrollY > 640;
        if (next !== last) {
          last = next;
          setVisible(next);
        }
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "fixed right-4 bottom-4 z-40 flex size-10 items-center justify-center rounded-xl border border-border bg-white text-foreground shadow-md transition-opacity duration-200 hover:bg-slate-50 sm:right-6 sm:bottom-6",
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <ArrowUp className="size-4" />
    </button>
  );
}
