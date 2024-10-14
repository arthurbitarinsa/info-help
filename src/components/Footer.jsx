import React from "react";
import "../css/home.css";
import "../css/Carousel.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <a>
            <Link to="/about">{t("about_us")}</Link>
          </a>
          <a>
            <Link to="/privacy">{t("Terms")}</Link>
          </a>
          <a>
            <Link to="/feedback">{t("Feedback")}</Link>
          </a>
        </div>
        <div className="footer-icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </div>

      <div className="p-footer">
        <p>&copy; INFO-HELP {t("rigths")}</p>
      </div>
    </footer>
  );
}

export default Footer;
