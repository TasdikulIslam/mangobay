type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;

  return (
    <main className="mx-auto max-w-7xl p-10">
      <h1 className="text-4xl font-bold text-green-700">
        Product: {id}
      </h1>
    </main>
  );
}