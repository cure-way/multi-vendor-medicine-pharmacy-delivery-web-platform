import PharmacyHomeHeader from "@/components/pharmacy/home/PharmacyHomeHeader";
import OrdersSummaryCards from "@/components/pharmacy/home/OrdersSummaryCards";
import QuickActionCard from "@/components/pharmacy/home/QuickActionCard";
import OrdersCard from "@/components/pharmacy/home/OrdersCard";
import InventorySnapshot from "@/components/pharmacy/home/InventorySnapshot";

export default function PharmacyHomePage() {
  return (
    <div className="gap-6 grid lg:grid-cols-[1fr_320px]">
      <div>
        <PharmacyHomeHeader />
        <OrdersSummaryCards />
        <OrdersCard />
        <InventorySnapshot />
      </div>
      <QuickActionCard />
    </div>
  );
}
