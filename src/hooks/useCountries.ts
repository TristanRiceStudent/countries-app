import { useContext } from "react";
import CountriesContext from "../context/CountriesContext/CountriesContext";

export const useCountries = () => {
  return { ...useContext(CountriesContext) };
};
