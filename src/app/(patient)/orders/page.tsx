import { requirePatient } from "@/lib/auth";

/**
 * Orders Page (Protected)
 * View patient's order history
 */
export default async function OrdersPage() {
  // Require patient authentication - redirects to sign-in if not logged in
  const session = await requirePatient();

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      <p className="text-gray-600 mb-6">
        Welcome back, {session.user.name || "Patient"}!
      </p>

      {/* TODO: Fetch and display orders */}
      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="font-medium">Order #12345</p>
              <p className="text-gray-500 text-sm">Jan 15, 2026</p>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
              Delivered
            </span>
          </div>
          <p className="text-sm text-gray-600">3 items · $29.99</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="font-medium">Order #12344</p>
              <p className="text-gray-500 text-sm">Jan 10, 2026</p>
            </div>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
              In Transit
            </span>
          </div>
          <p className="text-sm text-gray-600">2 items · $19.99</p>
        </div>
      </div>
    </div>
  );
}
