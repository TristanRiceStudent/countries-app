import CountriesContainer from "../../components/CountriesContainer/CountriesContainer";
import CountriesNotFound from "../../components/CountriesNotFound/CountriesNotFound";
import LinkedCountryCard from "../../components/LinkedCountryCard/LinkedCountryCard";
import PageContainer from "../../components/PageContainer/PageContainer";
import Filters from "../../containers/Filters/Filters";
import { useFilteredCountries } from "../../hooks/useFilteredCountries";
import { Country } from "../../types/Country";

const CountriesSearch = () => {
  const { filteredCountries } = useFilteredCountries();

  type FilteredCountry = {
    country: Country;
    isFiltered: boolean;
  };

  const renderCountry = ({ country, isFiltered }: FilteredCountry) => (
    <LinkedCountryCard
      isHidden={isFiltered}
      key={country.name}
      country={country}
    />
  );

  const areThereVisibleCountries = filteredCountries.some(
    (country) => !country.isFiltered
  );

  return (
    <PageContainer>
      <Filters />
      <CountriesContainer>
        {areThereVisibleCountries ? (
          filteredCountries.map(renderCountry)
        ) : (
          <CountriesNotFound
            title="No countries found!"
            description="Try another search query"
          />
        )}
      </CountriesContainer>
    </PageContainer>
  );
};

export default CountriesSearch;
