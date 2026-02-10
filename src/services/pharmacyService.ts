import { InventoryItem, OrderRow } from "@/types/pharmacyTypes";

export function getTopSellingMedicine(orders: OrderRow[]) {
  const count: Record<string, number> = {};

  orders.forEach((o) => {
    count[o.medicine] = (count[o.medicine] ?? 0) + 1;
  });

  return Object.entries(count).sort((a, b) => b[1] - a[1])[0]?.[0];
}

export function getMostRequestedCategory(
  orders: OrderRow[],
  inventory: InventoryItem[],
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

export function getExpiryInfo(expiryDate: string) {
  const today = new Date();
  const expiry = new Date(expiryDate);

  today.setHours(0, 0, 0, 0);
  expiry.setHours(0, 0, 0, 0);

  const diffMs = expiry.getTime() - today.getTime();
  const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (daysLeft < 0) {
    return {
      status: "expired" as const,
      daysLeft,
      label: `Expired ${Math.abs(daysLeft) === 1 ? "yesterday" : `${Math.abs(daysLeft)} days ago`}`,
    };
  }

  if (daysLeft <= 30) {
    return {
      status: "warning" as const,
      daysLeft,
      label: `${Math.ceil(daysLeft) === 1 ? "1 day" : `${Math.ceil(daysLeft)} days`} left to expiry`,
    };
  }

  return {
    status: "safe" as const,
    daysLeft,
    label: "Not expiring soon",
  };
}
