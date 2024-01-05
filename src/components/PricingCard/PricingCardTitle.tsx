interface PricingCardTitleProps {
  children: React.ReactNode;
}

export default function PricingCardTitle({
  children,
}: PricingCardTitleProps) {
  return <h4 className="text-2xl font-bold">{children}</h4>;
};