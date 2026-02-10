import Link from "next/link";
import Image from "next/image";
import { DeliveryTruckIcon } from "@/components/admin/shared/icons";
import { dashboardDeliverers } from "@/lib/mock/admin";

export default function RecentDeliveries() {
  return (
    <div className="bg-white rounded-2xl border border-[#EFEDED] flex flex-col p-4 gap-4">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#EBF9EE] flex items-center justify-center shrink-0">
          <DeliveryTruckIcon />
        </div>
        <h3 className="flex-1 text-[16px] leading-[1.2] font-semibold text-[#212F4D]">
          Recent deliveries
        </h3>
        <Link
          href="/admin/deliveries"
          className="border border-[#EFEDED] rounded-lg p-3 text-[12px] leading-[1.2] font-normal text-[#393737] hover:bg-[#FAF9F9] transition-colors shrink-0"
        >
          View all
        </Link>
      </div>

      {/* Table */}
      <div className="flex flex-col rounded-t-[16px] rounded-b-[12px]">
        {/* Table Header */}
        <div className="flex items-center h-14 bg-[#EBF9EE] border-t-2 border-[#34C759] rounded-t-[12px] px-3 gap-2">
          <span className="flex-1 text-[14px] leading-[1.2] font-semibold text-[#12461F]">
            Deliverer Name
          </span>
          <span className="flex-1 max-w-[62px] text-[14px] leading-[1.2] font-semibold text-[#12461F]">
            Date
          </span>
        </div>

        {/* Rows */}
        {dashboardDeliverers.map((deliverer) => (
          <div
            key={deliverer.name}
            className="flex items-center h-16 px-3 py-3 border-t border-[#FAF9F9] border-l border-r"
          >
            <div className="flex items-center gap-2 flex-1 min-w-0 h-full">
              <div className="w-9 h-9 rounded-[20px] bg-[#FFFDC3] shrink-0 overflow-hidden relative">
                <Image src="/avatar.png" alt="" fill className="object-cover" />
              </div>
              <div className="flex-1 flex flex-col gap-2 justify-center min-w-0">
                <p className="text-[12px] leading-[1.2] font-semibold text-[#393737] truncate">
                  {deliverer.name}
                </p>
                <p className="text-[12px] leading-[1.2] font-medium text-[#989593] truncate">
                  {deliverer.vehicle}
                </p>
              </div>
            </div>
            <div className="border border-[#EFEDED] rounded-lg px-2 py-3 shrink-0">
              <p className="text-[12px] leading-[1.2] font-normal text-[#989593] text-right w-[46px]">
                Today
              </p>
              <p className="text-[12px] leading-[1.2] font-normal text-[#5B5958] text-right w-[46px]">
                4:13 pm
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
