import { InventoryItem, MedicineFormPayload } from "@/types/pharmacyTypes";

import MedicineForm from "./MedicineForm";

interface EditMedicineFormProps {
  item: InventoryItem;
  onSubmit: (data: MedicineFormPayload) => void;
}

export default function EditMedicineForm({
  item,
  onSubmit,
}: EditMedicineFormProps) {
  return (
    <MedicineForm
      defaultValues={{
        medicineName: item.medicineName,
        category: item.category,
        stock: item.stock,
        expiryDate: item.expiryDate,
        status: item.status,
        usageNotes: item.usageNotes?.map((note) => ({ value: note })) ?? [],
      }}
      onSubmit={onSubmit}
    />
  );
}
