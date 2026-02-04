export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* AdminShell - sidebar/header for admin panel */}
      {/* TODO: Add admin navigation, sidebar, header */}
      <div className="flex">
        <aside className="hidden lg:block w-64">
          {/* Admin Sidebar placeholder */}
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
