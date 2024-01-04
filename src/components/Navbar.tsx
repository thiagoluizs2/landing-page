export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-[30px]">
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#">Case Studies</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
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
  );
}
