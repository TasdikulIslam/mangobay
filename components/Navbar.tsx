import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="MangoBay Logo"
            width={120}
            height={60}
            priority
          />
        </Link>

        {/* Search */}
        <div className="mx-8 flex-1">
          <input
            type="text"
            placeholder="🔍 Search mangoes..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-green-600"
          />
        </div>

        {/* Menu + Button */}
        <div className="flex items-center gap-8">

          <ul className="flex items-center gap-6 font-medium text-gray-700">
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

          <button className="rounded-lg bg-green-600 px-5 py-2 text-white hover:bg-green-700">
            Sign In
          </button>

        </div>

      </div>
    </nav>
  );
}