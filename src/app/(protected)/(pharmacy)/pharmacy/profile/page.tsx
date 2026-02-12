"use client";

import { useState } from "react";
import Link from "next/link";

interface Order {
  id: string;
  customerName: string;
  customerAvatar?: string;
  medicine: string;
  total: string;
  date: string;
  status: "Delivered" | "Pending" | "Processing";
}

interface InventoryItem {
  id: string;
  name: string;
  stock: string;
  icon: string;
  color: string;
}

export default function PharmacyHomePage() {
  const [acceptNewOrders, setAcceptNewOrders] = useState(true);

  const todayOrdersCount = 14;
  const deliveredOrdersCount = 6;

  const orders: Order[] = [
    {
      id: "#9066",
      customerName: "Eman Mohamed",
      medicine: "Paracetamol 500mg",
      total: "$10.5",
      date: "30 June",
      status: "Delivered",
    },
    {
      id: "#9068",
      customerName: "Noor Sameer",
      medicine: "Paracetamol 500mg",
      total: "$10.5",
      date: "30 June",
      status: "Delivered",
    },
    {
      id: "#9066",
      customerName: "Ahmed Ali",
      medicine: "Headache 10mg",
      total: "$16.5",
      date: "30 June",
      status: "Delivered",
    },
  ];

  const inventoryItems: InventoryItem[] = [
    {
      id: "1",
      name: "Vitamin A",
      stock: "56 Packs",
      icon: "💊",
      color: "bg-orange-100",
    },
    {
      id: "2",
      name: "Vitamin D",
      stock: "44 Packs",
      icon: "💊",
      color: "bg-blue-100",
    },
    {
      id: "3",
      name: "Antibiotic",
      stock: "12 Packs",
      icon: "💉",
      color: "bg-teal-100",
    },
  ];

  const todaySummary = [
    { label: "Top Selling medicine", value: "5" },
    { label: "Paracetamol", value: "" },
    { label: "Most non-picked category", value: "" },
    { label: "Vitamins", value: "" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Pharmacy Home</h1>
          <p className="text-sm text-gray-500">Manage your pharmacy</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      All Orders Today
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {todayOrdersCount}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">orders</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">
                      Orders Delivered
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {deliveredOrdersCount}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">orders</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Orders</h2>
                <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Delivered</option>
                  <option>Pending</option>
                  <option>All</option>
                </select>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-100">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Medicine
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {orders.map((order, index) => (
                      <tr
                        key={index}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {order.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                              <svg
                                className="w-4 h-4 text-gray-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <span className="text-sm text-gray-900">
                              {order.customerName}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {order.medicine}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {order.total}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {order.date}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700">
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">
                  Inventory Snapshot
                </h2>
                <Link
                  href="/inventory"
                  className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  View All
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {inventoryItems.map((item) => (
                  <div key={item.id} className={`${item.color} rounded-xl p-4`}>
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-600">{item.stock}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Action
              </h2>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">
                    Accept/Pause New Orders
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={acceptNewOrders}
                      onChange={(e) => setAcceptNewOrders(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <p className="text-xs text-gray-500">
                  Now you can accepting new orders
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-yellow-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      Alert Stock
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-3xl">💊</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Desame 500mg
                        </p>
                        <p className="text-xs text-gray-600">
                          Only 2 item left
                        </p>
                      </div>
                    </div>
                    <button className="w-full py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                      Update Stock
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Today Summary
              </h2>

              <ul className="space-y-3">
                {todaySummary.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    <span className="text-gray-700">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
