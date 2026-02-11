import type { Metadata } from "next";
import "../styles/global.css";
import { Montserrat, Inter } from "next/font/google";
import { ScrollToTop } from "@/components/shared/ScrollToTop";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

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
      <body className={`${montserrat.variable} ${inter.variable}`}>
        <ScrollToTop />
        <div id="dropdown-portal" />
        {children}
      </body>
    </html>
  );
}
