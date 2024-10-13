import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/hygiene.css";

import clinicImg from "../images/help1.avif";
import galileeImg from "../images/help1.avif";
import santeImg from "../images/help1.avif";

function Hygiene() {
  return (
    <>
      <Header />
      <div className="container">
        <div>
          <div>
            <h2>HYGIENE</h2>
            <br />
            <i>
            Maintaining good hygiene is essential for your health and well-being. This hygiene page provides
             information and resources to help you access essential hygiene products and services
              <br />
              <br />
            </i>
          </div>
        </div>

        <div>
          <div className="article">
          <img
              src="https://doucheflux.be/wp-content/uploads/2023/06/capture-decran-2023-06-20-a-21.06.53-e1687288099256-279x300.png"
              alt="DoucheFlux"
              className="article-img"
            />
            <div className="article-details">
              <h3>DoucheFLUX</h3>
              <p>
                Address - Rue des Vétérinaires 84 <br />
                Open - Monday-Friday from 9:00 a.m - 6p.m <br />
                Telephone: 02 319 58 27 <br />
                Go here for a shower, but there is a lot more
              </p>
              <a
                href="https://doucheflux.be/"
                target="_blank"
                rel="noopener noreferrer"
                className="article-button"
              >
                Visit Website
              </a>
            </div>
          </div>

          <div className="article">
            <img
              src= "https://lesmarolles.be/wp-content/uploads/2021/01/cropped-cropped-logo-marolles-1.png"
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
                Visit Website
              </a>
            </div>
          </div>

          <div className="article">
            <img
              src="https://dev2023.vivre-ensemble.be/wp-content/uploads/sites/3/2022/02/vivre-logo.png"
              alt="Maison Médicale Santé Plurielle"
              className="article-img"
            />
            <div className="article-details">
              <h3>Rolling Douche</h3>
              <p>
                Address - Rue de la Victoire 110, 1060 Saint-Gilles <br />
                Open - Monday-Friday from 8:00 a.m - 7p.m <br />
                Saturday from 10 a.m - 11:30 p.m
              </p>
              <a
                href="https://example.com/sante"
                target="_blank"
                rel="noopener noreferrer"
                className="article-button"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Hygiene;
