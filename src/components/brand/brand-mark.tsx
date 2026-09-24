import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  size?: number;
  /** Prefer diamond mark for compact UI; lockup for larger brand plates. */
  variant?: "mark" | "lockup";
  alt?: string;
};

/** Platform logo (MY DETAIL OS). */
export function BrandMark({
  className,
  size = 40,
  variant = "mark",
  alt = siteConfig.name,
}: BrandMarkProps) {
  const src = variant === "lockup" ? siteConfig.logo : siteConfig.logoMark;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={cn("object-cover", className)}
    />
  );
}
