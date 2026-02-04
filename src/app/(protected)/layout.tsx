export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Protected layout shell - auth check wrapper */}
      {/* TODO: Add auth verification logic */}
      {children}
    </div>
  );
}
