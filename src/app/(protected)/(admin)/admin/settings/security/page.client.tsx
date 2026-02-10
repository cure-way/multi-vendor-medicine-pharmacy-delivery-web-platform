"use client";

import { useState } from "react";
import {
  KeyRound,
  ShieldCheck,
  Phone,
  Mail,
  Smartphone,
  BarChart3,
  Ban,
  Trash2,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------
   GOOGLE ICON SVG (inline)
   ------------------------------------------------------------------ */
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------
   TOGGLE SWITCH
   ------------------------------------------------------------------ */
function ToggleSwitch({
  enabled,
  onChange,
}: {
  enabled: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={onChange}
      className={cn(
        "relative inline-flex h-7 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none",
        enabled ? "bg-primary" : "bg-neutral-normal",
      )}
    >
      <span
        className={cn(
          "pointer-events-none inline-block h-[22px] w-[22px] rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out",
          enabled ? "translate-x-[17px]" : "translate-x-0",
        )}
      />
    </button>
  );
}

/* ------------------------------------------------------------------
   SECURITY ITEM
   ------------------------------------------------------------------ */
interface SecurityItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: React.ReactNode;
}

function SecurityItem({ icon, title, description, action }: SecurityItemProps) {
  return (
    <div className="border border-border rounded-xl flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 px-3 sm:px-4 py-3">
      <div className="flex items-center gap-3 sm:contents">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-secondary-light flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="flex-1 min-w-0 space-y-0.5 sm:space-y-1 sm:hidden">
          <h3 className="text-[14px] font-semibold text-neutral-darker leading-snug">
            {title}
          </h3>
        </div>
      </div>
      <div className="hidden sm:block flex-1 min-w-0 space-y-1">
        <h3 className="text-t-16 font-semibold text-neutral-darker leading-snug">
          {title}
        </h3>
        <ul className="list-disc ml-5">
          <li className="text-t-14 font-normal text-neutral leading-snug">
            {description}
          </li>
        </ul>
      </div>
      <ul className="list-disc ml-5 sm:hidden">
        <li className="text-[12px] font-normal text-neutral leading-snug">
          {description}
        </li>
      </ul>
      <div className="shrink-0 self-start sm:self-center">{action}</div>
    </div>
  );
}

/* ------------------------------------------------------------------
   ACTION COMPONENTS
   ------------------------------------------------------------------ */
function LinkAction({
  label,
  variant = "primary",
}: {
  label: string;
  variant?: "primary" | "danger";
}) {
  return (
    <button
      type="button"
      className={cn(
        "flex items-center gap-2 text-t-14 font-semibold",
        variant === "danger" ? "text-error-dark" : "text-primary",
      )}
    >
      {label}
      <ChevronRight
        className={cn(
          "w-4 h-4",
          variant === "danger" ? "text-error-dark" : "text-primary",
        )}
      />
    </button>
  );
}

/* ------------------------------------------------------------------
   PAGE
   ------------------------------------------------------------------ */
export default function AdminSettingsSecurityPage() {
  const [twoFAEnabled, setTwoFAEnabled] = useState(true);
  const [googleConnected, setGoogleConnected] = useState(true);

  return (
    <div className="bg-white border border-border rounded-2xl px-3 sm:px-6 sm:pr-8 py-3 sm:py-4 space-y-3 sm:space-y-4">
      {/* Section Header */}
      <div className="border-b border-border pb-3">
        <h2 className="text-t-18 font-medium text-neutral-darker">Security</h2>
      </div>

      {/* Security Items */}
      <div className="space-y-4 pb-3">
        {/* Password */}
        <SecurityItem
          icon={<KeyRound className="w-6 h-6 text-primary-darker" />}
          title="Password"
          description="Last Changed 22 Dec 2024, 10:30 AM"
          action={
            <button
              type="button"
              className="px-4 py-3 bg-primary text-primary-light text-t-14 font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              Change password
            </button>
          }
        />

        {/* Two Factor Authentication */}
        <SecurityItem
          icon={<ShieldCheck className="w-6 h-6 text-primary" />}
          title="Two factor authentication"
          description="Receive codes via SMS or email every time you login"
          action={
            <ToggleSwitch
              enabled={twoFAEnabled}
              onChange={() => setTwoFAEnabled(!twoFAEnabled)}
            />
          }
        />

        {/* Google Authentication */}
        <SecurityItem
          icon={<GoogleIcon className="w-6 h-6" />}
          title="Google Authentication"
          description="Connect to Google"
          action={
            <div className="flex items-center gap-5">
              <span className="px-3 py-2 bg-success-light border border-success-dark/50 rounded text-t-14 font-medium text-success-darker">
                Connected
              </span>
              <ToggleSwitch
                enabled={googleConnected}
                onChange={() => setGoogleConnected(!googleConnected)}
              />
            </div>
          }
        />

        {/* Phone Number Verification */}
        <SecurityItem
          icon={<Phone className="w-6 h-6 text-primary" />}
          title="Phone Number Verification"
          description="Verified Mobile Number : +970592449634"
          action={<LinkAction label="Edit" />}
        />

        {/* Email Verification */}
        <SecurityItem
          icon={<Mail className="w-6 h-6 text-primary" />}
          title="Email Verification"
          description="Verified Mobile Number : +970592449634"
          action={<LinkAction label="Edit" />}
        />

        {/* Device Management */}
        <SecurityItem
          icon={<Smartphone className="w-6 h-6 text-primary" />}
          title="Device Management"
          description="Manage devices associated with the account"
          action={<LinkAction label="Manage" />}
        />

        {/* Account Activity */}
        <SecurityItem
          icon={<BarChart3 className="w-6 h-6 text-primary" />}
          title="Account Activity"
          description="Manage activities associated with the account"
          action={<LinkAction label="View" />}
        />

        {/* Deactivate Account */}
        <SecurityItem
          icon={<Ban className="w-6 h-6 text-error" />}
          title="Deactivate Account"
          description="This will shutdown your account. Your account will be reactive when you sign in again"
          action={<LinkAction label="Deactivate" variant="danger" />}
        />

        {/* Delete Account */}
        <SecurityItem
          icon={<Trash2 className="w-6 h-6 text-error" />}
          title="Delete Account"
          description="Your account will be permanently deleted"
          action={
            <button
              type="button"
              className="px-4 py-3 bg-error-light text-error-darker text-t-14 font-semibold rounded-lg hover:bg-error-light/80 transition-colors"
            >
              Delete
            </button>
          }
        />
      </div>
    </div>
  );
}
