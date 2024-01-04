import Image from "next/image";

export default function Header() {
  return (
    <header className="h-[70px] mt-5 flex items-center justify-between">
      <Image src="/logo.png" alt="Logo Landing Page" width={116} height={22} />
      <nav>
        <ul className="flex items-center gap-[30px]">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Case Studies</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="3">Blog</a>
          </li>
          <li>
            <button className="font-semibold text-sm bg-[#1465FA] text-white w-[76px] h-[34px] rounded">
              Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
