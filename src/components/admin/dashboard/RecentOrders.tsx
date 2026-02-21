import Link from "next/link";
import Image from "next/image";
import {
  OrderBoxIcon,
  OrderCheckboxIcon,
  DashPharmacyFilledIcon,
  OrderStatusDot,
} from "@/components/admin/shared/icons";
import { dashboardOrders } from "@/lib/mock/admin";

export default function RecentOrders() {
  return (
    <div className="bg-white rounded-2xl border border-[#EFEDED] flex flex-col p-4 gap-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-[#EFF3FB] flex items-center justify-center shrink-0">
          <OrderBoxIcon />
        </div>
        <div className="flex-1 flex flex-col gap-2 min-w-0">
          <h3 className="text-[20px] leading-[1.2] font-semibold text-[#212F4D]">
            Recent orders
          </h3>
          <p className="text-[14px] leading-[1.2] font-normal text-[#989593]">
            Revenue generated from completed orders
          </p>
        </div>
        <Link
          href="/admin/orders"
          className="border border-[#EFEDED] rounded-lg p-3 text-[12px] leading-[1.2] font-normal text-[#393737] hover:bg-[#FAF9F9] transition-colors shrink-0"
        >
          View all
        </Link>
      </div>

      {/* Table */}
      <div className="flex flex-col rounded-t-[16px] rounded-b-[12px] border-b border-[#CAC6C4] overflow-x-auto">
        {/* Table Header */}
        <div className="flex items-center h-14 bg-[#EFF3FB] border-t-2 border-[#5F85DB] rounded-t-[12px] px-4 gap-2 min-w-[700px]">
          <div className="flex items-center gap-2 flex-1 max-w-[80px]">
            <OrderCheckboxIcon />
            <span className="text-[14px] leading-[1.2] font-semibold text-[#393737]">
              ID
            </span>
          </div>
          <span className="flex-1 min-w-[240px] text-[14px] leading-[1.2] font-semibold text-[#393737]">
            Customer Name
          </span>
          <span className="flex-1 min-w-[200px] text-[14px] leading-[1.2] font-semibold text-[#393737]">
            Pharmacy
          </span>
          <span className="flex-1 text-[14px] leading-[1.2] font-semibold text-[#393737]">
            Date
          </span>
          <span className="flex-1 text-[14px] leading-[1.2] font-semibold text-[#393737]">
            Payment
          </span>
          <span className="flex-1 text-[14px] leading-[1.2] font-semibold text-[#393737]">
            Delivery
          </span>
        </div>

        {/* Rows */}
        {dashboardOrders.map((order, index) => (
          <div
            key={order.id}
            className={`flex items-center h-16 px-4 py-3 gap-2 min-w-[700px] ${
              index % 2 !== 0
                ? "bg-[#FAF9F9] border-t border-l border-r border-[#EFEDED]"
                : "bg-white border-t border-l border-r border-white"
            } ${index === dashboardOrders.length - 1 ? "rounded-b-[12px]" : ""}`}
          >
            {/* ID */}
            <div className="flex items-center gap-2 flex-1 max-w-[80px]">
              <OrderCheckboxIcon />
              <span className="text-[12px] leading-[1.2] font-semibold text-[#393737]">
                {order.id}
              </span>
            </div>

            {/* Customer */}
            <div className="flex items-center gap-2 flex-1 min-w-[240px] h-full">
              <div
                className="w-10 h-10 rounded-[20px] shrink-0 overflow-hidden relative"
                style={{ backgroundColor: order.avatarBg }}
              >
                <Image
                  src={order.avatar}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col gap-2 justify-center min-w-0">
                <p className="text-[14px] leading-[1.2] font-semibold text-[#393737] truncate">
                  {order.customer}
                </p>
                <p className="text-[12px] leading-[1.2] font-medium text-[#989593] truncate">
                  {order.contact}
                </p>
              </div>
            </div>

            {/* Pharmacy */}
            <div className="flex items-center gap-2 flex-1 min-w-[200px] h-full">
              <div className="w-8 h-8 rounded-2xl bg-[#CDD9F4] flex items-center justify-center shrink-0">
                <DashPharmacyFilledIcon />
              </div>
              <div className="flex-1 flex flex-col gap-1 justify-center min-w-0">
                <p className="text-[14px] leading-[1.2] font-semibold text-[#263B81] truncate">
                  {order.pharmacy}
                </p>
                <p className="text-[12px] leading-[1.2] font-medium text-[#989593] truncate">
                  {order.branch}
                </p>
              </div>
            </div>

            {/* Date */}
            <div className="flex-1 flex flex-col gap-1 justify-center">
              <p className="text-[14px] leading-[1.2] font-semibold text-[#263B81]">
                {order.date}
              </p>
              <p className="text-[12px] leading-[1.2] font-normal text-[#393737]">
                {order.time}
              </p>
            </div>

            {/* Payment */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-1 px-3 py-2 h-10 rounded-lg bg-[#EBF9EE]">
                <OrderStatusDot />
                <span className="text-[12px] leading-normal font-semibold text-[#12461F] text-center">
                  {order.payment}
                </span>
              </div>
            </div>

            {/* Delivery */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-1 px-3 py-2 h-10 rounded-lg bg-[#EBF9EE]">
                <OrderStatusDot />
                <span className="text-[12px] leading-normal font-semibold text-[#12461F] text-center">
                  {order.delivery}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
