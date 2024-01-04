interface PricingCardProps {
  title: string;
}

function PricingCard({ title }: PricingCardProps) {
  return (
    <div className="w-[300px] text-center rounded p-10">
      <h4 className="text-2xl font-bold">{title}</h4>
      <strong className="text-[64px]">$14</strong>
      <p className="text-[#747474] text-sm">per user, per month</p>
      <button className="text-[#1465FA] rounded-[3px] h-[52px] w-[223px] font-semibold border-solid border-2 border-[#1465FA] mt-[23px]">
        Start My 15-day trial
      </button>
      <div className="flex flex-col gap-3 mt-5">
        <p className="text-[#747474] text-sm">5 Social Profiles</p>
        <p className="text-[#747474] text-sm">5 Scheduled Posts Per Profile</p>
        <p className="text-[#747474] text-sm">400+ Templates</p>
        <p className="text-[#747474] text-sm">Calendar View</p>
        <p className="text-[#747474] text-sm">24/7 Support</p>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="flex mt-[78px] justify-between">
      <PricingCard title="Startup" />
      <div className="text-center rounded bg-[#2C3140] w-[300px] text-white p-10">
        <h4 className="text-2xl font-bold">Business</h4>
        <strong className="text-[64px]">$29</strong>
        <p className="text-[#DDD] text-sm">per user, per month</p>
        <button className="rounded-[3px] h-[52px] w-[223px] font-semibold border-solid border-2 bg-[#1465FA] text-white mt-[23px]">
          Start My 15-day trial
        </button>
        <div className="flex flex-col gap-3 mt-5">
          <p className="text-[#DDD] text-sm">5 Social Profiles</p>
          <p className="text-[#DDD] text-sm">5 Scheduled Posts Per Profile</p>
          <p className="text-[#DDD] text-sm">400+ Templates</p>
          <p className="text-[#DDD] text-sm">Calendar View</p>
          <p className="text-[#DDD] text-sm">24/7 Support</p>
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
          <p className="text-[#747474] text-sm">5 Social Profiles</p>
          <p className="text-[#747474] text-sm">
            5 Scheduled Posts Per Profile
          </p>
          <p className="text-[#747474] text-sm">400+ Templates</p>
          <p className="text-[#747474] text-sm">Calendar View</p>
          <p className="text-[#747474] text-sm">24/7 Support</p>
        </div>
      </div>
    </section>
  );
}
