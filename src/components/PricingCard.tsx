import PricingCardInfo from "./PricingCardInfo";

interface PricingCardProps {
  title: string;
  value: number;
}

export default function PricingCard({ title, value }: PricingCardProps) {
  return (
    <div className="w-[300px] text-center rounded p-10">
      <h4 className="text-2xl font-bold">{title}</h4>
      <strong className="text-[64px]">${value}</strong>
      <p className="text-[#747474] text-sm">per user, per month</p>
      <button className="text-[#1465FA] rounded-[3px] h-[52px] w-[223px] font-semibold border-solid border-2 border-[#1465FA] mt-[23px]">
        Start My 15-day trial
      </button>
      <div className="flex flex-col gap-3 mt-5">
        <PricingCardInfo title="5 Social Profiles" />
        <PricingCardInfo title="5 Scheduled Posts Per Profile" />
        <PricingCardInfo title="400+ Templates" />
        <PricingCardInfo title="Calendar View" />
        <PricingCardInfo title="24/7 Support" />
      </div>
    </div>
  );
}
