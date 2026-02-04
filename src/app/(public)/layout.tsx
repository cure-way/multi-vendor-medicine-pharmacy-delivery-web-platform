export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* Public layout shell - header/footer can be added here */}
      {children}
    </div>
  );
}
