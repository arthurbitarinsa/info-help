import React, { useState, useEffect, useRef } from "react";
import "../css/home.css";
import ImageCarousel from "./ImageCarousel";
import Header from "./Header";
import Footer from "./Footer";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import ArticleCarroussel from "./ArticleCarroussel";
import { FaArrowUp, FaComments } from "react-icons/fa";

function Home() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [smallFormData, setSmallFormData] = useState({
    email: "",
    message: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [smallFormSubmissionStatus, setSmallFormSubmissionStatus] =
    useState("");
  const [showScrollTopButton, setShowScrollTopButton] = useState(false); // State for scroll top button
  const [showChatButton, setShowChatButton] = useState(true); // State for chat button visibility
  const [showChatModal, setShowChatModal] = useState(false);

  // Scroll-to-top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Show scroll top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTopButton(true);
        setShowChatButton(true);
      } else {
        setShowScrollTopButton(false);
        setShowChatButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSmallFormInputChange = (e) => {
    const { name, value } = e.target;
    setSmallFormData({
      ...smallFormData,
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
      .send("service_aaugfif", "template_l0pqac4", data, "Nf26RqiFHwaDuc0ni")
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

  const handleSmallFormSubmit = (e) => {
    e.preventDefault();

    if (!smallFormData.email || !smallFormData.message) {
      setSmallFormSubmissionStatus("All fields must be filled.");
      return;
    }

    setIsSubmitting(true);
    setSmallFormSubmissionStatus("");

    const data = {
      from_email: smallFormData.email,
      message: smallFormData.message,
    };

    emailjs
      .send("service_aaugfif", "template_l0pqac4", data, "Nf26RqiFHwaDuc0ni")
      .then(
        (response) => {
          console.log("Message sent successfully : ", response);
          setSmallFormSubmissionStatus(
            "Thank you for your message! We will get back to you soon."
          );
          setSmallFormData({
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send the message : ", error);
          setSmallFormSubmissionStatus(
            "Message sending failed. Please try again."
          );
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Toggle chat modal visibility
  const toggleChatModal = () => {
    setShowChatModal(!showChatModal);
  };

  return (
    <>
      <Header />

      {/* Regular content */}
      <section className="sectionall">
        <div className="section-up">
          <ImageCarousel />
        </div>
        <ArticleCarroussel />
      </section>

      <section className="section2">
        <div className="support-container">
          <h1>Write to Us</h1>
          <form className="support-form" onSubmit={handleSubmit}>
            <label htmlFor="name">{t("name")}</label>
            <input
              placeholder="Enter your name"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="email">{t("email")}</label>
            <input
              placeholder="Enter your email"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="subject">{t("subject")}</label>
            <input
              placeholder="Enter your subject"
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

      {showChatButton && (
        <button className="chat-button" onClick={toggleChatModal}>
          <FaComments />
        </button>
      )}

      {/* Chat Modal */}
      {showChatModal && (
        <div className="chat-modal">
          <button className="close-chat-modal" onClick={toggleChatModal}>
            &times;
          </button>
          <form className="chat-form" onSubmit={handleSmallFormSubmit}>
            <label htmlFor="email">{t("email")}</label>
            <input
              placeholder="Enter your email"
              type="email"
              id="email"
              name="email"
              value={smallFormData.email}
              onChange={handleSmallFormInputChange}
              required
            />

            <label htmlFor="message">{t("message_placeholder")}</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={smallFormData.message}
              onChange={handleSmallFormInputChange}
              required
            ></textarea>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? t("sending") : t("Submit")}
            </button>
          </form>
          {smallFormSubmissionStatus && (
            <p className="success-message">{smallFormSubmissionStatus}</p>
          )}
        </div>
      )}

      {showScrollTopButton && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp className="scroll-icon" />
        </div>
      )}

      <Footer />
    </>
  );
}

export default Home;
