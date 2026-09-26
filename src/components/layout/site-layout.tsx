"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollToTop } from "@/components/marketing/scroll-to-top";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgot-password";

  // Feature pages have dark hero sections that need to reach the absolute top of the screen
  const isFeaturePage = pathname.startsWith("/features/");
  const hasNoTopPadding = isAuthPage || isFeaturePage;

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      {!isAuthPage && <Navbar />}
      <main className={hasNoTopPadding ? "flex-1" : "flex-1 pt-14 sm:pt-16"}>
        {children}
      </main>
      {!isAuthPage && <Footer />}
      <ScrollToTop />
    </div>
  );
}
