import React from "react";
import { Link } from "react-scroll";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
const Footer = () => {
  return (
    <section className="footer-wrapper">
      <footer className="footer-container container ">
        <div className="footer-link-container">
          <div>
            <h1>Logo.</h1>
          </div>
          <div className="footer-items">
            <ul>
              <li>
                <Link
                  activeClass="navbar--active--content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="heroSection"
                  className="navbar--content"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  activeClass="navbar--active--content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="Portfolio"
                  className="navbar--content"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  activeClass="navbar--active--content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="AboutMe"
                  className="navbar--content"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  activeClass="navbar--active--content"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  to="testimonials"
                  className="navbar--content"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-social-icons">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com"
                  className="navbar--content"
                  target="_blank"
                >
                  <FacebookLogo size={32} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  className="navbar--content"
                  target="_blank"
                >
                  <InstagramLogo size={32} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  className="navbar--content"
                  target="_blank"
                >
                  <TwitterLogo size={32} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  className="navbar--content"
                  target="_blank"
                >
                  <LinkedinLogo size={32} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="divider" />
        <div className="footer-content-container">
          <div>
            <p className="made-with-footer">Made with ❤ Mayank</p>
          </div>
          <div>
            <ul className="footer-bottom-links">
              <li>
                <a href="#">Privacy Policies</a>
              </li>
              <li>
                <a href="#">Terms of services</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
