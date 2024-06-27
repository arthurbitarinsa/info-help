import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'; // Custom CSS for additional styling

const imageUrls = [
  'https://via.placeholder.com/800x400?text=Image+1',
  'https://via.placeholder.com/800x400?text=Image+2',
  'https://via.placeholder.com/800x400?text=Image+3',
  'https://via.placeholder.com/800x400?text=Image+4'
];

function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section>
      <Slider {...settings}>
        {imageUrls.map((url, index) => (
          <div key={index}>
            <img src={url} alt={`Slide ${index}`} className="carousel-image"/>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default ImageCarousel;
