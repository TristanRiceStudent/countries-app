import { CountryStatisticStyled } from "./CountryStatisticStyled";

interface Props {
  statisticName: string;
  statisticValue: string;
  className?: string;
}

const CountryStatistic = ({
  statisticName,
  statisticValue,
  className,
}: Props) => {
  return (
    <CountryStatisticStyled className={className}>
      <b>{statisticName}:</b> {statisticValue}
    </CountryStatisticStyled>
  );
};

export default CountryStatistic;
