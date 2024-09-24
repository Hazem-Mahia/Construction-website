"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SearchParams } from "@/types/router";

interface FilteringProps {
  years: number[];
  locations: string[];
}

export const Filtering = ({ years, locations }: FilteringProps) => {
  const router = useRouter(); // Fixed naming convention
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(name, value); // Set the value of the selected filter
    } else {
      params.delete(name); // Remove the filter if no value is selected
    }

    router.push(`${pathname}?${params.toString()}`); // Push updated URL
  };

  return (
    <div className="flex gap-4 mb-8">
      {/* Year filter */}
      <select
        name={SearchParams.YEAR}
        className="border border-gray-300 rounded-md px-4 py-2"
        onChange={handleChange}
        defaultValue={searchParams.get(SearchParams.YEAR) || ""}
      >
        <option value="">Select Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      {/* Location filter */}
      <select
        name={SearchParams.LOCATION}
        className="border border-gray-300 rounded-md px-4 py-2"
        onChange={handleChange}
        defaultValue={searchParams.get(SearchParams.LOCATION) || ""}
      >
        <option value="">Select Location</option>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
};
