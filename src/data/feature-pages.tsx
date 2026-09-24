import { ReactNode } from "react";
import { 
  Banknote, FileText, Users, TrendingUp, Calculator, CircleDollarSign,
  Wallet, FileSpreadsheet, Receipt, Wrench, Shield, CheckCircle2,
  Clock, Bell, MessageSquare, Database, CheckSquare
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
