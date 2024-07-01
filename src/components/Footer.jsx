import React from "react";
import "../css/home.css";
import "../css/Carousel.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-links">
          <a>
            <Link to="/about">About us</Link>
          </a>
          <a>
            <Link to="/feedback">Feedback and Support</Link>
          </a>
          <a>
            <Link to="/privacy">Terms and privacy</Link>
          </a>
        </div>
        <div className="footer-icons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>

      <div className="p-footer">
        <p>&copy; INFO-HELP all rigths reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
