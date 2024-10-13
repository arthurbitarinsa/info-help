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
              src="https://casalegal.be/wp-content/uploads/2021/01/cropped-logo-casa-legal-v2-vectorise-transparanr-768x143-1.png"
              alt="DoucheFlux"
              className="article-img"
            />
            <div className="article-details">
              <h3>CASA LEGAL</h3>
              <p>
                Address - Rue des Tanneurs, 58, 1er étage 1000 Bruxelles  <br />
                Call or Send an email for an appointment<br />
                Fixed Line : +32 (0) 2 880 57 37 <br />
                Whatsapp : +32 (0) 491 87 67 56 ;  <br />
                Email : info@casalegal.be
              </p>
              <a
                href="https://casalegal.be/"
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
              src="https://sireas.be/wp-content/uploads/2022/05/cropped-icone2.png"
              alt="DoucheFlux"
              className="article-img"
            />
            <div className="article-details">
              <h3>SIREAS</h3>
              <p>
                Address - Rue du Boulet, 26
                1000 Bruxelles <br />
                Open - Monday, Tuesday, Thursday, Friday with no appointment <br />
                Tickets served at 8:30 <br />
                Wednesday with appointment <br />
                Telephone: 02 649 99 58<br />
                Email : sireas@sireas.be
              
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
              src="https://www.adde.be/templates/corpway/images/s5_logo.png"
              alt="DoucheFlux"
              className="article-img"
            />
            <div className="article-details">
              <h3>ADDE</h3>
              <p>
                Address - Rue des Vétérinaires 84 <br />
                Open - Monday and Thursday<br />
                Time : 9h ( 7 people recieved in order of arrival, so be early enough to catch your spot)
               
              </p>
              <a
                href="https://www.adde.be/"
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
              src={clinicImg}
              alt="Free Clinic Asbl"
              className="article-img"
            />
            <div className="article-details">
              <h3>Nativitas</h3>
              <p>
                Address - Rue Haute 116/118<br />
                Open - Tue & Thur  <br />
                Time: 12:45 - 13:45 (Appointment Only)
                Telephone: 02 512 02 35
                <br />
              </p>
              <a
                href="https://www.nativitas.be/"
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
              src="https://nansen-refugee.be/wp-content/uploads/2018/12/nansen-refugee.jpg"
              alt="DoucheFlux"
              className="article-img"
            />
            <div className="article-details">
              <h3>NANSEN</h3>
              <p>
                Address - Rue Émile Féron 153,
                1060 Brussels <br />
                Telephone: +32 (0) 487 84 65 40 <br />
                Email: info@nansenrefugee.be
                
              </p>
              <a
                href="https://nansen-refugee.be/en/"
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

          
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Legal;
