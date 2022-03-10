import { useContext } from "react";
import ColourSchemeContext from "../context/ColourSchemeContext/ColourSchemeContext";
import { baseTheme, darkTheme, lightTheme } from "../styles/theme";

export const useColourScheme = () => {
  const { scheme, toggleScheme } = useContext(ColourSchemeContext);

  const currentTheme = {
    dark: darkTheme,
    light: lightTheme,
  }[scheme];

  const theme = {
    ...baseTheme,
    colors: currentTheme,
  };

  return {
    theme,
    scheme,
    toggleScheme,
  };
};
