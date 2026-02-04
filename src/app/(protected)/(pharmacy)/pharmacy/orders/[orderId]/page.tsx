interface PharmacyOrderDetailsPageProps {
  params: Promise<{ orderId: string }>;
}

export default async function PharmacyOrderDetailsPage({
  params,
}: PharmacyOrderDetailsPageProps) {
  const { orderId } = await params;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Pharmacy Order Details</h1>
      <p className="text-gray-500 mt-2">Order ID: {orderId}</p>
    </main>
  );
}
