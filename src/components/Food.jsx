import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/food.css";

import clinicImg from "../images/help1.avif";
import galileeImg from "../images/help1.avif";
import santeImg from "../images/help1.avif";

function Food() {
  return (
    <>
      <Header />
      <div className="container">
        <div>
          <div>
            <h2>FOOD / FEEDING </h2>
            <br />
            <i>
              Imagine the unimaginable adverse effects of Lack of Food !!, As a
              new comer this can be an issue for, the first days <br />
              or even months Below you find a List of Locations you can go and
              get a free Hot meal.
              <br />
              <br />
            </i>
          </div>
        </div>

        <div>
          <div className="article">
            <img
              src={clinicImg}
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
                href="https://example.com/clinic"
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
              src={galileeImg}
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
                href="https://example.com/galilee"
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
              src={santeImg}
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

export default Food;
