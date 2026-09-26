"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { primaryNav } from "@/data/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const menuId = useId();
  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setHoveredNav(label);
  };

  const handleMouseLeave = () => {
    hoverTimeout.current = setTimeout(() => {
      setHoveredNav(null);
    }, 150);
  };

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (window.scrollY < 100 && pathname === "/" && !isClickScrolling.current) {
          setActiveHash((prev) => (prev ? "" : prev));
        }
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Intersection Observer for active sections
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = primaryNav
      .filter((item) => item.href.startsWith("/#"))
      .map((item) => item.href.replace("/#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const next = `#${visible[0].target.id}`;
          setActiveHash((prev) => (prev === next ? prev : next));
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.5, 1] }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  // Update hash on initial load if present
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      setActiveHash(window.location.hash);
    }
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: (typeof primaryNav)[number]) => {
    setMenuOpen(false);

    if (pathname !== "/") return;

    const isHash = item.href.startsWith("/#");
    const isHome = item.href === "/";

    if (isHash) {
      const id = item.href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        isClickScrolling.current = true;
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          isClickScrolling.current = false;
        }, 1000);
        window.history.pushState(null, "", item.href);
        setActiveHash(`#${id}`);
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else if (isHome) {
      e.preventDefault();
      isClickScrolling.current = true;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isClickScrolling.current = false;
      }, 1000);
      window.history.pushState(null, "", "/");
      setActiveHash("");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  const pillClass =
    "pointer-events-auto flex items-center rounded-full border border-slate-200/80 bg-white/95 shadow-lg transition-[box-shadow,background-color] duration-200";

  return (
    <>
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "fixed inset-x-0 top-4 z-50 mx-auto w-full max-w-7xl px-3 pointer-events-none sm:top-5 sm:px-6 lg:px-8",
        menuOpen && "z-[60]"
      )}
    >
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left Segment: Logo */}
        <div className={cn(pillClass, "h-11 shrink-0 px-2 sm:h-14 sm:px-3")}>
          <Link
            href="/"
            onClick={(e) => {
              closeMenu();
              if (pathname === "/") {
                e.preventDefault();
                window.history.pushState(null, '', '/');
                setActiveHash("");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 font-heading text-sm font-semibold tracking-tight text-slate-900 group whitespace-nowrap sm:gap-2.5 sm:text-base"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteConfig.logoMark}
              alt=""
              width={36}
              height={36}
              className="size-7 shrink-0 rounded-md object-cover shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md sm:size-9 sm:rounded-lg"
            />
            <span className="pr-1.5 sm:pr-3">{siteConfig.name}</span>
          </Link>
        </div>

        {/* Center Segment: Navigation (Desktop) */}
        <nav className={cn(pillClass, "hidden lg:flex h-14 px-8 gap-8")} aria-label="Primary">
          {primaryNav.map((item) => {
            const isHash = item.href.startsWith("/#");
            const isHome = item.href === "/";
            
            let active = false;
            if (pathname === "/") {
              if (isHome && !activeHash) active = true;
              if (isHash && activeHash === item.href.replace("/", "")) active = true;
            } else {
              active = pathname === item.href;
            }
            
            const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
              if (pathname !== "/") return;
              
              if (isHash) {
                const id = item.href.replace("/#", "");
                const element = document.getElementById(id);
                if (element) {
                  e.preventDefault();
                  
                  isClickScrolling.current = true;
                  if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
                  scrollTimeout.current = setTimeout(() => {
                    isClickScrolling.current = false;
                  }, 1000);
                  
                  window.history.pushState(null, '', item.href);
                  setActiveHash(`#${id}`);
                  element.scrollIntoView({ behavior: "smooth" });
                }
              } else if (isHome) {
                e.preventDefault();
                
                isClickScrolling.current = true;
                if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
                scrollTimeout.current = setTimeout(() => {
                  isClickScrolling.current = false;
                }, 1000);
                
                window.history.pushState(null, '', '/');
                setActiveHash("");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            };

            return (
              <div
                key={item.href}
                className="relative flex h-full items-center"
                onMouseEnter={() =>
                  item.megaMenu ? handleMouseEnter(item.label) : handleMouseEnter("")
                }
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  onClick={handleClick}
                  className={cn(
                    "relative flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200",
                    hoveredNav === item.label && item.megaMenu
                      ? "bg-slate-100 text-slate-950"
                      : active
                        ? "text-teal-700"
                        : "text-slate-600 hover:text-slate-950"
                  )}
                >
                  {item.label}
                  {item.megaMenu && (
                    <ChevronDown
                      className={cn(
                        "size-3.5 opacity-60 transition-transform duration-200",
                        hoveredNav === item.label && "rotate-180"
                      )}
                    />
                  )}
                  {active && hoveredNav !== item.label && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-teal-600"
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Right Segment: Actions */}
        <div className={cn(pillClass, "h-11 shrink-0 gap-1 px-1.5 sm:h-14 sm:gap-2 sm:px-2")}>
          <Link
            href="/login"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block"
          >
            <Button variant="ghost" size="sm" className="h-10 rounded-full px-5 font-medium text-slate-700 hover:bg-slate-100/50 hover:text-slate-950">
              Login
            </Button>
          </Link>
          <Link
            href="/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block"
          >
            <Button size="sm" className="h-10 rounded-full bg-teal-600 px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-teal-500">
              Start Free Trial
            </Button>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100/60 hover:text-slate-950 sm:size-10 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls={menuId}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {hoveredNav && primaryNav.find((i) => i.label === hoveredNav)?.megaMenu && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="pointer-events-auto absolute left-0 right-0 top-[calc(100%+0.65rem)] hidden overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_20px_50px_-20px_rgba(15,23,42,0.25)] lg:block"
            onMouseEnter={() => handleMouseEnter(hoveredNav)}
            onMouseLeave={handleMouseLeave}
          >
            {(() => {
              const activeItem = primaryNav.find((i) => i.label === hoveredNav)!;
              const columns = activeItem.megaMenu!;
              const isRich =
                activeItem.megaMenuLayout === "rich" ||
                columns.some((col) => col.items.some((link) => link.description));

              if (isRich) {
                const links = columns.flatMap((col) => col.items);
                return (
                  <div className="mx-auto max-w-7xl p-5 sm:p-6">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {links.map((link) => {
                        const Icon = link.icon;
                        return (
                          <Link
                            key={`${link.href}-${link.label}`}
                            href={link.href}
                            onClick={() => setHoveredNav(null)}
                            className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-slate-50"
                          >
                            <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-600/10 transition-colors group-hover:bg-teal-100">
                              {Icon ? (
                                <Icon className="size-5" aria-hidden />
                              ) : (
                                <span className="size-2 rounded-full bg-teal-500" />
                              )}
                            </span>
                            <span className="min-w-0">
                              <span className="block text-sm font-semibold text-slate-900 group-hover:text-teal-800">
                                {link.label}
                              </span>
                              {link.description ? (
                                <span className="mt-0.5 block text-[13px] leading-snug text-slate-500 line-clamp-2">
                                  {link.description}
                                </span>
                              ) : null}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <div className="mx-auto flex max-w-7xl justify-between gap-8 p-8">
                  {columns.map((column) => (
                    <div key={column.title} className="flex-1">
                      <h4 className="mb-4 border-b border-slate-100 pb-2 text-[12px] font-bold tracking-wider text-slate-900 uppercase">
                        {column.title}
                      </h4>
                      <ul className="space-y-3">
                        {column.items.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className="flex items-center text-[13px] font-medium text-slate-500 transition-all hover:translate-x-1 hover:text-teal-600"
                              onClick={() => setHoveredNav(null)}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>

    {/* Mobile full-screen menu */}
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          id={menuId}
          className="fixed inset-0 z-[55] flex flex-col bg-white pt-[4.75rem] lg:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav
            className="flex min-h-0 flex-1 flex-col px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
            aria-label="Mobile"
          >
            <div className="flex-1 space-y-1 overflow-y-auto">
              {primaryNav.map((item) => {
                const isHash = item.href.startsWith("/#");
                const isHome = item.href === "/";

                let active = false;
                if (pathname === "/") {
                  if (isHome && !activeHash) active = true;
                  if (isHash && activeHash === item.href.replace("/", "")) active = true;
                } else {
                  active = pathname === item.href || pathname.startsWith(`${item.href}/`);
                }

                if (item.megaMenu?.length) {
                  const links = item.megaMenu.flatMap((col) => col.items);
                  const isRich =
                    item.megaMenuLayout === "rich" ||
                    links.some((link) => link.description);
                  return (
                    <details key={item.href} className="group rounded-2xl">
                      <summary
                        className={cn(
                          "flex min-h-12 cursor-pointer list-none items-center justify-between rounded-2xl px-4 text-base font-semibold transition-colors marker:content-none [&::-webkit-details-marker]:hidden",
                          active
                            ? "bg-teal-50 text-teal-700"
                            : "text-slate-800 active:bg-slate-50"
                        )}
                      >
                        {item.label}
                        <ChevronDown className="size-4 opacity-50 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="mt-1 space-y-1 pb-2 pl-2">
                        {links.map((link) => {
                          const Icon = link.icon;
                          return (
                            <Link
                              key={`${link.href}-${link.label}`}
                              href={link.href}
                              onClick={closeMenu}
                              className={cn(
                                "flex rounded-xl px-3 py-2.5 transition-colors active:bg-slate-50",
                                isRich ? "items-start gap-3" : "items-center"
                              )}
                            >
                              {isRich && (
                                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700">
                                  {Icon ? <Icon className="size-4" aria-hidden /> : null}
                                </span>
                              )}
                              <span>
                                <span className="block text-sm font-semibold text-slate-800">
                                  {link.label}
                                </span>
                                {link.description ? (
                                  <span className="mt-0.5 block text-xs leading-snug text-slate-500">
                                    {link.description}
                                  </span>
                                ) : null}
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </details>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleMobileNavClick(e, item)}
                    className={cn(
                      "flex min-h-12 items-center rounded-2xl px-4 text-base font-semibold transition-colors",
                      active
                        ? "bg-teal-50 text-teal-700"
                        : "text-slate-800 active:bg-slate-50"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 flex shrink-0 flex-col gap-3 border-t border-slate-100 pt-5">
              <Link
                href="/login"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <Button
                  variant="outline"
                  className="h-12 w-full rounded-2xl border-slate-200 text-base font-semibold text-slate-800 hover:bg-slate-50"
                  size="lg"
                >
                  Login
                </Button>
              </Link>
              <Link
                href="/signup"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                <Button
                  className="h-12 w-full rounded-2xl bg-teal-600 text-base font-semibold text-white hover:bg-teal-500"
                  size="lg"
                >
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

