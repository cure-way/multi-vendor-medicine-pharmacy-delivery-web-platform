import {
  Day,
  InventoryItem,
  OrderRow,
  OrdersStatusModel,
  OrderStatusDatum,
  TopMedicine,
  WeeklyOrdersDatum,
} from "@/types/pharmacyTypes";
import { DAY_ORDER } from "@/utils/pharmacyConstants";

export function getTopSellingMedicines(orders: OrderRow[]): TopMedicine[] {
  const count: Record<
    string,
    { id: string; medicine: string; orders: number }
  > = {};

  orders.forEach((o) => {
    if (!count[o.medicine]) {
      count[o.medicine] = {
        id: o.inventoryId,
        medicine: o.medicine,
        orders: 0,
      };
    }

    count[o.medicine].orders += 1;
  });

  return Object.values(count)
    .sort((a, b) => b.orders - a.orders)
    .slice(0, 4);
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

export function getOrderStatusData(orders: OrderRow[]): OrderStatusDatum[] {
  const delivered = orders.filter((o) => o.status === "Delivered").length;

  const pending = orders.filter((o) => o.status === "Pending").length;

  return [
    { name: "Delivered", value: delivered },
    { name: "Pending", value: pending },
  ];
}
export function getWeeklyOrdersData(orders: OrderRow[]): WeeklyOrdersDatum[] {
  const counts: Record<Day, number> = {
    Sun: 0,
    Mon: 0,
    Tue: 0,
    Wed: 0,
    Thu: 0,
    Fri: 0,
    Sat: 0,
  };

  orders.forEach((order) => {
    const day = new Date(order.date).toLocaleDateString("en-US", {
      weekday: "short",
    }) as Day;

    counts[day]++;
  });

  return DAY_ORDER.map((day) => ({
    day,
    orders: counts[day],
  }));
}

export function buildOrdersStatusModel(
  data: OrderStatusDatum[],
): OrdersStatusModel {
  const total = data.reduce((sum, d) => sum + d.value, 0);

  const completedCount = data.find((d) => d.name === "Delivered")?.value ?? 0;

  const pendingCount = data.find((d) => d.name === "Pending")?.value ?? 0;

  const completedPercent =
    total > 0 ? Math.round((completedCount / total) * 100) : 0;

  const pendingPercent =
    total > 0 ? Math.round((pendingCount / total) * 100) : 0;

  return {
    completedPercent,
    pendingPercent,
    outerData: [
      { name: "Completed", value: completedPercent },
      { name: "Remaining", value: 100 - completedPercent },
    ],
    innerData: [
      { name: "Pending", value: pendingPercent },
      { name: "Remaining", value: 100 - pendingPercent },
    ],
  };
}
