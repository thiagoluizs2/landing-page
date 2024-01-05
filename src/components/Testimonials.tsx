import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="flex flex-col gap-7 mt-[78px]">
      <h2 className="font-black text-[36px] text-center">Testimonials</h2>
      <div className="flex justify-between items-center">
        <div className="h-[347px] w-[291px]">
          <div className="flex flex-col justify-center items-center gap-3 mb-10">
            <Image src="/Avatar.png" alt="" width={120} height={120} />
            <Image src="/icon.png" alt="" width={24} height={24} />
          </div>
          <div className="bg-[#F6F6F6] p-6 flex flex-col gap-4 justify-center">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <strong className="block">Lora Smith</strong>
          </div>
        </div>
        <div className="h-[347px] w-[291px]">
          <div className="flex flex-col justify-center items-center gap-3 mb-10">
            <Image src="/Avatar.png" alt="" width={120} height={120} />
            <Image src="/icon.png" alt="" width={24} height={24} />
          </div>
          <div className="bg-[#F6F6F6] p-6 flex flex-col gap-4 justify-center">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <strong className="block">Lora Smith</strong>
          </div>
        </div>
        <div className="h-[347px] w-[291px]">
          <div className="flex flex-col justify-center items-center gap-3 mb-10">
            <Image src="/Avatar.png" alt="" width={120} height={120} />
            <Image src="/icon.png" alt="" width={24} height={24} />
          </div>
          <div className="bg-[#F6F6F6] p-6 flex flex-col gap-4 justify-center">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <strong className="block">Lora Smith</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
