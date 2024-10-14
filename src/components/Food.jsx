import React, { useRef, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

import "../css/food.css";

function Food() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <div className="container">
        <div>
          <div>
            <h2>{t("head_food")} </h2>
            <br />
            <i>
              {t("food_text")}
              <br />
              <br />
            </i>
          </div>
        </div>

        <div>
          <div className="article">
            <img
              src="https://cdn.servethecity.net/wp-content/uploads/sites/2/2020/10/dsc03086-scaled-e1625579589793-640x360.jpg"
              alt="Free Clinic Asbl"
              className="article-img"
            />
            <div className="article-details">
              <h3>Humaritarian Hub</h3>
              <p>
                Address: Av. du Port 94/100, 1000, Bruxelles <br />
                Open : Monday-Sunday, except Wednesday <br />
                Time : 9:30 a.m - 5:30 pm <br />
                2 Hot meals, one in the Morning, the other in the evening,
                however its open all day, unlimited flow of Tea, coffee <br />
                water, and so many other activities during the day.
              </p>
              <a
                href="https://www.servethecity.brussels/projects/logisticalsupportatredcross/"
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
              src="https://th.bing.com/th/id/OIP.UgHNU_VnZ-7mKM8lcHdMbwAAAA?rs=1&pid=ImgDetMain"
              alt="Maison Médicale Galilée"
              className="article-img"
            />
            <div className="article-details">
              <h3>Resto du coeur de St Gilles</h3>
              <p>
                Address : Rue de Bosnie 22, 1060 Saint-Gilles <br />
                Contact : 02 538 92 76 <br />
                Open : Monday-Friday from 8:30 am - 12:45 pm
              </p>
              <a
                href="https://restosducoeur.be/fr/nos-restos/resto-du-coeur-de-saint-gilles"
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
              src="https://th.bing.com/th/id/R.e1daf0c4b57cfef4a18dfdfb95515e7a?rik=E4IpFZUvUMymDQ&riu=http%3a%2f%2fwww.restoducoeurdelaeken.be%2fwp-content%2fuploads%2f2017%2f03%2ficone.png&ehk=o6sHjzRGjwfm9PdEtYHsuYaXFTiwPOYw%2fffrTS1rV%2bM%3d&risl=&pid=ImgRaw&r=0"
              alt="Maison Médicale Santé Plurielle"
              className="article-img"
            />
            <div className="article-details">
              <h3>Resto du coeur - L'autre Table</h3>
              <p>
                Address : Rue Stéphanie 24, 1020 Bruxelles <br />
                Contact : 02 428 38 89 <br />
              </p>
              <a
                href="https://www.restoducoeurdelaeken.be/index.php/fr/accueil/"
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
              src="https://www.adra.be/img/AdraLogoTSFT2023112-300.png"
              alt="https://d1bnv20w2037a.cloudfront.net/organisation/11721/vacancies/33481/banner-picture_768.webp?updated=1700726913000"
              className="article-img"
            />
            <div className="article-details">
              <h3> The Social Food Truck (ADRA) </h3>
              <p>
                Distribution of Food every Friday afternoon
                <br />
                Address : Gare Du Midi (Esplanade) <br />
                Distribution Time : 13h - 16h
              </p>
              <a
                href="https://www.adra.be/TheSocialFoodTruckFR.php"
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

export default Food;
