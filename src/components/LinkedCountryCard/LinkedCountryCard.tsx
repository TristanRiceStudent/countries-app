import { Country } from "../../types/Country";
import CountryCard from "../CountryCard/CountryCard";
import { LinkedCountryCardStyled } from "./LinkedCountryCardStyled";

interface Props {
  country: Country;
  isHidden: boolean;
  className?: string;
}

const LinkedCountryCard = ({ country, isHidden }: Props) => {
  return (
    <LinkedCountryCardStyled
      to={`/country/${country.alpha3Code}`}
      isHidden={isHidden}
    >
      <CountryCard country={country} />
    </LinkedCountryCardStyled>
  );
};

export default LinkedCountryCard;
