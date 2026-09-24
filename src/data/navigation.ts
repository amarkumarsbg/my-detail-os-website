export interface MegaMenuColumn {
  title: string;
  items: { label: string; href: string }[];
}

export interface NavItem {
  label: string;
  href: string;
  megaMenu?: MegaMenuColumn[];
}

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { 
    label: "Features", 
    href: "/#features",
    megaMenu: [
      {
        title: "Workspace & Operations",
        items: [
          { label: "Dashboard", href: "/features/dashboard" },
          { label: "Job Cards", href: "/features/job-cards" },
          { label: "Bookings", href: "/features/bookings" },
          { label: "Pickup & Drop", href: "/features/pickup-drop" },
          { label: "Counter Sale", href: "/features/counter-sale" },
          { label: "Quotations", href: "/features/quotations" },
          { label: "Appointments", href: "/features/appointments" },
          { label: "Services Catalog", href: "/features/services" },
          { label: "Inventory Hub", href: "/features/inventory-hub" },
          { label: "Vendors", href: "/features/vendors" }
        ]
      },
      {
        title: "Customers & Fleet",
        items: [
          { label: "Customers CRM", href: "/features/customers" },
          { label: "Membership", href: "/features/membership" },
          { label: "Vehicles", href: "/features/vehicles" },
          { label: "Reminders", href: "/features/reminders" },
          { label: "Follow-ups", href: "/features/follow-ups" },
          { label: "Referrals", href: "/features/referrals" }
        ]
      },
      {
        title: "Finance & HR",
        items: [
          { label: "Billing & Invoicing", href: "/features/billing" },
          { label: "Expenses", href: "/features/expenses" },
          { label: "Accounting & Reports", href: "/features/accounting" },
          { label: "Cash & Bank", href: "/features/cash-bank" },
          { label: "Parties Ledger", href: "/features/parties" },
          { label: "Users & Staff", href: "/features/users-staff" },
          { label: "Attendance", href: "/features/attendance" },
          { label: "Leave Management", href: "/features/leave" },
          { label: "Salary & Payroll", href: "/features/payroll" },
          { label: "Rewards & Performance", href: "/features/performance" }
        ]
      },
      {
        title: "Analytics & Tools",
        items: [
          { label: "Locations", href: "/features/locations" },
          { label: "Mechanics", href: "/features/mechanics" },
          { label: "Advanced Analytics", href: "/features/analytics" },
          { label: "Activity Log", href: "/features/activity-log" },
          { label: "Messages Log", href: "/features/messages-log" },
          { label: "Settings", href: "/features/settings" }
        ]
      }
    ]
  },
  { 
    label: "Solutions", 
    href: "/#solutions",
    megaMenu: [
      {
        title: "Core Modules",
        items: [
          { label: "Job Cards", href: "/features/job-cards" },
          { label: "GST Billing", href: "/features/gst-billing" },
          { label: "CRM", href: "/features/crm" },
          { label: "ERP", href: "/features/erp" },
          { label: "Inventory", href: "/features/inventory" },
          { label: "Service Reminders", href: "/features/service-reminders" },
          { label: "Customer Engagement", href: "/features/customer-engagement" },
          { label: "WhatsApp Automation", href: "/features/whatsapp-automation" },
          { label: "Automation", href: "/features/automation" },
          { label: "Finance", href: "/features/finance" },
          { label: "Accounting", href: "/features/accounting" },
          { label: "Payroll", href: "/features/payroll" },
          { label: "Attendance", href: "/features/attendance" }
        ]
      },
      {
        title: "Workshop Solutions",
        items: [
          { label: "Workshop Management", href: "/features/workshop-management" },
          { label: "Automobile Workshop", href: "/features/automobile-workshop" },
          { label: "Auto Repair Shop", href: "/features/auto-repair-shop" },
          { label: "Car Garage", href: "/features/car-garage" },
          { label: "Car Workshop", href: "/features/car-workshop" },
          { label: "Bike Workshop", href: "/features/bike-workshop" },
          { label: "Truck Workshop", href: "/features/truck-workshop" },
          { label: "EV Garage", href: "/features/ev-garage" },
          { label: "Car Detailing", href: "/features/car-detailing" },
          { label: "Fleet Workshop", href: "/features/fleet-workshop" }
        ]
      },
      {
        title: "Buying & Business",
        items: [
          { label: "Best Garage Software", href: "/features/best-garage-software" },
          { label: "Best Workshop Software", href: "/features/best-workshop-software" },
          { label: "Software India (Garage)", href: "/features/software-india-garage" },
          { label: "Software India (Workshop)", href: "/features/software-india-workshop" },
          { label: "Marketing", href: "/features/marketing" },
          { label: "Multi-Branch", href: "/features/multi-branch" },
          { label: "Service History", href: "/features/service-history" },
          { label: "Reports & Analytics", href: "/features/reports-analytics" }
        ]
      },
      {
        title: "Apps & Mobile",
        items: [
          { label: "Garage App", href: "/features/garage-app" },
          { label: "Workshop App", href: "/features/workshop-app" }
        ]
      }
    ]
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
