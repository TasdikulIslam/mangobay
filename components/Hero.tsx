import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl items-center justify-between px-6 py-20">
      {/* Left Side */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold leading-tight text-green-700">
          Fresh Mangoes
          <br />
          From Chapainawabganj
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Premium quality mangoes delivered anywhere in Bangladesh.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/shop"
            className="rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700"
          >
            Shop Now
          </Link>

          <Link
            href="/about"
            className="rounded-lg border border-green-600 px-6 py-3 text-green-700 hover:bg-green-50"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div>
        <img
          src="/logo.png"
          alt="MangoBay"
          className="w-[380px]"
        />
      </div>
    </section>
  );
}