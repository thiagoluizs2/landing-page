export default function Navbar() {
  return (
    <nav className="hidden md:inline-block">
      <ul className="flex items-center gap-[30px]">
        <li>
          <a href="#">Features</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <button className="w-[76px] h-[34px] font-semibold text-sm bg-primary text-white rounded">
            Sign Up
          </button>
        </li>
      </ul>
    </nav>
  );
}
