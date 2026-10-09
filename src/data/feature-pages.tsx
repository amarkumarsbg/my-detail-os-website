import { ReactNode } from "react";
import { 
  Banknote, FileText, Users, TrendingUp, Calculator, CircleDollarSign,
  Wallet, FileSpreadsheet, Receipt, Wrench, Shield, CheckCircle2,
  Clock, Bell, MessageSquare, Database, CheckSquare, Sparkles, Network
} from "lucide-react";

export interface FeatureCard {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface ComparisonRow {
  label: string;
  falseText: string;
  trueText: string;
}

export interface WorkflowStep {
  num: string;
  title: string;
  desc: string;
}

export interface FeaturePageData {
  hero: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd?: string;
    description: string;
  };
  benefits: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    p1: string;
    p2: string;
    cards: FeatureCard[];
  };
  comparison: {
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    rows: ComparisonRow[];
  };
  grid: {
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    cards: FeatureCard[];
  };
  workflow: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    steps: WorkflowStep[];
  };
  deepDive: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    features: FeatureCard[];
  };
}

export const specificFeatures: Record<string, FeaturePageData> = {
  "car-garage": {
    hero: {
      badge: "Car Garage Solution",
      titleStart: "Run a Faster, Cleaner",
      titleHighlight: "Car Garage",
      description:
        "Digitize job cards, inspections, billing, and customer updates so every bay moves with clarity — from check-in to delivery.",
    },
    benefits: {
      badge: "Built for car workshops",
      titleStart: "Everything a busy",
      titleHighlight: "Car Garage",
      p1: "Manage service, accidental repairs, and detailing under one OS. Technicians get clear job status; owners get live revenue and backlog visibility.",
      p2: "Replace notebooks and WhatsApp chaos with structured workflows that still feel natural on the workshop floor.",
      cards: [
        { icon: <span className="text-lg">🛠️</span>, title: "Live Job Cards", desc: "Track every vehicle across bays with photos, estimates, and approvals" },
        { icon: <span className="text-lg">🔍</span>, title: "Vehicle Inspections", desc: "Pin damages on a blueprint and share the report with customers" },
        { icon: <span className="text-lg">🧾</span>, title: "GST Billing", desc: "Convert finished jobs into clean invoices in one click" },
        { icon: <span className="text-lg">💬</span>, title: "Customer Updates", desc: "Auto WhatsApp status and delivery alerts without extra calls" },
      ],
    },
    comparison: {
      titleStart: "Paper Garage vs",
      titleHighlight: "MY DETAIL OS",
      subtitle: "How car garages upgrade from manual chaos to controlled operations.",
      rows: [
        { label: "Job Tracking", falseText: "Sticky notes and verbal handovers between bays", trueText: "Live job board with status, bay, and assigned mechanic" },
        { label: "Estimates", falseText: "Rough quotes scribbled on paper", trueText: "Digital estimates with photo evidence and customer approval" },
        { label: "Billing", falseText: "End-of-day invoice rush and missing parts", trueText: "Parts + labour already linked to the job card" },
        { label: "Follow-ups", falseText: "Hoping customers remember their next service", trueText: "Automated reminders based on date and odometer" },
      ],
    },
    grid: {
      titleStart: "Complete Control for",
      titleHighlight: "Car Garages",
      subtitle: "Floor tools that keep cars moving and owners in control.",
      cards: [
        { icon: <Wrench className="size-5 text-teal-600" />, title: "Service Workflows", desc: "General service, accidental, and running repairs in one pipeline." },
        { icon: <CheckCircle2 className="size-5 text-teal-600" />, title: "Inspection Reports", desc: "Share professional vehicle condition reports with customers." },
        { icon: <FileText className="size-5 text-teal-600" />, title: "Parts + Labour Billing", desc: "Accurate GST invoices tied to real job consumption." },
        { icon: <Users className="size-5 text-teal-600" />, title: "Customer History", desc: "Every visit, invoice, and vehicle in one profile." },
        { icon: <TrendingUp className="size-5 text-teal-600" />, title: "Bay Productivity", desc: "See which jobs stall and which technicians finish fastest." },
        { icon: <Bell className="size-5 text-teal-600" />, title: "Service Reminders", desc: "Bring cars back on schedule with WhatsApp nudges." },
      ],
    },
    workflow: {
      badge: "Garage workflow",
      titleStart: "How Car Garages Work In",
      titleHighlight: "MY DETAIL OS",
      subtitle: "A practical daily rhythm for service centers and multi-bay garages.",
      steps: [
        { num: "01", title: "Check-in", desc: "Capture vehicle, complaints, and photos at the gate." },
        { num: "02", title: "Inspect", desc: "Mark condition pins and create a clear estimate." },
        { num: "03", title: "Approve", desc: "Send estimate for customer approval before work starts." },
        { num: "04", title: "Execute", desc: "Assign mechanics, track bay status, log parts used." },
        { num: "05", title: "Deliver", desc: "Invoice, notify, and hand over with full history." },
      ],
    },
    deepDive: {
      badge: "Advanced for garages",
      titleStart: "Built for Real",
      titleHighlight: "Car Workshop Needs",
      subtitle: "Designed for Indian service centers — not generic CRM templates.",
      features: [
        { icon: <Clock className="size-4 text-teal-600" />, title: "Turnaround Tracking", desc: "Measure bay time from intake to delivery." },
        { icon: <Shield className="size-4 text-teal-600" />, title: "Role Access", desc: "Reception, technicians, and owners see only what they need." },
        { icon: <Database className="size-4 text-teal-600" />, title: "Photo Vault", desc: "Before/after and inspection photos stay with the job forever." },
        { icon: <CheckSquare className="size-4 text-teal-600" />, title: "Multi-make Ready", desc: "Handle hatchbacks to SUVs with the same workflow." },
      ],
    },
  },
  "bike-workshop": {
    hero: {
      badge: "Bike Workshop Solution",
      titleStart: "Software Tuned for",
      titleHighlight: "Bike Workshops",
      description:
        "Fast check-ins, quick service tickets, spare parts, and rider updates — built for high-volume two-wheeler workshops.",
    },
    benefits: {
      badge: "Two-wheeler focused",
      titleStart: "Keep your",
      titleHighlight: "Bike Bay",
      p1: "Two-wheeler workshops move fast. MY DETAIL OS keeps job tickets, parts, and deliveries organized without slowing the counter.",
      p2: "Give riders transparent updates and bring them back with service reminders that actually convert.",
      cards: [
        { icon: <span className="text-lg">🏍️</span>, title: "Quick Tickets", desc: "Open a bike job in seconds with common service packages" },
        { icon: <span className="text-lg">📦</span>, title: "Parts Tracking", desc: "Oil, filters, pads, and chains deducted against each job" },
        { icon: <span className="text-lg">⚡</span>, title: "Counter Speed", desc: "Billing and WhatsApp updates without leaving the desk" },
        { icon: <span className="text-lg">🔁</span>, title: "Repeat Riders", desc: "Reminders for oil change and periodic service" },
      ],
    },
    comparison: {
      titleStart: "Token Books vs",
      titleHighlight: "MY DETAIL OS",
      subtitle: "Upgrade bike workshops from handwritten tokens to live digital jobs.",
      rows: [
        { label: "Intake", falseText: "Paper tokens that get misplaced mid-day", trueText: "Digital job cards with rider phone and bike number" },
        { label: "Parts", falseText: "Guessing stock or overselling common SKUs", trueText: "Live inventory linked to each bike job" },
        { label: "Delivery", falseText: "Calling repeatedly when bikes are ready", trueText: "Automatic ready-for-delivery WhatsApp alerts" },
        { label: "History", falseText: "No record of last service or mileage", trueText: "Full bike history for every registration number" },
      ],
    },
    grid: {
      titleStart: "Complete Control for",
      titleHighlight: "Bike Workshops",
      subtitle: "Tools that match the pace of two-wheeler service centers.",
      cards: [
        { icon: <Wrench className="size-5 text-teal-600" />, title: "Service Packages", desc: "Preset general service and repair packages for speed." },
        { icon: <Users className="size-5 text-teal-600" />, title: "Rider CRM", desc: "Store bike numbers, models, and visit history." },
        { icon: <FileText className="size-5 text-teal-600" />, title: "Fast Invoicing", desc: "GST bills generated from the completed job." },
        { icon: <Database className="size-5 text-teal-600" />, title: "Spare Parts Hub", desc: "Track fast-moving bike parts with low-stock alerts." },
        { icon: <Bell className="size-5 text-teal-600" />, title: "Service Due Alerts", desc: "Auto reminders based on days or km." },
        { icon: <TrendingUp className="size-5 text-teal-600" />, title: "Daily Throughput", desc: "See bikes completed per day and peak hours." },
      ],
    },
    workflow: {
      badge: "Bike bay workflow",
      titleStart: "How Bike Workshops Work In",
      titleHighlight: "MY DETAIL OS",
      subtitle: "A high-speed loop from token to delivery.",
      steps: [
        { num: "01", title: "Receive", desc: "Log bike number, complaint, and odometer." },
        { num: "02", title: "Quote", desc: "Apply a package or custom labour + parts." },
        { num: "03", title: "Service", desc: "Assign technician and track completion." },
        { num: "04", title: "Bill", desc: "Generate invoice and collect payment." },
        { num: "05", title: "Retain", desc: "Schedule the next oil/service reminder." },
      ],
    },
    deepDive: {
      badge: "Advanced for bike shops",
      titleStart: "Built for Real",
      titleHighlight: "Two-Wheeler Needs",
      subtitle: "Practical features for scooter and motorcycle workshops.",
      features: [
        { icon: <Clock className="size-4 text-teal-600" />, title: "High Volume Mode", desc: "Handle peak morning traffic without paperwork pile-ups." },
        { icon: <MessageSquare className="size-4 text-teal-600" />, title: "Rider Alerts", desc: "Ready / delayed notifications straight to WhatsApp." },
        { icon: <Shield className="size-4 text-teal-600" />, title: "Staff Roles", desc: "Counter staff bill; technicians only see assigned jobs." },
        { icon: <CheckSquare className="size-4 text-teal-600" />, title: "Model Tags", desc: "Tag popular models for faster repeat service." },
      ],
    },
  },
  "car-detailing": {
    hero: {
      badge: "Detailing & Auto Spa",
      titleStart: "Premium Ops for",
      titleHighlight: "Car Detailing",
      description:
        "Packages, bay schedules, before/after photos, and customer handovers — software that matches the finish quality of your studio.",
    },
    benefits: {
      badge: "Studio-grade operations",
      titleStart: "Run a polished",
      titleHighlight: "Detailing Studio",
      p1: "Sell wash, polish, ceramic, and PPF packages with clear timelines. Capture proof photos and keep every client journey visible.",
      p2: "Clients expect a premium experience — give them status updates, digital estimates, and a portal that feels as sharp as your finish.",
      cards: [
        { icon: <span className="text-lg">✨</span>, title: "Package Menus", desc: "Wash, polish, ceramic, and PPF packages ready to sell" },
        { icon: <span className="text-lg">📸</span>, title: "Before / After", desc: "Photo proof attached to every detailing job" },
        { icon: <span className="text-lg">🗓️</span>, title: "Bay Booking", desc: "Schedule studios and avoid overbooking peak slots" },
        { icon: <span className="text-lg">💎</span>, title: "Memberships", desc: "Monthly wash plans and loyalty that retain clients" },
      ],
    },
    comparison: {
      titleStart: "WhatsApp Chaos vs",
      titleHighlight: "MY DETAIL OS",
      subtitle: "How detailing studios replace chat threads with structured jobs.",
      rows: [
        { label: "Bookings", falseText: "Slots lost in chat messages and verbal promises", trueText: "Calendar bookings with package and bay assigned" },
        { label: "Proof", falseText: "Photos buried in phone galleries", trueText: "Before/after albums linked to the job card" },
        { label: "Upsells", falseText: "Missed ceramic/PPF opportunities at the desk", trueText: "Package suggestions and membership offers on checkout" },
        { label: "Handover", falseText: "Unclear delivery time and payment confusion", trueText: "Ready alerts, digital invoice, and portal history" },
      ],
    },
    grid: {
      titleStart: "Complete Control for",
      titleHighlight: "Detailing Studios",
      subtitle: "From foam bay to ceramic booth — one operating system.",
      cards: [
        { icon: <Sparkles className="size-5 text-teal-600" />, title: "Detail Packages", desc: "Standardize wash, polish, ceramic, and film packages." },
        { icon: <CheckCircle2 className="size-5 text-teal-600" />, title: "Studio Scheduling", desc: "Protect bay time for multi-day ceramic jobs." },
        { icon: <FileText className="size-5 text-teal-600" />, title: "Premium Invoices", desc: "GST invoices that look as good as your finish." },
        { icon: <Users className="size-5 text-teal-600" />, title: "Client Portal", desc: "Clients track progress and download invoices on mobile." },
        { icon: <Bell className="size-5 text-teal-600" />, title: "Maintenance Reminders", desc: "Ceramic maintenance and next wash reminders." },
        { icon: <TrendingUp className="size-5 text-teal-600" />, title: "Package Analytics", desc: "See which packages drive the most profit." },
      ],
    },
    workflow: {
      badge: "Studio workflow",
      titleStart: "How Detailing Works In",
      titleHighlight: "MY DETAIL OS",
      subtitle: "A premium client journey from booking to reveal.",
      steps: [
        { num: "01", title: "Book", desc: "Capture package, vehicle, and preferred slot." },
        { num: "02", title: "Prep", desc: "Inspection photos and surface notes before work." },
        { num: "03", title: "Detail", desc: "Track wash → polish → coat stages live." },
        { num: "04", title: "Reveal", desc: "Share after photos and collect feedback." },
        { num: "05", title: "Retain", desc: "Membership and maintenance follow-ups." },
      ],
    },
    deepDive: {
      badge: "Advanced for studios",
      titleStart: "Built for Real",
      titleHighlight: "Auto Spa Needs",
      subtitle: "Detailing-first tools for wash, ceramic, and PPF businesses.",
      features: [
        { icon: <Clock className="size-4 text-teal-600" />, title: "Multi-day Jobs", desc: "Ceramic and PPF timelines without double-booking." },
        { icon: <MessageSquare className="size-4 text-teal-600" />, title: "Client Updates", desc: "Stage updates that feel premium, not spammy." },
        { icon: <Shield className="size-4 text-teal-600" />, title: "Warranty Logs", desc: "Record ceramic warranty terms against the vehicle." },
        { icon: <Database className="size-4 text-teal-600" />, title: "Media Vault", desc: "Keep every reveal photo with the client history." },
      ],
    },
  },
  "fleet-workshop": {
    hero: {
      badge: "Fleet Workshop Solution",
      titleStart: "Visibility Across Your",
      titleHighlight: "Fleet Workshop",
      description:
        "Track company vehicles, recurring service, downtime, and invoices with dealership-grade clarity for fleet partners.",
    },
    benefits: {
      badge: "Fleet operations",
      titleStart: "Keep every asset",
      titleHighlight: "Road Ready",
      p1: "Fleet managers need uptime. Give them job status, cost per vehicle, and scheduled maintenance without chasing phone calls.",
      p2: "Your workshop stays organized while fleet accounts get transparent reporting.",
      cards: [
        { icon: <span className="text-lg">🚛</span>, title: "Asset Profiles", desc: "Each vehicle with service history and cost trail" },
        { icon: <span className="text-lg">📅</span>, title: "PM Schedules", desc: "Preventive maintenance calendars by km or date" },
        { icon: <span className="text-lg">📊</span>, title: "Cost Reports", desc: "Spend by vehicle, department, or contract" },
        { icon: <span className="text-lg">⏱️</span>, title: "Downtime Control", desc: "See which assets are offline and why" },
      ],
    },
    comparison: {
      titleStart: "Spreadsheet Fleets vs",
      titleHighlight: "MY DETAIL OS",
      subtitle: "Replace fragmented fleet trackers with one workshop OS.",
      rows: [
        { label: "Asset History", falseText: "Scattered Excel sheets per vehicle", trueText: "Unified digital history for every registration" },
        { label: "Approvals", falseText: "Email chains delaying repairs", trueText: "Digital estimates with fleet manager approval" },
        { label: "Billing", falseText: "Monthly reconciliation nightmares", trueText: "Contract-ready invoices tied to completed jobs" },
        { label: "Uptime", falseText: "No clear view of vehicles in shop", trueText: "Live status of every asset in the workshop" },
      ],
    },
    grid: {
      titleStart: "Complete Control for",
      titleHighlight: "Fleet Workshops",
      subtitle: "Serve corporate and logistics fleets with confidence.",
      cards: [
        { icon: <Users className="size-5 text-teal-600" />, title: "Fleet Accounts", desc: "Company profiles with multiple vehicles and contacts." },
        { icon: <Wrench className="size-5 text-teal-600" />, title: "PM Jobs", desc: "Recurring service plans that auto-create reminders." },
        { icon: <FileText className="size-5 text-teal-600" />, title: "Contract Billing", desc: "Batch invoices matching fleet agreements." },
        { icon: <TrendingUp className="size-5 text-teal-600" />, title: "Cost per KM", desc: "Analyse spend trends across the fleet." },
        { icon: <Bell className="size-5 text-teal-600" />, title: "SLA Alerts", desc: "Notify when jobs approach promised turnaround." },
        { icon: <Database className="size-5 text-teal-600" />, title: "Document Vault", desc: "Store RC, insurance, and inspection files." },
      ],
    },
    workflow: {
      badge: "Fleet workflow",
      titleStart: "How Fleet Jobs Work In",
      titleHighlight: "MY DETAIL OS",
      subtitle: "From intake to fleet manager report in five steps.",
      steps: [
        { num: "01", title: "Intake", desc: "Identify fleet account and vehicle asset." },
        { num: "02", title: "Diagnose", desc: "Inspection + estimate for approval." },
        { num: "03", title: "Repair", desc: "Execute with parts and labour logged." },
        { num: "04", title: "Verify", desc: "QC and downtime closed on the asset." },
        { num: "05", title: "Report", desc: "Invoice + history shared with fleet ops." },
      ],
    },
    deepDive: {
      badge: "Advanced for fleets",
      titleStart: "Built for Real",
      titleHighlight: "Fleet Partners",
      subtitle: "Workshop tools that satisfy fleet SLAs and audits.",
      features: [
        { icon: <Clock className="size-4 text-teal-600" />, title: "SLA Timers", desc: "Track promised vs actual turnaround." },
        { icon: <Shield className="size-4 text-teal-600" />, title: "Approval Trails", desc: "Keep digital proof of fleet authorizations." },
        { icon: <FileText className="size-4 text-teal-600" />, title: "Monthly Summaries", desc: "Export spend reports per company account." },
        { icon: <Database className="size-4 text-teal-600" />, title: "Multi-site Ready", desc: "Serve fleet jobs across branches." },
      ],
    },
  },
  "multi-branch": {
    hero: {
      badge: "Multi-Branch Garages",
      titleStart: "One OS Across Every",
      titleHighlight: "Branch",
      description:
        "Standardize job cards, inventory, staff, and reporting across outlets — without losing local flexibility.",
    },
    benefits: {
      badge: "Network control",
      titleStart: "Scale outlets with",
      titleHighlight: "Central Clarity",
      p1: "Franchise and multi-outlet owners need consistency. MY DETAIL OS gives HQ dashboards while each branch runs its floor independently.",
      p2: "Compare branch performance, stock, and customer experience from one login.",
      cards: [
        { icon: <span className="text-lg">🏢</span>, title: "Branch Switcher", desc: "Jump between outlets without separate systems" },
        { icon: <span className="text-lg">📈</span>, title: "HQ Analytics", desc: "Revenue, jobs, and margins by location" },
        { icon: <span className="text-lg">📦</span>, title: "Stock Visibility", desc: "See parts movement across the network" },
        { icon: <span className="text-lg">👥</span>, title: "Role Guards", desc: "Branch staff stay scoped to their outlet" },
      ],
    },
    comparison: {
      titleStart: "Siloed Outlets vs",
      titleHighlight: "MY DETAIL OS",
      subtitle: "Stop running each branch like a separate business.",
      rows: [
        { label: "Systems", falseText: "Different tools or Excel per outlet", trueText: "One cloud OS with branch-level isolation" },
        { label: "Reporting", falseText: "Month-end consolidation by hand", trueText: "Live HQ dashboards across all locations" },
        { label: "Inventory", falseText: "No idea which branch has surplus parts", trueText: "Network stock view with transfer clarity" },
        { label: "Standards", falseText: "Every outlet invents its own process", trueText: "Shared workflows with local configuration" },
      ],
    },
    grid: {
      titleStart: "Complete Control for",
      titleHighlight: "Multi-Branch Networks",
      subtitle: "Grow outlets without multiplying chaos.",
      cards: [
        { icon: <Network className="size-5 text-teal-600" />, title: "Location Hierarchy", desc: "Organize branches, cities, and regions cleanly." },
        { icon: <Users className="size-5 text-teal-600" />, title: "Staff by Outlet", desc: "Attendance and roles scoped to each branch." },
        { icon: <TrendingUp className="size-5 text-teal-600" />, title: "Benchmarking", desc: "Compare job volume and profit across outlets." },
        { icon: <Database className="size-5 text-teal-600" />, title: "Shared Catalogs", desc: "Common services and parts with local pricing." },
        { icon: <Shield className="size-5 text-teal-600" />, title: "Access Policies", desc: "HQ sees all; branch managers see their site." },
        { icon: <Bell className="size-5 text-teal-600" />, title: "Exception Alerts", desc: "Get notified when a branch underperforms." },
      ],
    },
    workflow: {
      badge: "Network workflow",
      titleStart: "How Multi-Branch Works In",
      titleHighlight: "MY DETAIL OS",
      subtitle: "Central standards with local execution.",
      steps: [
        { num: "01", title: "Configure", desc: "Set shared catalogs and branch profiles." },
        { num: "02", title: "Operate", desc: "Each outlet runs jobs in its own queue." },
        { num: "03", title: "Sync", desc: "Inventory and invoices update in real time." },
        { num: "04", title: "Compare", desc: "HQ reviews performance by location." },
        { num: "05", title: "Improve", desc: "Roll out process changes network-wide." },
      ],
    },
    deepDive: {
      badge: "Advanced for networks",
      titleStart: "Built for Real",
      titleHighlight: "Franchise Growth",
      subtitle: "Scale outlets without rebuilding ops every time.",
      features: [
        { icon: <Clock className="size-4 text-teal-600" />, title: "Rollout Playbooks", desc: "Clone workflows when opening a new branch." },
        { icon: <Shield className="size-4 text-teal-600" />, title: "Audit Trails", desc: "Know who changed prices or deleted jobs." },
        { icon: <FileText className="size-4 text-teal-600" />, title: "Consolidated Tax", desc: "Export GST summaries per branch or group." },
        { icon: <Database className="size-4 text-teal-600" />, title: "Central Backups", desc: "One secure cloud for the entire network." },
      ],
    },
  },
  "automobile-workshop": {
    hero: {
      badge: "Independent Workshops",
      titleStart: "All-in-One OS for",
      titleHighlight: "Independent Garages",
      description:
        "Job cards, customers, billing, inventory, and reminders — everything a single-location workshop needs without enterprise complexity.",
    },
    benefits: {
      badge: "Owner-operated ready",
      titleStart: "Run your garage like a",
      titleHighlight: "Pro Studio",
      p1: "Independent workshops deserve software that fits one counter and a few bays — not a bloated ERP. MY DETAIL OS is approachable on day one.",
      p2: "Digitize the essentials first, then grow into memberships, analytics, and multi-staff roles as you expand.",
      cards: [
        { icon: <span className="text-lg">🧰</span>, title: "Simple Job Cards", desc: "Start jobs fast without training overload" },
        { icon: <span className="text-lg">🧾</span>, title: "GST Billing", desc: "Professional invoices customers trust" },
        { icon: <span className="text-lg">📱</span>, title: "Phone Friendly", desc: "Owners and staff can run ops from mobile" },
        { icon: <span className="text-lg">🔔</span>, title: "Reminders", desc: "Bring customers back without a marketing team" },
      ],
    },
    comparison: {
      titleStart: "Notebook Garage vs",
      titleHighlight: "MY DETAIL OS",
      subtitle: "The upgrade path for owner-run workshops.",
      rows: [
        { label: "Records", falseText: "Paper files that fade or get lost", trueText: "Searchable digital history for every vehicle" },
        { label: "Cash Flow", falseText: "Unclear daily collections", trueText: "Live cash, UPI, and outstanding dues" },
        { label: "Staff", falseText: "Verbal tasking and missed updates", trueText: "Assigned jobs with clear ownership" },
        { label: "Growth", falseText: "Fear of software being too complex", trueText: "Start simple; unlock advanced modules later" },
      ],
    },
    grid: {
      titleStart: "Complete Control for",
      titleHighlight: "Independent Garages",
      subtitle: "Core modules that pay for themselves quickly.",
      cards: [
        { icon: <Wrench className="size-5 text-teal-600" />, title: "Daily Job Flow", desc: "Intake → service → invoice without extra tools." },
        { icon: <Users className="size-5 text-teal-600" />, title: "Customer Book", desc: "Phones, vehicles, and visit history in one place." },
        { icon: <FileText className="size-5 text-teal-600" />, title: "Clean Billing", desc: "GST invoices that reduce accounting stress." },
        { icon: <Database className="size-5 text-teal-600" />, title: "Parts Basics", desc: "Track fast movers without a full warehouse team." },
        { icon: <Bell className="size-5 text-teal-600" />, title: "Service Nudges", desc: "Automated reminders keep bays busy." },
        { icon: <TrendingUp className="size-5 text-teal-600" />, title: "Owner Dashboard", desc: "See today’s jobs, cash, and pending dues at a glance." },
      ],
    },
    workflow: {
      badge: "Owner workflow",
      titleStart: "How Independents Work In",
      titleHighlight: "MY DETAIL OS",
      subtitle: "A lightweight loop you can run every day.",
      steps: [
        { num: "01", title: "Receive", desc: "Create a job with vehicle and complaint." },
        { num: "02", title: "Service", desc: "Update status as work progresses." },
        { num: "03", title: "Bill", desc: "Generate invoice and collect payment." },
        { num: "04", title: "Notify", desc: "Send delivery update on WhatsApp." },
        { num: "05", title: "Follow up", desc: "Remind for the next service automatically." },
      ],
    },
    deepDive: {
      badge: "Advanced when you need it",
      titleStart: "Built for Real",
      titleHighlight: "Owner Workshops",
      subtitle: "Grow into advanced features without starting over.",
      features: [
        { icon: <Clock className="size-4 text-teal-600" />, title: "Gentle Onboarding", desc: "Go live in days, not months." },
        { icon: <Shield className="size-4 text-teal-600" />, title: "Secure Cloud", desc: "Backups without managing servers." },
        { icon: <MessageSquare className="size-4 text-teal-600" />, title: "Customer Portal", desc: "Let clients view jobs and invoices later." },
        { icon: <CheckSquare className="size-4 text-teal-600" />, title: "Add Modules Later", desc: "Memberships, inventory hub, and analytics when ready." },
      ],
    },
  },
  "finance": {
    hero: {
      badge: "Garage Finance Management",
      titleStart: "Real-Time Workshop Cash Flow &",
      titleHighlight: "Profit Tracker",
      description: "Track daily counter cash, UPI digital payments, vendor credit dues, mechanics labor payouts, and net profit margins in real time with MY DETAIL OS.",
    },
    benefits: {
      badge: "Financial Control System",
      titleStart: "Eliminate Financial Leakage with",
      titleHighlight: "Garage Finance Management",
      p1: "Garage Finance Management Software provides workshop owners complete clarity over daily income, counter sales, spare parts purchase expenses, and mechanic commission payouts.",
      p2: "No more manual ledger books or missing cash records. Every payment logged against a job card or counter sale is automatically reconciled into your daily cash and bank books.",
      cards: [
        { icon: <span className="text-lg">💵</span>, title: "100% Cash Flow Control", desc: "Track exact cash register balances and bank UPI settlements daily" },
        { icon: <span className="text-lg">🧾</span>, title: "Vendor Balance Ledger", desc: "Manage credit balances with spare parts distributors & suppliers" },
        { icon: <span className="text-lg">📊</span>, title: "Automated P&L Reports", desc: "View net profit margins after labor costs and spare parts expenses" },
        { icon: <span className="text-lg">⚖️</span>, title: "GST & Non-GST Summary", desc: "Export clean financial summaries for CA audit & tax filing" }
      ]
    },
    comparison: {
      titleStart: "Paper Notebooks vs",
      titleHighlight: "Digital Finance Management",
      subtitle: "Compare manual paper ledgers with automated garage financial accounting.",
      rows: [
        { label: "Cash & Payment Tracking", falseText: "Paper notebooks with frequent calculation mistakes and unrecorded cash", trueText: "Automated cash drawer & digital UPI ledger synced to invoices" },
        { label: "Vendor Credit Ledger", falseText: "Disputes with spare parts dealers over unpaid bills and credit terms", trueText: "1-Click supplier ledger showing exact pending payables & purchase bills" },
        { label: "Daily P&L Visibility", falseText: "Calculating monthly profits at month-end based on guesswork", trueText: "Real-time daily Profit & Loss dashboard after spare parts & labor costs" },
        { label: "Tax & GST Preparation", falseText: "Days wasted gathering paper invoices for chartered accountants", trueText: "Instant GSTR-1 & GSTR-3B tax report exports ready for CA filing" }
      ]
    },
    grid: {
      titleStart: "Complete Financial Control for",
      titleHighlight: "Auto Workshops",
      subtitle: "Everything your garage needs to track revenue, manage vendor payables, and maximize net profits.",
      cards: [
        { icon: <Wallet className="size-5 text-teal-600" />, title: "Daily Cash & UPI Settlement", desc: "Reconcile daily cash counter collections, Paytm/Google Pay UPI payments, and card swipe settlements." },
        { icon: <FileSpreadsheet className="size-5 text-teal-600" />, title: "Workshop Expense Manager", desc: "Record tea, electricity, rent, tool purchases, and miscellaneous operational costs easily." },
        { icon: <Users className="size-5 text-teal-600" />, title: "Supplier & Vendor Credit Accounts", desc: "Maintain detailed ledger accounts for spare parts distributors with purchase invoice logs." },
        { icon: <TrendingUp className="size-5 text-teal-600" />, title: "Real-Time Profit & Loss (P&L)", desc: "View gross margins and net profitability broken down by labor, parts margin, and overheads." },
        { icon: <Calculator className="size-5 text-teal-600" />, title: "GST Tax Calculation Reports", desc: "Separate CGST, SGST, and IGST tax collected for clean filing without manual accounting errors." },
        { icon: <CircleDollarSign className="size-5 text-teal-600" />, title: "Mechanic Commission Payouts", desc: "Auto-calculate labor share and incentive commissions for technicians based on completed job cards." }
      ]
    },
    workflow: {
      badge: "Financial Workflow",
      titleStart: "How Finance Tracking Works In",
      titleHighlight: "MY DETAIL OS",
      subtitle: "5 seamless steps to maintain 100% financial accuracy every single day.",
      steps: [
        { num: "01", title: "Customer Invoice Payment", desc: "When a job card bill is cleared via Cash, UPI, or Card, the payment is immediately tagged to daily collections." },
        { num: "02", title: "Vendor Purchase Logging", desc: "Log incoming spare parts bills against vendor accounts to update pending credit balances." },
        { num: "03", title: "Daily Expenses Entry", desc: "Record petty workshop expenses like tea, shop maintenance, and utility bills in 2 taps." },
        { num: "04", title: "Mechanic Commission Calc", desc: "System calculates labor share for mechanics based on completed service tasks." },
        { num: "05", title: "Automated Evening P&L Summary", desc: "View exact net profit, total cash in drawer, and bank settlement report at shop closing." },
      ]
    },
    deepDive: {
      badge: "Financial Modules",
      titleStart: "Built for Real Workshop",
      titleHighlight: "Accounting Needs",
      subtitle: "Simple accounting designed specifically for automotive garages without requiring complex Tally expertise.",
      features: [
        { icon: <Banknote className="size-4 text-teal-600" />, title: "Cashbook & Bank Book Sync", desc: "Separate cash register tracking from bank settlements to prevent discrepancies during audit." },
        { icon: <Users className="size-4 text-teal-600" />, title: "Vendor Credit & Outstanding Dues", desc: "Track pending balances owed to parts distributors and set due payment alerts." },
        { icon: <FileText className="size-4 text-teal-600" />, title: "Customer Credit (Udhar) Records", desc: "Log partial payments and customer pending balances with WhatsApp reminder links." },
        { icon: <Receipt className="size-4 text-teal-600" />, title: "CA Export & GST Audit Reports", desc: "Export Excel & PDF reports formatted for GSTR-1, GSTR-3B, and Income Tax filing." }
      ]
    }
  },
  "job-card-management": {
    hero: {
      badge: "Digital Job Cards",
      titleStart: "Eliminate Paper Job Cards &",
      titleHighlight: "Go 100% Digital",
      description: "Create professional digital job cards in under 30 seconds. Track vehicle condition, exact spare parts used, and assigned mechanics with total transparency.",
    },
    benefits: {
      badge: "Operations System",
      titleStart: "Accelerate Workshop Output with",
      titleHighlight: "Digital Job Cards",
      p1: "Replace messy paper records with a streamlined digital job card system. Capture initial vehicle inspections, assign mechanics, and track live status from one dashboard.",
      p2: "Customers receive instant WhatsApp notifications with professional PDF job cards, increasing trust and significantly reducing post-service disputes.",
      cards: [
        { icon: <span className="text-lg">⏱️</span>, title: "Create in Seconds", desc: "Generate a complete job card with vehicle details in under 30 seconds" },
        { icon: <span className="text-lg">📱</span>, title: "WhatsApp Integration", desc: "Automatically send PDF job cards to customers on WhatsApp" },
        { icon: <span className="text-lg">📷</span>, title: "Photo Evidence", desc: "Attach before-service photos to prevent false damage claims" },
        { icon: <span className="text-lg">🛠️</span>, title: "Mechanic Assignment", desc: "Assign specific tasks to mechanics and track labor costs easily" }
      ]
    },
    comparison: {
      titleStart: "Paper Job Cards vs",
      titleHighlight: "Digital Job Cards",
      subtitle: "Compare outdated manual methods with our modern workshop management software.",
      rows: [
        { label: "Creation Speed", falseText: "Takes 5+ minutes writing details manually, prone to illegible handwriting", trueText: "Created in 30 seconds with auto-fill customer and vehicle history" },
        { label: "Vehicle Inspection", falseText: "No visual proof, leading to disputes over pre-existing scratches", trueText: "Digital 360° vehicle markups and photo attachments included" },
        { label: "Customer Updates", falseText: "Customer calls repeatedly asking for repair status updates", trueText: "Automated SMS/WhatsApp status updates (e.g., 'Work In Progress')" },
        { label: "Record Retrieval", falseText: "Searching through physical files and dusty binders to find old jobs", trueText: "Instant search by vehicle number, phone, or name from any device" }
      ]
    },
    grid: {
      titleStart: "Complete Workflow Control for",
      titleHighlight: "Auto Workshops",
      subtitle: "Everything your garage needs to track repairs, assign labor, and complete jobs efficiently.",
      cards: [
        { icon: <Wrench className="size-5 text-teal-600" />, title: "Quick Service Creation", desc: "Select pre-defined service packages (e.g. Full Wash, Oil Change) with preset pricing." },
        { icon: <Shield className="size-5 text-teal-600" />, title: "Vehicle Inspection Markups", desc: "Mark dents and scratches on a digital car diagram before work begins." },
        { icon: <Database className="size-5 text-teal-600" />, title: "Inventory Linking", desc: "Directly link spare parts used in the job card to deduct from your inventory stock." },
        { icon: <Clock className="size-5 text-teal-600" />, title: "Live Status Tracking", desc: "Track status from 'Opened' to 'In Progress' to 'Ready for Delivery'." },
        { icon: <MessageSquare className="size-5 text-teal-600" />, title: "Customer Approvals", desc: "Send estimate links via WhatsApp for customers to approve additional repairs." },
        { icon: <CheckCircle2 className="size-5 text-teal-600" />, title: "Quality Checklists", desc: "Enforce a final inspection checklist before the vehicle is marked complete." }
      ]
    },
    workflow: {
      badge: "Service Workflow",
      titleStart: "How Job Cards Work In",
      titleHighlight: "MY DETAIL OS",
      subtitle: "5 seamless steps to process any vehicle in your workshop.",
      steps: [
        { num: "01", title: "Vehicle Entry", desc: "Enter vehicle number. The system auto-fetches past customer details and history instantly." },
        { num: "02", title: "Digital Inspection", desc: "Note down customer complaints and attach photos of pre-existing vehicle damage." },
        { num: "03", title: "Assign & Estimate", desc: "Add required services, assign a mechanic, and share a digital estimate on WhatsApp." },
        { num: "04", title: "Work In Progress", desc: "Mechanics update task status. Additional spare parts used are logged in real-time." },
        { num: "05", title: "Final Invoice", desc: "With one click, convert the completed Job Card into a GST or non-GST tax invoice." },
      ]
    },
    deepDive: {
      badge: "Operational Modules",
      titleStart: "Built for Real Workshop",
      titleHighlight: "Service Needs",
      subtitle: "Professional workflow management designed specifically for automotive garages.",
      features: [
        { icon: <Clock className="size-4 text-teal-600" />, title: "Turnaround Time Analytics", desc: "Track average repair times and identify bottlenecks in your workshop." },
        { icon: <Wrench className="size-4 text-teal-600" />, title: "Mechanic Productivity", desc: "Measure which technicians complete jobs fastest with the lowest comeback rate." },
        { icon: <FileText className="size-4 text-teal-600" />, title: "Voice Notes", desc: "Quickly record voice notes instead of typing long mechanic instructions." },
        { icon: <CheckSquare className="size-4 text-teal-600" />, title: "Custom Job Types", desc: "Categorize jobs into General Service, Accidental, Running Repair, or Detailing." }
      ]
    }
  }
};

export function getFeatureData(slug: string): FeaturePageData {
  if (specificFeatures[slug]) {
    return specificFeatures[slug];
  }

  const formattedName = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  let category = "generic";
  if (slug.match(/attendance|staff|payroll|leave|mechanic|performance|user/)) category = "hr";
  else if (slug.match(/job-card|booking|inspection|service|workflow|pickup-drop/)) category = "ops";
  else if (slug.match(/crm|customer|vehicle|reminder|referral|follow-up/)) category = "crm";
  else if (slug.match(/finance|bill|invoice|inventory|report|expense|cash-bank|vendor/)) category = "finance";

  // --- HR / Staff Template ---
  if (category === "hr") {
    return {
      hero: {
        badge: `${formattedName} Module`,
        titleStart: "Supercharge your Garage with",
        titleHighlight: formattedName,
        description: `Automate staff tracking, boost mechanic efficiency, and save hours of manual payroll calculation every week with the industry-leading ${formattedName} module built exclusively for auto workshops.`,
      },
      benefits: {
        badge: "Staff Management",
        titleStart: "Unlock the Power of",
        titleHighlight: formattedName,
        p1: `Our ${formattedName} solution provides complete clarity over your workshop's workforce. Track check-ins, manage leaves, and calculate performance incentives effortlessly.`,
        p2: "Everything is perfectly integrated into the MY DETAIL OS ecosystem, meaning your staff data flows seamlessly into payroll and mechanic commissions.",
        cards: [
          { icon: <span className="text-lg">⏱️</span>, title: "Time Tracking", desc: "Monitor exact clock-in and clock-out times for all staff" },
          { icon: <span className="text-lg">📱</span>, title: "Digital Kiosk", desc: "Staff scan a QR code to securely log their daily attendance" },
          { icon: <span className="text-lg">💸</span>, title: "Auto Payroll", desc: "Calculate daily wages and commissions based on logged hours" },
          { icon: <span className="text-lg">🔒</span>, title: "Access Control", desc: "Ensure staff only see the data they are authorized to access" }
        ]
      },
      comparison: {
        titleStart: "Manual Registers vs",
        titleHighlight: "MY DETAIL OS",
        subtitle: `Compare outdated manual methods with our modern ${formattedName} software.`,
        rows: [
          { label: "Attendance Tracking", falseText: "Paper registers prone to proxy attendance and errors", trueText: "Digital QR scanning and PIN-based verification" },
          { label: "Payroll Calculation", falseText: "Hours spent at month-end calculating days present and absent", trueText: "Instant, 1-click salary calculations" },
          { label: "Performance", falseText: "No clear visibility on which mechanic is actually productive", trueText: "Live tracking of jobs completed per mechanic" },
          { label: "Leave Management", falseText: "Verbal leave requests that get forgotten", trueText: "Digital leave application and approval workflow" }
        ]
      },
      grid: {
        titleStart: "Complete HR Control for",
        titleHighlight: "Auto Workshops",
        subtitle: `Everything your garage needs to master ${formattedName} and maximize staff efficiency.`,
        cards: [
          { icon: <Users className="size-5 text-teal-600" />, title: "Staff Directory", desc: "Maintain digital records of all employee documents and contact info." },
          { icon: <Clock className="size-5 text-teal-600" />, title: "Shift Management", desc: "Easily handle multiple shifts for busy garages." },
          { icon: <Calculator className="size-5 text-teal-600" />, title: "Incentive Calc", desc: "Automatically distribute labor commission based on completed jobs." },
          { icon: <Shield className="size-5 text-teal-600" />, title: "Role-based Access", desc: "Control exactly what your staff can see and edit." },
          { icon: <CheckCircle2 className="size-5 text-teal-600" />, title: "Multi-branch Ready", desc: "Track staff across multiple garage locations." },
          { icon: <Bell className="size-5 text-teal-600" />, title: "Absence Alerts", desc: "Get notified instantly when key mechanics don't show up." }
        ]
      },
      workflow: {
        badge: "Staff Workflow",
        titleStart: "How it Works In",
        titleHighlight: "MY DETAIL OS",
        subtitle: "A seamless process to manage your workforce daily.",
        steps: [
          { num: "01", title: "Setup Profile", desc: "Add employee details, salary structure, and set their PIN." },
          { num: "02", title: "Daily Punch", desc: "Staff scans the branch QR code to clock in every morning." },
          { num: "03", title: "Job Assignment", desc: "Assign active repair jobs to clocked-in mechanics." },
          { num: "04", title: "Monitor", desc: "Track live attendance and productivity on the dashboard." },
          { num: "05", title: "Payroll Run", desc: "Generate accurate month-end salary slips instantly." },
        ]
      },
      deepDive: {
        badge: "Advanced Features",
        titleStart: "Built for Real Workshop",
        titleHighlight: "HR Needs",
        subtitle: "Professional tools designed specifically for managing automotive garage staff.",
        features: [
          { icon: <CheckSquare className="size-4 text-teal-600" />, title: "Leave Policies", desc: "Set custom paid leave and sick leave quotas per role." },
          { icon: <TrendingUp className="size-4 text-teal-600" />, title: "Efficiency Reports", desc: "Identify top-performing mechanics based on revenue generated." },
          { icon: <MessageSquare className="size-4 text-teal-600" />, title: "Internal Comms", desc: "Send announcements and updates to all staff via the app." },
          { icon: <Database className="size-4 text-teal-600" />, title: "Document Vault", desc: "Store mechanic Aadhar cards and certifications securely." }
        ]
      }
    };
  }

  // --- CRM / Customer Template ---
  if (category === "crm") {
    return {
      hero: {
        badge: `${formattedName} Module`,
        titleStart: "Supercharge your Garage with",
        titleHighlight: formattedName,
        description: `Boost customer retention, automate follow-ups, and deliver a premium experience with the industry-leading ${formattedName} module built exclusively for auto workshops.`,
      },
      benefits: {
        badge: "Customer Success",
        titleStart: "Unlock the Power of",
        titleHighlight: formattedName,
        p1: `Our ${formattedName} solution provides workshop owners with complete visibility into customer history. Never lose track of a vehicle's service lifecycle again.`,
        p2: "Increase repeat visits effortlessly through automated service reminders, transparent communication, and targeted marketing campaigns.",
        cards: [
          { icon: <span className="text-lg">🚗</span>, title: "Vehicle History", desc: "Instant access to every repair and part ever installed" },
          { icon: <span className="text-lg">💬</span>, title: "WhatsApp Alerts", desc: "Automated status updates and service due reminders" },
          { icon: <span className="text-lg">⭐</span>, title: "Review Collection", desc: "Automatically request Google reviews after delivery" },
          { icon: <span className="text-lg">📊</span>, title: "Customer Lifetime Value", desc: "Identify and reward your most profitable clients" }
        ]
      },
      comparison: {
        titleStart: "Manual Tracking vs",
        titleHighlight: "MY DETAIL OS",
        subtitle: `Compare outdated manual methods with our modern ${formattedName} software.`,
        rows: [
          { label: "Service History", falseText: "Flipping through paper files to remember what was fixed last time", trueText: "Complete digital timeline of every past repair and invoice" },
          { label: "Reminders", falseText: "Relying on customers to remember their next oil change", trueText: "Automated WhatsApp reminders based on mileage and time" },
          { label: "Communication", falseText: "Calling customers repeatedly for estimates and approvals", trueText: "1-Click digital estimate links sent straight to their phone" },
          { label: "Retention", falseText: "Losing customers to dealerships due to poor engagement", trueText: "Professional dealership-level CRM experience" }
        ]
      },
      grid: {
        titleStart: "Complete CRM Control for",
        titleHighlight: "Auto Workshops",
        subtitle: `Everything your garage needs to master ${formattedName} and maximize loyalty.`,
        cards: [
          { icon: <Users className="size-5 text-teal-600" />, title: "Customer Profiles", desc: "Detailed records including vehicle fleets and contact preferences." },
          { icon: <Bell className="size-5 text-teal-600" />, title: "Automated Reminders", desc: "Trigger alerts for insurance renewal, PUC, and general service." },
          { icon: <MessageSquare className="size-5 text-teal-600" />, title: "Two-way WhatsApp", desc: "Chat with customers directly from the MY DETAIL OS dashboard." },
          { icon: <CheckCircle2 className="size-5 text-teal-600" />, title: "Membership Plans", desc: "Sell and manage AMC (Annual Maintenance Contracts)." },
          { icon: <TrendingUp className="size-5 text-teal-600" />, title: "Lead Management", desc: "Track walk-in inquiries and convert them to loyal customers." },
          { icon: <CheckCircle2 className="size-5 text-teal-600" />, title: "Loyalty Points", desc: "Reward repeat customers to ensure they keep coming back." }
        ]
      },
      workflow: {
        badge: "CRM Workflow",
        titleStart: "How it Works In",
        titleHighlight: "MY DETAIL OS",
        subtitle: "A seamless process to delight customers every single day.",
        steps: [
          { num: "01", title: "Capture", desc: "Log vehicle details during their first visit to build a profile." },
          { num: "02", title: "Engage", desc: "Send automated updates while their car is being repaired." },
          { num: "03", title: "Deliver", desc: "Share digital invoices and request feedback upon delivery." },
          { num: "04", title: "Follow-up", desc: "System auto-sends a 'Thank You' message 3 days later." },
          { num: "05", title: "Retain", desc: "Automated service reminders bring them back 6 months later." },
        ]
      },
      deepDive: {
        badge: "Advanced Features",
        titleStart: "Built for Real Workshop",
        titleHighlight: "Marketing Needs",
        subtitle: "Professional tools designed specifically for automotive garage CRM.",
        features: [
          { icon: <MessageSquare className="size-4 text-teal-600" />, title: "Bulk Broadcasting", desc: "Send festival offers and discounts to all past customers." },
          { icon: <TrendingUp className="size-4 text-teal-600" />, title: "Churn Analytics", desc: "See exactly which customers haven't visited in over a year." },
          { icon: <CheckSquare className="size-4 text-teal-600" />, title: "Custom Tags", desc: "Tag customers as 'VIP', 'Fleet', or 'Defaulter'." },
          { icon: <Database className="size-4 text-teal-600" />, title: "Feedback Loop", desc: "Intercept negative feedback before it hits Google Reviews." }
        ]
      }
    };
  }

  // --- Operations / Finance Fallback (Generic Tailored) ---
  return {
    hero: {
      badge: `${formattedName} Module`,
      titleStart: "Supercharge your Garage with",
      titleHighlight: formattedName,
      description: `Automate your workflow, boost efficiency, and save hours of manual work every week with the industry-leading ${formattedName} module built exclusively for auto workshops.`,
    },
    benefits: {
      badge: "Core Benefits",
      titleStart: "Unlock the Power of",
      titleHighlight: formattedName,
      p1: `Our ${formattedName} solution provides workshop owners with complete clarity and operational efficiency. Say goodbye to manual tasks and disorganized data.`,
      p2: "Everything you need is perfectly integrated into the MY DETAIL OS ecosystem, meaning your data flows seamlessly between job cards, billing, and reporting.",
      cards: [
        { icon: <span className="text-lg">🚀</span>, title: "Increased Efficiency", desc: "Automate repetitive tasks and focus on growing your garage business" },
        { icon: <span className="text-lg">📱</span>, title: "Cloud Accessible", desc: "Access your workshop data from your phone, tablet, or PC anywhere" },
        { icon: <span className="text-lg">🔒</span>, title: "Bank-Grade Security", desc: "Your data is encrypted, backed up daily, and completely secure" },
        { icon: <span className="text-lg">⚡</span>, title: "Real-time Sync", desc: "Updates are instantly visible to all staff members across the garage" }
      ]
    },
    comparison: {
      titleStart: "The Old Way vs",
      titleHighlight: "MY DETAIL OS",
      subtitle: `Compare outdated manual methods with our modern ${formattedName} software.`,
      rows: [
        { label: "Efficiency", falseText: "Slow, manual data entry prone to human error", trueText: "Automated, instant processing with auto-fill" },
        { label: "Visibility", falseText: "Scattered data across notebooks and excel sheets", trueText: "Centralized dashboard with real-time analytics" },
        { label: "Communication", falseText: "Constant phone calls and manual updates", trueText: "Automated WhatsApp and SMS alerts" },
        { label: "Scalability", falseText: "Processes break down as your garage gets busier", trueText: "Built to handle thousands of transactions effortlessly" }
      ]
    },
    grid: {
      titleStart: "Complete Control for",
      titleHighlight: "Auto Workshops",
      subtitle: `Everything your garage needs to master ${formattedName} and maximize profits.`,
      cards: [
        { icon: <CheckCircle2 className="size-5 text-teal-600" />, title: "Streamlined Workflow", desc: "A clean, intuitive interface designed specifically for workshop mechanics and owners." },
        { icon: <CheckCircle2 className="size-5 text-teal-600" />, title: "Actionable Insights", desc: "Turn raw data into visual reports that help you make better business decisions." },
        { icon: <CheckCircle2 className="size-5 text-teal-600" />, title: "Error Prevention", desc: "Smart validation stops costly mistakes before they happen." },
        { icon: <CheckCircle2 className="size-5 text-teal-600" />, title: "Role-based Access", desc: "Control exactly what your staff can see and edit." },
        { icon: <CheckCircle2 className="size-5 text-teal-600" />, title: "Multi-branch Ready", desc: "Manage multiple garage locations from a single master dashboard." },
        { icon: <CheckCircle2 className="size-5 text-teal-600" />, title: "24/7 Support", desc: "Access our dedicated automotive software support team whenever you need help." }
      ]
    },
    workflow: {
      badge: "Standard Workflow",
      titleStart: "How it Works In",
      titleHighlight: "MY DETAIL OS",
      subtitle: "A seamless process to maintain accuracy every single day.",
      steps: [
        { num: "01", title: "Setup", desc: "Quickly configure your settings to match your specific workshop processes." },
        { num: "02", title: "Input", desc: "Enter data effortlessly through our intuitive desktop or mobile interface." },
        { num: "03", title: "Process", desc: "The system automatically calculates, organizes, and links your data." },
        { num: "04", title: "Track", desc: "Monitor progress in real-time through the live tracking dashboard." },
        { num: "05", title: "Report", desc: "Generate comprehensive summaries and analytics instantly." },
      ]
    },
    deepDive: {
      badge: "Advanced Features",
      titleStart: "Built for Real Workshop",
      titleHighlight: "Business Needs",
      subtitle: "Professional tools designed specifically for automotive garages.",
      features: [
        { icon: <CheckCircle2 className="size-4 text-teal-600" />, title: "Seamless Integration", desc: "Works perfectly with Job Cards, Billing, and CRM modules." },
        { icon: <CheckCircle2 className="size-4 text-teal-600" />, title: "Export Anywhere", desc: "Easily export your data to PDF or Excel for external accounting." },
        { icon: <CheckCircle2 className="size-4 text-teal-600" />, title: "Custom Alerts", desc: "Set up personalized notifications for important business events." },
        { icon: <CheckCircle2 className="size-4 text-teal-600" />, title: "Unlimited Storage", desc: "Never worry about deleting old records or photos to save space." }
      ]
    }
  };
}
