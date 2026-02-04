import { requirePatient } from "@/lib/auth";

/**
 * Patient Profile Page (Protected)
 * View and edit patient profile
 */
export default async function ProfilePage() {
  // Require patient authentication
  const session = await requirePatient();

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">My Profile</h1>

      <div className="max-w-2xl">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full" />
            <div>
              <h2 className="text-xl font-semibold">
                {session.user.name || "Patient"}
              </h2>
              <p className="text-gray-500">{session.user.email}</p>
            </div>
          </div>
          <button className="text-blue-600 text-sm font-medium hover:underline">
            Edit Profile
          </button>
        </div>

        {/* Profile Sections */}
        <div className="space-y-4">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-medium mb-4">Personal Information</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Phone</span>
                <span>{session.user.phone || "Not set"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Date of Birth</span>
                <span>Not set</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-medium mb-4">Delivery Addresses</h3>
            <p className="text-gray-500 text-sm">No addresses saved yet</p>
            <button className="mt-3 text-blue-600 text-sm font-medium hover:underline">
              Add Address
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="font-medium mb-4">Payment Methods</h3>
            <p className="text-gray-500 text-sm">No payment methods saved</p>
            <button className="mt-3 text-blue-600 text-sm font-medium hover:underline">
              Add Payment Method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
