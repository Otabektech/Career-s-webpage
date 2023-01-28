import logo from "../img/Logo.svg";
import downArrow from "../img/icons/chevron-down.svg";

export const TopNav = () => {
  return (
    <header className="header" id="header-sticky">
      <div className="container header-content">
        <img className="logo" alt="Move logo" src={logo} />

        <nav className="main-nav">
          <a className="main-nav__link" href="#home">
            Home <img src={downArrow} alt="down-arrow" />
          </a>
          <a className="main-nav__link" href="#pages">
            Pages <img src={downArrow} alt="down-arrow" />
          </a>
          <a className="main-nav__link" href="#blog">
            Blog <img src={downArrow} alt="down-arrow" />
          </a>

          <a className="main-nav__link" href="#Portfolio">
            Portfolio <img src={downArrow} alt="down-arrow" />
          </a>

          <button className="get-started-btn btn-primary nav__cta-btn">
            Get Started
          </button>
        </nav>
        <img src="./img/icons/icon-menu 1.svg" alt="Menu" id="hamburger-icon" />
      </div>
    </header>
  );
};
