"use client";

import { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";

import { MedicineFormValues, MedicineFormPayload } from "@/types/pharmacyTypes";
import MedicineImageField from "./MedicineImageField";
import MedicineBasicFields from "./MedicineBasicFields";
import MedicineUsageNotes from "./MedicineUsageNotes";

interface MedicineFormProps {
  defaultValues?: Partial<MedicineFormValues>;
  onSubmit: (data: MedicineFormPayload) => void;
}

export default function MedicineForm({
  defaultValues,
  onSubmit,
}: MedicineFormProps) {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(
    typeof defaultValues?.imageUrl === "string"
      ? defaultValues.imageUrl
      : "/placeholder-medicine.png",
  );

  const { register, handleSubmit, control, formState, reset } =
    useForm<MedicineFormValues>({
      mode: "onSubmit",
      defaultValues: {
        medicineName: "",
        category: "",
        stock: 1,
        expiryDate: "",
        status: "in",
        usageNotes: [],
        ...defaultValues,
      },
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "usageNotes",
  });

  useEffect(() => {
    if (defaultValues) {
      reset({
        medicineName: defaultValues.medicineName ?? "",
        category: defaultValues.category ?? "",
        stock: defaultValues.stock ?? 1,
        expiryDate: defaultValues.expiryDate ?? "",
        status: defaultValues.status ?? "in",
        usageNotes: defaultValues.usageNotes ?? [],
      });
    }
  }, [defaultValues, reset]);

  function onFormSubmit(values: MedicineFormValues) {
    onSubmit({
      ...values,
      usageNotes: values.usageNotes.map((n) => n.value).filter(Boolean),
      imageUrl: imageFile,
    });
  }

  return (
    <form
      id="medicine-form"
      onSubmit={handleSubmit(onFormSubmit)}
      className="space-y-4 text-sm"
    >
      <MedicineImageField
        imagePreview={imagePreview}
        medicineName={defaultValues?.medicineName ?? "Medicine"}
        onChange={(file) => {
          setImageFile(file);
          setImagePreview(URL.createObjectURL(file));
        }}
        onRemove={() => {
          setImageFile(null);
          setImagePreview("/placeholder-medicine.png");
        }}
      />

      <MedicineBasicFields
        register={register}
        control={control}
        errors={formState.errors}
      />

      <MedicineUsageNotes
        fields={fields}
        register={register}
        append={() => append({ value: "" })}
        remove={remove}
      />

      <button type="submit" hidden />
    </form>
  );
}
