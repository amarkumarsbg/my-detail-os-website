import type { LucideIcon } from "lucide-react";
import {
  ClipboardList,
  Users,
  Receipt,
  Package,
  UserCog,
  LayoutDashboard,
  MessageSquare,
  Gift,
  BarChart3,
  ShieldCheck,
  Building2,
  Cloud,
  History,
  Smartphone,
} from "lucide-react";

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FeatureGroup {
  title: string;
  description: string;
  items: string[];
}

export const valueStripItems = [
  { title: "Job Card Management", icon: ClipboardList },
  { title: "Customer Management", icon: Users },
  { title: "Billing & Payments", icon: Receipt },
  { title: "Inventory Control", icon: Package },
  { title: "Staff Management", icon: UserCog },
  { title: "Customer Portal", icon: Smartphone },
] as const;

export const solutionFeatures: FeatureItem[] = [
  {
    title: "Workshop Management",
    description: "Run job cards, inspections, assignments, and delivery from one operational workflow.",
    icon: ClipboardList,
  },
  {
    title: "Customer Portal",
    description: "Give customers self-service access to job status, history, invoices, and rewards.",
    icon: LayoutDashboard,
  },
  {
    title: "Billing",
    description: "Create invoices, track payments, and keep workshop finances connected to jobs.",
    icon: Receipt,
  },
  {
    title: "Inventory",
    description: "Control parts, purchases, stock levels, and counter sales without spreadsheet chaos.",
    icon: Package,
  },
  {
    title: "Staff",
    description: "Manage team access, roles, and day-to-day staff operations across your workshop.",
    icon: UserCog,
  },
  {
    title: "Rewards",
    description: "Support membership and rewards programs where enabled for returning customers.",
    icon: Gift,
  },
  {
    title: "Reports",
    description: "See revenue, operations, and performance signals that help you run the business.",
    icon: BarChart3,
  },
  {
    title: "Messaging",
    description: "Keep customers informed with status updates and clearer service communication.",
    icon: MessageSquare,
  },
];

export const featureGroups: FeatureGroup[] = [
  {
    title: "Workshop Management",
    description: "Core daily operations from vehicle check-in to delivery.",
    items: ["Job Cards", "Vehicle Management", "Inspection", "Before/After Photos", "Delivery"],
  },
  {
    title: "Customer Management",
    description: "Keep customer and vehicle data connected to every service visit.",
    items: ["Customer Profiles", "Vehicle History", "Service Reminders", "Communication Updates"],
  },
  {
    title: "Billing & Finance",
    description: "Connect jobs to invoices, payments, and clearer cash visibility.",
    items: ["Invoices", "Payments", "Receivables", "Reports"],
  },
  {
    title: "Inventory",
    description: "Reduce stock confusion across parts, purchases, and counter sales.",
    items: ["Parts Catalog", "Purchases", "Stock Tracking", "Low-stock Alerts"],
  },
  {
    title: "Staff & Access",
    description: "Give your team the right access for their role.",
    items: ["Staff Profiles", "Role-based Access", "Activity Tracking", "Branch Visibility"],
  },
  {
    title: "Customer Portal",
    description: "A self-service experience for the people you serve.",
    items: ["Track Job Card", "View Invoice", "Service History", "Rewards / Membership"],
  },
];

export const problemItems = [
  {
    title: "Paper-based job tracking",
    description: "Job status lives in notebooks and sticky notes that never stay current.",
    icon: "clipboard",
  },
  {
    title: "Scattered customer data",
    description: "Phone numbers, vehicles, and history spread across chats and spreadsheets.",
    icon: "users",
  },
  {
    title: "Manual billing",
    description: "Invoices take too long and payment follow-ups get missed.",
    icon: "receipt",
  },
  {
    title: "Inventory confusion",
    description: "Parts stock, purchases, and counter sales stay disconnected from jobs.",
    icon: "package",
  },
  {
    title: "No service history visibility",
    description: "Teams guess past work instead of seeing a clear vehicle timeline.",
    icon: "history",
  },
  {
    title: "Poor customer communication",
    description: "Updates rely on ad-hoc calls and WhatsApp threads that get lost.",
    icon: "message",
  },
  {
    title: "Difficult staff tracking",
    description: "Attendance, roles, and ownership of jobs stay hard to manage.",
    icon: "staff",
  },
] as const;

export const whyPoints: FeatureItem[] = [
  {
    title: "Built for automotive workshops",
    description: "Designed around detailing studios, service centers, auto spas, and car wash operations.",
    icon: Building2,
  },
  {
    title: "Centralized workshop operations",
    description: "Jobs, customers, billing, inventory, and staff stay connected in one system.",
    icon: ClipboardList,
  },
  {
    title: "Customer self-service portal",
    description: "Customers can follow progress and access history without constant follow-up calls.",
    icon: Smartphone,
  },
  {
    title: "Staff-level access control",
    description: "Give owners, managers, and staff the right visibility for their role.",
    icon: ShieldCheck,
  },
  {
    title: "Activity tracking",
    description: "Understand what happened across jobs and operational changes with clearer auditability.",
    icon: History,
  },
  {
    title: "Multi-branch ready",
    description: "Grow beyond one location with branch-aware plans and centralized management.",
    icon: Building2,
  },
  {
    title: "Cloud based",
    description: "Access your workshop platform from anywhere without local server complexity.",
    icon: Cloud,
  },
  {
    title: "Designed for growing workshops",
    description: "Start lean, then expand users, branches, and modules as your business scales.",
    icon: BarChart3,
  },
];

export const howItWorksSteps = [
  {
    step: "01",
    title: "Start Free Trial",
    description: "Create your workshop account and begin exploring the platform.",
  },
  {
    step: "02",
    title: "Set Up Your Workshop",
    description: "Add your business details, branch, and basic operating preferences.",
  },
  {
    step: "03",
    title: "Add Team & Customers",
    description: "Invite staff and start bringing customer and vehicle records into one place.",
  },
  {
    step: "04",
    title: "Start Managing Your Workshop",
    description: "Run job cards, billing, inventory, and customer updates from one workflow.",
  },
];

export const workshopPortal = {
  title: "Workshop App",
  audience: ["Owner", "Admin", "Staff", "Managers"],
  features: [
    "Job Cards",
    "Customers",
    "Vehicles",
    "Billing",
    "Inventory",
    "Staff",
    "Reports",
  ],
};

export const customerPortal = {
  title: "Customer Portal",
  audience: ["Vehicle owners", "Returning customers"],
  features: [
    "Track Job Card",
    "View Vehicle",
    "View Service History",
    "View Invoice",
    "View Payment information",
    "View Rewards / Membership where enabled",
  ],
};

export const showcaseSections = [
  {
    id: "job-cards",
    eyebrow: "Workshop operations",
    title: "Manage Every Job Card From One Place",
    description:
      "Track check-in, progress, assignments, and delivery without chasing status across paper notes or chat threads.",
    points: ["Live job status", "Vehicle and customer context", "Team assignment visibility"],
    image: {
      src: "/images/features/auto-repair.jpg",
      alt: "Mechanic inspecting a vehicle in a professional garage",
      label: "Live workshop floor",
    },
  },
  {
    id: "communication",
    eyebrow: "Customer experience",
    title: "Keep Customers Updated Automatically",
    description:
      "Give customers clearer visibility into job status, invoices, and service history through the customer portal.",
    points: ["Job tracking", "Invoice visibility", "Service history access"],
    image: {
      src: "/images/features/detail-ready-car.png",
      alt: "Detail-ready luxury car after professional service",
      label: "Detailing-ready results",
    },
  },
  {
    id: "billing",
    eyebrow: "Billing & reports",
    title: "Know Your Numbers",
    description:
      "Connect jobs to invoices, payments, and reporting so workshop performance is easier to understand every day.",
    points: ["Invoice lifecycle", "Payment tracking", "Revenue visibility"],
    image: {
      src: "/images/features/premium-car.jpg",
      alt: "Premium vehicle after professional auto care",
      label: "Built for premium garages",
    },
  },
  {
    id: "inventory",
    eyebrow: "Inventory control",
    title: "Stay In Control of Inventory",
    description:
      "Keep parts, purchases, and stock levels connected to workshop demand instead of scattered spreadsheets.",
    points: ["Stock levels", "Purchase tracking", "Low-stock awareness"],
    image: {
      src: "/images/features/garage-bay.jpg",
      alt: "Technician working in a service bay",
      label: "Daily service bay",
    },
  },
];
