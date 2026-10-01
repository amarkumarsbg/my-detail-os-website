"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

type AuthPageShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
  /** Wider card for multi-field forms like signup */
  wide?: boolean;
};

function AnimatedWords({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  reduceMotion,
}: {
  text: string;
  className?: string;
  as?: "h1" | "p" | "span";
  delay?: number;
  reduceMotion: boolean | null;
}) {
  const words = text.trim().split(/\s+/);

  if (reduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={cn("flex flex-wrap justify-center gap-x-[0.28em]", className)}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          className="inline-block"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            delay: delay + i * 0.055,
            ease: EASE_OUT,
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}

export function AuthPageShell({
  title,
  description,
  children,
  wide = false,
}: AuthPageShellProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative flex min-h-[calc(100dvh-3.5rem)] flex-col overflow-x-hidden bg-slate-50 sm:min-h-[calc(100dvh-4rem)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.12),transparent_55%),linear-gradient(180deg,#f8fafc_0%,#f1f5f9_100%)]"
      />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-start px-3 py-4 sm:justify-center sm:px-6 sm:py-10">
        <div
          className={cn(
            "w-full border border-slate-200/80 bg-white shadow-sm",
            "rounded-xl p-4 sm:rounded-2xl sm:p-8 md:p-10",
            wide ? "max-w-lg" : "max-w-md"
          )}
        >
          <div className="mb-4 text-center sm:mb-8">
            <AnimatedWords
              as="h1"
              text={title}
              delay={0.05}
              reduceMotion={reduceMotion}
              className="text-balance text-lg font-bold tracking-tight text-slate-900 sm:text-2xl"
            />
            <AnimatedWords
              as="p"
              text={description}
              delay={0.22}
              reduceMotion={reduceMotion}
              className="mt-1 max-w-sm mx-auto text-pretty text-sm leading-snug text-slate-500 sm:mt-2 sm:leading-relaxed"
            />
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4, ease: EASE_OUT }}
          >
            {children}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
