import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import type { Order, OrderStatus } from "@/types/order";
import { fetchOrderById, updateOrderStatus } from "@/services/orders.services";
import PrescriptionPreview from "@/components/pharmacy/home/PrescriptionPreview";



const statusColors: Record<OrderStatus, string> = {
  on_the_way: 'bg-amber-50 text-amber-700 border-amber-200',
  processing: 'bg-blue-50 text-blue-700 border-blue-200',
  cancelled: 'bg-red-50 text-red-700 border-red-200',
  delivered: 'bg-emerald-50 text-emerald-700 border-emerald-200',
};

export default function OrderDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    loadOrder();
  }, [params.id]);

  const loadOrder = async () => {
    try {
      setLoading(true);
      const data = await fetchOrderById(params.id);
      setOrder(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (status: OrderStatus) => {
    if (!order || updating) return;

    try {
      setUpdating(true);
      const updated = await updateOrderStatus(order.id, status);
      setOrder(updated);
    } catch (err) {
      console.error(err);
      alert("Failed to update order status");
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-1/4" />
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-1 space-y-4">
                <div className="h-48 bg-gray-200 rounded" />
                <div className="h-64 bg-gray-200 rounded" />
              </div>
              <div className="col-span-2 h-96 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600">Order not found</p>
        </div>
      </div>
    );
  }

  const hasOutOfStock = order.items.some((item) => !item.inStock);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 group"
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm font-medium">Back to orders</span>
        </button>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-900">
                    #{order.orderNumber}
                  </h2>
                  <p className="text-sm text-gray-600 mt-0.5">
                    {order.customerName}
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-xs text-gray-500">
                      {new Date(order.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                      })}
                    </span>
                    <span
                      className={`ml-auto px-2 py-0.5 rounded text-xs font-medium ${statusColors[order.status]}`}
                    >
                      {order.status === "on_the_way"
                        ? "New"
                        : order.status.charAt(0).toUpperCase() +
                          order.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {hasOutOfStock && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-red-800 font-medium">
                  Some Medicine are not available
                </p>
              </div>
            )}

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-base font-semibold text-gray-900 mb-4">
                Medicine List
              </h3>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-start gap-3">
                    {item.imageUrl ? (
                      <img
                        src={item.imageUrl}
                        alt={item.medicineName}
                        className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">
                        {item.medicineName}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {item.quantity} Pack ({item.quantity * 20} capsules)
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      {item.inStock !== false ? (
                        <span className="inline-block px-2 py-0.5 bg-green-50 text-green-700 text-xs font-medium rounded border border-green-200">
                          In Stock
                        </span>
                      ) : (
                        <span className="inline-block px-2 py-0.5 bg-red-50 text-red-700 text-xs font-medium rounded border border-red-200">
                          Out Of Stock
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-base font-semibold text-gray-900 mb-4">
                Payment Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">SubTotal</span>
                  <span className="text-gray-900 font-medium">
                    ${(order.totalAmount - 2).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Delivery price</span>
                  <span className="text-gray-900 font-medium">2.00</span>
                </div>
                <div className="pt-3 border-t border-gray-200 flex justify-between">
                  <span className="text-base font-semibold text-gray-900">
                    Total
                  </span>
                  <span className="text-base font-bold text-gray-900">
                    ${order.totalAmount.toFixed(2)}
                  </span>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Payment method</span>
                    <span className="text-gray-900 font-medium">
                      Cash to delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-wrap gap-3">
              {order.status === "on_the_way" && (
                <>
                  <button
                    onClick={() => handleStatusUpdate("processing")}
                    disabled={updating}
                    className="flex-1 min-w-[200px] px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-sm"
                  >
                    Accept Order
                  </button>
                  <button
                    onClick={() => handleStatusUpdate("cancelled")}
                    disabled={updating}
                    className="flex-1 min-w-[200px] px-6 py-3 bg-white text-red-600 border-2 border-red-600 rounded-xl font-medium hover:bg-red-50 disabled:opacity-50 transition-colors"
                  >
                    Reject Order
                  </button>
                </>
              )}
              {order.status === "processing" && (
                <button
                  onClick={() => handleStatusUpdate("delivered")}
                  disabled={updating}
                  className="flex-1 min-w-[200px] px-6 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 disabled:opacity-50 transition-colors shadow-sm"
                >
                  Mark as Delivered
                </button>
              )}
            </div>

            {order.prescriptions && order.prescriptions.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Prescription
                </h3>
                <div className="space-y-4">
                  <PrescriptionPreview prescriptions={order.prescriptions} />
                  <div className="flex gap-3">
                    <button className="flex-1 px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      View full image
                    </button>
                    <button className="flex-1 px-6 py-2.5 bg-white text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Order Info
              </h3>

              <div className="mb-6">
                <div className="flex items-center gap-3 mb-1">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <div>
                    <p className="text-base font-medium text-gray-900">
                      {order.customerName}
                    </p>
                    <p className="text-sm text-gray-500">
                      #{order.orderNumber}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">
                  Delivery Detailes
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">
                        Delivery to:
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        {order.customerAddress}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">
                        Estimated: 12:00 PM - 1:00 PM
                      </p>
                      <p className="text-sm font-medium text-gray-900">
                        Home Delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {order.notes && (
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Notes
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {order.notes}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
