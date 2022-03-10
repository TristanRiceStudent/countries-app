import { useContext } from "react";
import FiltersContext from "../context/FiltersContext/FiltersContext";

export const useFilters = () => {
  return { ...useContext(FiltersContext) };
};
