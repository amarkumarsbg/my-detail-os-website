"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowRight } from "lucide-react";
import { footerNav } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 pt-12 pb-8 text-slate-300 sm:pt-16">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-8 sm:gap-y-12 lg:mb-16 lg:grid-cols-5 lg:gap-8">
          {/* Brand — full width on mobile, first column on desktop */}
          <div className="col-span-2 space-y-5 lg:col-span-1 lg:space-y-6 lg:pr-8">
            <Link href="/" className="mb-2 flex items-center gap-2.5 sm:gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={siteConfig.logoMark}
                alt=""
                width={40}
                height={40}
                className="size-9 shrink-0 rounded-xl object-cover shadow-md sm:size-10"
              />
              <span className="font-heading text-lg font-bold tracking-tight text-white sm:text-xl">
                {siteConfig.name}
              </span>
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              Get an AI summary of your workshop operations. Manage Job Cards, GST Billing, and
              Inventory from one intelligent platform.
            </p>

            <ul className="space-y-2.5 border-t border-slate-800 pt-4 text-sm font-medium sm:space-y-3">
              {footerNav.column1.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <FooterColumn title="Considering MY DETAIL OS?" links={footerNav.considering}>
            <Link
              href="/login"
              className="group mt-5 flex items-center text-sm font-bold text-teal-500 hover:text-teal-400"
            >
              Why MY DETAIL OS
              <ArrowRight className="ml-1 size-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </FooterColumn>

          <FooterColumn title="Products and Features" links={footerNav.products}>
            <Link
              href="/features"
              className="group mt-5 flex items-center text-sm font-bold text-teal-500 hover:text-teal-400"
            >
              All products
              <ArrowRight className="ml-1 size-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </FooterColumn>

          <FooterColumn title="Use Cases" links={footerNav.useCases}>
            <Link
              href="/solutions"
              className="group mt-5 flex items-center text-sm font-bold text-teal-500 hover:text-teal-400"
            >
              All use cases
              <ArrowRight className="ml-1 size-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </FooterColumn>

          <FooterColumn title="Resources" links={footerNav.resources}>
            <Link
              href="/contact"
              className="group mt-5 flex items-center text-sm font-bold text-teal-500 hover:text-teal-400"
            >
              All docs
              <ArrowRight className="ml-1 size-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </FooterColumn>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-5 border-t border-slate-800 pt-6 sm:flex-row sm:justify-between sm:gap-4 sm:pt-8">
          <div className="flex items-center gap-5">
            <a href="#" aria-label="Facebook" className="text-slate-500 transition-colors hover:text-white">
              <FacebookIcon className="size-5" />
            </a>
            <a href="#" aria-label="Instagram" className="text-slate-500 transition-colors hover:text-white">
              <InstagramIcon className="size-5" />
            </a>
            <a href="#" aria-label="YouTube" className="text-slate-500 transition-colors hover:text-white">
              <YoutubeIcon className="size-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-slate-500 transition-colors hover:text-white">
              <LinkedinIcon className="size-5" />
            </a>
          </div>

          <p className="text-center text-xs leading-relaxed text-slate-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>

          <Link href="/" className="hidden opacity-80 transition-opacity hover:opacity-100 sm:block">
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
    </footer>
  );
}

function FooterColumn({
  title,
  links,
  children,
}: {
  title: string;
  links: readonly { readonly label: string; readonly href: string }[];
  children?: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <h3 className="mb-3 border-b border-slate-800 pb-2 text-[11px] font-bold uppercase tracking-wider text-white sm:mb-4 sm:text-xs">
        {title}
      </h3>
      <ul className="space-y-2.5 text-sm font-medium sm:space-y-3.5">
        {links.map((item, i) => (
          <li key={i}>
            <Link href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </div>
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
