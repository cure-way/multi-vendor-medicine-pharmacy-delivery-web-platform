"use client";

import { useEffect, useRef, useState } from "react";

export function useActionsDropdown() {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  /* Outside click handling (portal-safe) */
  useEffect(() => {
    if (!open) return;

    function handleClickOutside(e: MouseEvent) {
      if (
        buttonRef.current?.contains(e.target as Node) ||
        menuRef.current?.contains(e.target as Node)
      ) {
        return;
      }
      setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  /* Position menu ABOVE trigger */
  useEffect(() => {
    if (!open || !buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const MENU_WIDTH = 192;
    const GAP = 6;
    const MENU_HEIGHT = menuRef.current?.offsetHeight ?? 200;

    setPosition({
      top: rect.top - MENU_HEIGHT - GAP,
      left: rect.right - MENU_WIDTH,
    });
  }, [open]);

  function toggle() {
    setOpen((prev) => !prev);
  }

  function close() {
    setOpen(false);
  }

  return {
    open,
    position,
    buttonRef,
    menuRef,
    toggle,
    close,
  };
}
