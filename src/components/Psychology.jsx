import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/psychology.css";
import { useTranslation } from "react-i18next";

function Psychology() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div className="container">
        <div>
          <div>
            <h2>{t("psy_head")}</h2>
            <br />
            <i>
              {t("psy_text")} <br /> <br />
            </i>
          </div>
        </div>

        <div>
          <div className="article">
            <img
              src="https://static.wixstatic.com/media/dc85f6_76563196d4cc437ab5a7842244ac5be0~mv2.jpg/v1/crop/x_210,y_100,w_1275,h_1002/fill/w_178,h_140,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/logo_ulysse_72dpi.jpg"
              alt="ulysse"
              className="article-img"
            />
            <div className="article-details">
              <h3>Ulysse</h3>
              <p>
                Addresss - Rue de l'Ermitage 52 Bruxelles
                <br />
                Email - accueil@ulysse-ssm.be <br />
                Open - Monday-Friday from 9:00 a.m - 5:00 p.m <br />
                Telephone: +32 2 533 06 70
                <br />
              </p>
              <a
                href="https://www.ulysse-ssm.be/contact"
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
              src="https://img.mailinblue.com/3211998/images/rnb/original/5f91719a8e11cc52d86a4f00.png"
              alt="PAG-ASA"
              className="article-img"
            />
            <div className="article-details">
              <h3>PAG-ASA</h3>
              <p>
                Address - Rue des Alexiens 16b Brussels <br />
                Email - info@pag-asa.be <br />
                Open - Monday-Friday from 9:00 a.m - 5p.m <br />
                Telephone: 02 511 64 64 <br />
                Whatsapp - 0470 94 07 77
              </p>
              <a
                href="https://pag-asa.be/"
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

export default Psychology;
