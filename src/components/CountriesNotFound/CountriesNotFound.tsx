import { CountriesNotFoundStyled } from "./CountriesNotFoundStyled";

interface Props {
  title: string;
  description: string;
}

const CountriesNotFound = ({ title, description }: Props) => {
  return (
    <CountriesNotFoundStyled>
      <h2>{title}</h2>
      <p className="description">{description}</p>
    </CountriesNotFoundStyled>
  );
};

export default CountriesNotFound;
