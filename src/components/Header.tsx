import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="h-[70px] mt-5 flex items-center justify-between">
      <Image src="/logo.png" alt="Logo Landing Page" width={116} height={22} />
      <Navbar />
    </header>
  );
}
