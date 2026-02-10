"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Order } from "@/types/order";
import { OrderStatusBadge } from "./OrderStatusBadge";

function formatOrderedLine(orderedAtISO: string) {
  const d = new Date(orderedAtISO);
  const month = d.toLocaleString("en-US", { month: "long" });
  const day = d.getDate();
  const year = d.getFullYear();
  return `Ordered Today · on ${month} ${day}, ${year}`;
}

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export function OrderCard({ order }: { order: Order }) {
  const router = useRouter();

  const isActive = order.status === "processing" || order.status === "on_the_way";
  const isDelivered = order.status === "delivered";
  const isCancelled = order.status === "cancelled";

  const baseActionBtn =
    "h-12 w-full rounded-xl border border-[#334EAC] bg-white px-[22px] py-[10px]" +
    " transition-all duration-300 ease-in-out" +
    " hover:bg-[#334EAC]/10" +
    " active:bg-[#334EAC] active:scale-[0.99]" +
    " focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#334EAC]/35";

  const baseActionText =
    "text-xl font-bold leading-[120%] transition-colors duration-300 ease-in-out";

  return (
    <div className="w-full rounded-2xl border border-black/30 bg-white px-8 py-4 font-[var(--font-montserrat)]">
      <div className="flex w-full flex-col gap-6 md:flex-row md:gap-20">
        {/* LEFT */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col gap-5 border-b border-black/20 pb-4">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-semibold leading-[120%] text-black/80">
                Order ID: #{order.id}
              </div>
              <OrderStatusBadge status={order.status} />
            </div>

            <div className="text-base font-medium leading-[120%] text-black/60">
              {formatOrderedLine(order.orderedAtISO)}
            </div>

            {/* Pharmacy + Address */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/hospital.png"   
                  alt="pharmacy"
                  width={20}
                  height={20}
                />
                <span className="text-base font-medium leading-[120%] text-black/80">
                  {order.pharmacyName}
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Image
                  src="/icons/location.png"
                  alt="location"
                  width={20}
                  height={20}
                />
                <span className="text-sm font-normal leading-[120%] text-black/60">
                  {order.address}
                </span>
              </div>
            </div>
          </div>

          {/* Footer: items + total */}
          <div className="flex items-center justify-between pt-4">
            <div className="text-xl font-semibold leading-[120%] text-black/80">
              {order.itemsCount} items
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xl font-bold leading-[120%] text-black/60">
                Total
              </span>
              <span className="text-base font-bold leading-[100%] text-black/60">
                :
              </span>
              <span className="text-xl font-bold leading-[120%] text-black/60">
                {order.total.toFixed(2)}$
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-[212px] md:shrink-0">
          <div className="flex flex-col gap-4">
            {/* Buttons */}
            {isActive && (
              <>
                <button
                  type="button"
                  onClick={() => router.push("/my-cart")}
                  className={baseActionBtn}
                >
                  <span className={cx(baseActionText, "text-[#334EAC] active:text-white")}>
                    Track Order
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => router.push("/my-cart")}
                  className={baseActionBtn}
                >
                  <span className={cx(baseActionText, "text-[#334EAC] active:text-white")}>
                    View Details
                  </span>
                </button>
              </>
            )}

            {isDelivered && (
              <>
                <button
                  type="button"
                  onClick={() => router.push("/my-cart")}
                  className={baseActionBtn}
                >
                  <span className={cx(baseActionText, "text-[#334EAC] active:text-white")}>
                    View Details
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => router.push("/my-cart")}
                  className={baseActionBtn}
                >
                  <span className={cx(baseActionText, "text-[#334EAC] active:text-white")}>
                    Reorder
                  </span>
                </button>
              </>
            )}

            {isCancelled && (
              <button
                type="button"
                onClick={() => router.push("/my-cart")}
                className={baseActionBtn}
              >
                <span className={cx(baseActionText, "text-[#334EAC] active:text-white")}>
                  View Details
                </span>
              </button>
            )}

              
              {(order.status === "processing" || order.status === "on_the_way") && (
                <div className="rounded-xl bg-[#EBF9EE] px-4 py-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/icons/clock.png"
                      alt="clock"
                      width={20}
                      height={20}
                    />
                    <span className="text-[12px] font-semibold leading-[120%] text-[#1F7735]">
                      Estimated delivery{" "}
                      {order.estimatedDelivery ?? "Today, 6:00 PM"}
                    </span>
                  </div>
                </div>
              )}


          </div>
        </div>
      </div>
    </div>
  );
}
