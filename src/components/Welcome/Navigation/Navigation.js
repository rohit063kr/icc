import logo from "../../../assets/images/logo.jpeg";

const Navigation = function () {
  return (
    <nav className="navigation">
      <div className="navigation__logo-box">
        <img alt="logo" className="navigation__logo-img" src={logo} />
      </div>
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <a className="navigation__link" href="#header">
            Home
          </a>
        </li>
        <li className="navigation__list-item">
          <a className="navigation__link" href="#classes">
            About classes
          </a>
        </li>
        <li className="navigation__list-item">
          <a className="navigation__link" href="#faculties">
            About faculties
          </a>
        </li>
        <li className="navigation__list-item">
          <a className="navigation__link" href="#founder">
            About Founder
          </a>
        </li>
        <li className="navigation__list-item navigation__menu">
          <a className="navigation__link navigation__menu-btn" href="#">
            <span>
              <span className="navigation__menu-bar"></span>
              <span className="navigation__menu-bar"></span>
              <span className="navigation__menu-bar"></span>
            </span>
          </a>
        </li>
      </ul>
      <div className="navigation__btns">
        <button className="btn btn--aqua btn--round navigation__btn">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
