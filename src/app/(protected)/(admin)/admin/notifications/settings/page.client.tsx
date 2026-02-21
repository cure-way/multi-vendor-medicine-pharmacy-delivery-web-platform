"use client";

import { useState, useCallback } from "react";
import { Calendar } from "lucide-react";
import LeftPanel from "@/components/admin/notifications/left-panel";
import NotificationsLayout from "@/components/admin/notifications/notifications-layout";
import { MotionStagger, MotionStaggerItem } from "@/components/admin/shared";
import SettingsLayout, {
  defaultSettings,
} from "@/components/admin/notifications-settings/settings-layout";

/* ------------------------------------------------------------------
   Build initial state from default settings config
   ------------------------------------------------------------------ */
function buildDefaults(): Record<string, boolean> {
  const map: Record<string, boolean> = {};
  for (const s of defaultSettings) {
    map[s.id] = s.defaultValue;
  }
  return map;
}

/* ------------------------------------------------------------------
   NOTIFICATION SETTINGS PAGE
   ------------------------------------------------------------------ */
export default function NotificationSettingsPage() {
  const [settings, setSettings] =
    useState<Record<string, boolean>>(buildDefaults);

  const handleToggle = useCallback((id: string, value: boolean) => {
    setSettings((prev) => ({ ...prev, [id]: value }));
  }, []);

  const handleResetToDefault = useCallback(() => {
    setSettings(buildDefaults());
  }, []);

  return (
    <MotionStagger className="flex-1 flex flex-col bg-neutral-light-hover px-3 sm:pl-4 sm:pr-6 py-3 sm:py-4 gap-3 sm:gap-4">
      {/* Page Header */}
      <MotionStaggerItem>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-3">
          <div className="space-y-0.5 sm:space-y-1">
            <h1 className="text-[18px] sm:text-t-24 font-bold text-primary-darker leading-snug">
              All Notifications
            </h1>
            <p className="text-[13px] sm:text-t-18 font-normal text-neutral">
              Stay updated with all your notifications and activities
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-4 px-3 sm:px-4 py-1 bg-white border border-border rounded-xl shrink-0 self-start">
            <Calendar className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-neutral" />
            <span className="text-[12px] sm:text-t-14 font-medium text-neutral-darker">
              Today · Jan, 01
            </span>
          </div>
        </div>
      </MotionStaggerItem>

      {/* Two-column layout */}
      <MotionStaggerItem>
        <NotificationsLayout
          leftPanel={<LeftPanel isSettingsActive />}
          rightPanel={
            <SettingsLayout
              settings={settings}
              onToggle={handleToggle}
              onResetToDefault={handleResetToDefault}
            />
          }
        />
      </MotionStaggerItem>
    </MotionStagger>
  );
}
