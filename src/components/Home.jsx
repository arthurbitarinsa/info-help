import React from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import arrow from "../images/next_190571.png";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <body>²
        <Header />
        <section>
          <div className="section-up">
            <ImageCarousel />
            <div className="side-carousel">
              <h3 className="informed">Get informed !</h3>
              <p>
              Welcome to Pathfinder Brussels. Our online platform is your go-to resource for finding essential services and support in Brussels. Discover a curated list of organizations offering free assistance to new arrivals, asylum seekers, refugees, and individuals facing challenges. Whether you need shelter, legal advice, or help with daily necessities, Pathfinder Brussels provides precise information to guide you on your journey.
              </p>
            </div>
          </div>
          <div className="section-down">
          Pathfinder Brussels is committed to empowering individuals by providing timely and accurate information. We understand that navigating a new city can be overwhelming, and our platform is designed to simplify your search for the support you need. With Pathfinder Brussels, you can confidently access the resources that will help you thrive in your new community.
          </div>
          <div className="hr"></div>
          <article>
            <h2>Check Locations</h2>
            <div>
              <ul>
                <li>
                  <h3>Medication</h3>
                  <img
                    src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/2541103.jpg"
                    alt=""
                  />
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                  <button>
                    <a>
                      <Link to="/medication">
                        locations here <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>
                <li>
                  <h3>Food</h3>
                  <img
                    src="https://media.cnn.com/api/v1/images/stellar/prod/231113170330-ultraprocessed-foods-stock-image-restricted.jpg?c=original"
                    alt=""
                  />
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                  <button>
                    <a>
                      <Link to="/food">
                        locations here <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>
                <li>
                  <h3>Accomodation</h3>
                  <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/fc/9a/b2/appartamento-deluxe-with-balcony-.jpg?w=700&h=-1&s=1"
                    alt=""
                  />
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                  <button>
                    <a>
                      <Link to="/accomodation">
                        locations here <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>
                <li>
                  <h3>Hygiene</h3>
                  <img
                    src="https://www.dresden.de/media/bilder/gesundheit/HYG/HYG_Haendewaschen.jpg"
                    alt=""
                  />
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                  <button>
                    <a>
                      <Link to="/Hygiene">
                        locations here <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>
                <li>
                  <h3>Legal & Safety </h3>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8TcJEmxVvHEQ2P35-m8ro-WsBLEqtG49o3A&s"
                    alt=""
                  />
                  <p>Lorem ipsum dolor sit amet </p>
                  <button>
                    <a>
                      <Link to="/legal&safety">
                        locations here <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>

                <li>
                  <h3>Language </h3>
                  <img
                    src="https://eslbrains.com/wp-content/uploads/2019/09/how-to-learn-a-language-like-a-hyper-polyglot-473x381.png"
                    alt=""
                  />
                  <p>Lorem ipsum dolor sit amet </p>
                  <button>
                    <a>
                      <Link to="/legal&safety">
                        locations here <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>

                <li>
                  <h3>Psychological </h3>
                  <img
                    src="https://www.open.edu.au/-/media/blog/2022/02-february/counseller-vs-psychologist.jpg?h=583&iar=0&w=715&rev=512145ae285b477ca8b74b09c9b9784b&hash=DC8EFD2462F9FC1C60EB86BA38F5CC89"
                    alt=""
                  />
                  <p>Lorem ipsum dolor sit amet </p>
                  <button>
                    <a>
                      <Link to="/legal&safety">
                        locations here <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>

                <li>
                  <h3>Education </h3>
                  <img
                    src="https://www.salondeletudiant.ch/wp-content/uploads/2020/10/istock-499343530.jpg"
                    alt=""
                  />
                  <p>Lorem ipsum dolor sit amet </p>
                  <button>
                    <a>
                      <Link to="/legal&safety">
                        locations here <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>

                <li>
                  <h3>Scholarships </h3>
                  <img
                    src="https://www.mim-essay.com/images/blogs/Scholarship%20for%20MS%20in%20USA.jpg"
                    alt=""
                  />
                  <p>Lorem ipsum dolor sit amet </p>
                  <button>
                    <a>
                      <Link to="/legal&safety">
                        locations here <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>

                <li>
                  <h3>Social & Culture </h3>
                  <img
                    src="https://www.unicef.org/careers/sites/unicef.org.careers/files/styles/two_column/public/Priscilla%20Idele3.jpg.webp?itok=IYiHvGx2"
                    alt=""
                  />
                  <p>Lorem ipsum dolor sit amet </p>
                  <button>
                    <a>
                      <Link to="/legal&safety">
                        locations here <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>

                <li>
                  <h3>Sports </h3>
                  <img
                    src="https://www.departement13.fr/uploads/pics/2024-01-29_BANNER_Tournee_Terre_de_Sports.jpg"
                    alt=""
                  />
                  <p>Lorem ipsum dolor sit amet </p>
                  <button>
                    <a>
                      <Link to="/legal&safety">
                        locations here <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>

                <li>
                  <h3>More </h3>
                  <img
                    src="https://pbs.twimg.com/profile_images/558750489152458752/pBBTFL0j_400x400.png"
                    alt=""
                  />
                  <p>Lorem ipsum dolor sit amet </p>
                  <button>
                    <a>
                      <Link to="/legal&safety">
                        More here <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </article>
        </section>

        <section className="section2">
          <div className="hr"></div>

          <div className="support-container">
            <div className="support-h1">
              <h1>Leave a message</h1>
            </div>
            <form className="support-form">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>
        </section>
        <Footer />
      </body>
    </>
  );
}

export default Home;


/*
https://github.com/iridia-ulb/INFOH410 
https://github.com/iridia-ulb/AI-book 
https://github.com/iridia-ulb 
https://github.com/TheoVerhelst/Big-Data-Analytics-INFOH515-202223
*/