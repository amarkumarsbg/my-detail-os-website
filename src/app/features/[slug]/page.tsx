import { Button } from "@/components/ui/button";
import { ArrowRight, Apple, Play, X, Check, Activity, Users, Zap, Terminal, Settings, Database, Server, RefreshCw, Code2, Sliders, QrCode, MessageSquare, Calendar, Clock, Gift, Building2, BarChart3, Wrench, Bell, Star, PhoneCall, Share2, BookOpen, Receipt, Wallet, Banknote, Trophy, CalendarOff, ScrollText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getFeatureData } from "@/data/feature-pages";
import { getAllFeatureSlugs } from "@/data/navigation";
import { notFound } from "next/navigation";

// --- HERO MOCK UI VARIANTS ---

const showcasePhotos = [
  {
    src: "/images/features/auto-repair.jpg",
    alt: "Mechanic inspecting a vehicle engine in a professional garage",
    label: "Live workshop floor",
  },
  {
    src: "/images/features/garage-bay.jpg",
    alt: "Technician performing an oil change in a service bay",
    label: "Daily service bay",
  },
  {
    src: "/images/features/car-service.jpg",
    alt: "Polished car inside a professional automotive workshop",
    label: "Premium workshop finish",
  },
  {
    src: "/images/features/detail-ready-car.png",
    alt: "Detail-ready luxury car after professional service",
    label: "Detailing-ready results",
  },
  {
    src: "/images/features/premium-car.jpg",
    alt: "Premium vehicle after professional auto care",
    label: "Built for premium garages",
  },
] as const;

function getShowcasePhotos(slug: string, hash: number) {
  if (slug.includes("detail") || slug.includes("detailing")) {
    return [showcasePhotos[3], showcasePhotos[2]];
  }
  if (slug.includes("workshop")) {
    return [showcasePhotos[2], showcasePhotos[0]];
  }
  if (slug.includes("garage") || slug.includes("software") || slug.includes("app")) {
    return [showcasePhotos[0], showcasePhotos[1]];
  }
  const i = hash % showcasePhotos.length;
  return [showcasePhotos[i], showcasePhotos[(i + 1) % showcasePhotos.length]];
}

/** Photo-led hero for SEO / marketing pages instead of a generic dashboard mock. */
function HeroShowcasePhotoUI({ slug, hash }: { slug: string; title: string; hash: number }) {
  const [primary, secondary] = getShowcasePhotos(slug, hash);
  const jobsToday = 12 + (hash % 9);
  const rating = (4.6 + (hash % 4) * 0.1).toFixed(1);

  return (
    <div className="relative w-full max-w-lg mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="relative aspect-[4/5] sm:aspect-[5/4] overflow-hidden rounded-3xl border border-white/10 shadow-2xl ring-1 ring-white/10">
        <Image
          src={primary.src}
          alt={primary.alt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 520px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <p className="text-[11px] font-bold uppercase tracking-wider text-teal-300 mb-1">
            {primary.label}
          </p>
          <p className="text-white font-semibold text-lg leading-snug max-w-sm">
            Software made for real garage floors
          </p>
        </div>
      </div>

      {/* Secondary photo peek */}
      <div className="absolute -bottom-4 -left-3 sm:-left-6 w-28 h-36 sm:w-36 sm:h-44 rounded-2xl overflow-hidden border-4 border-[#18181b] shadow-xl rotate-[-4deg]">
        <Image
          src={secondary.src}
          alt={secondary.alt}
          fill
          sizes="160px"
          className="object-cover"
        />
      </div>

      {/* Floating proof chips — product hint without a full dashboard */}
      <div className="absolute -top-3 -right-2 sm:right-0 rounded-2xl bg-white px-3.5 py-2.5 shadow-xl border border-slate-100">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center">
            <Wrench className="size-4" />
          </div>
          <div>
            <p className="text-[10px] text-slate-500 font-medium leading-none">Jobs today</p>
            <p className="text-sm font-bold text-slate-900">{jobsToday} active</p>
          </div>
        </div>
      </div>
      <div className="absolute top-20 -right-1 sm:-right-4 rounded-2xl bg-white px-3.5 py-2.5 shadow-xl border border-slate-100">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
            <Star className="size-4 fill-amber-500" />
          </div>
          <div>
            <p className="text-[10px] text-slate-500 font-medium leading-none">Garage rating</p>
            <p className="text-sm font-bold text-slate-900">{rating} ★</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroDashboardMockUI({ title, short, hash }: { title: string, short: string, hash: number }) {
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-900 text-sm">Dashboard Overview</h3>
        <span className="bg-slate-200 text-slate-600 px-2 py-1 rounded text-xs font-medium">Today</span>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {/* Total Revenue */}
        <div className="bg-white border border-green-100 rounded-xl p-4 shadow-sm flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-green-400"></div>
          <span className="text-slate-500 text-xs font-medium mb-1">Total Revenue</span>
          <span className="text-slate-900 font-bold text-xl">₹{(12000 + (hash % 5000)).toLocaleString()}</span>
          <div className="mt-3 flex justify-between items-center">
            <span className="text-slate-400 text-[10px]">Last 30 days</span>
            <div className="size-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-bold text-xs">₹</div>
          </div>
        </div>
        {/* Pending Payments */}
        <div className="bg-white border border-amber-100 rounded-xl p-4 shadow-sm flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-amber-400"></div>
          <span className="text-slate-500 text-xs font-medium mb-1">Pending Payments</span>
          <span className="text-slate-900 font-bold text-xl">{3 + (hash % 5)}</span>
          <div className="mt-3 flex justify-between items-center">
            <span className="text-slate-400 text-[10px]">awaiting collection</span>
            <div className="size-6 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs">!</div>
          </div>
        </div>
        {/* Today's Jobs */}
        <div className="bg-white border border-blue-100 rounded-xl p-4 shadow-sm flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-blue-400"></div>
          <span className="text-slate-500 text-xs font-medium mb-1">Today's Jobs</span>
          <span className="text-slate-900 font-bold text-xl">{8 + (hash % 10)}</span>
          <div className="mt-3 flex justify-between items-center">
            <span className="text-slate-400 text-[10px]">Active vehicles</span>
            <div className="size-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
              <span className="text-xs">📅</span>
            </div>
          </div>
        </div>
        {/* Average Rating */}
        <div className="bg-white border border-orange-100 rounded-xl p-4 shadow-sm flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-orange-400"></div>
          <span className="text-slate-500 text-xs font-medium mb-1">Average Rating</span>
          <span className="text-slate-900 font-bold text-xl">4.{7 + (hash % 3)}</span>
          <div className="mt-3 flex justify-between items-center">
            <span className="text-slate-400 text-[10px]">Customer feedback</span>
            <div className="size-6 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center">
              <span className="text-xs">★</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroJobCardsMockUI({ title, short, hash }: { title: string, short: string, hash: number }) {
  const cars = [
    { model: "MG Astor", num: "DL04AB1234", status: "Delivered", color: "text-green-600 bg-green-50 border-green-200" },
    { model: "Tata Nexon", num: "KA01AB1004", status: "Quality Check", color: "text-blue-600 bg-blue-50 border-blue-200" },
    { model: "Honda City", num: "KA01AB1003", status: "Awaiting Service", color: "text-amber-600 bg-amber-50 border-amber-200" }
  ];
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-900 text-sm">Active Job Cards</h3>
        <span className="bg-teal-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium">+ New Job Card</span>
      </div>
      <div className="space-y-3">
        {cars.map((car, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <div className="flex justify-between items-start mb-3">
              <div>
                <span className="inline-block border border-slate-200 rounded text-[10px] font-mono px-1.5 py-0.5 text-slate-600 mb-1">
                  IND | {car.num}
                </span>
                <p className="font-bold text-blue-600 text-sm">{car.model}</p>
                <p className="text-slate-400 text-xs mt-0.5">JC-2026-{(100 + i + hash) % 1000}</p>
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full border ${car.color}`}>
                {car.status}
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-[10px] text-green-600 bg-green-50 px-2 py-0.5 rounded font-medium border border-green-100 flex items-center gap-1">
                <Check className="size-3" /> Invoiced
              </span>
              <span className="text-[10px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-medium border border-blue-100 flex items-center gap-1">
                <Check className="size-3" /> Photos
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroAttendanceMockUI({ title, short, hash }: { title: string, short: string, hash: number }) {
  const punches = [
    { name: "Ravi Kumar", role: "Mechanic", time: "09:02 AM", status: "In" },
    { name: "Sneha Patel", role: "Advisor", time: "09:11 AM", status: "In" },
    { name: "Amit Shah", role: "Detailer", time: "01:40 PM", status: "Out" },
  ];
  const present = 12 + (hash % 5);
  const absent = 2 + (hash % 3);

  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <QrCode className="size-4 text-teal-600" /> Attendance Kiosk
        </h3>
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold border border-green-200">Live</span>
      </div>

      <div className="grid grid-cols-[120px_1fr] gap-3 mb-4">
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm text-center">
          <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-2">Store QR</p>
          <div className="inline-block p-1.5 border border-slate-100 rounded-lg bg-white">
            <div className="w-20 h-20 bg-white grid" style={{ gridTemplateColumns: "repeat(21, minmax(0, 1fr))" }}>
              {Array.from({ length: 441 }).map((_, i) => {
                const row = Math.floor(i / 21);
                const col = i % 21;
                const inTopLeft = row < 7 && col < 7;
                const inTopRight = row < 7 && col >= 14;
                const inBottomLeft = row >= 14 && col < 7;
                let isDark = false;
                if (inTopLeft || inTopRight || inBottomLeft) {
                  const lr = inBottomLeft ? row - 14 : row;
                  const lc = inTopRight ? col - 14 : col;
                  if (lr === 0 || lr === 6 || lc === 0 || lc === 6 || (lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4)) {
                    isDark = true;
                  }
                } else {
                  isDark = (row * 17 + col * 23 + hash) % 2 === 0;
                }
                return <div key={i} className={isDark ? "bg-slate-900" : "bg-transparent"} />;
              })}
            </div>
          </div>
          <p className="text-[9px] text-slate-400 mt-2 leading-snug">Scan + PIN punch</p>
        </div>

        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
              <p className="text-[9px] uppercase font-bold text-slate-400">Present</p>
              <p className="font-bold text-lg text-teal-700 mt-0.5">{present}</p>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
              <p className="text-[9px] uppercase font-bold text-slate-400">Absent</p>
              <p className="font-bold text-lg text-rose-600 mt-0.5">{absent}</p>
            </div>
          </div>
          <div className="bg-teal-50 border border-teal-100 rounded-xl p-3">
            <p className="text-[10px] font-semibold text-teal-800 leading-snug">
              Staff scan the branch QR, enter PIN, and punch in or out.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-100 px-3 py-2 flex justify-between items-center">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Today&apos;s punches</span>
          <span className="text-[10px] font-bold text-slate-400">{punches.length} recent</span>
        </div>
        <div className="divide-y divide-slate-100">
          {punches.map((item) => (
            <div key={item.name} className="px-3 py-2.5 flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-bold text-slate-900">{item.name}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{item.role} · {item.time}</p>
              </div>
              <span
                className={`text-[9px] font-bold px-2 py-0.5 rounded border ${
                  item.status === "In"
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : "bg-slate-100 text-slate-600 border-slate-200"
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Team directory — roles & access, not attendance punch. */
function HeroUsersStaffMockUI({ hash }: { hash: number }) {
  const staff = [
    { name: "Ravi Kumar", role: "Lead Mechanic", access: "Bay + Jobs", status: "Active", tone: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { name: "Sneha Patel", role: "Service Advisor", access: "CRM + Bookings", status: "Active", tone: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { name: "Amit Shah", role: "Detailer", access: "Jobs only", status: "Active", tone: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { name: "Neha Joshi", role: "Accountant", access: "Billing + Books", status: "Invite sent", tone: "bg-amber-50 text-amber-700 border-amber-200" },
  ];

  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <Users className="size-4 text-teal-600" /> Team Directory
        </h3>
        <span className="bg-teal-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium">+ Invite staff</span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm text-center">
          <p className="text-lg font-bold text-slate-900">{8 + (hash % 6)}</p>
          <p className="text-[9px] uppercase font-bold text-slate-400 mt-0.5">Staff</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm text-center">
          <p className="text-lg font-bold text-slate-900">{4 + (hash % 3)}</p>
          <p className="text-[9px] uppercase font-bold text-slate-400 mt-0.5">Roles</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm text-center">
          <p className="text-lg font-bold text-teal-700">{2 + (hash % 2)}</p>
          <p className="text-[9px] uppercase font-bold text-slate-400 mt-0.5">Pending</p>
        </div>
      </div>

      <div className="space-y-2.5">
        {staff.map((person) => (
          <div key={person.name} className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center text-xs font-bold">
                  {person.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">{person.name}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{person.role}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{person.access}</p>
                </div>
              </div>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded border shrink-0 ${person.tone}`}>
                {person.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroPayrollMockUI({ hash }: { hash: number }) {
  const rows = [
    { name: "Ravi Kumar", role: "Mechanic", net: `₹${(28 + (hash % 6))}k`, status: "Paid" },
    { name: "Sneha Patel", role: "Advisor", net: `₹${(32 + (hash % 5))}k`, status: "Paid" },
    { name: "Amit Shah", role: "Detailer", net: `₹${(24 + (hash % 4))}k`, status: "Processing" },
  ];
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <Banknote className="size-4 text-teal-600" /> Payroll Run
        </h3>
        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 border border-slate-200 px-2 py-1 rounded">
          Sep 2026
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-teal-900 p-4 text-white">
          <p className="text-[10px] uppercase tracking-wider text-teal-200 font-bold">This month</p>
          <p className="font-bold text-2xl mt-1">₹{(180 + (hash % 40))}k</p>
          <p className="text-[10px] text-slate-300 mt-2">{8 + (hash % 4)} staff paid</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Pending</p>
          <p className="font-bold text-2xl text-amber-600 mt-1">{1 + (hash % 2)}</p>
          <p className="text-[10px] text-slate-500 mt-2">Awaiting approval</p>
        </div>
      </div>
      <div className="space-y-2.5">
        {rows.map((row) => (
          <div key={row.name} className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm flex justify-between items-center gap-2">
            <div>
              <p className="text-sm font-bold text-slate-900">{row.name}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">{row.role}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-slate-900">{row.net}</p>
              <span className={`text-[9px] font-bold ${row.status === "Paid" ? "text-emerald-600" : "text-amber-600"}`}>
                {row.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroPerformanceMockUI({ hash }: { hash: number }) {
  const leaders = [
    { name: "Ravi Kumar", jobs: 42 + (hash % 8), rating: "4.9", score: 96 },
    { name: "Amit Shah", jobs: 38 + (hash % 6), rating: "4.7", score: 91 },
    { name: "Karan Patel", jobs: 31 + (hash % 5), rating: "4.6", score: 87 },
  ];
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <Trophy className="size-4 text-teal-600" /> Performance Board
        </h3>
        <span className="text-[10px] font-bold text-slate-500">This week</span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm text-center">
          <p className="text-lg font-bold text-slate-900">{110 + (hash % 20)}</p>
          <p className="text-[9px] uppercase font-bold text-slate-400 mt-0.5">Jobs</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm text-center">
          <p className="text-lg font-bold text-teal-700">4.{7 + (hash % 3)}</p>
          <p className="text-[9px] uppercase font-bold text-slate-400 mt-0.5">Avg rating</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm text-center">
          <p className="text-lg font-bold text-slate-900">{92 + (hash % 6)}%</p>
          <p className="text-[9px] uppercase font-bold text-slate-400 mt-0.5">On-time</p>
        </div>
      </div>
      <div className="space-y-2.5">
        {leaders.map((person, i) => (
          <div key={person.name} className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="size-6 rounded-full bg-teal-50 text-teal-700 text-[10px] font-bold flex items-center justify-center">
                  #{i + 1}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">{person.name}</p>
                  <p className="text-[10px] text-slate-500">{person.jobs} jobs · ★ {person.rating}</p>
                </div>
              </div>
              <span className="text-xs font-bold text-teal-700">{person.score}</span>
            </div>
            <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full bg-teal-500 rounded-full" style={{ width: `${person.score}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroLeaveMockUI({ hash }: { hash: number }) {
  const requests = [
    { name: "Neha Joshi", type: "Casual leave", dates: "Sep 8–9", status: "Pending", tone: "bg-amber-50 text-amber-700 border-amber-200" },
    { name: "Ravi Kumar", type: "Sick leave", dates: "Sep 5", status: "Approved", tone: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { name: "Sneha Patel", type: "Half day", dates: "Sep 12 PM", status: "Approved", tone: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  ];
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <CalendarOff className="size-4 text-teal-600" /> Leave Requests
        </h3>
        <span className="bg-amber-50 text-amber-700 border border-amber-200 px-2 py-1 rounded text-[10px] font-bold">
          {1 + (hash % 3)} pending
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
          <p className="text-[9px] uppercase font-bold text-slate-400">On leave today</p>
          <p className="font-bold text-xl text-slate-900 mt-1">{1 + (hash % 2)}</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
          <p className="text-[9px] uppercase font-bold text-slate-400">Balance left</p>
          <p className="font-bold text-xl text-teal-700 mt-1">{8 + (hash % 5)} days</p>
        </div>
      </div>
      <div className="space-y-2.5">
        {requests.map((item) => (
          <div key={`${item.name}-${item.dates}`} className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm flex justify-between gap-2">
            <div>
              <p className="text-sm font-bold text-slate-900">{item.name}</p>
              <p className="text-[11px] text-slate-500 mt-0.5">{item.type} · {item.dates}</p>
            </div>
            <span className={`text-[9px] font-bold px-2 py-0.5 rounded border h-fit shrink-0 ${item.tone}`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroMechanicsMockUI({ hash }: { hash: number }) {
  const bays = [
    { bay: "Bay 1", mechanic: "Ravi Kumar", vehicle: "Creta SX", job: "Brake service", status: "In progress", tone: "bg-amber-50 text-amber-700 border-amber-200" },
    { bay: "Bay 2", mechanic: "Amit Shah", vehicle: "City VX", job: "Full detailing", status: "QC check", tone: "bg-blue-50 text-blue-700 border-blue-200" },
    { bay: "Bay 3", mechanic: "Karan Patel", vehicle: "—", job: "Standby", status: "Available", tone: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  ];
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <Wrench className="size-4 text-teal-600" /> Mechanic Bays
        </h3>
        <span className="text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-1 rounded">
          {2 + (hash % 2)} busy
        </span>
      </div>
      <div className="space-y-2.5">
        {bays.map((item) => (
          <div key={item.bay} className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{item.bay}</p>
                <p className="text-sm font-bold text-slate-900 mt-0.5">{item.mechanic}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {item.vehicle} · {item.job}
                </p>
              </div>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded border shrink-0 ${item.tone}`}>
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroActivityLogMockUI({ hash }: { hash: number }) {
  const events = [
    { who: "Sneha Patel", action: "Created job card JC-2041", when: "2 min ago", tone: "bg-teal-500" },
    { who: "Ravi Kumar", action: "Marked Bay 1 as in progress", when: "14 min ago", tone: "bg-amber-500" },
    { who: "System", action: "WhatsApp reminder sent · Creta SX", when: "32 min ago", tone: "bg-blue-500" },
    { who: "Neha Joshi", action: "Recorded payment INV-882", when: "1 hr ago", tone: "bg-emerald-500" },
    { who: "Admin", action: "Updated staff role · Detailer", when: `${2 + (hash % 3)} hrs ago`, tone: "bg-slate-400" },
  ];
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <ScrollText className="size-4 text-teal-600" /> Activity Log
        </h3>
        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 border border-slate-200 px-2 py-1 rounded">
          Live feed
        </span>
      </div>
      <div className="space-y-0">
        {events.map((event, i) => (
          <div key={`${event.who}-${event.when}`} className="flex gap-3">
            <div className="flex flex-col items-center">
              <div className={`size-2.5 rounded-full mt-1.5 ${event.tone}`} />
              {i !== events.length - 1 && <div className="w-px flex-1 bg-slate-200 my-1" />}
            </div>
            <div className="pb-4">
              <p className="text-xs font-bold text-slate-900">{event.action}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">
                {event.who} · {event.when}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroBookingsMockUI({ title, short, hash }: { title: string, short: string, hash: number }) {
  const slots = [
    { time: "09:00 AM", customer: "Rahul Sharma", car: "Hyundai Creta", service: "General Service", color: "bg-blue-50 border-blue-200 text-blue-700" },
    { time: "11:30 AM", customer: "Sneha Patel", car: "Kia Seltos", service: "Detailing", color: "bg-purple-50 border-purple-200 text-purple-700" },
    { time: "02:00 PM", customer: "Amit Kumar", car: "Honda City", service: "Denting/Painting", color: "bg-orange-50 border-orange-200 text-orange-700" },
  ];
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-900 text-sm">Today's Schedule</h3>
        <span className="bg-teal-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium">+ New Booking</span>
      </div>
      <div className="flex gap-4 mb-4">
        <div className="bg-white border border-slate-200 rounded-xl p-3 text-center flex-1 shadow-sm">
          <p className="text-slate-400 text-[10px] uppercase font-bold">Confirmed</p>
          <p className="font-bold text-xl text-slate-900 mt-1">{8 + (hash % 5)}</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-3 text-center flex-1 shadow-sm">
          <p className="text-slate-400 text-[10px] uppercase font-bold">Available</p>
          <p className="font-bold text-xl text-teal-600 mt-1">{4 + (hash % 3)} slots</p>
        </div>
      </div>
      <div className="space-y-3">
        {slots.map((slot, i) => (
          <div key={i} className="flex gap-3 items-stretch">
            <div className="w-16 flex flex-col justify-center items-center shrink-0 border-r border-slate-200 pr-3">
              <span className="text-xs font-bold text-slate-600">{slot.time.split(' ')[0]}</span>
              <span className="text-[10px] text-slate-400">{slot.time.split(' ')[1]}</span>
            </div>
            <div className={`flex-1 p-3 rounded-lg border ${slot.color}`}>
              <p className="font-bold text-sm mb-0.5">{slot.customer}</p>
              <p className="text-[11px] opacity-90 font-medium">{slot.car}</p>
              <p className="text-[10px] opacity-75 mt-1">{slot.service}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroPickupDropMockUI({ title, short, hash }: { title: string, short: string, hash: number }) {
  const stops = [
    { time: "08:30 AM", loc: "HSR Layout", status: "Picked Up", icon: <Check className="size-3 text-white" />, color: "bg-teal-500" },
    { time: "09:15 AM", loc: "Koramangala", status: "En Route", icon: <RefreshCw className="size-3 animate-spin text-white" />, color: "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" },
    { time: "10:00 AM", loc: "Indiranagar", status: "Scheduled", icon: <div className="size-1.5 bg-slate-400 rounded-full" />, color: "bg-slate-200 border-slate-300 border" },
  ];
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-900 text-sm">Live Logistics Tracker</h3>
        <span className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-medium">Map View</span>
      </div>
      
      {/* Map stub */}
      <div className="w-full h-32 bg-slate-200 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center">
        {/* Abstract map pattern */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#475569 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
           <div className="size-4 rounded-full bg-teal-500 border-2 border-white shadow-lg animate-pulse" />
        </div>
        <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded shadow text-[10px] font-bold text-slate-700">
           Driver: Ravi Kumar
        </div>
      </div>

      <div className="space-y-1">
        {stops.map((stop, i) => (
          <div key={i} className="flex gap-4 relative">
             <div className="flex flex-col items-center">
                <div className={`size-6 rounded-full flex items-center justify-center shrink-0 z-10 ${stop.color}`}>
                  {stop.icon}
                </div>
                {i !== stops.length - 1 && (
                  <div className={`w-0.5 h-8 my-1 ${stop.status === 'Picked Up' ? 'bg-teal-500' : 'bg-slate-200'}`} />
                )}
             </div>
             <div className="pt-0.5 pb-2">
                <p className="font-bold text-sm text-slate-900">{stop.loc}</p>
                <div className="flex gap-2 items-center mt-0.5">
                  <span className="text-xs text-slate-500 font-mono">{stop.time}</span>
                  <span className="text-[10px] text-slate-400">• {stop.status}</span>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroCRMMockUI({ title, short, hash }: { title: string, short: string, hash: number }) {
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-900 text-sm">Customer Profile</h3>
        <span className="bg-amber-100 text-amber-700 border border-amber-200 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
          <span className="text-xs">★</span> VIP
        </span>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm mb-4 flex gap-4 items-center">
        <div className="size-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-lg border border-teal-200">
          AK
        </div>
        <div>
           <p className="font-bold text-slate-900 text-sm">Arjun Kapoor</p>
           <p className="text-xs text-slate-500 mt-0.5">+91 98765 43210</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
           <p className="text-slate-400 text-[10px] uppercase font-bold mb-1">Total Visits</p>
           <p className="font-bold text-lg text-slate-900">{14 + (hash % 10)}</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm">
           <p className="text-slate-400 text-[10px] uppercase font-bold mb-1">Loyalty Points</p>
           <p className="font-bold text-lg text-teal-600">{1250 + (hash % 500)}</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
         <p className="text-xs font-bold text-slate-700 mb-3 flex items-center gap-2">
           <MessageSquare className="size-4 text-teal-600" /> Recent Communication
         </p>
         <div className="bg-teal-50 border border-teal-100 p-3 rounded-lg relative">
            <p className="text-[11px] text-teal-900 mb-2">Hello Arjun, your Kia Seltos (KA-01-AB-1234) is due for its 6-month general service.</p>
            <div className="flex justify-between items-center">
               <span className="text-[9px] text-teal-600 font-bold bg-white px-2 py-0.5 rounded border border-teal-100">Auto-Reminder</span>
               <span className="text-[9px] text-teal-500">Today, 10:00 AM</span>
            </div>
         </div>
      </div>
    </div>
  );
}

function HeroFinanceMockUI({ title, short, hash }: { title: string, short: string, hash: number }) {
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <Receipt className="size-4 text-teal-600" /> Tax Invoice
        </h3>
        <span className="bg-green-100 text-green-700 border border-green-200 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
          PAID
        </span>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
         <div className="flex justify-between border-b border-slate-100 pb-4 mb-4">
            <div>
               <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Billed To</p>
               <p className="font-bold text-xs text-slate-900">Ravi Shankar</p>
               <p className="text-[10px] text-slate-500">KA-05-MM-4455</p>
            </div>
            <div className="text-right">
               <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Invoice No</p>
               <p className="font-bold text-xs text-slate-900">INV-2026-{(800 + hash % 100)}</p>
               <p className="text-[10px] text-slate-500">12 Sep 2026</p>
            </div>
         </div>

         <div className="space-y-3 mb-6">
            <div className="flex justify-between text-xs">
               <span className="text-slate-600">Synthetic Engine Oil</span>
               <span className="font-bold text-slate-900">₹3,200</span>
            </div>
            <div className="flex justify-between text-xs">
               <span className="text-slate-600">Oil Filter Assembly</span>
               <span className="font-bold text-slate-900">₹850</span>
            </div>
            <div className="flex justify-between text-xs">
               <span className="text-slate-600">Labor Charges</span>
               <span className="font-bold text-slate-900">₹1,500</span>
            </div>
         </div>

         <div className="border-t border-slate-100 pt-3">
            <div className="flex justify-between text-xs mb-1">
               <span className="text-slate-500">Subtotal</span>
               <span className="font-medium text-slate-700">₹5,550</span>
            </div>
            <div className="flex justify-between text-xs mb-3">
               <span className="text-slate-500">GST (18%)</span>
               <span className="font-medium text-slate-700">₹999</span>
            </div>
            <div className="flex justify-between items-center bg-slate-50 p-2 rounded border border-slate-100">
               <span className="text-xs font-bold text-slate-900">Grand Total</span>
               <span className="font-bold text-lg text-teal-600">₹6,549</span>
            </div>
         </div>
      </div>
    </div>
  );
}

/** Books / P&L view — distinct from customer tax invoices. */
function HeroAccountingMockUI({ hash }: { hash: number }) {
  const entries = [
    { account: "Service Revenue", type: "Credit", amount: `₹${(82 + (hash % 20))}k`, tone: "text-emerald-600" },
    { account: "Parts Purchase", type: "Debit", amount: `₹${(31 + (hash % 12))}k`, tone: "text-rose-600" },
    { account: "Staff Payroll", type: "Debit", amount: `₹${(24 + (hash % 8))}k`, tone: "text-rose-600" },
    { account: "GST Payable", type: "Liability", amount: `₹${(11 + (hash % 6))}k`, tone: "text-amber-600" },
  ];
  const revenue = 180 + (hash % 40);
  const expense = 95 + (hash % 25);
  const profit = revenue - expense;

  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <BookOpen className="size-4 text-teal-600" /> Books & P&L
        </h3>
        <span className="text-[10px] font-bold text-slate-500 bg-slate-100 border border-slate-200 px-2 py-1 rounded">
          Sep 2026
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
          <p className="text-[9px] uppercase font-bold text-slate-400">Revenue</p>
          <p className="font-bold text-slate-900 text-sm mt-1">₹{revenue}k</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
          <p className="text-[9px] uppercase font-bold text-slate-400">Expenses</p>
          <p className="font-bold text-slate-900 text-sm mt-1">₹{expense}k</p>
        </div>
        <div className="bg-teal-50 border border-teal-200 rounded-xl p-3 shadow-sm">
          <p className="text-[9px] uppercase font-bold text-teal-700">Net profit</p>
          <p className="font-bold text-teal-800 text-sm mt-1">₹{profit}k</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-100 px-3 py-2 grid grid-cols-3 gap-2 text-[9px] font-bold uppercase tracking-wider text-slate-500">
          <span className="col-span-1">Account</span>
          <span className="text-center">Type</span>
          <span className="text-right">Amount</span>
        </div>
        <div className="divide-y divide-slate-100">
          {entries.map((entry) => (
            <div key={entry.account} className="px-3 py-2.5 grid grid-cols-3 gap-2 items-center">
              <p className="text-xs font-bold text-slate-900 leading-tight">{entry.account}</p>
              <p className="text-[10px] text-center text-slate-500 font-medium">{entry.type}</p>
              <p className={`text-xs font-bold text-right ${entry.tone}`}>{entry.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Cash drawer + bank balances — distinct from Books & P&L. */
function HeroCashBankMockUI({ hash }: { hash: number }) {
  const cashInHand = 12 + (hash % 8);
  const bankBalance = 240 + (hash % 60);
  const movements = [
    { label: "Counter sale · UPI", account: "HDFC ****4521", amount: "+₹2,006", tone: "text-emerald-600", when: "10:42 AM" },
    { label: "Vendor payment", account: "Cash drawer", amount: "-₹8,500", tone: "text-rose-600", when: "11:15 AM" },
    { label: "Customer cash receipt", account: "Cash drawer", amount: "+₹4,200", tone: "text-emerald-600", when: "1:05 PM" },
    { label: "Bank transfer in", account: "ICICI ****8890", amount: "+₹35,000", tone: "text-emerald-600", when: "3:20 PM" },
  ];

  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <Wallet className="size-4 text-teal-600" /> Cash & Bank
        </h3>
        <span className="text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2 py-1 rounded">
          Live balances
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-teal-900 p-4 text-white shadow-sm">
          <p className="text-[10px] uppercase tracking-wider text-teal-200 font-bold">Cash in hand</p>
          <p className="font-bold text-2xl mt-2">₹{cashInHand}k</p>
          <p className="text-[10px] text-slate-300 mt-2">Drawer · Front desk</p>
        </div>
        <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm">
          <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Bank balance</p>
          <p className="font-bold text-2xl text-slate-900 mt-2">₹{bankBalance}k</p>
          <p className="text-[10px] text-slate-500 mt-2">2 linked accounts</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="bg-slate-50 border-b border-slate-100 px-3 py-2 flex justify-between items-center">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Today&apos;s movements</span>
          <span className="text-[10px] font-bold text-slate-400">{movements.length} entries</span>
        </div>
        <div className="divide-y divide-slate-100">
          {movements.map((item) => (
            <div key={`${item.label}-${item.when}`} className="px-3 py-2.5 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-slate-900">{item.label}</p>
                <p className="text-[10px] text-slate-500 mt-0.5">{item.account} · {item.when}</p>
              </div>
              <p className={`text-xs font-bold shrink-0 ${item.tone}`}>{item.amount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroCounterSaleMockUI({ title, short, hash }: { title: string, short: string, hash: number }) {
  const cart = [
    { name: "Wiper Blades (Bosch)", qty: 2, price: 450, color: "bg-blue-50 text-blue-700" },
    { name: "Microfiber Cloth", qty: 3, price: 150, color: "bg-teal-50 text-teal-700" },
    { name: "Dashboard Polish", qty: 1, price: 350, color: "bg-amber-50 text-amber-700" },
  ];
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-900 text-sm">Point of Sale</h3>
        <span className="bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-medium">Walk-in</span>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm mb-4 overflow-hidden">
         <div className="bg-slate-50 border-b border-slate-100 p-3 flex justify-between items-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Cart Items</span>
            <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-100">3 Items</span>
         </div>
         <div className="p-3 space-y-3">
            {cart.map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                 <div>
                    <p className="text-sm font-bold text-slate-900">{item.name}</p>
                    <p className="text-[10px] text-slate-500 mt-0.5">{item.qty} x ₹{item.price}</p>
                 </div>
                 <span className="font-bold text-sm text-slate-700">₹{item.qty * item.price}</span>
              </div>
            ))}
         </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm relative overflow-hidden">
         <div className="absolute top-0 right-0 w-16 h-16 bg-teal-500/10 rounded-bl-full pointer-events-none" />
         <div className="flex justify-between text-xs mb-2 text-slate-500">
            <span>Subtotal</span>
            <span className="font-medium text-slate-700">₹1,700</span>
         </div>
         <div className="flex justify-between text-xs mb-4 text-slate-500 border-b border-slate-100 pb-4">
            <span>GST (18%)</span>
            <span className="font-medium text-slate-700">₹306</span>
         </div>
         <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-bold text-slate-900">Total Payable</span>
            <span className="font-bold text-2xl text-teal-600">₹2,006</span>
         </div>
         <button className="w-full bg-teal-600 text-white font-bold text-sm py-3 rounded-lg shadow-md hover:bg-teal-500 transition-colors">
            Process Payment (UPI)
         </button>
      </div>
    </div>
  );
}

function HeroInventoryMockUI({ title, short, hash }: { title: string, short: string, hash: number }) {
  const parts = [
    { name: "Castrol Magnatec 5W-30", sku: "OIL-CM5W30", stock: 12, min: 5, color: "text-green-600 bg-green-50" },
    { name: "Brake Pads (Front)", sku: "BP-FR-001", stock: 3, min: 10, color: "text-red-600 bg-red-50" },
    { name: "Air Filter Assembly", sku: "AF-092", stock: 8, min: 10, color: "text-amber-600 bg-amber-50" },
  ];
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-900 text-sm">Parts Inventory</h3>
        <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-[10px] font-bold border border-indigo-200">Stock Alerts</span>
      </div>

      <div className="flex gap-3 mb-4">
        <div className="bg-white border border-slate-200 rounded-lg p-3 flex-1 shadow-sm">
           <p className="text-slate-400 text-[10px] uppercase font-bold mb-1">Total Items</p>
           <p className="font-bold text-lg text-slate-900">{450 + (hash % 100)}</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-3 flex-1 shadow-sm">
           <p className="text-slate-400 text-[10px] uppercase font-bold mb-1">Low Stock</p>
           <p className="font-bold text-lg text-red-500">{12 + (hash % 5)}</p>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
         <div className="bg-slate-50 border-b border-slate-100 p-3 grid grid-cols-4 gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
            <div className="col-span-2">Item Name</div>
            <div className="text-center">Stock</div>
            <div className="text-right">Status</div>
         </div>
         <div className="divide-y divide-slate-100">
            {parts.map((part, i) => (
              <div key={i} className="p-3 grid grid-cols-4 gap-2 items-center">
                 <div className="col-span-2">
                    <p className="text-xs font-bold text-slate-900 leading-tight">{part.name}</p>
                    <p className="text-[9px] text-slate-400 font-mono mt-0.5">{part.sku}</p>
                 </div>
                 <div className="text-center text-sm font-bold text-slate-700">
                    {part.stock}
                 </div>
                 <div className="text-right">
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded border ${part.stock <= part.min ? (part.stock < 5 ? 'bg-red-50 text-red-600 border-red-200' : 'bg-amber-50 text-amber-600 border-amber-200') : 'bg-green-50 text-green-600 border-green-200'}`}>
                      {part.stock <= part.min ? 'Low' : 'OK'}
                    </span>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}

function HeroAppointmentsMockUI({ hash }: { hash: number }) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const appointments = [
    { time: "10:00 AM", customer: "Priya Nair", vehicle: "MG Hector", service: "AC Service", bay: "Bay 2", status: "Confirmed" },
    { time: "12:30 PM", customer: "Vikram Shah", vehicle: "Swift Dzire", service: "Brake Check", bay: "Bay 1", status: "Waiting" },
    { time: "04:00 PM", customer: "Meera Joshi", vehicle: "Creta SX", service: "Full Detailing", bay: "Bay 3", status: "Confirmed" },
  ];
  const activeDay = hash % days.length;

  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
            <Calendar className="size-4 text-teal-600" /> Appointments
          </h3>
          <p className="text-[11px] text-slate-500 mt-0.5">Week of Sep 1–6</p>
        </div>
        <span className="bg-teal-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium">+ Book Slot</span>
      </div>

      <div className="grid grid-cols-6 gap-1.5 mb-5">
        {days.map((day, i) => (
          <div
            key={day}
            className={`rounded-lg py-2 text-center border ${
              i === activeDay
                ? "bg-teal-600 border-teal-600 text-white"
                : "bg-white border-slate-200 text-slate-600"
            }`}
          >
            <p className="text-[9px] font-bold uppercase opacity-80">{day}</p>
            <p className="text-sm font-bold mt-0.5">{1 + i}</p>
          </div>
        ))}
      </div>

      <div className="flex gap-3 mb-4">
        <div className="bg-white border border-slate-200 rounded-xl p-3 flex-1 shadow-sm">
          <p className="text-slate-400 text-[10px] uppercase font-bold">Today</p>
          <p className="font-bold text-xl text-slate-900 mt-1">{6 + (hash % 4)}</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-3 flex-1 shadow-sm">
          <p className="text-slate-400 text-[10px] uppercase font-bold">Open slots</p>
          <p className="font-bold text-xl text-teal-600 mt-1">{3 + (hash % 3)}</p>
        </div>
      </div>

      <div className="space-y-2.5">
        {appointments.map((item) => (
          <div key={item.time} className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-xs font-bold text-slate-900">{item.customer}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{item.vehicle} · {item.service}</p>
              </div>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${
                item.status === "Confirmed"
                  ? "bg-teal-50 text-teal-700 border-teal-200"
                  : "bg-amber-50 text-amber-700 border-amber-200"
              }`}>
                {item.status}
              </span>
            </div>
            <div className="mt-2 flex items-center gap-3 text-[10px] text-slate-500">
              <span className="inline-flex items-center gap-1 font-semibold text-slate-700">
                <Clock className="size-3 text-teal-600" /> {item.time}
              </span>
              <span>{item.bay}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroQuotationsMockUI({ hash }: { hash: number }) {
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm">Service Quotation</h3>
        <span className="bg-amber-100 text-amber-700 border border-amber-200 px-2 py-1 rounded text-[10px] font-bold">PENDING APPROVAL</span>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm mb-4">
        <p className="text-[10px] text-slate-400 uppercase font-bold">Customer</p>
        <p className="font-bold text-sm text-slate-900 mt-1">Suresh Reddy · Innova Crysta</p>
        <p className="text-[11px] text-slate-500 mt-0.5">Quote #QT-{(4200 + (hash % 80))}</p>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-3">
        {[
          { item: "Ceramic Coating (Full Body)", amount: "₹18,500" },
          { item: "Interior Deep Clean", amount: "₹3,200" },
          { item: "Engine Bay Dressing", amount: "₹1,800" },
        ].map((row) => (
          <div key={row.item} className="flex justify-between text-xs">
            <span className="text-slate-600">{row.item}</span>
            <span className="font-bold text-slate-900">{row.amount}</span>
          </div>
        ))}
        <div className="border-t border-slate-100 pt-3 flex justify-between items-center">
          <span className="text-xs font-bold text-slate-900">Estimated Total</span>
          <span className="font-bold text-lg text-teal-600">₹23,500</span>
        </div>
      </div>
    </div>
  );
}

function HeroRemindersMockUI({ hash }: { hash: number }) {
  const reminders = [
    { title: "Service due", detail: "Kia Seltos · 6-month service", when: "Today 10:00 AM", channel: "WhatsApp" },
    { title: "Oil change alert", detail: "Honda City · 5,000 km due", when: "Today 2:30 PM", channel: "SMS" },
    { title: "Membership renewal", detail: "Gold plan · Arjun Kapoor", when: "Tomorrow", channel: "Push" },
  ];
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <Bell className="size-4 text-teal-600" /> Reminder Queue
        </h3>
        <span className="bg-teal-50 text-teal-700 border border-teal-200 px-2 py-1 rounded text-[10px] font-bold">
          {4 + (hash % 5)} scheduled
        </span>
      </div>
      <div className="space-y-3">
        {reminders.map((item) => (
          <div key={item.title} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <div className="flex justify-between gap-2">
              <p className="text-sm font-bold text-slate-900">{item.title}</p>
              <span className="text-[9px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">{item.channel}</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">{item.detail}</p>
            <p className="text-[10px] text-teal-600 font-semibold mt-2">{item.when}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Post-job CRM follow-ups — distinct from scheduled service reminders. */
function HeroFollowUpsMockUI({ hash }: { hash: number }) {
  const followUps = [
    { name: "Priya Sharma", reason: "Thank-you after detailing", status: "Due now", action: "Call", tone: "bg-rose-50 text-rose-700 border-rose-200" },
    { name: "Rahul Mehta", reason: "Quote not confirmed · MG Astor", status: "In 2 hrs", action: "WhatsApp", tone: "bg-amber-50 text-amber-700 border-amber-200" },
    { name: "Neha Joshi", reason: "Feedback after delivery", status: "Tomorrow", action: "SMS", tone: "bg-slate-100 text-slate-600 border-slate-200" },
  ];
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <PhoneCall className="size-4 text-teal-600" /> Follow-up Board
        </h3>
        <span className="bg-rose-50 text-rose-700 border border-rose-200 px-2 py-1 rounded text-[10px] font-bold">
          {3 + (hash % 4)} open
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { label: "Calls", value: 5 + (hash % 4) },
          { label: "Messages", value: 8 + (hash % 6) },
          { label: "Closed", value: 12 + (hash % 5) },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-slate-200 rounded-xl p-3 text-center shadow-sm">
            <p className="text-lg font-bold text-slate-900">{stat.value}</p>
            <p className="text-[9px] font-semibold uppercase tracking-wide text-slate-400 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2.5">
        {followUps.map((item) => (
          <div key={item.name} className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-bold text-slate-900">{item.name}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{item.reason}</p>
              </div>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded border shrink-0 ${item.tone}`}>
                {item.status}
              </span>
            </div>
            <div className="mt-2.5 flex items-center justify-between">
              <span className="text-[10px] text-slate-400 font-medium">Assigned to front desk</span>
              <span className="text-[10px] font-bold text-teal-700 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded">
                {item.action}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroVendorsMockUI({ hash }: { hash: number }) {
  const vendors = [
    { name: "AutoParts Hub", due: "₹42,800", status: "Due in 3 days" },
    { name: "Lubricants India", due: "₹18,250", status: "Paid" },
    { name: "Detail Supply Co.", due: "₹9,600", status: "Overdue" },
  ];
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <Building2 className="size-4 text-teal-600" /> Vendor Ledger
        </h3>
        <span className="text-[10px] font-bold text-slate-500">{12 + (hash % 8)} vendors</span>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm mb-4">
        <p className="text-[10px] text-slate-400 uppercase font-bold">Payables this week</p>
        <p className="font-bold text-2xl text-slate-900 mt-1">₹{(70 + (hash % 20))}k</p>
      </div>
      <div className="space-y-2.5">
        {vendors.map((vendor) => (
          <div key={vendor.name} className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm flex justify-between items-center">
            <div>
              <p className="text-sm font-bold text-slate-900">{vendor.name}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">{vendor.status}</p>
            </div>
            <p className="text-sm font-bold text-slate-800">{vendor.due}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroMembershipMockUI({ hash }: { hash: number }) {
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <Gift className="size-4 text-teal-600" /> Membership Card
        </h3>
        <span className="bg-amber-100 text-amber-700 border border-amber-200 px-2 py-1 rounded text-[10px] font-bold">GOLD</span>
      </div>
      <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-teal-900 p-5 text-white mb-4">
        <p className="text-xs text-teal-200">MY DETAIL OS Rewards</p>
        <p className="font-bold text-lg mt-2">Arjun Kapoor</p>
        <p className="text-xs text-slate-300 mt-1">Member since Jan 2025</p>
        <div className="mt-5 flex justify-between items-end">
          <div>
            <p className="text-[10px] text-slate-400 uppercase">Points</p>
            <p className="font-bold text-2xl">{1250 + (hash % 400)}</p>
          </div>
          <p className="text-xs text-teal-200">Expires Dec 2026</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
          <p className="text-[10px] text-slate-400 uppercase font-bold">Visits</p>
          <p className="font-bold text-lg text-slate-900">{8 + (hash % 6)}</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
          <p className="text-[10px] text-slate-400 uppercase font-bold">Savings</p>
          <p className="font-bold text-lg text-teal-600">₹{(4 + (hash % 5))}k</p>
        </div>
      </div>
    </div>
  );
}

/** Customer-to-customer referral tracking — distinct from membership cards. */
function HeroReferralsMockUI({ hash }: { hash: number }) {
  const referrals = [
    { from: "Arjun Kapoor", to: "Vikram Shah", reward: "₹500 credit", status: "Converted", tone: "bg-emerald-50 text-emerald-700 border-emerald-200" },
    { from: "Priya Sharma", to: "Ananya Iyer", reward: "₹500 credit", status: "Pending visit", tone: "bg-amber-50 text-amber-700 border-amber-200" },
    { from: "Rahul Mehta", to: "Karan Patel", reward: "Free wash", status: "Shared link", tone: "bg-slate-100 text-slate-600 border-slate-200" },
  ];
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <Share2 className="size-4 text-teal-600" /> Referral Pipeline
        </h3>
        <span className="bg-teal-50 text-teal-700 border border-teal-200 px-2 py-1 rounded text-[10px] font-bold">
          {18 + (hash % 9)} this month
        </span>
      </div>

      <div className="rounded-2xl bg-white border border-slate-200 p-4 shadow-sm mb-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-bold">Your invite code</p>
            <p className="font-mono font-bold text-lg text-slate-900 tracking-wider mt-1">
              PD-{(hash % 9000) + 1000}
            </p>
          </div>
          <button type="button" className="text-[10px] font-bold bg-teal-600 text-white px-3 py-2 rounded-lg">
            Copy link
          </button>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-teal-50 border border-teal-100 p-2.5">
            <p className="text-[9px] font-semibold uppercase text-teal-700">Converted</p>
            <p className="font-bold text-slate-900 text-base mt-0.5">{6 + (hash % 5)}</p>
          </div>
          <div className="rounded-xl bg-amber-50 border border-amber-100 p-2.5">
            <p className="text-[9px] font-semibold uppercase text-amber-700">Rewards paid</p>
            <p className="font-bold text-slate-900 text-base mt-0.5">₹{(3 + (hash % 4))}k</p>
          </div>
        </div>
      </div>

      <div className="space-y-2.5">
        {referrals.map((item) => (
          <div key={`${item.from}-${item.to}`} className="bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="text-sm font-bold text-slate-900">
                  {item.from} <span className="text-slate-400 font-medium">→</span> {item.to}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">Reward: {item.reward}</p>
              </div>
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded border shrink-0 ${item.tone}`}>
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroAnalyticsMockUI({ hash }: { hash: number }) {
  const bars = [42, 58, 51, 70, 64, 78, 85];
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <BarChart3 className="size-4 text-teal-600" /> Workshop Analytics
        </h3>
        <span className="text-[10px] font-bold text-slate-500">Last 7 days</span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
          <p className="text-[10px] text-slate-400 uppercase font-bold">Revenue</p>
          <p className="font-bold text-sm text-slate-900 mt-1">₹{(180 + hash % 40)}k</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
          <p className="text-[10px] text-slate-400 uppercase font-bold">Jobs</p>
          <p className="font-bold text-sm text-slate-900 mt-1">{48 + (hash % 20)}</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
          <p className="text-[10px] text-slate-400 uppercase font-bold">CSAT</p>
          <p className="font-bold text-sm text-teal-600 mt-1">4.{6 + (hash % 3)}</p>
        </div>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
        <p className="text-[10px] text-slate-400 uppercase font-bold mb-3">Daily completions</p>
        <div className="flex h-28 items-end gap-2">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t bg-teal-500/80" style={{ height: `${h}%` }} aria-hidden />
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroServicesMockUI({ hash }: { hash: number }) {
  const services = [
    { name: "General Service", duration: "2–3 hrs", price: "₹2,499" },
    { name: "Ceramic Coating", duration: "1 day", price: "₹18,999" },
    { name: "Interior Detailing", duration: "3–4 hrs", price: "₹3,499" },
    { name: "Denting & Painting", duration: "2–4 days", price: "Custom" },
  ];
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <Wrench className="size-4 text-teal-600" /> Services Catalog
        </h3>
        <span className="bg-teal-50 text-teal-700 border border-teal-200 px-2 py-1 rounded text-[10px] font-bold">
          {24 + (hash % 12)} services
        </span>
      </div>
      <div className="space-y-2.5">
        {services.map((service) => (
          <div key={service.name} className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm flex justify-between items-center">
            <div>
              <p className="text-sm font-bold text-slate-900">{service.name}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">{service.duration}</p>
            </div>
            <p className="text-sm font-bold text-teal-600">{service.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroVehiclesMockUI({ hash }: { hash: number }) {
  const vehicles = [
    { plate: "KA-01-AB-1234", model: "Kia Seltos", owner: "Arjun Kapoor", next: "Service in 12 days" },
    { plate: "MH-12-XY-8821", model: "Hyundai Creta", owner: "Neha Desai", next: "Due today" },
    { plate: "TN-09-CC-4410", model: "Honda City", owner: "Ravi Iyer", next: "History: 6 visits" },
  ];
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm">Vehicle Registry</h3>
        <span className="text-[10px] font-bold text-slate-500">{180 + (hash % 40)} vehicles</span>
      </div>
      <div className="space-y-2.5">
        {vehicles.map((v) => (
          <div key={v.plate} className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
            <div className="flex justify-between gap-2">
              <p className="text-sm font-bold text-slate-900">{v.model}</p>
              <span className="text-[10px] font-mono font-bold text-teal-700 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded">{v.plate}</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">{v.owner}</p>
            <p className="text-[10px] text-slate-600 mt-2">{v.next}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroLocationsMockUI({ hash }: { hash: number }) {
  const branches = [
    { name: "HSR Layout", jobs: 14, staff: 8, status: "Open" },
    { name: "Indiranagar", jobs: 9, staff: 6, status: "Open" },
    { name: "Whitefield", jobs: 11, staff: 7, status: "Busy" },
  ];
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <Building2 className="size-4 text-teal-600" /> Branch Network
        </h3>
        <span className="bg-teal-50 text-teal-700 border border-teal-200 px-2 py-1 rounded text-[10px] font-bold">
          {3 + (hash % 4)} locations
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
          <p className="text-[10px] text-slate-400 uppercase font-bold">Active jobs</p>
          <p className="font-bold text-xl text-slate-900 mt-1">{34 + (hash % 10)}</p>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
          <p className="text-[10px] text-slate-400 uppercase font-bold">Staff on duty</p>
          <p className="font-bold text-xl text-teal-600 mt-1">{21 + (hash % 6)}</p>
        </div>
      </div>
      <div className="space-y-2.5">
        {branches.map((b) => (
          <div key={b.name} className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm flex justify-between items-center">
            <div>
              <p className="text-sm font-bold text-slate-900">{b.name}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">{b.jobs} jobs · {b.staff} staff</p>
            </div>
            <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${
              b.status === "Busy"
                ? "bg-amber-50 text-amber-700 border-amber-200"
                : "bg-teal-50 text-teal-700 border-teal-200"
            }`}>
              {b.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroSettingsMockUI() {
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
          <Settings className="size-4 text-teal-600" /> Workshop Settings
        </h3>
        <span className="text-[10px] font-bold text-slate-500">Admin</span>
      </div>
      <div className="space-y-3">
        {[
          { label: "GST invoice numbering", on: true },
          { label: "WhatsApp status updates", on: true },
          { label: "Multi-branch sync", on: false },
          { label: "Staff role permissions", on: true },
        ].map((item) => (
          <div key={item.label} className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm flex justify-between items-center">
            <p className="text-sm font-semibold text-slate-800">{item.label}</p>
            <div className={`w-10 h-6 rounded-full p-1 ${item.on ? "bg-teal-500" : "bg-slate-200"}`}>
              <div className={`size-4 rounded-full bg-white transition-transform ${item.on ? "translate-x-4" : ""}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroExpensesMockUI({ hash }: { hash: number }) {
  const rows = [
    { label: "Spare parts purchase", amount: "₹12,400", tag: "Parts" },
    { label: "Electricity bill", amount: "₹4,850", tag: "Utilities" },
    { label: "Mechanic incentives", amount: "₹8,200", tag: "Payroll" },
  ];
  return (
    <div className="relative bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 shadow-2xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      <div className="flex justify-between items-center mb-5">
        <h3 className="font-bold text-slate-900 text-sm">Expense Tracker</h3>
        <span className="bg-red-50 text-red-600 border border-red-100 px-2 py-1 rounded text-[10px] font-bold">This month</span>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm mb-4">
        <p className="text-[10px] text-slate-400 uppercase font-bold">Total spent</p>
        <p className="font-bold text-2xl text-slate-900 mt-1">₹{(95 + (hash % 30))}k</p>
      </div>
      <div className="space-y-2.5">
        {rows.map((row) => (
          <div key={row.label} className="bg-white border border-slate-200 rounded-xl p-3 shadow-sm flex justify-between items-center">
            <div>
              <p className="text-sm font-bold text-slate-900">{row.label}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">{row.tag}</p>
            </div>
            <p className="text-sm font-bold text-slate-800">{row.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- DEEP DIVE MOCK UI VARIANTS ---

function DeepDiveLedgerMockUI({ title, short, hash }: { title: string, short: string, hash: number }) {
  return (
    <div className="rounded-3xl bg-[#0f172a] p-8 shadow-2xl border border-slate-800">
      <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-full bg-teal-900/50 flex items-center justify-center">
            <span className="text-[10px] font-bold text-teal-400">{short}</span>
          </div>
          <div>
            <h4 className="text-white font-bold text-sm">{title} Ledger</h4>
            <p className="text-slate-500 text-xs">Live Data Stream</p>
          </div>
        </div>
        <div className="bg-teal-900/30 text-teal-400 text-[10px] font-bold px-2 py-1 rounded">
          Encrypted
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center bg-slate-800/50 rounded-lg p-4">
          <span className="text-slate-300 text-sm">Processing Speed</span>
          <span className="text-teal-400 font-bold">{20 + (hash % 100)} ms</span>
        </div>
        <div className="flex justify-between items-center bg-slate-800/50 rounded-lg p-4">
          <span className="text-slate-300 text-sm">Active Connections</span>
          <span className="text-white font-bold">{1000 + (hash * 15 % 8000)}</span>
        </div>
        <div className="flex justify-between items-center bg-slate-800/50 rounded-lg p-4">
          <span className="text-slate-300 text-sm">Data Synced</span>
          <span className="text-white font-bold">100%</span>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-slate-800 flex justify-between items-center">
        <span className="text-white font-bold">System Status</span>
        <span className="text-green-400 font-bold text-xl">Optimal</span>
      </div>
    </div>
  );
}

function DeepDiveWorkflowMockUI({ title, short, hash }: { title: string, short: string, hash: number }) {
  const steps = [
    { label: "Vehicle Check-In", time: "09:00 AM", status: "completed" },
    { label: "Digital Inspection", time: "09:45 AM", status: "completed" },
    { label: "Customer Approval", time: "10:30 AM", status: "completed" },
    { label: `${short} Service In Progress`, time: "In Progress", status: "current" },
    { label: "Final Quality Check", time: "Pending", status: "upcoming" },
    { label: "Ready for Delivery", time: "Pending", status: "upcoming" },
  ];

  return (
    <div className="relative bg-white border border-slate-200 rounded-3xl p-6 shadow-xl w-full max-w-md mx-auto transform hover:-translate-y-2 transition-transform duration-500">
      {/* Decorative top bar */}
      <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
        <div>
          <h3 className="font-bold text-slate-900 text-sm">Live Job Tracker</h3>
          <p className="text-xs text-slate-500">Work Order #{8000 + (hash % 1000)}</p>
        </div>
        <div className="bg-teal-50 text-teal-600 px-3 py-1 rounded-full text-xs font-bold">
          Active
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-1">
        {steps.map((step, i) => (
          <div key={i} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className={`size-6 rounded-full flex items-center justify-center shrink-0 z-10 
                ${step.status === 'completed' ? 'bg-teal-500 text-white' : 
                  step.status === 'current' ? 'bg-amber-400 text-white shadow-[0_0_10px_rgba(251,191,36,0.5)]' : 
                  'bg-slate-100 border border-slate-200'}`}>
                {step.status === 'completed' && <Check className="size-3" />}
                {step.status === 'current' && <RefreshCw className="size-3 animate-spin" style={{ animationDuration: '3s' }} />}
                {step.status === 'upcoming' && <div className="size-2 rounded-full bg-slate-300" />}
              </div>
              {i !== steps.length - 1 && (
                <div className={`w-0.5 h-6 my-1 ${step.status === 'completed' ? 'bg-teal-500' : 'bg-slate-100'}`} />
              )}
            </div>
            <div className={`pb-2 ${step.status === 'upcoming' ? 'opacity-50' : ''}`}>
              <p className={`text-sm font-bold ${step.status === 'current' ? 'text-amber-600' : 'text-slate-900'}`}>{step.label}</p>
              <p className="text-xs text-slate-500 font-mono mt-0.5">{step.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DeepDiveSettingsMockUI({ title, short, hash }: { title: string, short: string, hash: number }) {
  return (
    <div className="rounded-3xl bg-slate-900 p-8 shadow-2xl border border-slate-800">
      <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-6">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-teal-500/20 flex items-center justify-center">
            <Sliders className="size-4 text-teal-400" />
          </div>
          <div>
            <h4 className="text-white font-bold text-sm">{title} Configuration</h4>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        {[
          { label: 'Auto-Sync Data', desc: 'Sync with cloud automatically', on: true },
          { label: 'Push Notifications', desc: 'Alert staff on updates', on: hash % 2 === 0 },
          { label: 'Strict Validation', desc: 'Require admin approval', on: hash % 3 !== 0 },
        ].map((setting, i) => (
          <div key={i} className="flex justify-between items-center">
            <div>
              <p className="text-sm font-bold text-slate-200">{setting.label}</p>
              <p className="text-xs text-slate-500">{setting.desc}</p>
            </div>
            <div className={`w-10 h-6 rounded-full p-1 transition-colors ${setting.on ? 'bg-teal-500' : 'bg-slate-700'}`}>
              <div className={`w-4 h-4 rounded-full bg-white transition-transform ${setting.on ? 'translate-x-4' : 'translate-x-0'}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-');
}

type HeroKind =
  | "showcase"
  | "dashboard"
  | "job-cards"
  | "attendance"
  | "users-staff"
  | "payroll"
  | "performance"
  | "leave"
  | "mechanics"
  | "activity-log"
  | "bookings"
  | "appointments"
  | "pickup"
  | "crm"
  | "finance"
  | "accounting"
  | "cash-bank"
  | "expenses"
  | "counter-sale"
  | "inventory"
  | "quotations"
  | "reminders"
  | "follow-ups"
  | "vendors"
  | "membership"
  | "referrals"
  | "analytics"
  | "services"
  | "vehicles"
  | "locations"
  | "settings";

function getHeroKind(slug: string): HeroKind {
  const exact: Record<string, HeroKind> = {
    dashboard: "dashboard",
    "job-cards": "job-cards",
    "job-card-management": "job-cards",
    bookings: "bookings",
    appointments: "appointments",
    "pickup-drop": "pickup",
    "counter-sale": "counter-sale",
    quotations: "quotations",
    services: "services",
    "inventory-hub": "inventory",
    inventory: "inventory",
    vendors: "vendors",
    customers: "crm",
    crm: "crm",
    membership: "membership",
    vehicles: "vehicles",
    reminders: "reminders",
    "follow-ups": "follow-ups",
    referrals: "referrals",
    billing: "finance",
    "gst-billing": "finance",
    expenses: "expenses",
    accounting: "accounting",
    "cash-bank": "cash-bank",
    parties: "vendors",
    finance: "finance",
    "users-staff": "users-staff",
    attendance: "attendance",
    leave: "leave",
    payroll: "payroll",
    performance: "performance",
    mechanics: "mechanics",
    locations: "locations",
    analytics: "analytics",
    "activity-log": "activity-log",
    "messages-log": "reminders",
    "service-reminders": "reminders",
    "customer-engagement": "crm",
    "whatsapp-automation": "reminders",
    automation: "reminders",
    settings: "settings",
    "reports-analytics": "analytics",
    "service-history": "vehicles",
    "multi-branch": "locations",
    erp: "dashboard",
    "workshop-management": "job-cards",
    "automobile-workshop": "job-cards",
    "auto-repair-shop": "job-cards",
    "car-garage": "job-cards",
    "car-workshop": "job-cards",
    "bike-workshop": "job-cards",
    "truck-workshop": "job-cards",
    "ev-garage": "job-cards",
    "car-detailing": "services",
    "fleet-workshop": "vehicles",
    "garage-app": "showcase",
    "workshop-app": "showcase",
    marketing: "analytics",
    "best-garage-software": "showcase",
    "best-workshop-software": "showcase",
    "software-india-garage": "showcase",
    "software-india-workshop": "showcase",
  };

  if (exact[slug]) return exact[slug];

  if (slug.match(/best-|software-india|garage-app|workshop-app/)) return "showcase";
  if (slug.match(/appointment/)) return "appointments";
  if (slug.match(/booking/)) return "bookings";
  if (slug.match(/pickup|drop/)) return "pickup";
  if (slug.match(/quotation|quote/)) return "quotations";
  if (slug.match(/follow-up/)) return "follow-ups";
  if (slug.match(/reminder|whatsapp|message/)) return "reminders";
  if (slug.match(/referral/)) return "referrals";
  if (slug.match(/membership|reward/)) return "membership";
  if (slug.match(/vendor|partie|supplier/)) return "vendors";
  if (slug.match(/crm|customer/)) return "crm";
  if (slug.match(/vehicle|fleet/)) return "vehicles";
  if (slug.match(/expense/)) return "expenses";
  if (slug.match(/location|branch|multi-branch/)) return "locations";
  if (slug.match(/setting/)) return "settings";
  if (slug.match(/service(?!-remind)/)) return "services";
  if (slug.match(/cash-bank|cash|bank/)) return "cash-bank";
  if (slug.match(/account|ledger|book/)) return "accounting";
  if (slug.match(/finance|bill|invoice|gst|payment/)) return "finance";
  if (slug.match(/counter-sale|pos/)) return "counter-sale";
  if (slug.match(/inventory|stock|parts/)) return "inventory";
  if (slug.match(/job-card|inspection|repair|workshop|garage/)) return "job-cards";
  if (slug.match(/activity-log|activity/)) return "activity-log";
  if (slug.match(/payroll/)) return "payroll";
  if (slug.match(/performance/)) return "performance";
  if (slug.match(/leave/)) return "leave";
  if (slug.match(/mechanic/)) return "mechanics";
  if (slug.match(/attendance/)) return "attendance";
  if (slug.match(/staff|user/)) return "users-staff";
  if (slug.match(/analytics|report|marketing/)) return "analytics";
  if (slug.match(/dashboard|erp/)) return "dashboard";

  return "dashboard";
}

function FeatureHeroMock({
  kind,
  slug,
  title,
  short,
  hash,
}: {
  kind: HeroKind;
  slug: string;
  title: string;
  short: string;
  hash: number;
}) {
  switch (kind) {
    case "showcase":
      return <HeroShowcasePhotoUI slug={slug} title={title} hash={hash} />;
    case "job-cards":
      return <HeroJobCardsMockUI title={title} short={short} hash={hash} />;
    case "attendance":
      return <HeroAttendanceMockUI title={title} short={short} hash={hash} />;
    case "users-staff":
      return <HeroUsersStaffMockUI hash={hash} />;
    case "payroll":
      return <HeroPayrollMockUI hash={hash} />;
    case "performance":
      return <HeroPerformanceMockUI hash={hash} />;
    case "leave":
      return <HeroLeaveMockUI hash={hash} />;
    case "mechanics":
      return <HeroMechanicsMockUI hash={hash} />;
    case "activity-log":
      return <HeroActivityLogMockUI hash={hash} />;
    case "bookings":
      return <HeroBookingsMockUI title={title} short={short} hash={hash} />;
    case "appointments":
      return <HeroAppointmentsMockUI hash={hash} />;
    case "pickup":
      return <HeroPickupDropMockUI title={title} short={short} hash={hash} />;
    case "crm":
      return <HeroCRMMockUI title={title} short={short} hash={hash} />;
    case "finance":
      return <HeroFinanceMockUI title={title} short={short} hash={hash} />;
    case "accounting":
      return <HeroAccountingMockUI hash={hash} />;
    case "cash-bank":
      return <HeroCashBankMockUI hash={hash} />;
    case "expenses":
      return <HeroExpensesMockUI hash={hash} />;
    case "counter-sale":
      return <HeroCounterSaleMockUI title={title} short={short} hash={hash} />;
    case "inventory":
      return <HeroInventoryMockUI title={title} short={short} hash={hash} />;
    case "quotations":
      return <HeroQuotationsMockUI hash={hash} />;
    case "reminders":
      return <HeroRemindersMockUI hash={hash} />;
    case "follow-ups":
      return <HeroFollowUpsMockUI hash={hash} />;
    case "vendors":
      return <HeroVendorsMockUI hash={hash} />;
    case "membership":
      return <HeroMembershipMockUI hash={hash} />;
    case "referrals":
      return <HeroReferralsMockUI hash={hash} />;
    case "analytics":
      return <HeroAnalyticsMockUI hash={hash} />;
    case "services":
      return <HeroServicesMockUI hash={hash} />;
    case "vehicles":
      return <HeroVehiclesMockUI hash={hash} />;
    case "locations":
      return <HeroLocationsMockUI hash={hash} />;
    case "settings":
      return <HeroSettingsMockUI />;
    case "dashboard":
    default:
      return <HeroDashboardMockUI title={title} short={short} hash={hash} />;
  }
}

export function generateStaticParams() {
  return getAllFeatureSlugs().map((slug) => ({ slug }));
}

export default async function FeaturePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  if (!resolvedParams.slug) {
    notFound();
  }
const data = getFeatureData(resolvedParams.slug);

  const formattedName = resolvedParams.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const shortName = formattedName.substring(0, 3).toUpperCase();
  const hash = resolvedParams.slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const heroKind = getHeroKind(resolvedParams.slug);

  const gridVariant = hash % 2;
  
  // Smart Deep Dive Variant Selection
  let deepDiveVariant = 0; // Default: Ledger
  if (resolvedParams.slug.match(/workflow|job-card|service|repair|inspection|booking|appointment|pickup/)) {
    deepDiveVariant = 1; // Workflow Tracker
  } else if (resolvedParams.slug.match(/setting|access|role|branch|location|user/)) {
    deepDiveVariant = 2; // Settings
  } else if (resolvedParams.slug.match(/finance|billing|ledger|payment|expense|vendor|partie/)) {
    deepDiveVariant = 0; // Ledger
  } else if (resolvedParams.slug.match(/reminder|message|whatsapp|follow/)) {
    deepDiveVariant = 1;
  } else {
    deepDiveVariant = (hash + 1) % 3;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-[#18181b] overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-800/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full bg-teal-500/10 border border-teal-500/20 px-3 py-1 mb-6">
                <span className="text-[11px] font-bold tracking-wider text-teal-500 uppercase">
                  {data.hero.badge}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                {data.hero.titleStart} <br className="hidden sm:block" />
                <span className="relative inline-block mt-2">
                  {data.hero.titleHighlight}
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-teal-500 rounded-full" />
                </span>
                {data.hero.titleEnd && (
                  <>
                    <br className="hidden sm:block" />
                    {data.hero.titleEnd}
                  </>
                )}
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-8 max-w-xl">
                {data.hero.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/signup">
                  <Button size="lg" className="h-12 px-8 rounded-full bg-teal-600 hover:bg-teal-500 text-white font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(13,148,136,0.3)] w-full sm:w-auto">
                    Start 7-Day Free Trial <ArrowRight className="ml-2 size-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content: Feature-specific Mock UI or photo showcase */}
            <div className="relative">
              <FeatureHeroMock
                kind={heroKind}
                slug={resolvedParams.slug}
                title={formattedName}
                short={shortName}
                hash={hash}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Benefits Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 mb-6">
                <span className="text-[11px] font-bold tracking-wider text-teal-800 uppercase">
                  {data.benefits.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.2] mb-6">
                {data.benefits.titleStart} <br className="hidden sm:block" />
                <span className="relative inline-block mt-2">
                  {data.benefits.titleHighlight}
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-teal-500 rounded-full" />
                </span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {data.benefits.p1}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {data.benefits.p2}
              </p>
            </div>

            {/* Right: Feature Grid */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-8">
                Why {data.hero.titleHighlight} is Critical for Garages:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {data.benefits.cards.map((card, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      {card.icon}
                      <h4 className="font-bold text-teal-600 text-sm">{card.title}</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comparison Section (Modern Split Cards) */}
      <section className="py-24 bg-[#f8fafc] border-t border-slate-200">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.2] mb-4">
              {data.comparison.titleStart} <br className="hidden sm:block" />
              <span className="relative inline-block">
                {data.comparison.titleHighlight}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-teal-500 rounded-full" />
              </span>
            </h2>
            <p className="text-lg text-slate-600 mt-6">
              {data.comparison.subtitle}
            </p>
          </div>

          <div className="space-y-6">
            {data.comparison.rows.map((row, i) => (
              <div key={i} className="relative bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row gap-6 md:gap-8 items-stretch group hover:shadow-md transition-shadow">
                
                {/* Area Label */}
                <div className="md:w-1/4 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-teal-600 mb-2">
                    <div className="size-2 rounded-full bg-teal-500" />
                    Operational Area
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{row.label}</h3>
                </div>

                {/* Vertical Divider (hidden on mobile) */}
                <div className="hidden md:block w-px bg-slate-100" />

                {/* Comparison Content */}
                <div className="md:w-3/4 grid sm:grid-cols-2 gap-4 sm:gap-6 relative">
                  
                  {/* The Old Way */}
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex flex-col sm:flex-row gap-4 opacity-80 group-hover:opacity-100 transition-opacity">
                    <div className="size-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                      <X className="size-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">The Old Way</p>
                      <p className="text-slate-600 text-sm leading-relaxed">{row.falseText}</p>
                    </div>
                  </div>

                  {/* VS Badge */}
                  <div className="hidden sm:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-8 rounded-full bg-white border border-slate-200 shadow-sm items-center justify-center z-10 text-[10px] font-black text-slate-400">
                    VS
                  </div>

                  {/* The New Way */}
                  <div className="bg-teal-50/50 rounded-2xl p-5 border border-teal-100 flex flex-col sm:flex-row gap-4 relative overflow-hidden group-hover:bg-teal-50 transition-colors">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
                    <div className="size-10 rounded-full bg-teal-600 flex items-center justify-center shrink-0 shadow-md shadow-teal-600/20 relative z-10">
                      <Check className="size-5 text-white" />
                    </div>
                    <div className="relative z-10">
                      <p className="text-[10px] font-bold text-teal-700 uppercase tracking-wider mb-1">MY DETAIL OS Way</p>
                      <p className="text-teal-950 font-medium text-sm leading-relaxed">{row.trueText}</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Feature Grid Section (Bento Box Design) */}
      <section className="py-24 bg-[#fafafa]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.2] mb-4">
              {data.grid.titleStart} <br className="hidden sm:block" />
              <span className="relative inline-block mt-2">
                {data.grid.titleHighlight}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-teal-500 rounded-full" />
              </span>
            </h2>
            <p className="text-lg text-slate-600 mt-6">
              {data.grid.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            {data.grid.cards.map((card, i) => {
              // Perfectly balanced asymmetric spans without empty vertical spaces
              let spanClasses = "md:col-span-1";
              if (i === 0) spanClasses = "md:col-span-2"; // Wide top-left
              else if (i === 1) spanClasses = "md:col-span-1"; // Small top-right
              else if (i === 2) spanClasses = "md:col-span-1"; // Small mid-left
              else if (i === 3) spanClasses = "md:col-span-2"; // Wide mid-right
              else if (i === 4) spanClasses = "md:col-span-2"; // Wide bottom-left
              else if (i === 5) spanClasses = "md:col-span-1"; // Small bottom-right

              return (
                <div 
                  key={i} 
                  className={`group relative bg-white rounded-3xl p-6 lg:p-8 border border-slate-200 overflow-hidden hover:border-teal-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${spanClasses}`}
                >
                  {/* Decorative glowing gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Abstract background blur for wide cards */}
                  {(spanClasses === "md:col-span-2") && (
                    <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-teal-100/50 rounded-full blur-3xl group-hover:bg-teal-200/50 transition-colors duration-500 pointer-events-none" />
                  )}

                  <div className="relative z-10 flex flex-col h-full justify-center">
                    <div className="size-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-teal-100 group-hover:shadow-md transition-all duration-300">
                      {card.icon}
                    </div>
                    
                    <div>
                      <h3 className={`font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-teal-700 transition-colors ${spanClasses === "md:col-span-2" ? 'text-2xl' : 'text-lg'}`}>
                        {card.title}
                      </h3>
                      <p className={`text-slate-600 leading-relaxed ${spanClasses === "md:col-span-2" ? 'max-w-xl text-base' : 'text-sm'}`}>
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Workflow Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 mb-6">
              <span className="text-[11px] font-bold tracking-wider text-teal-800 uppercase">
                {data.workflow.badge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.2] mb-4">
              {data.workflow.titleStart} <br className="hidden sm:block" />
              <span className="relative inline-block mt-2">
                {data.workflow.titleHighlight}
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-teal-500 rounded-full" />
              </span>
            </h2>
            <p className="text-lg text-slate-600 mt-6">
              {data.workflow.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {data.workflow.steps.map((step, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all relative">
                <div className="text-3xl font-black text-teal-200 mb-4">{step.num}</div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Deep Dive Section */}
      <section className="py-24 bg-[#fafafa]">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center rounded-full bg-teal-100 px-3 py-1 mb-6">
                <span className="text-[11px] font-bold tracking-wider text-teal-800 uppercase">
                  {data.deepDive.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.2] mb-6">
                {data.deepDive.titleStart} <br className="hidden sm:block" />
                <span className="relative inline-block mt-2">
                  {data.deepDive.titleHighlight}
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-teal-500 rounded-full" />
                </span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                {data.deepDive.subtitle}
              </p>

              <div className="space-y-8">
                {data.deepDive.features.map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="size-8 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Mock UI */}
            <div className="relative">
              {deepDiveVariant === 0 && <DeepDiveLedgerMockUI title={formattedName} short={shortName} hash={hash} />}
              {deepDiveVariant === 1 && <DeepDiveWorkflowMockUI title={formattedName} short={shortName} hash={hash} />}
              {deepDiveVariant === 2 && <DeepDiveSettingsMockUI title={formattedName} short={shortName} hash={hash} />}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-teal-900 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to control your workshop operations?</h2>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">Join thousands of workshop owners using MY DETAIL OS to automate billing, track expenses, and maximize net profits.</p>
          <Link href="/signup">
            <Button size="lg" className="h-14 px-8 rounded-full bg-white text-teal-900 hover:bg-slate-100 font-bold text-lg">
              Start Your Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
