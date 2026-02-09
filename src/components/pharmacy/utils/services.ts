import { InventoryRow, OrderRow } from "./types";

export function getTopSellingMedicine(orders: OrderRow[]) {
  const count: Record<string, number> = {};

  orders.forEach((o) => {
    count[o.medicine] = (count[o.medicine] ?? 0) + 1;
  });

  return Object.entries(count).sort((a, b) => b[1] - a[1])[0]?.[0];
}

export function getMostRequestedCategory(
  orders: OrderRow[],
  inventory: InventoryRow[],
) {
  const inventoryMap = new Map(inventory.map((i) => [i.id, i.category]));

  const counts: Record<string, number> = {};

  orders.forEach((order) => {
    const category = inventoryMap.get(order.inventoryId);
    if (!category) return;

    counts[category] = (counts[category] ?? 0) + 1;
  });

  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];
}
