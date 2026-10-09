/**
 * Atmospheric imagery for /features/[slug] pages.
 * Each workshop type uses a dedicated image set — no shared hero across categories.
 */

export type FeatureVisualTheme = {
  heroBg: string;
  heroObjectPosition?: string;
  benefitsBg: string;
  comparisonBg: string;
  workflowBg: string;
  deepDiveBg: string;
  ctaBg: string;
  accentLabel: string;
  /** Distinct photos for the hero showcase card (primary + secondary). */
  showcase: [{ src: string; alt: string; label: string }, { src: string; alt: string; label: string }];
};

const GARAGE: FeatureVisualTheme = {
  heroBg: "/images/features/auto-repair.jpg",
  heroObjectPosition: "object-[55%_40%]",
  benefitsBg: "/images/features/garage-bay.jpg",
  comparisonBg: "/images/features/car-service.jpg",
  workflowBg: "/images/hero/01-job-cards.png",
  deepDiveBg: "/images/features/premium-car.jpg",
  ctaBg: "/images/cta-workshop-storefront.png",
  accentLabel: "Car garage floor",
  showcase: [
    {
      src: "/images/features/auto-repair.jpg",
      alt: "Mechanic inspecting a vehicle engine in a professional garage",
      label: "Live garage floor",
    },
    {
      src: "/images/features/garage-bay.jpg",
      alt: "Technician performing service in a car garage bay",
      label: "Daily service bay",
    },
  ],
};

const OIL_LUBE: FeatureVisualTheme = {
  heroBg: "/images/solutions/oil-lube.jpg",
  heroObjectPosition: "object-[50%_45%]",
  benefitsBg: "/images/solutions/oil-lube.jpg",
  comparisonBg: "/images/features/garage-bay.jpg",
  workflowBg: "/images/hero/04-inventory.png",
  deepDiveBg: "/images/features/car-service.jpg",
  ctaBg: "/images/cta-workshop-storefront.png",
  accentLabel: "Oil & lube bay",
  showcase: [
    {
      src: "/images/solutions/oil-lube.jpg",
      alt: "Technician performing an oil change on a lift",
      label: "Oil change bay",
    },
    {
      src: "/images/hero/04-inventory.png",
      alt: "Oils and service supplies on workshop shelves",
      label: "Lube inventory",
    },
  ],
};

const DETAILING: FeatureVisualTheme = {
  heroBg: "/images/solutions/detailing-polish.jpg",
  heroObjectPosition: "object-[55%_40%]",
  benefitsBg: "/images/solutions/detailing-interior.jpg",
  comparisonBg: "/images/hero/04-ceramic.png",
  workflowBg: "/images/why/03-polishing.png",
  deepDiveBg: "/images/why/05-ceramic.png",
  ctaBg: "/images/cta-ceramic-coat.png",
  accentLabel: "Detailing studio",
  showcase: [
    {
      src: "/images/solutions/detailing-polish.jpg",
      alt: "Technician machine-polishing a luxury car in a detailing studio",
      label: "Machine polish",
    },
    {
      src: "/images/solutions/detailing-interior.jpg",
      alt: "Interior deep clean with detailing brushes and microfiber",
      label: "Interior detail",
    },
  ],
};

const CAR_WASH: FeatureVisualTheme = {
  heroBg: "/images/why/04-wash-bay.png",
  heroObjectPosition: "object-[60%_center]",
  benefitsBg: "/images/hero/01-foam-bay.png",
  comparisonBg: "/images/hero/02-wash-action.png",
  workflowBg: "/images/hero-foam-bay.png",
  deepDiveBg: "/images/why/04-wash-bay.png",
  ctaBg: "/images/hero/02-wash-action.png",
  accentLabel: "Car wash bay",
  showcase: [
    {
      src: "/images/why/04-wash-bay.png",
      alt: "Professional car wash bay with foam and rinse",
      label: "Wash bay",
    },
    {
      src: "/images/hero/01-foam-bay.png",
      alt: "Foam wash in progress on a vehicle",
      label: "Foam wash",
    },
  ],
};

const AUTO_SPA: FeatureVisualTheme = {
  heroBg: "/images/why/06-interior.png",
  heroObjectPosition: "object-[50%_40%]",
  benefitsBg: "/images/hero/05-interior.png",
  comparisonBg: "/images/why/02-studio-bay.png",
  workflowBg: "/images/studio-hero-car.png",
  deepDiveBg: "/images/cta-studio-premium.jpg",
  ctaBg: "/images/studio-cta-car.png",
  accentLabel: "Auto spa studio",
  showcase: [
    {
      src: "/images/why/06-interior.png",
      alt: "Interior detailing of a luxury car cabin",
      label: "Interior spa",
    },
    {
      src: "/images/hero/05-interior.png",
      alt: "Premium interior clean and detail work",
      label: "Cabin care",
    },
  ],
};

const CERAMIC_PPF: FeatureVisualTheme = {
  heroBg: "/images/hero/04-ceramic.png",
  heroObjectPosition: "object-[55%_45%]",
  benefitsBg: "/images/why/05-ceramic.png",
  comparisonBg: "/images/cta-ceramic-coat.png",
  workflowBg: "/images/why/03-polishing.png",
  deepDiveBg: "/images/hero/04-ceramic.png",
  ctaBg: "/images/cta-ceramic-coat.png",
  accentLabel: "Ceramic & PPF",
  showcase: [
    {
      src: "/images/hero/04-ceramic.png",
      alt: "Ceramic coating being applied by hand",
      label: "Ceramic coat",
    },
    {
      src: "/images/why/05-ceramic.png",
      alt: "Paint protection and ceramic finish work",
      label: "PPF / ceramic",
    },
  ],
};

const BIKE: FeatureVisualTheme = {
  heroBg: "/images/solutions/bike-hero.jpg",
  heroObjectPosition: "object-[45%_40%]",
  benefitsBg: "/images/solutions/bike-service.jpg",
  comparisonBg: "/images/solutions/bike-hero.jpg",
  workflowBg: "/images/solutions/bike-service.jpg",
  deepDiveBg: "/images/solutions/bike-hero.jpg",
  ctaBg: "/images/solutions/bike-service.jpg",
  accentLabel: "Bike workshop",
  showcase: [
    {
      src: "/images/solutions/bike-hero.jpg",
      alt: "Motorcycle on a lift inside a bike service workshop",
      label: "Two-wheeler bay",
    },
    {
      src: "/images/solutions/bike-service.jpg",
      alt: "Mechanic servicing a motorcycle engine",
      label: "Bike service",
    },
  ],
};

const FLEET: FeatureVisualTheme = {
  heroBg: "/images/solutions/fleet-hero.jpg",
  heroObjectPosition: "object-[55%_40%]",
  benefitsBg: "/images/solutions/fleet-inspection.jpg",
  comparisonBg: "/images/solutions/fleet-hero.jpg",
  workflowBg: "/images/solutions/fleet-inspection.jpg",
  deepDiveBg: "/images/solutions/fleet-hero.jpg",
  ctaBg: "/images/solutions/fleet-inspection.jpg",
  accentLabel: "Fleet operations",
  showcase: [
    {
      src: "/images/solutions/fleet-hero.jpg",
      alt: "Commercial vans and trucks in a fleet maintenance workshop",
      label: "Fleet workshop",
    },
    {
      src: "/images/solutions/fleet-inspection.jpg",
      alt: "Technician inspecting a commercial fleet vehicle",
      label: "Asset inspection",
    },
  ],
};

const MULTI_BRANCH: FeatureVisualTheme = {
  heroBg: "/images/solutions/multi-branch.jpg",
  heroObjectPosition: "object-[50%_40%]",
  benefitsBg: "/images/cta-workshop-storefront.png",
  comparisonBg: "/images/solutions/multi-branch.jpg",
  workflowBg: "/images/hero/05-staff.png",
  deepDiveBg: "/images/hero/06-studio-bay.png",
  ctaBg: "/images/solutions/multi-branch.jpg",
  accentLabel: "Multi-outlet network",
  showcase: [
    {
      src: "/images/solutions/multi-branch.jpg",
      alt: "Modern auto service center storefront at dusk",
      label: "Outlet network",
    },
    {
      src: "/images/cta-workshop-storefront.png",
      alt: "Workshop storefront ready for customers",
      label: "Branch presence",
    },
  ],
};

const INDEPENDENT: FeatureVisualTheme = {
  heroBg: "/images/solutions/independent-garage.jpg",
  heroObjectPosition: "object-[50%_45%]",
  benefitsBg: "/images/solutions/independent-garage.jpg",
  comparisonBg: "/images/why/02-studio-bay.png",
  workflowBg: "/images/hero/01-job-cards.png",
  deepDiveBg: "/images/features/car-service.jpg",
  ctaBg: "/images/solutions/independent-garage.jpg",
  accentLabel: "Independent workshop",
  showcase: [
    {
      src: "/images/solutions/independent-garage.jpg",
      alt: "Owner-mechanic working in a compact independent garage",
      label: "Owner workshop",
    },
    {
      src: "/images/why/02-studio-bay.png",
      alt: "Clean single-bay workshop ready for service",
      label: "Everyday bay",
    },
  ],
};

const DEFAULT_THEME: FeatureVisualTheme = {
  heroBg: "/images/features/garage-bay.jpg",
  heroObjectPosition: "object-center",
  benefitsBg: "/images/hero/02-detailing-ops.png",
  comparisonBg: "/images/features/auto-repair.jpg",
  workflowBg: "/images/hero/03-polish.png",
  deepDiveBg: "/images/features/car-service.jpg",
  ctaBg: "/images/cta-studio-premium.jpg",
  accentLabel: "Workshop operations",
  showcase: [
    {
      src: "/images/features/garage-bay.jpg",
      alt: "Professional automotive workshop bay",
      label: "Workshop floor",
    },
    {
      src: "/images/features/auto-repair.jpg",
      alt: "Technician repairing a vehicle",
      label: "Hands-on service",
    },
  ],
};

const EXACT: Record<string, FeatureVisualTheme> = {
  "car-garage": GARAGE,
  "automobile-workshop": INDEPENDENT,
  "auto-repair-shop": GARAGE,
  "bike-workshop": BIKE,
  "car-detailing": DETAILING,
  "car-wash": CAR_WASH,
  "auto-spa": AUTO_SPA,
  "ceramic-ppf": CERAMIC_PPF,
  "oil-lube": OIL_LUBE,
  "fleet-workshop": FLEET,
  "multi-branch": MULTI_BRANCH,
  "workshop-management": MULTI_BRANCH,
  "ev-garage": GARAGE,
};

export function getFeatureVisualTheme(slug: string): FeatureVisualTheme {
  if (EXACT[slug]) return EXACT[slug];
  if (slug.match(/ceramic|ppf/)) return CERAMIC_PPF;
  if (slug.match(/wash/)) return CAR_WASH;
  if (slug.match(/spa/)) return AUTO_SPA;
  if (slug.match(/detail|polish/)) return DETAILING;
  if (slug.match(/bike|motor|two-wheeler/)) return BIKE;
  if (slug.match(/fleet/)) return FLEET;
  if (slug.match(/oil|lube/)) return OIL_LUBE;
  if (slug.match(/multi-branch|branch|franchise|location/)) return MULTI_BRANCH;
  if (slug.match(/independent|automobile-workshop/)) return INDEPENDENT;
  if (slug.match(/garage|repair|workshop/)) return GARAGE;
  return DEFAULT_THEME;
}
