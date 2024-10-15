import React, { useState } from "react";
import "../css/testimonial.css";

// Placeholder images
const testimonialImage1 =
  "https://media.istockphoto.com/id/2099403180/fr/photo/jeune-femme-daffaires-rieuse-debout-avec-ses-bras-crois%C3%A9s-contre-un-mur-de-bureau.jpg?s=1024x1024&w=is&k=20&c=MrBivLJMratWElx4iBN-g5WtLcHrG6Vgi3W8GtdeJ_o=";
const testimonialImage2 =
  "https://media.istockphoto.com/id/2101794935/fr/photo/portrait-of-a-woman-smiling-in-front-of-a-white-wall.jpg?s=1024x1024&w=is&k=20&c=ab426BLwG4sl_9B3v3UINOyx4M-yXH5kE5kuI1v7zuQ=";
const testimonialImage3 =
  "https://media.istockphoto.com/id/857924958/fr/photo/cool-jeune-femme-noire-souriant-contre-le-mur-blanc.jpg?s=1024x1024&w=is&k=20&c=IypFuzF-qDvlDghmEqJ5EYgaVlscSs94bIJtkUsuqcY=";

const testimonialsData = [
  {
    name: "Jane Marceline",
    text: "Thanks to the services provided, I was able to get the help I needed quickly and efficiently. Highly recommend!",
    img: testimonialImage1,
  },
  {
    name: "Ornelia Mokesa",
    text: "The team was super supportive and the information I got was life-changing. Thank you!",
    img: testimonialImage2,
  },
  {
    name: "Judith smith",
    text: "I couldn't have asked for better guidance. Their help was just what I needed.",
    img: testimonialImage3,
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonialsData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="testimonials-section">
      <h2>What People Are Saying</h2>
      <div className="testimonials-slider">
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="testimonial-slide">
          <div className="testimonial">
            <img
              src={testimonialsData[current].img}
              alt={testimonialsData[current].name}
              className="testimonial-img"
            />
            <h3>{testimonialsData[current].name}</h3>
            <p>{testimonialsData[current].text}</p>
          </div>
        </div>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Testimonial;
