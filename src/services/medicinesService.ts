import { Medicine } from "@/types/categories.types";
import { medicines } from "./categories.mock";

export async function getMedicineById(id: string): Promise<Medicine | null> {
  const medicine = medicines.find((m) => m.id === id);
  return medicine ?? null;
}

export async function getSimilarMedicines(
  categoryId: number,
  excludeId: string,
): Promise<Medicine[]> {
  return medicines
    .filter((m) => m.categoryId === categoryId && m.id !== excludeId)
    .slice(0, 4);
}
