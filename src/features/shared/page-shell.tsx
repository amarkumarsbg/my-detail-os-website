import Link from "next/link";
import { Button } from "@/components/ui/button";

export function PageShell({
  title,
  description,
  children,
  showCta = true,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  showCta?: boolean;
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <header className="mb-10 max-w-3xl">
        <p className="eyebrow">MY DETAIL OS</p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-pretty text-muted-foreground">{description}</p>
      </header>
      {children}
      {showCta && (
        <div className="mt-14 rounded-2xl border border-border bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-semibold">Ready to get started?</h2>
          <p className="mt-2 text-muted-foreground">
            Start a free trial or review plans for your workshop size.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/signup">
              <Button className="btn-marketing">Start Free Trial</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="btn-marketing">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
