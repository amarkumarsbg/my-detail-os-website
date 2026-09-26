"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
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

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.45,
  viewPortOnce = true,
}: FadeInProps) {
  const directions = {
    up: { y: 18, x: 0 },
    down: { y: -18, x: 0 },
    left: { x: 18, y: 0 },
    right: { x: -18, y: 0 },
    none: { x: 0, y: 0 },
  };

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
      viewport={{ once: viewPortOnce, margin: "0px 0px -12% 0px", amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: EASE_OUT,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
