import type { Order } from "@/types/order";
import { OrderCard } from "./OrderCard";
import { OrderEmptyState } from "./OrderEmptyState";

export function OrdersList({ orders }: { orders: Order[] }) {
  if (orders.length === 0) return <OrderEmptyState />;

  return (
    <div className="flex flex-col gap-6">
      {orders.map((o) => (
        <OrderCard key={o.id} order={o} />
      ))}
    </div>
  );
}
