import Link from "next/link";
import Image from "next/image";

type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  image: string;
};

export default function ProductCard({
  id,
  name,
  price,
  image,
}: ProductCardProps) {
  return (
    <Link
      href={`/product/${id}`}
      className="block rounded-xl border p-4 shadow transition hover:shadow-lg"
    >
      <div className="relative h-52 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-lg object-cover"
        />
      </div>

      <h2 className="mt-4 text-xl font-bold">{name}</h2>

      <p className="mt-2 text-lg text-green-700">
        ৳ {price} / কেজি
      </p>

      <button
        type="button"
        className="mt-4 w-full rounded-lg bg-green-600 py-2 text-white hover:bg-green-700"
      >
        Add to Cart
      </button>
    </Link>
  );
}