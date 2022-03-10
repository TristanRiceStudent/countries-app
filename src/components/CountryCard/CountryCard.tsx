import { Country } from "../../types/Country";
import { beautifyCountryPopulation } from "../../utils/beautifyCountryPopulation";
import CountryStatistic from "../CountryStatistic/Countrystatistic";
import { CountryCardStyled } from "./CountryCardStyled";

interface Props {
  country: Country;
  className?: string;
}

const CountryCard = ({ country, className }: Props) => {
  const imgAlt = `Flag for ${country.name}`;
  return (
    <CountryCardStyled className={className}>
      <img className="card-image" src={country.flag} alt={imgAlt} />
      <div className="card-information">
        <h3 className="country-name">{country.name}</h3>
        <CountryStatistic
          statisticName="Population"
          statisticValue={beautifyCountryPopulation(country.population)}
          className="country-statistic"
        />
        <CountryStatistic
          statisticName="Region"
          statisticValue={country.region}
          className="country-statistic"
        />
        <CountryStatistic
          statisticName="Capital"
          statisticValue={country.capital}
          className="country-statistic"
        />
      </div>
    </CountryCardStyled>
  );
};

export default CountryCard;
