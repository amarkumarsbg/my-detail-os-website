"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight, Phone, Mail, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { footerNav } from "@/data/navigation";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-900 text-slate-300">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 mb-16">
          
          {/* Column 1: Brand & Gen Links */}
          <div className="space-y-6 lg:pr-8">
            <Link href="/" className="flex items-center gap-3 group mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={siteConfig.logoMark}
                alt=""
                width={40}
                height={40}
                className="size-10 rounded-xl object-cover shadow-md"
              />
              <span className="font-heading text-xl font-bold tracking-tight text-white">
                {siteConfig.name}
              </span>
            </Link>
            
            <p className="text-sm leading-relaxed text-slate-400">
              Get an AI summary of your workshop operations. Manage Job Cards, GST Billing, and Inventory from one intelligent platform.
            </p>
            
            <ul className="space-y-3 text-sm font-medium pt-4 border-t border-slate-800">
              {footerNav.column1.map((item, i) => (
                <li key={i}><Link href={item.href} className="hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 2: Considering */}
          <div>
            <h3 className="mb-4 pb-2 text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 inline-block">
              Considering MY DETAIL OS?
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              {footerNav.considering.map((item, i) => (
                <li key={i}><Link href={item.href} className="hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/login" className="text-sm font-bold text-teal-500 hover:text-teal-400 flex items-center group">
                Why MY DETAIL OS <ArrowRight className="ml-1 size-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Column 3: Products */}
          <div>
            <h3 className="mb-4 pb-2 text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 inline-block">
              Products and Features
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              {footerNav.products.map((item, i) => (
                <li key={i}><Link href={item.href} className="hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/features" className="text-sm font-bold text-teal-500 hover:text-teal-400 flex items-center group">
                All products <ArrowRight className="ml-1 size-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Column 4: Use Cases */}
          <div>
            <h3 className="mb-4 pb-2 text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 inline-block">
              Use Cases
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              {footerNav.useCases.map((item, i) => (
                <li key={i}><Link href={item.href} className="hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/solutions" className="text-sm font-bold text-teal-500 hover:text-teal-400 flex items-center group">
                All use cases <ArrowRight className="ml-1 size-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Column 5: Resources */}
          <div>
            <h3 className="mb-4 pb-2 text-xs font-bold text-white uppercase tracking-wider border-b border-slate-800 inline-block">
              Resources
            </h3>
            <ul className="space-y-4 text-sm font-medium">
              {footerNav.resources.map((item, i) => (
                <li key={i}><Link href={item.href} className="hover:text-white transition-colors">{item.label}</Link></li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/contact" className="text-sm font-bold text-teal-500 hover:text-teal-400 flex items-center group">
                All docs <ArrowRight className="ml-1 size-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 gap-6 border-t border-slate-800 pt-8 sm:grid-cols-3 sm:items-center">
          
          {/* Left: Social Media */}
          <div className="flex items-center justify-center sm:justify-start gap-4 order-2 sm:order-1">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <FacebookIcon className="size-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <InstagramIcon className="size-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <YoutubeIcon className="size-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <LinkedinIcon className="size-5" />
            </a>
          </div>

          {/* Center: Copyright */}
          <div className="flex items-center justify-center order-3 sm:order-2">
            <p className="text-xs text-slate-500 text-center">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
          </div>

          {/* Right: Logo */}
          <div className="flex items-center justify-center sm:justify-end order-1 sm:order-3">
            <Link href="/" className="opacity-80 hover:opacity-100 transition-opacity">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={siteConfig.logoMark}
                alt={siteConfig.name}
                width={28}
                height={28}
                className="size-7 rounded-md object-cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
