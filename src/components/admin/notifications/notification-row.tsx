"use client";

import { Star, Archive, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Notification } from "./notifications-data";

/* ------------------------------------------------------------------
   AVATAR
   ------------------------------------------------------------------ */
function NotificationAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="w-12 h-12 rounded-full bg-warning-light flex items-center justify-center shrink-0">
      <span className="text-t-12 font-semibold text-warning-darker">
        {initials}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------------
   NOTIFICATION ROW
   ------------------------------------------------------------------ */
interface NotificationRowProps {
  notification: Notification;
  onToggleFavorite: (id: string) => void;
  onToggleArchived: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function NotificationRow({
  notification,
  onToggleFavorite,
  onToggleArchived,
  onDelete,
}: NotificationRowProps) {
  return (
    <div className="flex items-center gap-4 px-4 py-3 border border-border rounded-xl group">
      {/* Unread dot */}
      <div className="w-3 shrink-0 flex justify-center">
        {!notification.isRead && (
          <div className="w-3 h-3 rounded-full bg-primary" />
        )}
      </div>

      {/* Star */}
      <button
        type="button"
        aria-label={
          notification.isFavorite ? "Remove from favorites" : "Add to favorites"
        }
        onClick={() => onToggleFavorite(notification.id)}
        className={cn(
          "shrink-0 transition-colors",
          notification.isFavorite
            ? "text-warning fill-warning"
            : "text-neutral hover:text-warning",
        )}
      >
        <Star
          className={cn("w-6 h-6", notification.isFavorite && "fill-warning")}
        />
      </button>

      {/* Archive */}
      <button
        type="button"
        aria-label={
          notification.isArchived
            ? "Unarchive notification"
            : "Archive notification"
        }
        onClick={() => onToggleArchived(notification.id)}
        className={cn(
          "shrink-0 transition-colors",
          notification.isArchived
            ? "text-primary"
            : "text-neutral hover:text-primary",
        )}
      >
        <Archive className="w-6 h-6" />
      </button>

      {/* Avatar */}
      <NotificationAvatar name={notification.name} />

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col gap-2">
        <p className="text-t-12 font-semibold leading-snug">
          <span className="text-neutral-darker">{notification.name}</span>
          <span className="text-primary"> · {notification.time}</span>
        </p>
        <p className="text-t-14 font-medium text-neutral leading-snug truncate">
          {notification.message}
        </p>
      </div>

      {/* Delete */}
      <button
        type="button"
        aria-label="Delete notification"
        onClick={() => onDelete(notification.id)}
        className="shrink-0 text-neutral hover:text-error transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
      >
        <Trash2 className="w-6 h-6" />
      </button>
    </div>
  );
}
