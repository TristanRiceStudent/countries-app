import { ReactNode, useEffect, useState } from "react";
import { Country } from "../../types/Country";
import { getAllCountries } from "../../api/countries/get-all-countries";
import CountriesContext from "./CountriesContext";

interface Props {
  children: ReactNode;
}

const CountriesProvider = ({ children }: Props) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCountries = () => {
    getAllCountries()
      .then((res) => setCountries(res.data))
      .catch((res) => setError(res))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        isLoading,
        error,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export default CountriesProvider;
