import { cn } from "@/lib/utils";

interface PricingCardItemProps {
  children: React.ReactNode;
  className?: string;
}

export default function PricingCardItem({
  children,
  className,
}: PricingCardItemProps) {
  return <p className={cn("text-muted text-sm", className)}>{children}</p>;
}
