import React from "react";
import { useTranslation } from "react-i18next";
import "../css/home.css";
import "../css/Carousel.css";
import { Link } from "react-router-dom";
import Select from "react-select";

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    if (i18n && typeof i18n.changeLanguage === "function") {
      i18n.changeLanguage(lng);
    } else {
      console.error("i18n.changeLanguage is not a function");
    }
  };

  const languageOptions = [
    {
      value: "en",
      label: (
        <div>
          <img
            src="https://m.media-amazon.com/images/I/41Q-7p2hzDL._AC_UF894,1000_QL80_.jpg"
            alt="English"
            style={{ width: "20px", height: "15px" }}
          />
        </div>
      ),
    },
    {
      value: "fr",
      label: (
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/800px-Flag_of_France.svg.png"
            alt="French"
            style={{ width: "20px", height: "15px" }}
          />
        </div>
      ),
    },
  ];

  return (
    <header>
      <div className="header">
        <h2 className="logo">
          <Link to="/">INFO-HELP</Link>
        </h2>
        <div className="links">
          <Link to="/medication">{t("Medication")}</Link>
          <Link to="/food">{t("Food")}</Link>
          <Link to="/accomodation">{t("Accomodation")}</Link>
          <Link to="/hygiene">{t("Hygiene")}</Link>
          <Link to="/legal&safety">{t("Legal_safety")}</Link>
        </div>

        <div className="language-switch">
          <Select
            options={languageOptions}
            onChange={(selectedOption) => changeLanguage(selectedOption.value)}
            defaultValue={languageOptions.find(
              (option) => option.value === i18n.language
            )}
            getOptionLabel={(e) => e.label}
          />
        </div>

        <div className="dropdown">
          <button className="dropbtn">{t("More")}</button>
          <div className="dropdown-content">
            <Link to="/language">{t("Language_learning")}</Link>
            <Link to="/psychology">{t("Psychological_help")}</Link>
            <Link to="/education">{t("Education")}</Link>
            <Link to="/scolarships">{t("Scolarships")}</Link>
            <Link to="/social">{t("Social_activities")}</Link>
            <Link to="/sports">{t("Sports")}</Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
