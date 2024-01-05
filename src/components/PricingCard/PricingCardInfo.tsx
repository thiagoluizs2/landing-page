interface PricingCardInfoProps {
  title: string;
}

export default function PricingCardInfo({ title }: PricingCardInfoProps) {
  return <p className="text-muted text-sm">{title}</p>;
}
