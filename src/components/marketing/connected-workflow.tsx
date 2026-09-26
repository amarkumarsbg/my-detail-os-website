"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import {
  WORKFLOW_CARD_MS,
  WORKFLOW_PAUSE_MS,
  workflowConnectors,
  workflowNodes,
  type ConnectorDirection,
  type WorkflowNode,
} from "@/data/workflow";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

type LinkState = "idle" | "active" | "done";

export function ConnectedWorkflow() {
  const reduceMotion = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rootRef, { amount: 0.25, once: false });

  const [revealed, setRevealed] = useState<Set<string>>(() => new Set());
  const [activeId, setActiveId] = useState<string | null>(null);
  const [linkStates, setLinkStates] = useState<Record<string, LinkState>>(() =>
    Object.fromEntries(workflowConnectors.map((c) => [c.id, "idle" as LinkState]))
  );

  const timers = useRef<number[]>([]);
  const runId = useRef(0);

  const clearTimers = useCallback(() => {
    timers.current.forEach((id) => window.clearTimeout(id));
    timers.current = [];
  }, []);

  const schedule = useCallback((fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    timers.current.push(id);
  }, []);

  const resetCycle = useCallback(() => {
    setRevealed(new Set());
    setActiveId(null);
    setLinkStates(Object.fromEntries(workflowConnectors.map((c) => [c.id, "idle" as LinkState])));
  }, []);

  const runCycle = useCallback(() => {
    const id = ++runId.current;
    clearTimers();
    resetCycle();

    let t = 80;

    workflowNodes.forEach((node, i) => {
      // Reveal card
      schedule(() => {
        if (runId.current !== id) return;
        setRevealed((prev) => new Set(prev).add(node.id));
        setActiveId(node.id);
      }, t);
      t += WORKFLOW_CARD_MS;

      // Connector to next (or loop back after last)
      const connector = workflowConnectors[i];
      if (!connector) return;

      schedule(() => {
        if (runId.current !== id) return;
        setLinkStates((prev) => ({ ...prev, [connector.id]: "active" }));
      }, t);

      schedule(() => {
        if (runId.current !== id) return;
        setLinkStates((prev) => ({ ...prev, [connector.id]: "done" }));
      }, t + connector.durationMs);

      t += connector.durationMs;
    });

    // Soft hold with all nodes live, then restart
    schedule(() => {
      if (runId.current !== id) return;
      setActiveId(null);
    }, t);

    schedule(() => {
      if (runId.current !== id) return;
      runCycle();
    }, t + WORKFLOW_PAUSE_MS);
  }, [clearTimers, resetCycle, schedule]);

  useEffect(() => {
    if (reduceMotion) {
      clearTimers();
      setRevealed(new Set(workflowNodes.map((n) => n.id)));
      setActiveId(null);
      setLinkStates(
        Object.fromEntries(workflowConnectors.map((c) => [c.id, "done" as LinkState]))
      );
      return;
    }

    if (!inView) {
      clearTimers();
      runId.current += 1;
      return;
    }

    runCycle();
    return () => {
      clearTimers();
      runId.current += 1;
    };
  }, [inView, reduceMotion, runCycle, clearTimers]);

  const nodeById = Object.fromEntries(workflowNodes.map((n) => [n.id, n])) as Record<
    string,
    WorkflowNode
  >;

  return (
    <div ref={rootRef} className="w-full">
      {/* Desktop / large tablet zig-zag */}
      <div className="mx-auto hidden max-w-5xl lg:block">
        <div
          className="grid items-center gap-x-2 gap-y-1"
          style={{
            gridTemplateColumns: "minmax(0,1fr) 44px minmax(0,1fr) 44px minmax(0,1fr)",
            gridTemplateRows: "auto 36px auto",
          }}
        >
          <WorkflowCard
            node={nodeById.workshop}
            revealed={revealed.has("workshop") || !!reduceMotion}
            active={activeId === "workshop"}
            reduceMotion={!!reduceMotion}
          />
          <WorkflowLink
            direction="right"
            state={linkStates["workshop-customers"]}
            durationMs={800}
            reduceMotion={!!reduceMotion}
          />
          <WorkflowCard
            node={nodeById.customers}
            revealed={revealed.has("customers") || !!reduceMotion}
            active={activeId === "customers"}
            reduceMotion={!!reduceMotion}
          />
          <WorkflowLink
            direction="right"
            state={linkStates["customers-billing"]}
            durationMs={800}
            reduceMotion={!!reduceMotion}
          />
          <WorkflowCard
            node={nodeById.billing}
            revealed={revealed.has("billing") || !!reduceMotion}
            active={activeId === "billing"}
            reduceMotion={!!reduceMotion}
          />

          <WorkflowLink
            direction="up"
            state={linkStates["inventory-workshop"]}
            durationMs={1200}
            reduceMotion={!!reduceMotion}
            className="justify-self-center"
          />
          <div />
          <div />
          <div />
          <WorkflowLink
            direction="down"
            state={linkStates["billing-portal"]}
            durationMs={800}
            reduceMotion={!!reduceMotion}
            className="justify-self-center"
          />

          <WorkflowCard
            node={nodeById.inventory}
            revealed={revealed.has("inventory") || !!reduceMotion}
            active={activeId === "inventory"}
            reduceMotion={!!reduceMotion}
          />
          <WorkflowLink
            direction="left"
            state={linkStates["staff-inventory"]}
            durationMs={800}
            reduceMotion={!!reduceMotion}
          />
          <WorkflowCard
            node={nodeById.staff}
            revealed={revealed.has("staff") || !!reduceMotion}
            active={activeId === "staff"}
            reduceMotion={!!reduceMotion}
          />
          <WorkflowLink
            direction="left"
            state={linkStates["portal-staff"]}
            durationMs={800}
            reduceMotion={!!reduceMotion}
          />
          <WorkflowCard
            node={nodeById.portal}
            revealed={revealed.has("portal") || !!reduceMotion}
            active={activeId === "portal"}
            reduceMotion={!!reduceMotion}
          />
        </div>
      </div>

      {/* Mobile / tablet vertical flow */}
      <div className="mx-auto flex max-w-md flex-col items-stretch lg:hidden">
        {workflowNodes.map((node, i) => {
          const connector = workflowConnectors[i];
          return (
            <div key={node.id} className="flex flex-col items-center">
              <WorkflowCard
                node={node}
                revealed={revealed.has(node.id) || !!reduceMotion}
                active={activeId === node.id}
                reduceMotion={!!reduceMotion}
                className="w-full"
              />
              {connector &&
                (i === workflowNodes.length - 1 ? (
                  <MobileLoopLink
                    state={linkStates[connector.id]}
                    durationMs={connector.durationMs}
                    reduceMotion={!!reduceMotion}
                  />
                ) : (
                  <WorkflowLink
                    direction="down"
                    state={linkStates[connector.id]}
                    durationMs={connector.durationMs}
                    reduceMotion={!!reduceMotion}
                    className="h-12 w-10"
                  />
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function WorkflowCard({
  node,
  revealed,
  active,
  reduceMotion,
  className,
}: {
  node: WorkflowNode;
  revealed: boolean;
  active: boolean;
  reduceMotion: boolean;
  className?: string;
}) {
  const Icon = node.icon;

  return (
    <motion.article
      layout={false}
      initial={false}
      animate={{
        opacity: revealed ? 1 : 0.28,
        scale: active ? 1.02 : 1,
        y: revealed ? 0 : 6,
      }}
      transition={{ duration: reduceMotion ? 0 : 0.45, ease: EASE }}
      className={cn(
        "relative rounded-2xl border bg-slate-950/90 p-3.5 backdrop-blur-sm sm:p-4",
        active
          ? "border-teal-400/45 shadow-[0_0_32px_-10px_rgba(251,134,18,0.55)]"
          : "border-white/10 shadow-none",
        className
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500",
          active ? "opacity-100" : "opacity-0",
          "bg-[radial-gradient(ellipse_at_top,_rgba(251,134,18,0.12),_transparent_65%)]"
        )}
      />

      <div className="relative flex items-start gap-2.5">
        <motion.span
          animate={
            reduceMotion
              ? undefined
              : active
                ? { scale: [1, 1.08, 1], rotate: [0, -4, 0] }
                : { scale: 1, rotate: 0 }
          }
          transition={{ duration: 0.55, ease: EASE }}
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-lg ring-1 ring-inset transition-colors",
            active
              ? "bg-teal-400/15 text-teal-300 ring-teal-400/30"
              : "bg-white/5 text-slate-400 ring-white/10"
          )}
        >
          <Icon className="size-3.5" aria-hidden />
        </motion.span>

        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-semibold tracking-tight text-white">{node.title}</h3>
          <p className="mt-0.5 text-xs leading-snug text-slate-400">{node.description}</p>
        </div>
      </div>

      <ul className="relative mt-2.5 flex flex-wrap gap-1">
        {node.items.map((item) => (
          <li
            key={item}
            className={cn(
              "inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium ring-1 ring-inset transition-all duration-300",
              active
                ? "bg-teal-400/10 text-teal-100/90 ring-teal-400/25"
                : "bg-slate-900/60 text-slate-400 ring-white/8"
            )}
          >
            <CheckCircle2
              className={cn("size-2.5", active ? "text-teal-400" : "text-teal-600/70")}
              aria-hidden
            />
            {item}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

function WorkflowLink({
  direction,
  state,
  durationMs,
  reduceMotion,
  className,
}: {
  direction: ConnectorDirection;
  state: LinkState;
  durationMs: number;
  reduceMotion: boolean;
  className?: string;
}) {
  const horizontal = direction === "right" || direction === "left";
  const forward = direction === "right" || direction === "down";
  const duration = durationMs / 1000;
  const lit = state === "active" || state === "done" || reduceMotion;

  return (
    <div
      aria-hidden
      className={cn(
        "relative flex items-center justify-center",
        horizontal ? "h-full min-h-8 w-full" : "h-full min-h-10 w-full",
        className
      )}
    >
      {/* Track */}
      <div
        className={cn(
          "absolute rounded-full bg-white/8",
          horizontal ? "inset-x-1 top-1/2 h-px -translate-y-1/2" : "inset-y-1 left-1/2 w-px -translate-x-1/2"
        )}
      />

      {/* Drawn line */}
      <motion.div
        className={cn(
          "absolute rounded-full",
          horizontal ? "inset-x-1 top-1/2 h-[2px] -translate-y-1/2" : "inset-y-1 left-1/2 w-[2px] -translate-x-1/2",
          direction === "right" && "bg-gradient-to-r from-teal-500/20 via-teal-400/80 to-teal-500/20",
          direction === "left" && "bg-gradient-to-l from-teal-500/20 via-teal-400/80 to-teal-500/20",
          direction === "up" && "bg-gradient-to-t from-teal-500/20 via-teal-400/80 to-teal-500/20",
          direction === "down" && "bg-gradient-to-b from-teal-500/20 via-teal-400/80 to-teal-500/20"
        )}
        initial={false}
        animate={
          horizontal
            ? {
                scaleX: lit ? 1 : 0,
                opacity: state === "active" ? 1 : lit ? 0.55 : 0,
              }
            : {
                scaleY: lit ? 1 : 0,
                opacity: state === "active" ? 1 : lit ? 0.55 : 0,
              }
        }
        style={{
          originX: direction === "left" ? 1 : direction === "right" ? 0 : 0.5,
          originY: direction === "up" ? 1 : direction === "down" ? 0 : 0.5,
        }}
        transition={{
          duration: reduceMotion ? 0 : state === "active" ? duration * 0.85 : 0.35,
          ease: EASE,
        }}
      />

      {/* Soft glow under active link */}
      <motion.div
        className={cn(
          "absolute rounded-full bg-teal-400/40 blur-[3px]",
          horizontal ? "inset-x-2 top-1/2 h-[3px] -translate-y-1/2" : "inset-y-2 left-1/2 w-[3px] -translate-x-1/2"
        )}
        initial={false}
        animate={{ opacity: state === "active" ? 0.7 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Traveling particle */}
      <AnimatePresence>
        {state === "active" && !reduceMotion && (
          <motion.span
            key="dot"
            className="absolute z-10 size-2 rounded-full bg-teal-300 shadow-[0_0_10px_2px_rgba(251,134,18,0.85)]"
            initial={
              horizontal
                ? { left: forward ? "4%" : "96%", top: "50%", x: "-50%", y: "-50%", opacity: 0 }
                : { top: forward ? "4%" : "96%", left: "50%", x: "-50%", y: "-50%", opacity: 0 }
            }
            animate={
              horizontal
                ? { left: forward ? "96%" : "4%", opacity: 1 }
                : { top: forward ? "96%" : "4%", opacity: 1 }
            }
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration, ease: [0.4, 0, 0.2, 1] }}
          />
        )}
      </AnimatePresence>

      {/* Arrow head */}
      <motion.span
        className={cn(
          "absolute text-teal-400/90",
          direction === "right" && "right-0 top-1/2 -translate-y-1/2",
          direction === "left" && "left-0 top-1/2 -translate-y-1/2",
          direction === "down" && "bottom-0 left-1/2 -translate-x-1/2",
          direction === "up" && "top-0 left-1/2 -translate-x-1/2"
        )}
        initial={false}
        animate={{ opacity: lit ? (state === "active" ? 1 : 0.5) : 0 }}
        transition={{ duration: 0.25 }}
      >
        <ArrowTip direction={direction} />
      </motion.span>
    </div>
  );
}

function MobileLoopLink({
  state,
  durationMs,
  reduceMotion,
}: {
  state: LinkState;
  durationMs: number;
  reduceMotion: boolean;
}) {
  const lit = state === "active" || state === "done" || reduceMotion;
  const duration = durationMs / 1000;

  return (
    <div aria-hidden className="relative flex h-14 w-full items-center justify-center">
      <motion.div
        className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5"
        animate={{
          borderColor:
            state === "active" ? "rgba(251,134,18,0.45)" : lit ? "rgba(251,134,18,0.2)" : "rgba(255,255,255,0.1)",
          boxShadow: state === "active" ? "0 0 20px -6px rgba(251,134,18,0.5)" : "0 0 0 transparent",
        }}
        transition={{ duration: 0.35 }}
      >
        <AnimatePresence>
          {state === "active" && !reduceMotion && (
            <motion.span
              key="loop-dot"
              className="size-1.5 rounded-full bg-teal-300 shadow-[0_0_8px_rgba(251,134,18,0.9)]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.15, 0.9] }}
              exit={{ opacity: 0 }}
              transition={{ duration, repeat: 0 }}
            />
          )}
        </AnimatePresence>
        <span
          className={cn(
            "text-[11px] font-medium tracking-wide uppercase transition-colors",
            lit ? "text-teal-300/90" : "text-slate-500"
          )}
        >
          ↺ Back to Workshop
        </span>
      </motion.div>
    </div>
  );
}

function ArrowTip({ direction }: { direction: ConnectorDirection }) {
  const rotate =
    direction === "right" ? 0 : direction === "down" ? 90 : direction === "left" ? 180 : -90;

  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      className="overflow-visible"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <path
        d="M2 1.5 L8 5 L2 8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
