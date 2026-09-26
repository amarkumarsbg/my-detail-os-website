"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "@/components/ui/stagger";

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border/60 bg-slate-950 -mt-14 sm:-mt-16">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-slate-950">
          <img 
            src="/hero-bg.png" 
            alt="Background" 
            className="h-full w-full object-cover opacity-60 mix-blend-screen"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,rgba(15,118,110,0.5),transparent_70%)]"
        />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 pt-28 pb-14 sm:px-6 sm:pt-32 sm:pb-16 lg:px-8 lg:pt-40 lg:pb-20">
          <StaggerContainer className="mx-auto max-w-4xl text-center" delayChildren={0.2} staggerChildren={0.15}>
            <StaggerItem>
              <p className="text-[11px] font-semibold tracking-[0.14em] text-teal-400 uppercase drop-shadow-sm sm:text-xs">
                Built for modern auto workshops
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <h1 className="mt-4 text-balance font-heading text-[1.75rem] font-semibold leading-snug tracking-tight text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.35)] sm:text-5xl sm:leading-tight sm:text-shadow-none sm:drop-shadow-md lg:text-[4rem] lg:leading-[1.1]">
                Run Your Workshop{" "}
                <span className="whitespace-nowrap">Smarter.</span>
                <span className="mt-1.5 block text-slate-300 sm:mt-2">Grow Your Business Faster.</span>
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p className="mx-auto mt-5 max-w-2xl text-pretty px-1 text-[15px] leading-6 text-slate-300 sm:mt-6 sm:px-0 sm:text-lg sm:leading-7 lg:text-xl drop-shadow-sm">
                Manage customers, vehicles, job cards, billing, inventory, staff, rewards and customer
                communication — all from one powerful platform.
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 px-1 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-5 sm:px-0">
                <Link
                  href="/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button size="lg" className="btn-marketing group h-12 w-full rounded-full px-6 text-base font-semibold shadow-xl transition-all hover:scale-105 animate-float sm:h-14 sm:px-8 sm:text-lg">
                    Start Free Trial
                    <ArrowRight className="ml-2 size-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => setIsVideoOpen(true)}
                  className="btn-marketing group h-12 w-full rounded-full border-white/30 bg-white/5 px-6 text-base font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-white/10 hover:text-white animate-float-delayed sm:h-14 sm:w-auto sm:px-8 sm:text-lg"
                >
                  <Play className="mr-2 size-5 fill-white/80 transition-transform group-hover:scale-110" />
                  Watch Demo
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Video Modal Overlay */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-6 lg:p-12 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsVideoOpen(false)}
        >
          <div 
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-2xl ring-1 ring-white/20 animate-in zoom-in-95 duration-300" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-10 flex size-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black transition-colors border border-white/10"
              onClick={() => setIsVideoOpen(false)}
              aria-label="Close video"
            >
              <X className="size-5" />
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
