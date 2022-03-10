import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonRegular } from "@fortawesome/free-regular-svg-icons";
import { useColourScheme } from "../../hooks/useColourScheme";
import { ColourSchemeToggleStyled } from "./ColourSchemeToggleStyled";

const ColourSchemeToggle = () => {
  const { scheme, toggleScheme } = useColourScheme();
  const moonIcon = {
    dark: faMoonSolid,
    light: faMoonRegular,
  }[scheme];

  const btnText = {
    dark: "Light Mode",
    light: "Dark Mode",
  }[scheme];

  return (
    <ColourSchemeToggleStyled onClick={toggleScheme}>
      <FontAwesomeIcon icon={moonIcon} />
      {btnText}
    </ColourSchemeToggleStyled>
  );
};

export default ColourSchemeToggle;
