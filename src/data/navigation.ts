import type { LucideIcon } from "lucide-react";
import {
  Car,
  Bike,
  Wrench,
  Paintbrush,
  Truck,
  Droplets,
  Store,
  Disc,
  Fuel,
  Factory,
  Network,
  LayoutDashboard,
  ClipboardList,
  CalendarCheck,
  Package,
  Users,
  Gift,
  Receipt,
  Wallet,
  UserCog,
  Clock,
  BarChart3,
  MessageSquare,
  Settings,
  MapPin,
} from "lucide-react";

export interface MegaMenuItem {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
}

export interface MegaMenuColumn {
  title: string;
  items: MegaMenuItem[];
}

export interface NavItem {
  label: string;
  href: string;
  /** "columns" = titled link lists; "rich" = icon + title + description grid */
  megaMenuLayout?: "columns" | "rich";
  megaMenu?: MegaMenuColumn[];
}

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Features",
    href: "/#features",
    megaMenuLayout: "rich",
    megaMenu: [
      {
        title: "Platform features",
        items: [
          {
            label: "Dashboard",
            href: "/features/dashboard",
            description: "See today’s jobs, revenue, and workshop status at a glance.",
            icon: LayoutDashboard,
          },
          {
            label: "Job Cards",
            href: "/features/job-cards",
            description: "Track every vehicle from check-in through delivery.",
            icon: ClipboardList,
          },
          {
            label: "Bookings & Appointments",
            href: "/features/bookings",
            description: "Schedule slots and keep the bay calendar under control.",
            icon: CalendarCheck,
          },
          {
            label: "Inventory Hub",
            href: "/features/inventory-hub",
            description: "Manage parts, stock levels, purchases, and vendors.",
            icon: Package,
          },
          {
            label: "Customers CRM",
            href: "/features/customers",
            description: "Keep customer profiles, vehicles, and history connected.",
            icon: Users,
          },
          {
            label: "Membership & Rewards",
            href: "/features/membership",
            description: "Run loyalty programs that bring customers back.",
            icon: Gift,
          },
          {
            label: "Billing & Invoicing",
            href: "/features/billing",
            description: "Create GST invoices and track payments against jobs.",
            icon: Receipt,
          },
          {
            label: "Expenses & Cash",
            href: "/features/expenses",
            description: "Record workshop spend and keep cash & bank clear.",
            icon: Wallet,
          },
          {
            label: "Users & Staff",
            href: "/features/users-staff",
            description: "Roles, access, and day-to-day team management.",
            icon: UserCog,
          },
          {
            label: "Attendance & Payroll",
            href: "/features/attendance",
            description: "Track attendance, leave, and salary in one place.",
            icon: Clock,
          },
          {
            label: "Reports & Analytics",
            href: "/features/analytics",
            description: "Revenue, operations, and performance insights.",
            icon: BarChart3,
          },
          {
            label: "WhatsApp Messaging",
            href: "/features/messages-log",
            description: "Keep customers updated with service notifications.",
            icon: MessageSquare,
          },
          {
            label: "Multi-location",
            href: "/features/locations",
            description: "Run multiple branches with shared visibility.",
            icon: MapPin,
          },
          {
            label: "Settings",
            href: "/features/settings",
            description: "Configure branding, preferences, and workshop rules.",
            icon: Settings,
          },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/#solutions",
    megaMenuLayout: "rich",
    megaMenu: [
      {
        title: "Who we serve",
        items: [
          {
            label: "Independent workshops",
            href: "/features/automobile-workshop",
            description: "Run job cards, billing, and customers from one cloud workshop OS.",
            icon: Wrench,
          },
          {
            label: "Multi-brand service workshops",
            href: "/features/workshop-management",
            description: "Take control of multi-make service with seamless daily operations.",
            icon: Network,
          },
          {
            label: "Car detailing centers",
            href: "/features/car-detailing",
            description: "Give your detailing business a premium, organized customer experience.",
            icon: Paintbrush,
          },
          {
            label: "Auto repair centers",
            href: "/features/auto-repair-shop",
            description: "A cloud platform to enhance repair workflows and front-desk clarity.",
            icon: Car,
          },
          {
            label: "Motorcycle service centers",
            href: "/features/bike-workshop",
            description: "An intelligent platform built for bike and two-wheeler workshops.",
            icon: Bike,
          },
          {
            label: "Oil / lube service chains",
            href: "/features/car-garage",
            description: "A smarter way to impress customers with faster, consistent service.",
            icon: Droplets,
          },
          {
            label: "Car wash & detailing",
            href: "/features/car-detailing",
            description: "Bridge wash-bay speed with CRM, packages, and follow-ups.",
            icon: Droplets,
          },
          {
            label: "Service & repair franchisees",
            href: "/features/multi-branch",
            description: "Spend more time on repair and less on paperwork across outlets.",
            icon: Store,
          },
          {
            label: "Fleet operation businesses",
            href: "/features/fleet-workshop",
            description: "Bring dealership-grade visibility to fleets and workshop partners.",
            icon: Truck,
          },
          {
            label: "Tyre / battery retailers",
            href: "/features/ev-garage",
            description: "Charge up tyre and battery sales with inventory and job tracking.",
            icon: Disc,
          },
          {
            label: "OEM distributors",
            href: "/features/inventory",
            description: "Modernize distribution experience with stock and dealer visibility.",
            icon: Factory,
          },
          {
            label: "Oils / lubricants OEMs",
            href: "/features/inventory-hub",
            description: "A smarter way to lock in workshops and track product movement.",
            icon: Fuel,
          },
        ],
      },
    ],
  },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export const footerNav = {
  column1: [
    { label: "Careers", href: "#" },
    { label: "Press and media", href: "#" },
    { label: "Investor relations", href: "#" },
    { label: "Legal", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Security", href: "#" },
    { label: "Sitemap", href: "#" },
  ],
  considering: [
    { label: "About MY DETAIL OS", href: "/#about" },
    { label: "Customer Engagement", href: "/#features" },
    { label: "Communications", href: "/#features" },
    { label: "Customer Data Platform", href: "/#features" },
    { label: "Customer stories", href: "/#features" },
    { label: "Contact sales", href: "/#contact" },
  ],
  products: [
    { label: "Job Cards", href: "/#features" },
    { label: "GST Billing", href: "/#features" },
    { label: "Inventory Control", href: "/#features" },
    { label: "Service Reminders", href: "/#features" },
    { label: "WhatsApp Automation", href: "/#features" },
    { label: "Reports & Analytics", href: "/#features" },
  ],
  useCases: [
    { label: "Automobile Workshop", href: "/features/automobile-workshop" },
    { label: "Car Detailing", href: "/features/car-detailing" },
    { label: "Auto Repair Shop", href: "/features/auto-repair-shop" },
    { label: "Bike Workshop", href: "/features/bike-workshop" },
    { label: "Fleet Workshop", href: "/features/fleet-workshop" },
  ],
  resources: [
    { label: "Developer resources", href: "#" },
    { label: "API Documentation", href: "#" },
    { label: "Integrations", href: "#" },
    { label: "Support center", href: "/#contact" },
    { label: "Community", href: "#" },
  ],
} as const;

/** All feature/solution page slugs linked from primary mega menus. */
export function getAllFeatureSlugs(): string[] {
  const slugs = new Set<string>();
  for (const item of primaryNav) {
    for (const column of item.megaMenu ?? []) {
      for (const link of column.items) {
        if (link.href.startsWith("/features/")) {
          slugs.add(link.href.replace("/features/", ""));
        }
      }
    }
  }
  return Array.from(slugs);
}
