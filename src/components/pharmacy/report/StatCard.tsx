interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
}

export function StatCard({ title, value, subtitle }: StatCardProps) {
  return (
    <div className="bg-white p-4 border rounded-xl">
      <p className="mb-6 text-gray-500 text-sm">{title}</p>
      <p className="mt-1 font-semibold text-2xl text-(--color-primary)">
        {value}
      </p>
      {subtitle && <p className="mt-1 text-gray-400 text-xs">{subtitle}</p>}
    </div>
  );
}
