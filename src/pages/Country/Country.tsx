import { useParams } from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton";
import CountriesNotFound from "../../components/CountriesNotFound/CountriesNotFound";
import CountryInformation from "../../components/CountryInformation/CountryInformation";
import { useCountry } from "../../hooks/useCountry";
import { CountryStyled } from "./CountryStyled";

const Country = () => {
  const { alpha3Code } = useParams();
  const { country, borderingCountryNames } = useCountry(alpha3Code || "");
  useCountry(alpha3Code || "");
  if (!alpha3Code || !country || !borderingCountryNames) {
    return (
      <CountriesNotFound
        title="Country not found"
        description="Look for another country"
      />
    );
  }

  const imgAlt = `${country.name} flag`;

  return (
    <CountryStyled>
      <BackButton to="/" className="backButton">
        Back
      </BackButton>
      <div className="country-information">
        <img src={country.flag} alt={imgAlt} className="country-image" />
        <CountryInformation
          country={country}
          borderingCountries={borderingCountryNames}
        />
      </div>
    </CountryStyled>
  );
};

export default Country;
