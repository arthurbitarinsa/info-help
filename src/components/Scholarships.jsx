import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../css/scholarships.css";

import clinicImg from "../images/help1.avif";
import galileeImg from "../images/help1.avif";
import santeImg from "../images/help1.avif";

function Scholarships() {
  return (
    <>
      <Header />
      <div className="container">
        <div>
          <div>
            <h2> SCHOLARSHIPS</h2>
            <br />
            <i>
              Scholarships always come as a burden reliever and so important to pursue higher studies, below <br />
              are some of higher institutions that have Refugee scholarship programs, <br />
              reach out to find out more about eligibility
              <br />
              <br />
            </i>
          </div>
        </div>

        <div>
          <div className="article">
            <img
              src="https://th.bing.com/th/id/R.6972e29f87ffa622dad1d782e24d8ab3?rik=sVNrl1sGJJf%2fOA&pid=ImgRaw&r=0"
              alt="Linguapolis"
              className="article-img"
            />
            <div className="article-details">
              <h3>Linguapolis- University of Antwerp</h3>
              <p>
                Address -Stadscampus Kleine Kauwenberg 122000 Antwerpen <br />
                Email - prepyear@linguapolis.be <br />
                Telephone: 02 512 13 14 (By appointment only) <br />
                18-25 years,  visit website for more details

                <br />
              </p>
              <a
                href="https://www.uantwerpen.be/en/centres/linguapolis/academic-dutch-english/one-year-dutch-programme/scholarships-for-refugees/"
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

export default Scholarships;
