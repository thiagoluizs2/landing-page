import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <section id="pricing" className="flex mt-[78px] justify-between">
      <PricingCard>
        <PricingCard.Title>Startup</PricingCard.Title>
        <PricingCard.Value>$14</PricingCard.Value>
        <p className="text-sm">per user, per month</p>
        <PricingCard.Button>Start My 15-day trial</PricingCard.Button>
        <PricingCard.List>
          <PricingCard.Item>10 Social Profiles</PricingCard.Item>
          <PricingCard.Item>25 Scheduled Posts Per Profile</PricingCard.Item>
          <PricingCard.Item>400+ Templates</PricingCard.Item>
          <PricingCard.Item>Calendar View</PricingCard.Item>
          <PricingCard.Item>24/7 Support</PricingCard.Item>
        </PricingCard.List>
      </PricingCard>
      <PricingCard className="bg-[#2C3140] text-white">
        <PricingCard.Title>Business</PricingCard.Title>
        <PricingCard.Value>$29</PricingCard.Value>
        <p className="text-sm">per user, per month</p>
        <PricingCard.Button className="text-white bg-primary">
          Start My 15-day trial
        </PricingCard.Button>
        <PricingCard.List>
          <PricingCard.Item className="text-white">
            10 Social Profiles
          </PricingCard.Item>
          <PricingCard.Item className="text-white">
            25 Scheduled Posts Per Profile
          </PricingCard.Item>
          <PricingCard.Item className="text-white">
            400+ Templates
          </PricingCard.Item>
          <PricingCard.Item className="text-white">
            Calendar View
          </PricingCard.Item>
          <PricingCard.Item className="text-white">
            24/7 Support
          </PricingCard.Item>
        </PricingCard.List>
      </PricingCard>
      <PricingCard>
        <PricingCard.Title>Agency</PricingCard.Title>
        <PricingCard.Value>$139</PricingCard.Value>
        <p className="text-sm">per user, per month</p>
        <PricingCard.Button>Start My 15-day trial</PricingCard.Button>
        <PricingCard.List>
          <PricingCard.Item>100 Social Profiles</PricingCard.Item>
          <PricingCard.Item>100 Scheduled Posts Per Profile</PricingCard.Item>
          <PricingCard.Item>400+ Templates</PricingCard.Item>
          <PricingCard.Item>Calendar View</PricingCard.Item>
          <PricingCard.Item>24/7 Support</PricingCard.Item>
        </PricingCard.List>
      </PricingCard>
    </section>
  );
}
