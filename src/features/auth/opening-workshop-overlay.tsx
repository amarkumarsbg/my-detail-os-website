"use client";

type OpeningWorkshopOverlayProps = {
  /** Optional fallback link if redirect is blocked by the browser. */
  href?: string | null;
};

/**
 * Full-screen handoff state after login/signup — spinner only, no copy.
 */
export function OpeningWorkshopOverlay({ href }: OpeningWorkshopOverlayProps) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950"
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading"
    >
      <div className="workshop-orbit" aria-hidden>
        <span className="workshop-orbit__ring workshop-orbit__ring--outer" />
        <span className="workshop-orbit__ring workshop-orbit__ring--mid" />
        <span className="workshop-orbit__diamond">
          <span className="workshop-orbit__core" />
        </span>
        <span className="workshop-orbit__dot workshop-orbit__dot--a" />
        <span className="workshop-orbit__dot workshop-orbit__dot--b" />
        <span className="workshop-orbit__dot workshop-orbit__dot--c" />
      </div>
      {/* Visually hidden fallback for accessibility / blocked redirects */}
      {href ? (
        <a href={href} className="sr-only">
          Continue
        </a>
      ) : null}
    </div>
  );
}
