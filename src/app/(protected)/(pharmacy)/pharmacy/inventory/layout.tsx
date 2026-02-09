export default function InventoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-4 h-full overflow-y-auto">{children}</div>;
}
