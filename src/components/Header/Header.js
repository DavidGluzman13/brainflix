import logo from "../../assets/logo/BrainFlix-logo.svg";
import search from "../../assets/icons/search.svg";
import "./Header.scss";
import img from "../../assets/images/Mohan-muruge.jpg";
import upload from "../../assets/icons/upload.svg";

function Header() {
  return (
    <header class="header">
      <a href="/">
        <img src={logo} alt="BrainFlix-logo" />
      </a>
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
          class="header__searchdiv__img"
          src={img}
          alt="Mohan-muruge looking left"
        />
        <button className="header__searchdiv__button">
          <img
            className="header__searchdiv__button__icon"
            src={upload}
            alt="upload-icon"
          />
          <p className="header__searchdiv__button__text">UPLOAD</p>
        </button>
      </div>
    </header>
  );
}

//move the button img to be inside
// move the entire button to be in the same div as the search and avatar

export default Header;
