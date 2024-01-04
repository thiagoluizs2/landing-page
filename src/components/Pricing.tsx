import PricingCard from "./PricingCard";
import PricingCardInfo from "./PricingCardInfo";

export default function Pricing() {
  return (
    <section id="pricing" className="flex mt-[78px] justify-between">
      <PricingCard title="Startup" value={14} />
      <div className="text-center rounded bg-[#2C3140] w-[300px] text-white p-10">
        <h4 className="text-2xl font-bold">Business</h4>
        <strong className="text-[64px]">$29</strong>
        <p className="text-[#DDD] text-sm">per user, per month</p>
        <button className="rounded-[3px] h-[52px] w-[223px] font-semibold border-solid border-2 bg-[#1465FA] text-white mt-[23px]">
          Start My 15-day trial
        </button>
        <div className="flex flex-col gap-3 mt-5">
          <PricingCardInfo title="10 Social Profiles" />
          <PricingCardInfo title="25 Scheduled Posts Per Profile" />
          <PricingCardInfo title="400+ Templates" />
          <PricingCardInfo title="Calendar View" />
          <PricingCardInfo title="24/7 Support" />
        </div>
      </div>
      <div className="text-center rounded w-[300px] p-10">
        <h4 className="text-2xl font-bold">Agency</h4>
        <strong className="text-[64px]">$139</strong>
        <p className="text-[#747474] text-sm">per user, per month</p>
        <button className="text-[#1465FA] rounded-[3px] h-[52px] w-[223px] font-semibold border-solid border-2 border-[#1465FA] mt-[23px]">
          Start My 15-day trial
        </button>
        <div className="flex flex-col gap-3 mt-5">
          <PricingCardInfo title="100 Social Profiles" />
          <PricingCardInfo title="100 Scheduled Posts Per Profile" />
          <PricingCardInfo title="400+ Templates" />
          <PricingCardInfo title="Calendar View" />
          <PricingCardInfo title="24/7 Support" />
        </div>
      </div>
    </section>
  );
}
