export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "What is MY DETAIL OS?",
    answer:
      "MY DETAIL OS is workshop management software for car detailing studios, service centers, auto spas, and car wash businesses. It helps you manage job cards, customers, vehicles, billing, inventory, staff, rewards, and customer communication from one platform.",
  },
  {
    question: "Can I try it before purchasing?",
    answer:
      "Yes. You can start a free trial from the website. Trial access and entitlement rules will be finalized when backend onboarding is connected.",
  },
  {
    question: "How many staff members can use it?",
    answer:
      "User limits depend on your plan. Starter, Growth, and Business include different user counts, and Enterprise can be tailored for larger teams.",
  },
  {
    question: "Can I manage multiple branches?",
    answer:
      "Yes. Multi-branch support is part of the product model. Higher plans include more branches, and Enterprise can support larger networks.",
  },
  {
    question: "Do customers get their own portal?",
    answer:
      "Yes. Customers can track job cards, view vehicle details, service history, invoices, payment information, and rewards or membership where enabled.",
  },
  {
    question: "Can I track job cards?",
    answer:
      "Yes. Job card management is a core workshop module, covering check-in through delivery with status visibility for your team.",
  },
  {
    question: "Does it support billing and inventory?",
    answer:
      "Yes. Billing, invoices, payments, inventory, stock tracking, and related workshop operations are part of the platform.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Yes. You can move to a higher plan as your workshop grows. Plan changes will be handled through subscription management once backend billing is connected.",
  },
];
