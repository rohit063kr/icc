import chevronSvg from "../../../assets/images/chevron-down-outline.svg";

import Navigation from "../Navigation/Navigation";

const Header = function (props) {
  const data = props.data ? props.data : "";

  return (
    <header className="header" id="header">
      <Navigation />
      <div className="header__content-container container">
        <div className="header__text-box">
          <h2 className="heading--primary header__heading">{data?.name}</h2>
          <p className="text--primary header__text">{data?.about}</p>
          <div className="header__btn-box">
            <button className="btn btn--aqua btn--round header__btn">
              Contact us now
              <span className="btn__el">
                <ion-icon name="arrow-forward-circle-outline"></ion-icon>
              </span>
            </button>
          </div>
        </div>
        <img src={data?.img} alt="learn" className="header__img" />
      </div>
      <a href="#classes" className="header__chevron-circle header__down-link">
        <img className="header__chevron-icon" alt="svg" src={chevronSvg} />
      </a>
    </header>
  );
};

export default Header;
