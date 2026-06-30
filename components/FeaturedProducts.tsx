import ProductCard from "./ProductCard";

const products = [
  {
    id: "amrapali",
    name: "আম্রপালি",
    price: 120,
    image: "/mangoes/amrapali.jpg",
  },
  {
    id: "langra",
    name: "ল্যাংড়া",
    price: 140,
    image: "/mangoes/langra.jpg",
  },
  {
    id: "fazli",
    name: "ফজলি",
    price: 100,
    image: "/mangoes/fazli.jpg",
  },
  {
    id: "himsagor",
    name: "হিমসাগর",
    price: 160,
    image: "/mangoes/himsagor.jpg",
  },
  {
    id: "bari4",
    name: "বারি-৪",
    price: 130,
    image: "/mangoes/bari4.jpg",
  },
  {
    id: "ashwina",
    name: "আশ্বিনা",
    price: 110,
    image: "/mangoes/ashwina.jpg",
  },
];

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