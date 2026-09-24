export interface Testimonial {
  id: string;
  name: string;
  role: string;
  workshop: string;
  location: string;
  quote: string;
}

/**
 * Fictional mock testimonials for UI presentation only — not real customers.
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Arjun Mehta",
    role: "Owner",
    workshop: "Northline Auto Spa",
    location: "Pune",
    quote:
      "MY DETAIL OS helped us stop managing job cards across WhatsApp and paper. Everything now lives in one place.",
  },
  {
    id: "t2",
    name: "Sneha Kapoor",
    role: "Operations Manager",
    workshop: "CityCare Detailing",
    location: "Bengaluru",
    quote:
      "Our team finally has clear job status, billing, and customer updates without chasing each other for information.",
  },
  {
    id: "t3",
    name: "Ravi Nair",
    role: "Branch Manager",
    workshop: "Velocity Service Hub",
    location: "Hyderabad",
    quote:
      "Inventory confusion used to slow every busy day. Stock visibility and job cards together made a real difference.",
  },
];

export const testimonialsDisclaimer =
  "These testimonials are fictional examples for demonstration and do not represent real customers.";
