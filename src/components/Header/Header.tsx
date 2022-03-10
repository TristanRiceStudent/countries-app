import { Link } from "react-router-dom";
import ColourSchemeToggle from "../ColourSchemeToggle/ColourSchemeToggle";
import { HeaderStyled } from "./HeaderStyled";

const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/" className="logoLink">
        <h1 className="logo">Where in the world?</h1>
      </Link>
      <ColourSchemeToggle />
    </HeaderStyled>
  );
};

export default Header;
