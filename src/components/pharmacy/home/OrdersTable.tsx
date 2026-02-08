"use client";

import { useRouter } from "next/navigation";

const ORDERS = [
  {
    id: "P0006",
    customer: "Eman Mohammad",
    medicine: "Paracetamol 500mg",
    total: "23.00$",
    date: "24 June",
    status: "Delivered",
  },
  {
    id: "P0007",
    customer: "Eman Mohammad",
    medicine: "Paracetamol 500mg",
    total: "23.00$",
    date: "24 June",
    status: "Delivered",
  },
];

export default function OrdersTable() {
  const router = useRouter();

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b text-gray-500 text-xs text-left">
            <th className="py-2">Order.ID</th>
            <th className="py-2">Customer</th>
            <th className="py-2">Medicine</th>
            <th className="py-2">Total</th>
            <th className="py-2">Date</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {ORDERS.map((order) => (
            <tr
              key={order.id}
              onClick={() => router.push(`/pharmacy/orders/${order.id}`)}
              className="hover:bg-gray-50 border-b last:border-b-0 cursor-pointer"
            >
              <td className="py-3">{order.id}</td>
              <td className="py-3">{order.customer}</td>
              <td className="py-3">{order.medicine}</td>
              <td className="py-3">{order.total}</td>
              <td className="py-3">{order.date}</td>
              <td className="py-3">
                <span className="bg-blue-50 px-3 py-1 rounded-full font-medium text-(--color-primary) text-xs">
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer */}
      <div className="mt-3 text-right">
        <button
          onClick={() => router.push("/pharmacy/orders")}
          className="font-medium text-(--color-primary) text-xs"
        >
          View All Orders →
        </button>
      </div>
    </div>
  );
}
