import { useEffect, useState, useCallback } from "react";
import { Country } from "../types/Country";
import { useCountries } from "./useCountries";

export const useCountry = (alpha3Code: string) => {
  const { countries } = useCountries();
  const [borderingCountryNames, setBorderingCountryNames] = useState<Country[]>(
    []
  );
  const [country, setCountry] = useState<Country | null>(null);

  const findCountryByAlpha3Code = useCallback(
    (targetAlpha3Code: string) =>
      countries.find((country) => country.alpha3Code === targetAlpha3Code),
    [countries]
  );

  useEffect(() => {
    if (!countries) {
      return;
    }
    const specificCountry = findCountryByAlpha3Code(alpha3Code);
    if (!specificCountry) {
      return;
    }
    console.log(specificCountry);
    setCountry(specificCountry);
    const borderingCountries = (specificCountry.borders?.map((border) =>
      findCountryByAlpha3Code(border)
    ) || []) as Country[];

    setBorderingCountryNames(borderingCountries);
    setCountry(specificCountry);
  }, [countries, alpha3Code, findCountryByAlpha3Code]);

  return {
    country,
    borderingCountryNames,
  };
};
