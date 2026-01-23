import {
  FaUser,
  FaChevronDown,
  FaShoppingCart,
  FaPhoneAlt,
  FaGlobe,
} from "react-icons/fa";
import SearchBox from "../features/search/SearchBox";
import { SearchProvider } from "@/src/contexts/SearchContext";

export default function Header() {
  return (
    <header className="bg-white border-b w-full">
      {/* Top bar */}
      <div className="flex flex-wrap justify-between items-center gap-x-4 gap-y-2 px-[2.4rem] py-2 border-b text-gray-600 text-sm">
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-gray-500" />
          <span>Need help? call us:</span>
          <span className="font-medium">+970 59-244-9634</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="text-gray-600">$</span>
            <select
              className="bg-transparent focus:outline-none text-gray-700 text-sm cursor-pointer"
              defaultValue="USD"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="ILS">ILS</option>
            </select>
          </div>
          <div className="flex items-center gap-1">
            <FaGlobe className="text-gray-500" />
            <select
              className="bg-transparent focus:outline-none text-gray-700 text-sm cursor-pointer"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="flex flex-wrap sm:items-center gap-4 px-[2.4rem] py-4">
        <div className="flex items-center gap-2 font-bold text-xl whitespace-nowrap">
          {/* Replace this with your actual logo if needed */}
          <span className="text-blue-600">Logo</span>
          <span>CUREWAY</span>
        </div>

        <SearchProvider>
          <SearchBox />
        </SearchProvider>

        <div className="flex items-center gap-4 ml-auto">
          <div className="flex items-center gap-2 px-4 py-2 border rounded-xl h-12 text-sm whitespace-nowrap cursor-pointer">
            <FaUser />
            <div className="flex flex-col leading-tight">
              <span className="text-gray-500 text-xs">Select Location</span>
              <span className="max-w-40 font-medium truncate">
                26 Salah El Din St...
              </span>
            </div>
            <FaChevronDown className="text-gray-400" />
          </div>
          <div className="flex items-center gap-6 ml-auto">
            <div className="relative cursor-pointer">
              <FaShoppingCart className="text-xl" />
              <span className="-top-1 -right-2 absolute flex justify-center items-center bg-blue-600 rounded-full w-5 h-5 text-white text-xs">
                3
              </span>
            </div>
            <div className="bg-gray-200 rounded-full w-9 h-9 overflow-hidden"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
