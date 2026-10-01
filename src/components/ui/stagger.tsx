"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
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
  const reduceMotion = useReducedMotion();
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setForceVisible(true), 1400 + delayChildren * 1000);
    return () => window.clearTimeout(id);
  }, [delayChildren]);

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      animate={forceVisible ? "show" : undefined}
      viewport={{ once: viewPortOnce, margin: "0px 0px -8% 0px", amount: 0.08 }}
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
  yOffset = 16,
  duration = 0.4,
}: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

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
