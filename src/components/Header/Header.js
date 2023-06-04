import logo from "../../assets/logo/BrainFlix-logo.svg";
import search from "../../assets/icons/search.svg";
import "./Header.scss";
import img from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/icons/upload.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="BrainFlix-logo" />
      </Link>
      <div className="header__searchdiv">
        <form className="search">
          <img className="search__logo" src={search} alt="search-logo" />
          <input
            className="search__input"
            id="searchBar"
            type="text"
            placeholder="Search"
          />
        </form>
        <img
          className="header__searchdiv__img"
          src={img}
          alt="Mohan-muruge looking left"
        />
        <Link className="header__searchdiv__button" to="/Upload">
          <img
            className="header__searchdiv__button__icon"
            href=""
            src={upload}
            alt="upload-icon"
          />
          <p className="header__searchdiv__button__text">UPLOAD</p>
        </Link>
      </div>
    </header>
  );
}

export default Header;
