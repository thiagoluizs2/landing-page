import * as React from "react";

import { cn } from "@/lib/utils";
import PricingCardTitle from "./PricingCardTitle";
import PricingCardButton from "./PricingCardButton";
import PricingCardValue from "./PricingCardValue";
import PricingCardItem from "./PricingCardItem";
import PricingCardList from "./PricingCardList";

interface PricingCardProps {
  children: React.ReactNode;
  className?: string;
}

function PricingCard({ children, className }: PricingCardProps) {
  return (
    <div className={cn("w-[300px] text-center rounded p-10", className)}>
      {children}
    </div>
  );
}

PricingCard.Title = PricingCardTitle;
PricingCard.Value = PricingCardValue;
PricingCard.Button = PricingCardButton;
PricingCard.List = PricingCardList;
PricingCard.Item = PricingCardItem;

export default PricingCard;
