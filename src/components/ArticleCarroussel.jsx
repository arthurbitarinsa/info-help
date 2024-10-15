import React from "react";
import "../css/articlecarroussel.css";
import arrow from "../images/next_190571.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ArticleCarroussel() {
  const { t } = useTranslation();

  const locations = [
    {
      title: "Medication",
      img: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2541103.jpg",
      link: "/medication",
    },
    {
      title: "Food",
      img: "https://media.cnn.com/api/v1/images/stellar/prod/231113170330-ultraprocessed-foods-stock-image-restricted.jpg?c=original",
      link: "/food",
    },
    {
      title: "Accommodation",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/fc/9a/b2/appartamento-deluxe-with-balcony-.jpg?w=700&h=-1&s=1",
      link: "/accomodation",
    },
    {
      title: "Hygiene",
      img: "https://www.dresden.de/media/bilder/gesundheit/HYG/HYG_Haendewaschen.jpg",
      link: "/hygiene",
    },
    {
      title: "Legal & Safety",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8TcJEmxVvHEQ2P35-m8ro-WsBLEqtG49o3A&s",
      link: "/legal&safety",
    },
    {
      title: "Language Learning",
      img: "https://eslbrains.com/wp-content/uploads/2019/09/how-to-learn-a-language-like-a-hyper-polyglot-473x381.png",
      link: "/language-learning",
    },
    {
      title: "Psychological Help",
      img: "https://www.open.edu.au/-/media/blog/2022/02-february/counseller-vs-psychologist.jpg?h=583&iar=0&w=715&rev=512145ae285b477ca8b74b09c9b9784b&hash=DC8EFD2462F9FC1C60EB86BA38F5CC89",
      link: "/psychological-help",
    },

    {
      title: "Social Activities",
      img: "https://www.unicef.org/careers/sites/unicef.org.careers/files/styles/two_column/public/Priscilla%20Idele3.jpg.webp?itok=IYiHvGx2",
      link: "/social-activities",
    },

    {
      title: "More",
      img: "https://pbs.twimg.com/profile_images/558750489152458752/pBBTFL0j_400x400.png",
      link: "/more",
    },
  ];

  return (
    <article>
      <h2>{t("Check_Locations")}</h2>
      <div className="article-grid">
        {locations.map((location, index) => (
          <div key={index} className="grid-item">
            <div className="carousel-content1">
              <div className="carousel-text1">
                <h3>{t(location.title)}</h3>
                <button>
                  <Link to={location.link}>
                    {t("locations_here")}
                    <img src={arrow} alt="arrow" />
                  </Link>
                </button>
              </div>
              <div className="carousel-image1">
                <img src={location.img} alt={location.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default ArticleCarroussel;
