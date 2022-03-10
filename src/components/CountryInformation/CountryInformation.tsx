import { Country } from "../../types/Country";
import { beautifyCountryPopulation } from "../../utils/beautifyCountryPopulation";
import CountryStatistic from "../CountryStatistic/Countrystatistic";
import LinkButton from "../LinkButton/LinkButton";
import { CountryInformationStyled } from "./CountryInformationStyled";

interface Props {
  country: Country;
  borderingCountries: Country[];
}

const CountryInformation = ({ country, borderingCountries }: Props) => {
  const borderingLinks =
    borderingCountries &&
    borderingCountries.map(({ name, alpha3Code }) => {
      return <LinkButton to={`/country/${alpha3Code}`}>{name}</LinkButton>;
    });
  return (
    <CountryInformationStyled>
      <h3 className="countryNameHeading">{country.name}</h3>
      <div className="statistics">
        <div className="country-statistics">
          <CountryStatistic
            statisticName="Native Name"
            statisticValue={country.nativeName}
          />
          <CountryStatistic
            statisticName="Population"
            statisticValue={beautifyCountryPopulation(country.population)}
          />
          <CountryStatistic
            statisticName="Region"
            statisticValue={country.region}
          />
          <CountryStatistic
            statisticName="Sub Region"
            statisticValue={country.subregion}
          />
          <CountryStatistic
            statisticName="Capital"
            statisticValue={country.capital}
          />
        </div>
        <div className="country-statistics">
          <CountryStatistic
            statisticName="Top Level Domain"
            statisticValue={country.topLevelDomain.join(",")}
          />
          <CountryStatistic
            statisticName="Currencies"
            statisticValue={country.currencies
              .map((value) => value.name)
              .join(",")}
          />
          <CountryStatistic
            statisticName="Languages"
            statisticValue={country.languages
              .map((language) => language.name)
              .join(",")}
          />
        </div>
      </div>
      <div className="country-borders">
        <b>Border countries: </b>
        {borderingLinks}
      </div>
    </CountryInformationStyled>
  );
};

export default CountryInformation;
