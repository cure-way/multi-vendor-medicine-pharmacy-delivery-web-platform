import type { Metadata } from "next";
import { getPatientById } from "@/lib/mock/patients";
import AdminPatientDetailsPage from "./page.client";

interface Props {
  params: Promise<{ patientId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { patientId } = await params;
  const patient = getPatientById(patientId);

  return {
    title: patient ? `${patient.name} | Patients` : "Patient Details",
    description: patient
      ? `Patient profile and details for ${patient.name}`
      : "View patient profile and medical details",
  };
}

export default function Page() {
  return <AdminPatientDetailsPage />;
}
