import React, { useState } from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import arrow from "../images/next_190571.png";
import Header from "./Header";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setSubmissionStatus("All fields must be filled.");
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus("");

    const data = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send("service_oaq5fhn", "template_abcb0dc", data, "b4j_WJ11JcUJkySWD")
      .then(
        (response) => {
          console.log("Message sent successfully : ", response);
          setSubmissionStatus(
            "Thank you for your message! We will get back to you soon."
          );
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send the message : ", error);
          setSubmissionStatus("Message sending failed. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <>
      <body>
        <Header />
        <section>
          <div className="section-up">
            <ImageCarousel />
            <div className="side-carousel">
              <h3 className="informed">{t("Get_informed")}</h3>
              <p>{t("dedicated_message")}</p>
            </div>
          </div>
          <div className="section-down">
            <i>{t("guiding_message")}</i>
          </div>
          <div className="hr"></div>
          <article>
            <h2>{t("Check_Locations")}</h2>
            <div>
              <ul>
                <li>
                  <h3>{t("Medication")}</h3>
                  <img
                    src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/2541103.jpg"
                    alt=""
                  />
                  <button>
                    <a>
                      <Link to="/medication">
                        {t("locations_here")} <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>
                <li>
                  <h3>{t("Food")}</h3>
                  <img
                    src="https://media.cnn.com/api/v1/images/stellar/prod/231113170330-ultraprocessed-foods-stock-image-restricted.jpg?c=original"
                    alt=""
                  />
                  <button>
                    <a>
                      <Link to="/food">
                        {t("locations_here")}
                        <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>
                <li>
                  <h3>{t("Accomodation")}</h3>
                  <img
                    src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/fc/9a/b2/appartamento-deluxe-with-balcony-.jpg?w=700&h=-1&s=1"
                    alt=""
                  />
                  <button>
                    <a>
                      <Link to="/accomodation">
                        {t("locations_here")} <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>
                <li>
                  <h3>{t("Hygiene")}</h3>
                  <img
                    src="https://www.dresden.de/media/bilder/gesundheit/HYG/HYG_Haendewaschen.jpg"
                    alt=""
                  />
                  <button>
                    <a>
                      <Link to="/Hygiene">
                        {t("locations_here")} <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>
                <li>
                  <h3>{t("Legal_safety")} </h3>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8TcJEmxVvHEQ2P35-m8ro-WsBLEqtG49o3A&s"
                    alt=""
                  />
                  <button>
                    <a>
                      <Link to="/legal&safety">
                        {t("locations_here")}
                        <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>

                <li>
                  <h3>{t("Language")} </h3>
                  <img
                    src="https://eslbrains.com/wp-content/uploads/2019/09/how-to-learn-a-language-like-a-hyper-polyglot-473x381.png"
                    alt=""
                  />
                  <button>
                    <a>
                      <Link to="/legal&safety">
                        {t("locations_here")} <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>

                <li>
                  <h3>{t("Psychological")} </h3>
                  <img
                    src="https://www.open.edu.au/-/media/blog/2022/02-february/counseller-vs-psychologist.jpg?h=583&iar=0&w=715&rev=512145ae285b477ca8b74b09c9b9784b&hash=DC8EFD2462F9FC1C60EB86BA38F5CC89"
                    alt=""
                  />
                  <button>
                    <a>
                      <Link to="/legal&safety">
                        {t("locations_here")} <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>

                <li>
                  <h3>{t("Education")} </h3>
                  <img
                    src="https://www.salondeletudiant.ch/wp-content/uploads/2020/10/istock-499343530.jpg"
                    alt=""
                  />
                  <button>
                    <a>
                      <Link to="/legal&safety">
                        {t("locations_here")} <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>

                <li>
                  <h3>{t("Scholarships")} </h3>
                  <img
                    src="https://www.mim-essay.com/images/blogs/Scholarship%20for%20MS%20in%20USA.jpg"
                    alt=""
                  />
                  <button>
                    <a>
                      <Link to="/legal&safety">
                        {t("locations_here")} <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>

                <li>
                  <h3>{t("Social_activities")} </h3>
                  <img
                    src="https://www.unicef.org/careers/sites/unicef.org.careers/files/styles/two_column/public/Priscilla%20Idele3.jpg.webp?itok=IYiHvGx2"
                    alt=""
                  />
                  <button>
                    <a>
                      <Link to="/legal&safety">
                        {t("locations_here")} <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>

                <li>
                  <h3>{t("Sports")} </h3>
                  <img
                    src="https://www.departement13.fr/uploads/pics/2024-01-29_BANNER_Tournee_Terre_de_Sports.jpg"
                    alt=""
                  />
                  <button>
                    <a>
                      <Link to="/legal&safety">
                        {t("locations_here")} <img src={arrow} alt="" />
                      </Link>
                    </a>
                  </button>
                </li>

                <li>
                  <h3>{t("More")} </h3>
                  <img
                    src="https://pbs.twimg.com/profile_images/558750489152458752/pBBTFL0j_400x400.png"
                    alt=""
                  />
                  <button>
                    <a>
                      <Link to="/legal&safety">
                        {t("More_here")} <img src={arrow} alt="" />
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
              <h1>{t("message")}</h1>
            </div>
            <form className="support-form" onSubmit={handleSubmit}>
              <label htmlFor="name">{t("name")}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="email">{t("email")}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="subject">{t("subject")}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />

              <label htmlFor="message">{t("message_placeholder")}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
              ></textarea>

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? t("sending") : t("Submit")}
              </button>
            </form>
            {submissionStatus && (
              <p className="success-message">{submissionStatus}</p>
            )}
          </div>
        </section>
        <Footer />
      </body>
    </>
  );
}

export default Home;
