import { requirePatient } from "@/lib/auth";

interface OrderDetailPageProps {
  params: Promise<{
    orderId: string;
  }>;
}

/**
 * Order Detail Page (Protected)
 * View single order details
 */
export default async function OrderDetailPage({
  params,
}: OrderDetailPageProps) {
  // Require patient authentication
  await requirePatient();

  const { orderId } = await params;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-2">Order Details</h1>
      <p className="text-gray-500 mb-6">Order #{orderId}</p>

      {/* TODO: Fetch and display order details */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-gray-500 text-sm">Order Date</p>
            <p className="font-medium">January 15, 2026</p>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
            Delivered
          </span>
        </div>

        <div className="border-t pt-6 mb-6">
          <h3 className="font-medium mb-4">Items</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-100 rounded" />
              <div className="flex-1">
                <p className="font-medium text-sm">Panadol 500mg</p>
                <p className="text-gray-500 text-xs">Qty: 2</p>
              </div>
              <p className="font-medium">$9.99</p>
            </div>
          </div>
        </div>

        <div className="border-t pt-6">
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Subtotal</span>
            <span>$19.98</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Delivery</span>
            <span>$2.99</span>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>$22.97</span>
          </div>
        </div>
      </div>
    </div>
  );
}
