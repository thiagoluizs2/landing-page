import { cn } from "@/lib/utils";

interface PricingCardButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function PricingCardButton({
  children,
  className,
}: PricingCardButtonProps) {
  return (
    <button
      className={cn(
        "w-[223px] h-[52px] text-primary border-primary rounded-[3px] font-semibold border-solid border-2 mt-[23px]",
        className
      )}
    >
      {children}
    </button>
  );
};