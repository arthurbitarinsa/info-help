import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/language.css";
import { useTranslation } from "react-i18next";

function Language() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div className="container">
        <div>
          <div>
            <h2>{t("lang_head")}</h2>
            <br />
            <i>
              {t("lang_text")}
              <br />
              <br />
            </i>
          </div>
        </div>

        <div>
          <div className="article">
            <img
              src="https://construisons-un-monde-meilleur.net/img/accounts/logo/large/1233-59062b2e7ca7b.png"
              alt="Free Clinic Asbl"
              className="article-img"
            />
            <div className="article-details">
              <h3>L’École Maximilien</h3>
              <p>
                Languages taught - French, Dutch, English Address - 402 avenue
                Van Volxem à 1190 Forest <br />
                New Address from June 2025 to be communicated Open -
                Monday-Friday from 11:00a.m - 16:00 p.m <br />
                <br />
              </p>
              <a
                href="https://epale.ec.europa.eu/fr/blog/lecole-maximilien-pour-adultes"
                target="_blank"
                rel="noopener noreferrer"
                className="article-button"
              >
                {t("visite")}
              </a>
            </div>
          </div>

          <div className="article">
            <img
              src="https://www.bruxellesfle.be/wp-content/uploads/2021/05/miniature-LEE-300.png"
              alt="Maison Médicale Galilée"
              className="article-img"
            />
            <div className="article-details">
              <h3>Lire et Ecrire Bruxelles</h3>
              <p>
                Address - rue de la Borne 14 bte 9 1080 Bruxelles, Belgique{" "}
                <br />
                Telephone: 02 412 56 10 <br />
                Fax : 02 412 56 11 <br />
                Email: bruxelles@lire-et-ecrire.be
              </p>
              <a
                href="https://lire-et-ecrire.be/bruxelles"
                target="_blank"
                rel="noopener noreferrer"
                className="article-button"
              >
                {t("visite")}
              </a>
            </div>
          </div>

          <div className="article">
            <img
              src="https://brulingua.be/wp-content/uploads/2020/06/Bruligua_Logo_Web.png"
              alt="Maison Médicale Santé Plurielle"
              className="article-img"
            />
            <div className="article-details">
              <h3>BRULINGUA (ONLINE)</h3>
              <p>
                This is to be accessed online on this Link
                "https://brulingua.be/fr/"
                <br />
                You must be registered on actris
                <br />
                Languages: French, Dutch, English, German
              </p>
              <a
                href="https://brulingua.be/fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="article-button"
              >
                {t("visite")}
              </a>
            </div>
          </div>

          <div className="article">
            <img
              src="https://cdn.servethecity.net/wp-content/uploads/sites/2/2016/09/stc-brussels-logo.png"
              alt="Maison Médicale Galilée"
              className="article-img"
            />
            <div className="article-details">
              <h3>English 4 Refugees</h3>
              <p>
                Initiative by Serve the City <br />
                Days; Tuesday at Rue Belliard ,Time: 17:15-19:00 <br />
                Saturday & Sunday at the HUB Av. du Port 94/100, Time: 13:00 -
                15:00 <br />
                Telephone: +32 2 734 35 02 (Serve the City)
              </p>
              <a
                href="https://www.servethecity.brussels/projects/english-4-refugees/"
                target="_blank"
                rel="noopener noreferrer"
                className="article-button"
              >
                {t("visite")}
              </a>
            </div>
          </div>

          <div className="article">
            <img
              src="https://static.wixstatic.com/media/f9cbdb_5ef752eb51434f80bf687e427331c000~mv2.jpg/v1/fill/w_500,h_500,al_c,q_90/f9cbdb_5ef752eb51434f80bf687e427331c000~mv2.jpg"
              alt="Maison Médicale Galilée"
              className="article-img"
            />
            <div className="article-details">
              <h3>OpenLearn</h3>
              <p>
                Free online courses for refugees <br />
                Find Online English Courses free of Charge <br />
                Visit Websitr for more information
              </p>
              <a
                href="https://www.open.edu/openlearn/society-politics-law/resources-refugees"
                target="_blank"
                rel="noopener noreferrer"
                className="article-button"
              >
                {t("visite")}
              </a>
            </div>
          </div>

          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Language;
