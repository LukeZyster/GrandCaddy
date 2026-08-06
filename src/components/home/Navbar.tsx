import Logo from "../Logo";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-16 py-6 bg-white shadow-sm">
      <Logo />

      <div className="flex items-center gap-8">
        <a href="/">Home</a>
        <a href="#">Services</a>
        <a href="#">About</a>
        <a href="#">Contact</a>

        <button className="rounded-full bg-[#0B5FFF] px-6 py-3 text-white">
          Login
        </button>
      </div>
    </nav>
  );
}