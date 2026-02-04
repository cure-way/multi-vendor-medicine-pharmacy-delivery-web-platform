import type { Metadata } from "next";
import "../styles/global.css";

export const metadata: Metadata = {
  title: {
    default: "CureWay",
    template: "%s | CureWay",
  },
  description: "Multi-vendor medicine and pharmacy delivery platform",
  keywords: ["pharmacy", "medicine", "delivery", "healthcare"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
