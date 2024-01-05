interface PricingCardListProps {
  children: React.ReactNode;
}

export default function PricingCardList({
  children,
}: PricingCardListProps) {
  return <div className="flex flex-col gap-3 mt-5">{children}</div>;
};