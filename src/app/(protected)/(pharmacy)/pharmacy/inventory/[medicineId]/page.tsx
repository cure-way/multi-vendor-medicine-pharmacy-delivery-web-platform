import { notFound } from "next/navigation";
import { inventoryData } from "@/components/pharmacy/utils/data";

import PharmacyMedicineHeader from "@/components/pharmacy/inventory/medicine/PharmacyMedicineHeader";
import PharmacyMedicineInfo from "@/components/pharmacy/inventory/medicine/PharmacyMedicineInfo";
import PharmacyMedicineActions from "@/components/pharmacy/inventory/medicine/PharmacyMedicineActions";
import PharmacyMedicineUsage from "@/components/pharmacy/inventory/medicine/PharmacyMedicineUsage";

interface PharmacyMedicineDetailsPageProps {
  params: Promise<{ medicineId: string }>;
}

export default async function PharmacyMedicineDetailsPage({
  params,
}: PharmacyMedicineDetailsPageProps) {
  const { medicineId } = await params;
  const medicine = inventoryData.find((i) => i.id === medicineId);

  if (!medicine) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <PharmacyMedicineHeader item={medicine} />

      <div className="gap-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <PharmacyMedicineInfo item={medicine} />

        <div className="space-y-6">
          <PharmacyMedicineActions item={medicine} />
          <PharmacyMedicineUsage item={medicine} />
        </div>
      </div>
    </div>
  );
}
