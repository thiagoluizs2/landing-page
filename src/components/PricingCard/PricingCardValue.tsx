interface PricingCardValueProps {
  children: React.ReactNode;
}

export default function PricingCardValue({
  children,
}: PricingCardValueProps) {
  return <strong className="text-[64px]">{children}</strong>;
};