import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="MangoBay Logo"
            width={160}
            height={70}
            priority
          />
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-8 font-medium text-gray-700">
          <li>
            <Link href="/" className="hover:text-green-700">
              Home
            </Link>
          </li>

          <li>
            <Link href="/shop" className="hover:text-green-700">
              Shop
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-green-700">
              About
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-green-700">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side */}
        <button className="rounded-lg bg-green-600 px-5 py-2 text-white transition hover:bg-green-700">
          Sign In
        </button>

      </div>
    </nav>
  );
}