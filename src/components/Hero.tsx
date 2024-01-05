import { Icons } from "@/config/icons";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center mt-[78px]">
      <h1 className="text-[64px] font-black">
        Manage All Your Social Media <span className="bg-primary text-white">Profiles From One Place.</span>
      </h1>
      <div className="flex justify-between max-w-[794px] w-full mt-[39px]">
        <div className="flex gap-5">
          <Icons.check /> Free 15-day trial
        </div>
        <div className="flex gap-5">
          <Icons.check /> Unlimited Team Members
        </div>
        <div className="flex gap-5">
          <Icons.check /> Cancel Anytime
        </div>
      </div>
    </section>
  );
}
