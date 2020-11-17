import "./styles/header.scss";
import logo from "../logo.svg";
import Filter from "./Filter";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <Filter />
    </header>
  );
};

export default Header;
