const Footer = function () {
  return (
    <footer className="section footer">
      <div className="container">
        <ul className="footer__list">
          <p className="footer__list-head">Social media</p>
          <li className="footer__list-item">
            <a href="/" className="footer__link">
              Facebook
            </a>
          </li>
          <li className="footer__list-item">
            <a href="/" className="footer__link">
              Insta
            </a>
          </li>
          <li className="footer__list-item">
            <a href="/" className="footer__link">
              Linkdn
            </a>
          </li>
        </ul>
        <ul className="footer__list">
          <p className="footer__list-head">Collabrated with</p>
          <li className="footer__list-item">
            <a href="/" className="footer__link">
              XYZ school
            </a>
          </li>
        </ul>
        <ul className="footer__list">
          <p className="footer__list-head">Contact us</p>
          <li className="footer__list-item">
            <a href="/" className="footer__link">
              ashutosh063@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
