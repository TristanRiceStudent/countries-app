import { createContext } from "react";
import { Country } from "../../types/Country";

type Context = {
  countries: Country[];
  isLoading: boolean;
  error: string;
};

const CountriesContext = createContext<Context>({
  countries: [],
  isLoading: true,
  error: "",
});

export default CountriesContext;
