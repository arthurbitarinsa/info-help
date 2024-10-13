import React from "react";
import "../css/medication.css";
import Header from "./Header";
import Footer from "./Footer";

import clinicImg from "../images/help1.avif";
import galileeImg from "../images/help1.avif";
import santeImg from "../images/help1.avif";

function Medication() {
  return (
    <>
      <Header />
      <div className="container">
        <div>
          <div>
            <h2>MEDICATION / DOCTOR / HEALTH</h2>
            <br />
            <i>
              Medication or being able to see a doctor is a basic need and
              essential for every life. For new arrivals in Brussels, this gets
              so complicated. Medication is a Fundamental Human right and for
              all those seeking International Protection, present to Public
              Hospital your Annex 26, this acts as your identity card and the
              billing information will automatically be sent to Fedasil. For the
              other NGO Medical Centre, you are advised to carry your annex Form
              too. Below are a list of Public Hospitals, Free clinics that you
              can seek Medical Support.
              <br />
              <br />
            </i>
          </div>
        </div>

        <div>

        <div className="article">
            <img
              src="https://img.static-fb.com/images/media/601ECA7A-86A1-42AE-B8F75275466B6678/"
              alt="Maison Médicale Galilée"
              className="article-img"
            />
            <div className="article-details">
              <h3>Médecins Sans Frontières</h3>
              <p>
                Address - Rue de l'Arbre Bénit 46, 1050 Ixelles <br />
                Telephone: + 32 2 474 74 74 <br />
                Fax : + 32 2 474 75 75
              </p>
              <a
                href="https://www.msf.org/belgium"
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
              src="https://freeclinic.be/local/cache-gd2/1d/2fd6ba04b8a64de5c847434d8dc31b.jpg?1713441272"
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
                href="https://freeclinic.be/"
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
              src="https://maisonmedicalegalilee.be/wp-content/uploads/2024/06/cropped-logo-galilee-cocof.png"
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
                href="https://maisonmedicalegalilee.be/"
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
              src="https://res.cloudinary.com/studentbe/image/upload/c_fill,f_auto,fl_progressive,q_auto:best,w_1280/img5fca0ff2e0a5a_aeq30p"
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
                href="https://mmsp.be/"
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
              src="https://th.bing.com/th/id/R.e0aa5451ab99917091fe367675d54c16?rik=dLJUe6f6T6FLZQ&pid=ImgRaw&r=0"
              alt="Maison Médicale Santé Plurielle"
              className="article-img"
            />
            <div className="article-details">
              <h3>La Fontaine Bruxelles</h3>
              <p>
                Strictly by appointment
                Address : rue Haute 346, 1000 <br />
                Email: lfb@ordmalt.be <br />
                Contact : +3225100910 <br />
                Open : Monday -Friday
                Time :  9h -12h and 13h - 16h
              </p>
              <a
                href="https://lesmarolles.be/Organization/la-fontaine-bruxelles/"
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

export default Medication;
