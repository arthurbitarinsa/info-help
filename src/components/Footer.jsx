// import React from "react";
// import "../css/home.css";
// import "../css/Carousel.css";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// function Footer() {
//   const { t } = useTranslation();
//   return (
//     <footer>
//       <div className="footer-container">
//         <div className="footer-links">
//           <a>
//             <Link to="/about">{t("about_us")}</Link>
//           </a>
//           <a>
//             <Link to="/privacy">{t("Terms")}</Link>
//           </a>
//           <a>
//             <Link to="/feedback">{t("Feedback")}</Link>
//           </a>
//         </div>
//         <div className="footer-icons">
//           <i className="fa-brands fa-facebook"></i>
//           <i className="fa-brands fa-instagram"></i>
//           <i className="fa-brands fa-twitter"></i>
//         </div>
//       </div>

//       <div className="p-footer">
//         <p>&copy; PATH FINDER BRUSSELS {t("rigths")}</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React, { useState, useEffect } from "react";
import "../css/home.css";
import "../css/Carousel.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  // Show back-to-top button when scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <h3>{t("Quick Links")}</h3>
          <a>
            <Link to="/about">{t("about_us")}</Link>
          </a>
          <a>
            <Link to="/privacy">{t("Terms")}</Link>
          </a>
          <a>
            <Link to="/feedback">{t("Feedback")}</Link>
          </a>
        </div>

        <div className="footer-contact">
          <h3>{t("Contact Us")}</h3>
          <p>Email: pathfinderbrussels@gmail.com</p>
  
          <p>Address: Brussels, Belgium</p>
        </div>

        <div className="footer-icons">
          <h3>{t("Follow Us")}</h3>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>

      <div className="p-footer">
        <p>
          &copy; {new Date().getFullYear()} PATH FINDER BRUSSELS {t("rigths")}
        </p>
      </div>

      {/* Back to Top Button */}
      {/* <div
        className={`back-to-top ${isVisible ? "show" : ""}`}
        onClick={scrollToTop}
      >
        &#8679;
      </div> */}
    </footer>
  );
}

export default Footer;
