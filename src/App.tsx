import { useColourScheme } from "./hooks/useColourScheme";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import CountriesSearch from "./pages/CountriesSearch/CountriesSearch";
import Country from "./pages/Country/Country";

function App() {
  const { theme } = useColourScheme();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CountriesSearch />} />
          <Route path="/country/:alpha3Code" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
