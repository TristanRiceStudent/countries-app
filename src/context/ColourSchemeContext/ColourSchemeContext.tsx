import { createContext } from "react";
import { ColourScheme } from "../../types/Scheme";

interface Context {
  scheme: ColourScheme;
  toggleScheme: () => void;
}

const isDarkModePreferred =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const preferredColorScheme = isDarkModePreferred ? "dark" : "light";

const ColourSchemeContext = createContext<Context>({
  scheme: preferredColorScheme,
  toggleScheme() {},
});

export default ColourSchemeContext;
