import React, { useState } from "react";
import "../css/testimonial.css";

// Placeholder images
const testimonialImage1 =
  "https://www.creativefabrica.com/wp-content/uploads/2022/10/25/Person-icon-Graphics-43204353-1.jpg";
const testimonialImage2 =
"https://www.creativefabrica.com/wp-content/uploads/2022/10/25/Person-icon-Graphics-43204353-1.jpg";
const testimonialImage3 =
"https://www.creativefabrica.com/wp-content/uploads/2022/10/25/Person-icon-Graphics-43204353-1.jpg";

const testimonialsData = [
  {
    name: "",
    // text: "Thanks to the services provided, I was able to get the help I needed quickly and efficiently. Highly recommend!",
    text:"Coming soon",
    img: testimonialImage1,
  },
  {
    name: " ",
    // text: "The team was super supportive and the information I got was life-changing. Thank you!",
    text:"",
    img: testimonialImage2,
  },
  {
    name: "",
    // text: "I couldn't have asked for better guidance. Their help was just what I needed.",
    text:"Coming soon",
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
