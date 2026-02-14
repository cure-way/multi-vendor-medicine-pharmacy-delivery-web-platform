import StatusDropdown from "@/components/pharmacy/shared/StatusDropdown";
import { MedicineFormValues } from "@/types/pharmacyTypes";
import { INVENTORY_STATUSES } from "@/utils/pharmacyConstants";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

interface MedicineBasicFieldsProps {
  register: UseFormRegister<MedicineFormValues>;
  control: Control<MedicineFormValues>;
  errors: FieldErrors<MedicineFormValues>;
}

export default function MedicineBasicFields({
  register,
  control,
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

      {/* Status */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Status *</label>

        <Controller
          name="status"
          control={control}
          rules={{ required: "Status is required" }}
          render={({ field }) => (
            <StatusDropdown
              options={INVENTORY_STATUSES.slice(1)}
              value={field.value}
              onChange={field.onChange}
              className="justify-between w-full"
            />
          )}
        />

        <FieldError message={errors.status?.message} />
      </div>
    </>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return <p className="mt-1 text-red-500 text-xs">{message}</p>;
}
