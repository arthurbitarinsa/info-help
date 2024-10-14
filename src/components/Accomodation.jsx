import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../css/accomodation.css";
import { useTranslation } from "react-i18next";

function Accomodation() {
  const { t } = useTranslation();
  return (
    <>
      <Header />
      <div className="container">
        <div>
          <div>
            <h2>{t("accomodation")}</h2>
            <br />
            <i>
              {t("accomodation_text")}
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
                Register your name on a list and await a call from the team,{" "}
                <br />
                Make sure you come with your annex 26 to register
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
              src="https://doucheflux.be/wp-content/uploads/2023/06/capture-decran-2023-06-20-a-21.06.53-e1687288099256-279x300.png"
              alt="DoucheFlux"
              className="article-img"
            />
            <div className="article-details">
              <h3>DoucheFlUX</h3>
              <p>
                Address - Rue des Vétérinaires 84 <br />
                Open - Monday-Friday from 9:00 a.m - 6p.m <br />
                Telephone: 02 319 58 27 Go here for a shower, but there is a lot
                more
              </p>
              <a
                href="https://doucheflux.be/"
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
              src="https://ds1.static.rtbf.be/article/image/1248x702/3/7/5/155576d046af696401f8fb26bace6fb3-1568724090.jpg"
              alt="Maison Médicale Santé Plurielle"
              className="article-img"
            />
            <div className="article-details">
              <h3>SAMU SOCIAL</h3>
              <p>
                Address - 68-70 Boulevard Poincaré, 1070 Anderlecht <br />
                Call to, get a place to sleep for one night, renew the call each
                day
                <br />
                Saturday from 10 a.m - 11:30 p.m <br />
                Telephone : 02 551 12 20 - 0800 99 340
              </p>
              <a
                href="https://samusocial.be/"
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
              src="https://ilot.be/wp-content/uploads/2019/09/ILOTLOGOFINAL-e1498480446601.png"
              alt="Maison Médicale Santé Plurielle"
              className="article-img"
            />
            <div className="article-details">
              <h3>L'llot (Women and Families)</h3>
              <p>
                Capacity : 22 beds <br />
                Address - Chaussée de Charleroi 160 - 1060 <br />
                Telephone : 02 538 59 09
                <br />
              </p>
              <a
                href="https://ilot.be/"
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
              src="https://ilot.be/wp-content/uploads/2019/09/ILOTLOGOFINAL-e1498480446601.png"
              alt="Maison Médicale Santé Plurielle"
              className="article-img"
            />
            <div className="article-details">
              <h3>L'llot (Single Men)</h3>
              <p>
                Capacity : 22 beds <br />
                Address - Rue Locquenghien, 38 - 1000, Bruxelles
                <br />
                Telephone : 02 217 68 44 <br />
              </p>
              <a
                href="https://ilot.be/"
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
              src="https://www.socialsquare.com/images/templates/sq_logo.gif"
              alt="Maison Médicale Santé Plurielle"
              className="article-img"
            />
            <div className="article-details">
              <h3>LE CASU</h3>
              <p>
                Address - Rue du petit Rempart, 5 - 1000, Bruxelles <br />
                Telephone : 02 551 12 20 - 0800 99 340 <br />
                Email : Casu@skynet.be <br />
                Open : 24h/24
              </p>
              <a
                href="https://socialsquare.com/adresses.php?adres_id=2431"
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
              src="https://lesmarolles.be/wp-content/uploads/2021/01/cropped-cropped-logo-marolles-1.png"
              alt="Maison Médicale Galilée"
              className="article-img"
            />
            <div className="article-details">
              <h3>Pierre d'Angle</h3>
              <p>
                Address - Rue Terre Neuve 153, 1000 Bruxelles <br />
                Email: secretariat@pierredangle.be <br />
                Telephone: 02 513 38 01
              </p>
              <a
                href="https://lesmarolles.be/Organization/pierre-dangle-asbl/"
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
              src="https://www.sourceasbl.be/contact/#:~:text=SOURCEasbl-,Soutenir,-et%20accompagner%20les"
              alt="Maison Médicale Santé Plurielle"
              className="article-img"
            />
            <div className="article-details">
              <h3>La Source</h3>
              <p>
                Address - Rue de la Senne, 78 - 1000 Bruxelles <br />
                info@sourceasbl.be
                <br />
                Open: 24h/24
                <br />
                Telephone : 02/512.71.75 <br />
              </p>
              <a
                href="https://samusocial.be/"
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
              src="https://www.amontfort.be/images/ona.png"
              alt="Maison Médicale Santé Plurielle"
              className="article-img"
            />
            <div className="article-details">
              <h3>Accueil Montfort</h3>
              <p>
                Address - Rue de l'Eglise St. Pierre, 12 1090 Bruxelles <br />
                Centre that welcome Women
                <br />
                <br />
                Telephone : 02/426.87.12 general <br />
                02/424.17.53 service social <br />
                Facebook : Accueil Montfort asbl
              </p>
              <a
                href="https://www.amontfort.be/"
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
              src="https://www.bruxellesformation.brussels/wp-content/uploads/2020/05/logo_petitsriens_bruxelles_formation.jpg"
              alt="Maison Médicale Santé Plurielle"
              className="article-img"
            />
            <div className="article-details">
              <h3> Maison Prévôt (Des Petits Riens)</h3>
              <p>
                Accomodation for Men aged 20-60 <br />
                psychosocial, administrative and medical support in addition{" "}
                <br />
                Call to ask for a place <br />
                Tél.: 02/541 13 96 | Fax: 02/ 534 09 77
              </p>
              <a
                href="https://petitsriens.be/maison-prevot/"
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
              src="https://www.bruxellesformation.brussels/wp-content/uploads/2020/05/logo_petitsriens_bruxelles_formation.jpg"
              alt="Maison Médicale Santé Plurielle"
              className="article-img"
            />
            <div className="article-details">
              <h3> @Home18-24 (Des Petits Riens)</h3>
              <p>
                Accomodation for Men aged 18-24
                <br />
                26 Rooms available <br />
                So much more provided in addition to a home, visit website for
                more
                <br />
                Address : Avenue du Roi 190 | 1190 Bruxelles <br />
                Tel. : 02/538.64.77 | Fax : 02/538.51.44
              </p>
              <a
                href="https://petitsriens.be/actions-sociales/home18-24/"
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

export default Accomodation;
