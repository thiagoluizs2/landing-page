import Image from "next/image";

interface TestimonialProps {
  name: string;
  comment: string;
}

export function Testimonial({ name, comment }: TestimonialProps) {
  return (
    <div className="h-[347px] w-[291px]">
      <div className="flex flex-col justify-center items-center gap-3 mb-8">
        <Image src="/Avatar.png" alt="" width={76} height={76} />
        <Image src="/icon.png" alt="" width={24} height={24} />
      </div>
      <div className="bg-[#F6F6F6] p-6 flex flex-col gap-4 justify-center">
        <p>{comment}</p>
        <strong className="block">{name}</strong>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="flex flex-col gap-7 mt-[78px]">
      <h2 className="font-black text-[36px] text-center">Testimonials</h2>
      <div className="flex justify-between items-center">
        <Testimonial
          name="Lora Smith"
          comment="It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout."
        />

        <Testimonial
          name="Lora Smith"
          comment="It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout."
        />
        <Testimonial
          name="Lora Smith"
          comment="It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout."
        />
      </div>
    </section>
  );
}
