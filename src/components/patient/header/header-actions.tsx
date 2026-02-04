"use client";

import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import {
  IoSearchOutline,
  IoNotificationsOutline,
  IoCartOutline,
} from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_PHONE } from "@/lib/constants";

interface HeaderActionsProps {
  isAuthenticated: boolean;
  notificationCount?: number;
  cartCount?: number;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  onMobileSearchOpen: () => void;
}

export function HeaderActions({
  isAuthenticated,
  notificationCount = 0,
  cartCount = 0,
  mobileMenuOpen,
  setMobileMenuOpen,
  onMobileSearchOpen,
}: HeaderActionsProps) {
  return (
    <div className="flex items-center gap-2 md:gap-4 shrink-0">
      {/* Mobile Search Icon */}
      <button
        onClick={onMobileSearchOpen}
        className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Open search"
      >
        <IoSearchOutline className="w-5 h-5 text-black/60" />
      </button>

      {/* Mobile menu button */}
      <motion.button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        whileTap={{ scale: 0.95 }}
        className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait">
          {mobileMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <HiX className="w-6 h-6 text-black/60" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <HiMenu className="w-6 h-6 text-black/60" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Location selector - Desktop only */}
      <div className="hidden md:flex bg-[#f4f4f4] items-center gap-2 h-11 px-2 rounded-lg w-40 lg:w-45">
        <FiMapPin className="w-4 h-4 text-black/60 shrink-0" />
        <div className="flex-1 flex flex-col gap-1 justify-center">
          <p className="text-xs font-semibold text-black/50">Select Location</p>
          <div className="flex items-center gap-1">
            <p className="flex-1 text-xs text-black/80 truncate">
              26 Salah El Din St...
            </p>
            <FaChevronDown className="w-2 h-2 text-black/60 rotate-90 shrink-0" />
          </div>
        </div>
      </div>

      {/* Cart - Authenticated users only */}
      {isAuthenticated && (
        <Link
          href="/cart"
          className="hidden md:flex relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <IoCartOutline className="w-6 h-6 text-black/60" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount > 9 ? "9+" : cartCount}
            </span>
          )}
        </Link>
      )}

      {/* Notifications - Authenticated users only */}
      {isAuthenticated && (
        <Link
          href="/notifications"
          className="hidden md:flex relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <IoNotificationsOutline className="w-6 h-6 text-black/60" />
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {notificationCount > 9 ? "9+" : notificationCount}
            </span>
          )}
        </Link>
      )}

      {/* User avatar / Sign in */}
      {isAuthenticated ? (
        <Link
          href="/profile"
          className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden bg-black/10 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.png"
            alt="User"
            width={40}
            height={40}
            className="object-cover"
          />
        </Link>
      ) : (
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/auth/sign-in"
            className="px-4 py-2 text-sm font-medium text-black/70 hover:text-black transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/auth/sign-up"
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  isAuthenticated: boolean;
}

export function MobileMenu({ isOpen, isAuthenticated }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden bg-white border-b border-black/10 overflow-hidden"
        >
          <div className="px-3 py-4 space-y-4">
            {/* Mobile location */}
            <div className="bg-[#f4f4f4] flex items-center gap-2 h-11 px-2 rounded-lg">
              <FiMapPin className="w-4 h-4 text-black/60 shrink-0" />
              <div className="flex-1 flex flex-col gap-1 justify-center">
                <p className="text-xs font-semibold text-black/50">
                  Select Location
                </p>
                <div className="flex items-center gap-1">
                  <p className="flex-1 text-xs text-black/80 truncate">
                    26 Salah El Din St...
                  </p>
                  <FaChevronDown className="w-2 h-2 text-black/60 rotate-90 shrink-0" />
                </div>
              </div>
            </div>

            {/* Mobile help */}
            <div className="flex items-center gap-2 px-2">
              <FaPhoneAlt className="text-black/60 w-4 h-4" />
              <p className="text-sm text-black/60">
                <span className="font-semibold">Need help? call us:</span>{" "}
                <span className="text-black/40">{CONTACT_PHONE}</span>
              </p>
            </div>

            {/* Mobile nav links */}
            <nav className="space-y-2">
              <Link
                href="/"
                className="block px-2 py-2 text-sm font-medium text-black/80 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link
                href="/categories"
                className="block px-2 py-2 text-sm font-medium text-black/80 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Categories
              </Link>
              <Link
                href="/pharmacies"
                className="block px-2 py-2 text-sm font-medium text-black/80 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Nearby Pharmacies
              </Link>
              {isAuthenticated ? (
                <>
                  <Link
                    href="/orders"
                    className="block px-2 py-2 text-sm font-medium text-black/80 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Orders
                  </Link>
                  <Link
                    href="/prescriptions"
                    className="block px-2 py-2 text-sm font-medium text-black/80 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Prescriptions
                  </Link>
                  <Link
                    href="/profile"
                    className="block px-2 py-2 text-sm font-medium text-black/80 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Profile
                  </Link>
                </>
              ) : (
                <div className="pt-2 space-y-2 border-t border-gray-200">
                  <Link
                    href="/auth/sign-in"
                    className="block px-2 py-2 text-sm font-medium text-center text-black/80 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/auth/sign-up"
                    className="block px-2 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
