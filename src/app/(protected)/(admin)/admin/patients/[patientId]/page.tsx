interface AdminPatientDetailsPageProps {
  params: Promise<{ patientId: string }>;
}

export default async function AdminPatientDetailsPage({
  params,
}: AdminPatientDetailsPageProps) {
  const { patientId } = await params;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Admin Patient Details</h1>
      <p className="text-gray-500 mt-2">Patient ID: {patientId}</p>
    </main>
  );
}
