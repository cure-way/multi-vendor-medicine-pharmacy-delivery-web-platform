import { StatCard } from "./StatCard";

export default function StateGrid() {
  return (
    <div className="gap-4 grid grid-cols-2 grow">
      <StatCard
        title="Daily Order Completion"
        value="85%"
        subtitle="4% increase compared to last week"
      />
      <StatCard
        title="Prescription Approval Rate"
        value="94%"
        subtitle="High prescription validation accuracy"
      />
      <StatCard
        title="Order Status Distribution"
        value="85%"
        subtitle="Completed"
      />
      <StatCard
        title="Delivery Success Rate"
        value="87%"
        subtitle="Slight improvement this week"
      />
    </div>
  );
}
