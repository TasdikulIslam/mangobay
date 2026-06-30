import Image from "next/image";
import { products } from "@/data/products";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  const product = products.find((item) => item.id === id);

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="relative h-[450px]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold text-green-700">
            {product.name}
          </h1>

          <p className="mt-4 text-2xl font-semibold text-green-600">
            ৳ {product.price} / কেজি
          </p>

          <p className="mt-6 text-gray-700">
            {product.description}
          </p>
          <div className="mt-6 space-y-3 rounded-lg border bg-gray-50 p-4">
  <p>
    ⭐ <span className="font-semibold">Rating:</span> {product.rating} / 5
  </p>

  <p>
    📦 <span className="font-semibold">Stock:</span> {product.stock} কেজি
  </p>

  <p>
    🚚 <span className="font-semibold">Delivery:</span> {product.delivery}
  </p>
</div>

          <button className="mt-8 rounded-lg bg-green-600 px-8 py-3 text-white hover:bg-green-700">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}