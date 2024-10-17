import React from "react";
import { useTranslation } from "react-i18next";
import "../css/home.css";
import "../css/Carousel.css";
import helplogo from "../images/Helplogo.png";
import { Link } from "react-router-dom";
import Select from "react-select";
import i18n from "../i18n";

function Header() {
  const { t } = useTranslation();

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

    // {
    //   value: "nl",
    //   label: (
    //     <div>
    //       <img
    //         src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/255px-Flag_of_the_Netherlands.svg.png"
    //         alt="Dutch"
    //         style={{ width: "20px", height: "15px" }}
    //       />
    //     </div>
    //   ),
    // },

    // {
    //   value: "es",
    //   label: (
    //     <div>
    //       <img
    //         src="https://www.larousse.fr/encyclopedie/data/images/1009665-Drapeau_de_lEspagne.jpg"
    //         alt="es"
    //         style={{ width: "20px", height: "15px" }}
    //       />
    //     </div>
    //   ),
    // },

    // {
    //   value: "pt",
    //   label: (
    //     <div>
    //       <img
    //         src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1200px-Flag_of_Portugal.svg.png"
    //         alt="pt"
    //         style={{ width: "20px", height: "15px" }}
    //       />
    //     </div>
    //   ),
    // },

    //     {
    //       value: "lg",
    //       label: (
    //         <div>
    //           <img
    //             src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/800px-Flag_of_Uganda.svg.png
    // "
    //             alt="Luganda"
    //             style={{ width: "20px", height: "15px" }}
    //           />
    //         </div>
    //       ),
    //     },

    //     {
    //       value: "sw",
    //       label: (
    //         <div>
    //           <img
    //             src="https://cdn.britannica.com/20/20-050-33766E25/Flag-Tanzania.jpg"
    //             alt="swahili"
    //             style={{ width: "20px", height: "15px" }}
    //           />
    //         </div>
    //       ),
    //     },

    {
      value: "lingala",
      label: (
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/1200px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png"
            alt="lingala"
            style={{ width: "20px", height: "15px" }}
          />
        </div>
      ),
    },

    {
      value: "ar",
      label: (
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/langfr-225px-Flag_of_Saudi_Arabia.svg.png"
            alt="ar"
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
          <a>
            <Link to="/">
              <img src={helplogo} alt="" />
            </Link>
          </a>
        </h2>
        <div className="links">
          <a>
            <Link to="/medication">{t("Medication")}</Link>
          </a>
          <a>
            <Link to="/food">{t("Food")}</Link>
          </a>
          <a>
            <Link to="/accomodation">{t("Accomodation")}</Link>
          </a>
          <a>
            <Link to="/hygiene">{t("Hygiene")}</Link>
          </a>
          <a>
            <Link to="/legal&safety">{t("Legal_safety")}</Link>
          </a>
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
            <a>
              <Link to="/language">{t("language")}</Link>
            </a>
            <a>
              <Link to="/psychology">{t("Psychological_help")}</Link>
            </a>
            <a>
              <Link to="/education">{t("Education")}</Link>
            </a>
            <a>
              <Link to="/scolarships">{t("Scolarships")}</Link>
            </a>
            <a>
              <Link to="/social">{t("Social_activities")}</Link>
            </a>
            <a>
              <Link to="/sports">{t("Sports")}</Link>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
