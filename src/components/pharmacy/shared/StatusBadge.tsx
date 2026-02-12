interface StatusBadgeProps {
  value: string;
  type?: "order" | "inventory";
}

type StatusConfig = {
  label: string;
  className: string;
};

const ORDER_STATUS_MAP: Record<string, StatusConfig> = {
  New: {
    label: "New",
    className: "bg-blue-100 text-blue-700",
  },
  Delivered: {
    label: "Delivered",
    className: "bg-green-100 text-green-700",
  },
  Pending: {
    label: "Pending",
    className: "bg-yellow-100 text-yellow-700",
  },
  Cancelled: {
    label: "Cancelled",
    className: "bg-red-100 text-red-700",
  },
};

const INVENTORY_STATUS_MAP: Record<string, StatusConfig> = {
  in: {
    label: "In Stock",
    className: "bg-green-100 text-green-700",
  },
  low: {
    label: "Low Stock",
    className: "bg-yellow-100 text-yellow-700",
  },
  out: {
    label: "Out of Stock",
    className: "bg-red-100 text-red-700",
  },
};

export default function StatusBadge({
  value,
  type = "order",
}: StatusBadgeProps) {
  const map = type === "order" ? ORDER_STATUS_MAP : INVENTORY_STATUS_MAP;

  const config = map[value] ?? {
    label: value,
    className: "bg-gray-100 text-gray-600",
  };

  return (
    <span
      className={`inline-flex rounded-full px-4 py-1.5 text-xs font-medium ${config.className}`}
    >
      {config.label}
    </span>
  );
}
