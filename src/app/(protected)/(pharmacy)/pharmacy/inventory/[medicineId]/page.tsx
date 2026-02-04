interface PharmacyMedicineDetailsPageProps {
  params: Promise<{ medicineId: string }>;
}

export default async function PharmacyMedicineDetailsPage({
  params,
}: PharmacyMedicineDetailsPageProps) {
  const { medicineId } = await params;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Pharmacy Medicine Details</h1>
      <p className="text-gray-500 mt-2">Medicine ID: {medicineId}</p>
    </main>
  );
}
