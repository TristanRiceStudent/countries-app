import { createContext } from "react";
import { Regions } from "../../types/Regions";

interface Context {
  searchFilter: string;
  regionFilter: Regions;
  setSearchFilter: (value: string) => void;
  setRegionFilter: (value: Regions) => void;
}

const FiltersContext = createContext<Context>({
  searchFilter: "",
  setSearchFilter(value: string) {},
  regionFilter: "",
  setRegionFilter(value: Regions) {},
});

export default FiltersContext;
