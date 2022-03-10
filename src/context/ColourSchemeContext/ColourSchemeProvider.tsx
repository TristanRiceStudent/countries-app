import { ReactNode, useState } from "react";
import { ColourScheme } from "../../types/Scheme";
import ColourSchemeContext from "./ColourSchemeContext";

interface Props {
  children: ReactNode;
}

const ColourSchemeProvider = ({ children }: Props) => {
  const [scheme, setScheme] = useState<ColourScheme>("light");

  const toggleScheme = () => {
    setScheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ColourSchemeContext.Provider
      value={{
        scheme,
        toggleScheme,
      }}
    >
      {children}
    </ColourSchemeContext.Provider>
  );
};

export default ColourSchemeProvider;
