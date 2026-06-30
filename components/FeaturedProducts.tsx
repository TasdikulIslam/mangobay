import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Featured Mangoes
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}