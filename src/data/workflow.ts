import type { LucideIcon } from "lucide-react";
import {
  ClipboardList,
  Users,
  Receipt,
  Package,
  UserCog,
  Smartphone,
} from "lucide-react";

export interface WorkflowNode {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
}

/** Animation order (desktop zig-zag + mobile vertical). */
export const workflowNodes: WorkflowNode[] = [
  {
    id: "workshop",
    title: "Workshop Management",
    description: "Run daily workshop operations.",
    items: ["Job Cards", "Vehicle Check-in", "Delivery"],
    icon: ClipboardList,
  },
  {
    id: "customers",
    title: "Customers",
    description: "Keep customer and vehicle history connected.",
    items: ["Customer Profiles", "Vehicle History", "Service Reminders"],
    icon: Users,
  },
  {
    id: "billing",
    title: "Billing",
    description: "Connect jobs, invoices and payments.",
    items: ["Invoices", "Payments", "Reports"],
    icon: Receipt,
  },
  {
    id: "portal",
    title: "Customer Portal",
    description: "Keep customers informed throughout the service.",
    items: ["Job Status", "Invoice", "Service History"],
    icon: Smartphone,
  },
  {
    id: "staff",
    title: "Staff",
    description: "Give every team member the right access.",
    items: ["Roles", "Permissions", "Activity"],
    icon: UserCog,
  },
  {
    id: "inventory",
    title: "Inventory",
    description: "Keep parts and stock under control.",
    items: ["Parts", "Purchases", "Stock Tracking"],
    icon: Package,
  },
];

export type ConnectorDirection = "right" | "left" | "down" | "up";

export interface WorkflowConnectorDef {
  id: string;
  from: string;
  to: string;
  direction: ConnectorDirection;
  /** Slightly longer for the closing loop. */
  durationMs: number;
}

export const workflowConnectors: WorkflowConnectorDef[] = [
  { id: "workshop-customers", from: "workshop", to: "customers", direction: "right", durationMs: 800 },
  { id: "customers-billing", from: "customers", to: "billing", direction: "right", durationMs: 800 },
  { id: "billing-portal", from: "billing", to: "portal", direction: "down", durationMs: 800 },
  { id: "portal-staff", from: "portal", to: "staff", direction: "left", durationMs: 800 },
  { id: "staff-inventory", from: "staff", to: "inventory", direction: "left", durationMs: 800 },
  { id: "inventory-workshop", from: "inventory", to: "workshop", direction: "up", durationMs: 1200 },
];

export const WORKFLOW_CARD_MS = 700;
export const WORKFLOW_PAUSE_MS = 1500;
