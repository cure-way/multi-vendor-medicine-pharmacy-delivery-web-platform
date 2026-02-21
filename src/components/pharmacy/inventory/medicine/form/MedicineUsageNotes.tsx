"use client";

import { MedicineFormValues } from "@/types/pharmacyTypes";
import { clsx } from "clsx";
import { FieldArrayWithId, UseFormRegister } from "react-hook-form";

interface MedicineUsageNotesProps {
  fields: FieldArrayWithId<MedicineFormValues, "usageNotes">[];
  register: UseFormRegister<MedicineFormValues>;
  append: () => void;
  remove: (index: number) => void;
}

const MAX_NOTES = 6;

export default function MedicineUsageNotes({
  fields,
  register,
  append,
  remove,
}: MedicineUsageNotesProps) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <label className="block mb-1 font-medium text-gray-700">
          Usage Notes
        </label>
        <span className="text-gray-500 text-xs">
          {fields.length}/{MAX_NOTES} notes
        </span>
      </div>
      {fields.map((field, i) => (
        <div key={field.id} className="relative mb-2">
          <input
            {...register(`usageNotes.${i}.value`)}
            className="px-3 py-2 pr-8 border rounded-lg w-full"
            placeholder={`Usage note ${i + 1}`}
          />

          <button
            type="button"
            onClick={() => remove(i)}
            className="top-1/2 right-2 absolute text-red-500 -translate-y-1/2"
          >
            ×
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={() => {
          if (fields.length < MAX_NOTES) {
            append();
          }
        }}
        disabled={fields.length >= MAX_NOTES}
        className={clsx(
          "text-xs",
          fields.length >= MAX_NOTES
            ? "cursor-not-allowed text-gray-400"
            : "text-(--color-primary)",
        )}
      >
        + Add note
      </button>
    </div>
  );
}
