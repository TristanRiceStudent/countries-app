import { useEffect, useState } from "react";
import SelectInput from "../../components/Inputs/SelectInput/Selectinput";
import TextInput from "../../components/Inputs/TextInput/TextInput";
import { useFilters } from "../../hooks/useFilters";
import { Regions } from "../../types/Regions";
import { FiltersStyled } from "./FiltersStyled";

interface Values {
  searchFilter: string;
  regionFilter: Regions;
}

const Filters = () => {
  const { setSearchFilter, setRegionFilter } = useFilters();

  const regionOptions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const [values, setValues] = useState<Values>({
    searchFilter: "",
    regionFilter: "",
  });

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setSearchFilter(values.searchFilter);
    setRegionFilter(values.regionFilter);
  };

  useEffect(() => {
    setSearchFilter(values.searchFilter);
  }, [values.searchFilter, setSearchFilter]);

  useEffect(() => {
    setRegionFilter(values.regionFilter);
  }, [values.regionFilter, setRegionFilter]);

  return (
    <FiltersStyled>
      <TextInput
        value={values.searchFilter}
        onChange={handleChange}
        placeholder="Search for a country..."
        name="searchFilter"
        className="text-input-container"
      />
      <SelectInput
        options={regionOptions}
        name="regionFilter"
        value={values.regionFilter}
        onChange={handleChange}
      />
    </FiltersStyled>
  );
};

export default Filters;
