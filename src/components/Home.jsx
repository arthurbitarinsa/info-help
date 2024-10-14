import React, { useState } from "react";
import "../css/home.css";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";
import arrow from "../images/next_190571.png";
import Header from "./Header";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import logo from "../images/Helplogo.png";
import ArticleCarroussel from "./ArticleCarroussel";

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
      <Header />
      <section className="sectionall">
        <div className="section-up">
          <ImageCarousel />
        </div>
        <div className="section-down">
          <img src={logo} alt="" style={{ width: "30%" }} />
          <div className="text-content">
            <p>
              <i>{t("dedicated_message")} </i>
            </p>
            <button className="get-informed-btn">Get Informed</button>
          </div>
        </div>
        <div className="hr"></div>
        <ArticleCarroussel />
      </section>

      <section className="section2">
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
    </>
  );
}

export default Home;
