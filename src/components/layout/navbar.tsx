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
  const [hasScrolled, setHasScrolled] = useState(false);
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
    const onScroll = () => {
      setHasScrolled(window.scrollY > 20);
      if (window.scrollY < 100 && pathname === "/") {
        if (!isClickScrolling.current) setActiveHash("");
      }
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
        
        // Find intersecting entries
        const visible = entries.filter(entry => entry.isIntersecting);
        if (visible.length > 0) {
          // Sort by intersection ratio to get the most prominent one
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveHash(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-100px 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
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
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const pillClass = "pointer-events-auto flex items-center rounded-full border border-white/20 bg-white/70 shadow-lg backdrop-blur-xl transition-all duration-300";

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "fixed inset-x-0 z-50 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300",
        hasScrolled ? "top-4" : "top-6"
      )}
    >
      <div className="flex items-center justify-between gap-4">
        
        {/* Left Segment: Logo */}
        <div className={cn(pillClass, "h-14 px-3")}>
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.history.pushState(null, '', '/');
                setActiveHash("");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2.5 font-heading text-base font-semibold tracking-tight text-slate-900 group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteConfig.logoMark}
              alt=""
              width={36}
              height={36}
              className="size-9 rounded-lg object-cover shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md"
            />
            <span className="pr-3">{siteConfig.name}</span>
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
              <div key={item.href} className="relative flex items-center h-full">
                <Link
                  href={item.href}
                  onClick={handleClick}
                  onMouseEnter={() => item.megaMenu ? handleMouseEnter(item.label) : handleMouseEnter('')}
                  onMouseLeave={handleMouseLeave}
                  className={cn(
                    "text-sm font-medium transition-all duration-200 relative py-2 flex items-center gap-1",
                    active ? "text-teal-700" : "text-slate-600 hover:text-slate-950"
                  )}
                >
                  {item.label}
                  {item.megaMenu && <ChevronDown className="size-3.5 opacity-60" />}
                  {active && (
                    <motion.div 
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 rounded-full" 
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* Right Segment: Actions */}
        <div className={cn(pillClass, "h-14 px-2 gap-2")}>
          <Link href="/login" className="hidden lg:block">
            <Button variant="ghost" size="sm" className="h-10 rounded-full px-5 font-medium text-slate-700 hover:bg-slate-100/50 hover:text-slate-950">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm" className="h-10 rounded-full bg-teal-600 px-6 font-semibold text-white transition-colors hover:bg-teal-500 shadow-sm">
              Start Free Trial
            </Button>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-slate-100/50 hover:text-slate-950 lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls={menuId}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {hoveredNav && primaryNav.find(i => i.label === hoveredNav)?.megaMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 top-[calc(100%+0.5rem)] pointer-events-auto shadow-xl rounded-3xl bg-white border border-slate-200 overflow-hidden hidden lg:block"
            onMouseEnter={() => handleMouseEnter(hoveredNav)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="p-8 flex gap-8 justify-between max-w-7xl mx-auto">
              {primaryNav.find(i => i.label === hoveredNav)!.megaMenu!.map(column => (
                <div key={column.title} className="flex-1">
                  <h4 className="text-[12px] font-bold tracking-wider text-slate-900 uppercase mb-4 pb-2 border-b border-slate-100">
                    {column.title}
                  </h4>
                  <ul className="space-y-3">
                    {column.items.map(link => (
                      <li key={link.label}>
                         <Link 
                           href={link.href} 
                           className="text-[13px] text-slate-500 font-medium hover:text-teal-600 transition-all hover:translate-x-1 flex items-center"
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
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Dropdown */}
      <div
        id={menuId}
        className={cn(
          "pointer-events-auto absolute inset-x-4 top-[calc(100%+1rem)] sm:inset-x-6 overflow-hidden rounded-3xl border border-white/20 bg-white/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 lg:hidden",
          menuOpen ? "max-h-[480px] opacity-100" : "max-h-0 border-transparent opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 p-4" aria-label="Mobile">
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
              setMenuOpen(false);
              
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
                
                window.history.pushState(null, '', '/');
                setActiveHash("");
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 100);
              }
            };

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleClick}
                className={cn(
                  "rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-slate-50",
                  active ? "text-teal-700 bg-teal-50/50" : "text-slate-600 hover:text-slate-900"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="mt-4 flex flex-col gap-3 border-t border-slate-100 pt-4">
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              <Button variant="outline" className="h-11 w-full rounded-xl border-slate-200 bg-transparent text-slate-700 hover:bg-slate-50 hover:text-slate-900" size="sm">
                Login
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}

