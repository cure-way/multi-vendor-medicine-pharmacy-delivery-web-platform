"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

import {
  InventoryItem,
  EditMedicinePayload,
  EditMedicineFormValues,
} from "@/types/pharmacyTypes";
import MedicineImageField from "./MedicineImageField";
import MedicineBasicFields from "./MedicineBasicFields";
import MedicineUsageNotes from "./MedicineUsageNotes";

interface EditMedicineFormProps {
  item: InventoryItem;
  onSubmit: (data: EditMedicinePayload) => void;
}

export default function EditMedicineForm({
  item,
  onSubmit,
}: EditMedicineFormProps) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState(
    item.imageUrl ?? "/placeholder-medicine.png",
  );

  const { register, handleSubmit, control, formState } =
    useForm<EditMedicineFormValues>({
      mode: "onSubmit",
      reValidateMode: "onSubmit",
      defaultValues: {
        medicineName: item.medicineName,
        category: item.category,
        stock: item.stock,
        expiryDate: item.expiryDate,
        usageNotes: item.usageNotes?.map((n) => ({ value: n })) ?? [],
      },
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "usageNotes",
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);

  function onFormSubmit(values: EditMedicineFormValues) {
    setHasSubmitted(true);

    const isDirty = formState.isDirty || imageFile !== null;

    if (!isDirty) return;

    onSubmit({
      medicineName: values.medicineName,
      category: values.category,
      stock: values.stock,
      expiryDate: values.expiryDate,
      usageNotes: values.usageNotes.map((n) => n.value).filter(Boolean),
      imageFile,
    });
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4 text-sm">
      {/* Image */}
      <MedicineImageField
        imagePreview={imagePreview}
        medicineName={item.medicineName}
        onChange={(file) => {
          setImageFile(file);
          setImagePreview(URL.createObjectURL(file));
        }}
        onRemove={() => {
          setImageFile(null);
          setImagePreview("/placeholder-medicine.png");
        }}
      />

      <MedicineBasicFields register={register} errors={formState.errors} />

      <MedicineUsageNotes
        fields={fields}
        register={register}
        append={() => append({ value: "" })}
        remove={remove}
      />

      {/* Submit feedback */}
      {hasSubmitted && !formState.isDirty && (
        <p className="text-gray-400 text-xs">Make a change to enable saving</p>
      )}

      {hasSubmitted && formState.isDirty && !formState.isValid && (
        <p className="text-red-500 text-xs">Please fill all required fields</p>
      )}

      <button type="submit" hidden />
    </form>
  );
}
