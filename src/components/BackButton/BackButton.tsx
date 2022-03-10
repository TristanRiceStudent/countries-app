import { ReactNode } from "react";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackButtonStyled } from "./BackButtonStyled";

interface Props {
  to: string;
  children: ReactNode;
  className?: string;
}

const BackButton = ({ to, className }: Props) => {
  return (
    <BackButtonStyled to={to} className={className}>
      <FontAwesomeIcon icon={faArrowLeftLong} />
      Back
    </BackButtonStyled>
  );
};

export default BackButton;
