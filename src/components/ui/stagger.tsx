"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const EASE_OUT = [0.21, 0.47, 0.32, 0.98] as const;

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
  viewPortOnce?: boolean;
}

export function StaggerContainer({
  children,
  className,
  delayChildren = 0,
  staggerChildren = 0.1,
  viewPortOnce = true,
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: viewPortOnce, margin: "0px 0px -8% 0px", amount: 0.12 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  yOffset?: number;
  duration?: number;
}

export function StaggerItem({
  children,
  className,
  yOffset = 18,
  duration = 0.4,
}: StaggerItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: yOffset },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration,
            ease: EASE_OUT,
          },
        },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
