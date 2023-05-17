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
        <article className="header__searchdiv__article">
          <form className="search">
            <img className="search__logo" src={search} alt="search-logo" />
            {/* put placeholder in scss */}
            <input
              className="search__input"
              id="searchBar"
              type="text"
              placeholder="Search"
            />
          </form>
        </article>
        <article class="header__searchdiv__img">
          <img
            class="header__searchdiv__img--modifier"
            src={img}
            alt="Mohan-muruge looking left"
          />
        </article>
      </div>
      <div className="header__buttondiv">
        <img
          className="header__buttondiv__icon"
          src={upload}
          alt="upload-icon"
        />
        <button className="header__buttondiv__button">UPLOAD</button>
      </div>
    </header>
  );
}

export default Header;
