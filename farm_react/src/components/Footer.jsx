import { FaFacebookF, FaPinterestP, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../css/Nav.css";

function Footer () {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-row">
          <div className="footer-col-1">
            <ul>
              <li><a href="/">Search</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-col-2">
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </div>
        
          <div className="footer-col-3">
            <a href="/"><FaFacebookF /> </a>
            <a href="/"><FaPinterestP /> </a>
            <a href="/"><FaInstagram /> </a>
            <a href="/"><FaTwitter /> </a>
            <a href="/"><FaYoutube /> </a>
            <a href="/"><FaLinkedin /> </a>
          </div>

        </div>

        <div className="footer-bottom"><br />
          <img src="/images/homeicon.png" alt="Field2Home logo" className="logo-icon" />
          <p>&copy; {new Date().getFullYear()} Field2home.com</p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;
