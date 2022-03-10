import { ReactNode, useState } from "react";
import { Regions } from "../../types/Regions";
import FiltersContext from "./FiltersContext";

interface Props {
  children: ReactNode;
}

const FiltersProvider = ({ children }: Props) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState<Regions>("");

  return (
    <FiltersContext.Provider
      value={{
        searchFilter,
        setSearchFilter,
        regionFilter,
        setRegionFilter,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
