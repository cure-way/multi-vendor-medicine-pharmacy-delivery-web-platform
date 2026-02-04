"use client";

import { SearchSection } from "./SearchSection";
import { FaFilter } from "react-icons/fa";
import { SearchFilters } from "./SearchFilters";
import { useFilteredSearch } from "@/hooks/search/useFilteredSearch";
import { useState } from "react";
import { TabButton } from "./TabButton";
import { SearchResult } from "@/types/search";
import { useSearchContext } from "@/contexts/SearchContext";

interface SearchResultsProps {
  results: SearchResult[];
}

export function SearchResults({ results }: SearchResultsProps) {
  const { appliedFilters, setAppliedFilters, handleSelect } =
    useSearchContext();

  const medicineResults = results.filter((r) => r.type === "medicine");
  const pharmacyResults = results.filter((r) => r.type === "pharmacy");

  const {
    filtersOpen,
    activeFilters,
    filteredMedicines,
    openFilters,
    applyFilters,
    clearAllFilters,
    toggleFilter,
  } = useFilteredSearch(medicineResults, appliedFilters, setAppliedFilters);

  const [activeTab, setActiveTab] = useState<"medicines" | "pharmacies">(
    "medicines",
  );

  const isFiltering = appliedFilters.length > 0;

  return (
    <>
      {results.length !== 0 ? (
        <div className="space-y-3 md:space-y-4 p-3 md:p-4">
          <button
            className="flex items-center gap-2 px-3 py-2 border rounded-lg text-xs md:text-sm hover:bg-gray-50 transition-colors"
            onClick={openFilters}
          >
            Filters <FaFilter className="w-3 h-3 md:w-3.5 md:h-3.5" />
            {appliedFilters.length > 0 && (
              <span className="bg-gray-200 px-2 py-0.5 rounded-full text-xs">
                {appliedFilters.length}
              </span>
            )}
          </button>

          {filtersOpen && (
            <SearchFilters
              open={filtersOpen}
              activeFilters={activeFilters}
              onToggle={(key) => toggleFilter(key)}
              onApply={applyFilters}
              onClear={clearAllFilters}
            />
          )}
          {!isFiltering && (
            <div className="flex items-center gap-2 pb-2 border-b">
              <TabButton
                label="Medicines"
                isActive={activeTab === "medicines"}
                onClick={() => setActiveTab("medicines")}
              />

              <span className="text-gray-300">/</span>

              <TabButton
                label="Pharmacies"
                isActive={activeTab === "pharmacies"}
                onClick={() => setActiveTab("pharmacies")}
              />
            </div>
          )}
          {activeTab === "medicines" && (
            <SearchSection
              title="Medicines"
              icon="💊"
              items={filteredMedicines}
              offset={0}
              onSelect={handleSelect}
            />
          )}
          {activeTab === "pharmacies" && !isFiltering && (
            <SearchSection
              title="Pharmacies"
              icon="📍"
              items={pharmacyResults}
              offset={0}
            />
          )}
        </div>
      ) : (
        <div className="p-4 text-center text-gray-500 text-sm">
          No results found
        </div>
      )}
    </>
  );
}
