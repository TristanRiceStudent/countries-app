import { useCallback } from "react";
import { Country } from "../types/Country";
import { useCountries } from "./useCountries";
import { useFilters } from "./useFilters";

export const useFilteredCountries = () => {
  const { countries } = useCountries();
  const { searchFilter, regionFilter } = useFilters();

  const filterCountries = (country: Country) => {
    const matchesRegion = country.region.includes(regionFilter);
    const matchesSearchString = country.name
      .toLowerCase()
      .startsWith(searchFilter.toLowerCase());

    const isFiltered = !(matchesRegion && matchesSearchString);

    return {
      country,
      isFiltered,
    };
  };

  const optimizedFilterCountries = useCallback(filterCountries, [
    regionFilter,
    searchFilter,
  ]);

  const filteredCountries = countries.map(optimizedFilterCountries);

  return {
    filteredCountries,
  };
};
