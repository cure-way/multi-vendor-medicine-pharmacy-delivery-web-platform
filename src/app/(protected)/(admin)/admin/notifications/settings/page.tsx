import type { Metadata } from "next";
import NotificationSettingsPage from "./page.client";

export const metadata: Metadata = {
  title: "Notification Settings",
  description: "Configure notification preferences and alert channels",
};

export default function Page() {
  return <NotificationSettingsPage />;
}
