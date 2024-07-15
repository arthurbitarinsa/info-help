import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../css/legal.css";

import clinicImg from "../images/help1.avif";
import galileeImg from "../images/help1.avif";
import santeImg from "../images/help1.avif";

function Legal() {
  return (
    <>
      <Header />

      <div className="container">
        <div>
          <div>
            <h2> Legal Support / Lawyer </h2>
            <br />
            <i>
              It is key to have legal information about your situation and
              everyone deserves a right to be heard and represented <br />
              by a Lawyer. You can find below Organisations where they can offer
              Legal advise or link you directly to a Lawyer freely.
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
              <h3>Free Clinic Asbl</h3>
              <p>
                Address - chau.de Wvre 154/a, 1050 ixelles <br />
                Open - Monday-Friday from 8:45 a.m - 6:30 p.m <br />
                Telephone: 02 512 13 14 (Recommended to Call for appointment){" "}
                <br />
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
              <h3>Maison Médicale Galilée</h3>
              <p>
                Address - Rue Emile Féron 27, 1060 Saint-Gilles <br />
                Open - Monday-Friday from 8:00 a.m - 7p.m <br />
                Telephone: 02 539 29 58
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
              <h3>Maison Médicale Santé Plurielle</h3>
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

export default Legal;
