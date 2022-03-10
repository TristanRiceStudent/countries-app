import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ColourSchemeProvider from "./context/ColourSchemeContext/ColourSchemeProvider";
import CountriesProvider from "./context/CountriesContext/CountriesProvider";
import FiltersProvider from "./context/FiltersContext/FiltersProvider";
import GlobalStyle from "./styles/globalStyle";

ReactDOM.render(
  <React.StrictMode>
    <CountriesProvider>
      <ColourSchemeProvider>
        <FiltersProvider>
          <GlobalStyle />
          <App />
        </FiltersProvider>
      </ColourSchemeProvider>
    </CountriesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
