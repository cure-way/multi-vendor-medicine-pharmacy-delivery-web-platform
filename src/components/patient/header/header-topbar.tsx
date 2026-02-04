"use client";

import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAttachMoney, MdOutlineTranslate } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_PHONE } from "@/lib/constants";

const CURRENCIES = ["USD", "EUR", "ILS"] as const;
const LANGUAGES = [
  { value: "English", label: "English" },
  { value: "العربية", label: "العربية" },
] as const;

export function HeaderTopbar() {
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");

  const currencyRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        currencyRef.current &&
        !currencyRef.current.contains(event.target as Node) &&
        languageRef.current &&
        !languageRef.current.contains(event.target as Node)
      ) {
        setCurrencyOpen(false);
        setLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCurrencyToggle = () => {
    setCurrencyOpen(!currencyOpen);
    setLanguageOpen(false);
  };

  const handleLanguageToggle = () => {
    setLanguageOpen(!languageOpen);
    setCurrencyOpen(false);
  };

  return (
    <div className="bg-[#f9f9f9] flex justify-between items-center px-3 md:px-6 py-2 gap-2 md:gap-3">
      {/* Help Line - Desktop only */}
      <div className="hidden lg:flex items-center gap-2 flex-1">
        <FaPhoneAlt className="text-black/60 w-4 h-4" />
        <p className="text-sm text-black/60">
          <span className="font-semibold">Need help? call us:</span>{" "}
          <span className="text-black/40">{CONTACT_PHONE}</span>
        </p>
      </div>

      {/* Announcements Bar */}
      <p className="text-sm md:text-base font-semibold text-black/60 text-center flex-1 lg:flex-1 truncate">
        Announcements Bar
      </p>

      <div className="flex items-center gap-1.5 md:gap-2 justify-end flex-1">
        {/* Currency Dropdown */}
        <div className="relative" ref={currencyRef}>
          <div
            onClick={handleCurrencyToggle}
            className="bg-white flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors shadow-sm border border-gray-200"
          >
            <MdOutlineAttachMoney className="w-3 h-3 md:w-4 md:h-4 text-black/60" />
            <span className="text-xs md:text-sm font-semibold text-black/60 hidden sm:inline">
              {selectedCurrency}
            </span>
            <FaChevronDown
              className={`w-2.5 h-2.5 md:w-3 md:h-3 text-black/40 transition-transform ${currencyOpen ? "rotate-180" : ""}`}
            />
          </div>
          <AnimatePresence>
            {currencyOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-1 right-0 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[100px] z-50"
              >
                {CURRENCIES.map((currency) => (
                  <div
                    key={currency}
                    onClick={() => {
                      setSelectedCurrency(currency);
                      setCurrencyOpen(false);
                    }}
                    className={`px-4 py-2 text-sm font-semibold cursor-pointer hover:bg-blue-50 transition-colors ${
                      selectedCurrency === currency
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "text-black/60"
                    }`}
                  >
                    {currency}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Language Dropdown */}
        <div className="relative" ref={languageRef}>
          <div
            onClick={handleLanguageToggle}
            className="bg-white flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors shadow-sm border border-gray-200"
          >
            <MdOutlineTranslate className="w-3 h-3 md:w-4 md:h-4 text-black/60" />
            <span className="text-xs md:text-sm font-semibold text-black/60 hidden sm:inline">
              {selectedLanguage}
            </span>
            <FaChevronDown
              className={`w-2.5 h-2.5 md:w-3 md:h-3 text-black/40 transition-transform ${languageOpen ? "rotate-180" : ""}`}
            />
          </div>
          <AnimatePresence>
            {languageOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full mt-1 right-0 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[120px] z-50"
              >
                {LANGUAGES.map((lang) => (
                  <div
                    key={lang.value}
                    onClick={() => {
                      setSelectedLanguage(lang.value);
                      setLanguageOpen(false);
                    }}
                    className={`px-4 py-2 text-sm font-semibold cursor-pointer hover:bg-blue-50 transition-colors ${
                      selectedLanguage === lang.value
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "text-black/60"
                    }`}
                  >
                    {lang.label}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
