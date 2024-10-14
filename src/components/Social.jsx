import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../css/social.css";
import { useTranslation } from "react-i18next";

function Social() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div className="container">
        <div>
          <div>
            <h2>{t("social_head")}</h2>
            <br />
            <i>
              {t("social_text")}

              <br />
              <br />
            </i>
          </div>
        </div>

        <div className="article">
          <img
            src="https://static.wixstatic.com/media/9f8790_8eccce238e0a425ead76c7cde4a61209~mv2.png/v1/fill/w_200,h_85,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9f8790_8eccce238e0a425ead76c7cde4a61209~mv2.png"
            alt="Maison Médicale Galilée"
            className="article-img"
          />
          <div className="article-details">
            <h3>SINGA</h3>
            <p>
              Various Social and Cultural activities running through out the
              week <br />
              Address - Rue Van Hoorde, 47 <br />
              1030 Schaerbeek <br />
              Visit Website for more Contact details
            </p>
            <a
              href="https://www.singa-belgium.org/contact-fr"
              target="_blank"
              rel="noopener noreferrer"
              className="article-button"
            >
              {t("visite")}
            </a>
          </div>
        </div>

        <div>
          <div className="article">
            <img
              src="http://www.jamaissanstoit.org/wp-content/uploads/2017/08/Very_small_logo.png"
              alt="Free Clinic Asbl"
              className="article-img"
            />
            <div className="article-details">
              <h3>Jamais Sans Toit</h3>
              <p>
                Address - 43 rue de Villers Au coin de la rue Dinant, 29, 1000
                Bruxelles <br />
                Open - Monday-Friday from 9h - 5h <br />
                Telephone: 02 551 17 77
                <br />
              </p>
              <a
                href="https://www.jamaissanstoit.org/"
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

export default Social;
