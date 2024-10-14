import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Carousel.css";

import img1 from "../images/help1.avif";
import img2 from "../images/help2.jpg";
import img3 from "../images/help3.webp";
import img4 from "../images/help4.jpg";

const imageUrls = [img1, img2, img3, img4];
const slideTexts = [
  "Help One - Lorem ipsum dolor sit amet",
  "Help Two - consectetur adipiscing elit",
  "Help Three - sed do eiusmod tempor incididunt",
  "Help Four - labore et dolore magna aliqua",
];

function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="image-div">
      <Slider {...settings}>
        {imageUrls.map((url, index) => (
          <div key={index} className="carousel-slide">
            <img src={url} alt={`Slide ${index}`} className="carousel-image" />
          </div>
        ))}
      </Slider>

      {/* Overlay that stays fixed on top of all carousel images */}
      <div className="carousel-overlay">
        <div className="carousel-content">
          <p className="carousel-text">Welcome to our Help Center</p>
          <button className="view-more-btn">
            <a href="/">View More</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ImageCarousel;
