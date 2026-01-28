import ConditionalHeader from "./ConditionalHeader";
import "../styles/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ConditionalHeader />
        {children}
      </body>
    </html>
  );
}
