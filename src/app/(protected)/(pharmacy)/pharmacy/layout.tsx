export default function PharmacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* PharmacyShell - sidebar/header for pharmacy portal */}
      {/* TODO: Add pharmacy navigation, sidebar, header */}
      <div className="flex">
        <aside className="hidden lg:block w-64">
          {/* Pharmacy Sidebar placeholder */}
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
