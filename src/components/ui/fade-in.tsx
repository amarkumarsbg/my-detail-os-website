"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const EASE_OUT = [0.21, 0.47, 0.32, 0.98] as const;

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  viewPortOnce?: boolean;
}

/**
 * Scroll reveal that never leaves content permanently invisible.
 * Mobile Safari / LAN devices often miss `whileInView`; we fall back to visible.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.45,
  viewPortOnce = true,
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    // Safety net: if intersection never fires (common on phones), show content.
    const id = window.setTimeout(() => setForceVisible(true), 1200 + delay * 1000);
    return () => window.clearTimeout(id);
  }, [delay]);

  const directions = {
    up: { y: 18, x: 0 },
    down: { y: -18, x: 0 },
    left: { x: 18, y: 0 },
    right: { x: -18, y: 0 },
    none: { x: 0, y: 0 },
  };

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      animate={forceVisible ? { opacity: 1, x: 0, y: 0 } : undefined}
      viewport={{ once: viewPortOnce, margin: "0px 0px -4% 0px", amount: 0.05 }}
      transition={{
        duration,
        delay: forceVisible ? 0 : delay,
        ease: EASE_OUT,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
