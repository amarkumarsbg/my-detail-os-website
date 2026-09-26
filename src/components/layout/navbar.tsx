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
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const isClickScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const hasDarkHero = pathname === "/" || pathname.startsWith("/features/");
  const light = !hasDarkHero || scrolled || menuOpen;

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
    let lastScrolled = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const next = window.scrollY > 48;
        if (next !== lastScrolled) {
          lastScrolled = next;
          setScrolled(next);
        }
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
    setScrolled(window.scrollY > 48);
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

  return (
    <>
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "site-nav pointer-events-none fixed inset-x-0 top-0 z-50",
        menuOpen && "z-[60]"
      )}
    >
      <div
        className={cn(
          "pointer-events-auto border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300",
          light
            ? "border-slate-200/80 bg-white/90 shadow-[0_10px_30px_-18px_rgba(15,23,42,0.25)]"
            : "border-white/10 bg-slate-950/55 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.65)]"
        )}
      >
        <div className="site-nav__rail mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">
          {/* Brand */}
          <Link
            href="/"
            onClick={(e) => {
              closeMenu();
              if (pathname === "/") {
                e.preventDefault();
                window.history.pushState(null, "", "/");
                setActiveHash("");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className={cn(
              "group flex shrink-0 items-center gap-2.5 font-heading text-sm font-semibold tracking-tight transition-colors sm:text-base",
              light ? "text-slate-900" : "text-white"
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteConfig.logoMark}
              alt=""
              width={36}
              height={36}
              className={cn(
                "size-8 rounded-md object-cover transition-transform duration-300 group-hover:scale-105 sm:size-9",
                light ? "ring-1 ring-slate-200" : "ring-1 ring-white/20"
              )}
            />
            <span className="whitespace-nowrap">{siteConfig.name}</span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Primary"
          >
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
                    window.history.pushState(null, "", item.href);
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
                  window.history.pushState(null, "", "/");
                  setActiveHash("");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              };

              return (
                <div
                  key={item.href}
                  className="relative flex h-10 items-center"
                  onMouseEnter={() =>
                    item.megaMenu ? handleMouseEnter(item.label) : handleMouseEnter("")
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={item.href}
                    onClick={handleClick}
                    className={cn(
                      "relative flex items-center gap-1 px-3 py-1.5 text-[13px] font-medium tracking-wide transition-colors duration-200",
                      light
                        ? hoveredNav === item.label && item.megaMenu
                          ? "text-slate-950"
                          : active
                            ? "text-teal-700"
                            : "text-slate-600 hover:text-slate-950"
                        : hoveredNav === item.label && item.megaMenu
                          ? "text-white"
                          : active
                            ? "text-teal-300"
                            : "text-white/70 hover:text-white"
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
                        className={cn(
                          "absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full",
                          light ? "bg-teal-600" : "bg-teal-400"
                        )}
                      />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              href="/login"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden text-[13px] font-medium transition-colors lg:inline",
                light
                  ? "text-slate-600 hover:text-slate-950"
                  : "text-white/75 hover:text-white"
              )}
            >
              Login
            </Link>
            <Link href="/signup" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
              <Button
                size="sm"
                className={cn(
                  "h-9 rounded-md px-4 text-[13px] font-semibold transition-colors",
                  light
                    ? "bg-teal-600 text-white hover:bg-teal-500"
                    : "bg-teal-500 text-slate-950 shadow-[0_0_0_1px_rgba(251,134,18,0.35)] hover:bg-teal-400"
                )}
              >
                Start Free Trial
              </Button>
            </Link>

            <button
              type="button"
              className={cn(
                "inline-flex size-9 cursor-pointer items-center justify-center rounded-md border transition-colors lg:hidden",
                light
                  ? "border-slate-200 text-slate-800 hover:bg-slate-100"
                  : "border-white/15 text-white hover:bg-white/10"
              )}
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls={menuId}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        <div
          aria-hidden
          className={cn("site-nav__led", light && "site-nav__led--light")}
        />
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {hoveredNav && primaryNav.find((i) => i.label === hoveredNav)?.megaMenu && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={cn(
              "pointer-events-auto absolute inset-x-0 top-full mx-auto hidden max-w-7xl overflow-hidden rounded-b-2xl border border-t-0 shadow-[0_28px_60px_-24px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:block",
              light
                ? "border-slate-200/80 bg-white/95"
                : "border-white/10 bg-slate-950/95 shadow-[0_28px_60px_-24px_rgba(0,0,0,0.7)]"
            )}
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
                  <div className="p-5 sm:p-6">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {links.map((link) => {
                        const Icon = link.icon;
                        return (
                          <Link
                            key={`${link.href}-${link.label}`}
                            href={link.href}
                            onClick={() => setHoveredNav(null)}
                            className={cn(
                              "group flex items-start gap-3 rounded-xl p-3 transition-colors",
                              light ? "hover:bg-slate-50" : "hover:bg-white/5"
                            )}
                          >
                            <span
                              className={cn(
                                "mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg ring-1 transition-colors",
                                light
                                  ? "bg-teal-50 text-teal-700 ring-teal-600/10 group-hover:bg-teal-100"
                                  : "bg-teal-500/15 text-teal-300 ring-teal-400/20 group-hover:bg-teal-500/25"
                              )}
                            >
                              {Icon ? (
                                <Icon className="size-5" aria-hidden />
                              ) : (
                                <span className="size-2 rounded-full bg-teal-500" />
                              )}
                            </span>
                            <span className="min-w-0">
                              <span
                                className={cn(
                                  "block text-sm font-semibold",
                                  light
                                    ? "text-slate-900 group-hover:text-teal-800"
                                    : "text-white group-hover:text-teal-200"
                                )}
                              >
                                {link.label}
                              </span>
                              {link.description ? (
                                <span
                                  className={cn(
                                    "mt-0.5 block text-[13px] leading-snug line-clamp-2",
                                    light ? "text-slate-500" : "text-slate-400"
                                  )}
                                >
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
                <div className="flex justify-between gap-8 p-8">
                  {columns.map((column) => (
                    <div key={column.title} className="flex-1">
                      <h4
                        className={cn(
                          "mb-4 border-b pb-2 text-[12px] font-bold tracking-wider uppercase",
                          light
                            ? "border-slate-100 text-slate-900"
                            : "border-white/10 text-white"
                        )}
                      >
                        {column.title}
                      </h4>
                      <ul className="space-y-3">
                        {column.items.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className={cn(
                                "flex items-center text-[13px] font-medium transition-all hover:translate-x-1",
                                light
                                  ? "text-slate-500 hover:text-teal-600"
                                  : "text-slate-400 hover:text-teal-300"
                              )}
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
          className="fixed inset-0 z-[55] flex flex-col bg-slate-950 pt-16 lg:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <nav
            className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6"
            aria-label="Mobile primary"
          >
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

              return (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (pathname === "/" && isHash) {
                        const id = item.href.replace("/#", "");
                        const element = document.getElementById(id);
                        if (element) {
                          e.preventDefault();
                          closeMenu();
                          setActiveHash(`#${id}`);
                          window.history.pushState(null, "", item.href);
                          setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 50);
                          return;
                        }
                      }
                      if (pathname === "/" && isHome) {
                        e.preventDefault();
                        closeMenu();
                        setActiveHash("");
                        window.history.pushState(null, "", "/");
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        return;
                      }
                      closeMenu();
                    }}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-colors",
                      active ? "bg-teal-500/15 text-teal-300" : "text-white hover:bg-white/5"
                    )}
                  >
                    {item.label}
                    {item.megaMenu ? <ChevronDown className="size-4 opacity-50" /> : null}
                  </Link>
                  {item.megaMenu ? (
                    <div className="mb-2 ml-3 space-y-1 border-l border-white/10 pl-3">
                      {item.megaMenu.flatMap((col) =>
                        col.items.map((link) => (
                          <Link
                            key={`${link.href}-${link.label}`}
                            href={link.href}
                            onClick={closeMenu}
                            className="block rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-white/5 hover:text-teal-300"
                          >
                            {link.label}
                          </Link>
                        ))
                      )}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
          <div className="space-y-3 border-t border-white/10 p-4">
            <Link href="/login" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
              <Button
                variant="outline"
                className="h-12 w-full rounded-xl border-white/20 bg-transparent text-white hover:bg-white/10"
              >
                Login
              </Button>
            </Link>
            <Link href="/signup" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
              <Button className="h-12 w-full rounded-xl bg-teal-500 font-semibold text-slate-950 hover:bg-teal-400">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

