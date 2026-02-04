interface AddMedicineFromPrescriptionPageProps {
  params: Promise<{ orderId: string }>;
}

export default async function AddMedicineFromPrescriptionPage({
  params,
}: AddMedicineFromPrescriptionPageProps) {
  const { orderId } = await params;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Pharmacy Add Medicine From Prescription</h1>
      <p className="text-gray-500 mt-2">Order ID: {orderId}</p>
    </main>
  );
}
