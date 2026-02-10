import { EditMedicineFormValues } from "@/components/pharmacy/utils/types";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface MedicineBasicFieldsProps {
  register: UseFormRegister<EditMedicineFormValues>;
  errors: FieldErrors<EditMedicineFormValues>;
}

export default function MedicineBasicFields({
  register,
  errors,
}: MedicineBasicFieldsProps) {
  return (
    <>
      {/* Medicine name */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Medicine Name *
        </label>

        <input
          {...register("medicineName", {
            required: "Medicine name is required",
          })}
          className="px-3 py-2 border rounded-lg w-full"
        />

        <FieldError message={errors.medicineName?.message} />
      </div>

      {/* Category */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Category *
        </label>

        <input
          {...register("category", {
            required: "Category is required",
          })}
          className="px-3 py-2 border rounded-lg w-full"
        />

        <FieldError message={errors.category?.message} />
      </div>

      {/* Stock */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Stock *</label>

        <input
          type="number"
          {...register("stock", {
            required: "Stock is required",
            min: {
              value: 1,
              message: "Stock must be at least 1",
            },
            valueAsNumber: true,
          })}
          className="px-3 py-2 border rounded-lg w-full"
        />

        <FieldError message={errors.stock?.message} />
      </div>

      {/* Expiry date */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">
          Expiry Date *
        </label>

        <input
          type="date"
          {...register("expiryDate", {
            required: "Expiry date is required",
          })}
          className="px-3 py-2 border rounded-lg w-full"
        />

        <FieldError message={errors.expiryDate?.message} />
      </div>
    </>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return <p className="mt-1 text-red-500 text-xs">{message}</p>;
}
