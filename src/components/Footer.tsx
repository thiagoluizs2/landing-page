import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-center flex gap-2 items-center justify-center mt-5 my-2">
      Powered by,<Image src="/5.png" width={100} height={25} alt="Logo" />
    </footer>
  );
}
