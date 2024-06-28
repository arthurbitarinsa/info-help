import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import arrow from "../images/next_190571.png";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <body>
        <Header />
        <section>
          <div className="section-up">
            <ImageCarousel />
            <div className="side-carousel">
              <h3 className="informed">Get informed !</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
                fuga natus explicabo voluptate. Quasi dignissimos enim quae
                facilis accusantium odit earum accusamus sit repellendus
                repellat? Magni cum quis placeat asperiores, eos quod. Voluptas,
                modi quo consectetur recusandae nulla labore dolorum culpa
                ullam. Tempora qui adipisci eos hic reprehenderit sequi
                esse?Lorem ipsum dolor,
              </p>
            </div>
          </div>
          <div className="section-down">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            doloribus aliquam officiis ad soluta aperiam hic rem labore, <br />
            reiciendis atque. Aliquid ut omnis nam suscipit molestiae excepturi
            alias ad officiis ipsam, rerum autem similique at labore. <br />
            Atque doloremque asperiores ratione quo accusamus. Vero voluptatum
            esse voluptatibus saepe quasi quae cupiditate!
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
              </ul>
            </div>
          </article>
          <div className="space"></div>
        </section>

        <Footer />
      </body>
    </>
  );
}

export default Home;
