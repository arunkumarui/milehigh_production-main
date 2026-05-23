import Link from "next/link";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdAddLocationAlt } from "react-icons/md";




export default function Footer(): React.JSX.Element {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="site-footer" id="site-footer">
      <div className="footer-main">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">M</div>
              <span className="footer-logo-text">Mile High Production</span>
            </div>
            <p className="footer-description">
              Crafting cinematic experiences that inspire, entertain, and push the boundaries
              of storytelling. From script to screen, we bring visions to life.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook" title="Facebook">
                <FaSquareFacebook />
              </a>
              <a href="#" className="social-link" aria-label="Instagram" title="Instagram">
              <RiInstagramFill />
              </a>
              <a href="#" className="social-link" aria-label="Twitter" title="Twitter">
                <FaSquareXTwitter />
              </a>
              <a href="#" className="social-link" aria-label="YouTube" title="YouTube">
               <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Divisions */}
          <div className="footer-column">
            <h4>Divisions</h4>
            <ul className="footer-links">
              <li>
                <Link href="/divisions/films-productions">Films Productions</Link>
              </li>
              <li>
                <Link href="/divisions/films-distribution">Films Distribution</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column">
            <h4>Get In Touch</h4>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">✉</div>
              <div className="footer-contact-text">info@milehighproduction.com</div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">☎</div>
              <div className="footer-contact-text">+1 (555) 123-4567</div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon"><MdAddLocationAlt /></div>
              <div className="footer-contact-text">Flat 1B, Monticello Apartments, 20-B2-3, Kamarajar Salai, K.K. Nagar, Chennai 600078</div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Mile High Production. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
