import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const toggle = () => {
    setNavActive(!navActive);
  };
  const closeMenu = () => {
    setNavActive(false);
  };
  return (
    <>
      <nav
        className={`navbar ${navActive ? "active" : ""}`}
        style={{
          paddingLeft: 85,
          paddingRight: 83,
          position: "fixed",
          paddingTop: 15,
          paddingBottom: 15,
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <div className="nav--container">
          <h1 className="logo">Logo.</h1>
        </div>
        <div className={`nav--itmes ${navActive ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                onClick={closeMenu}
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
                onClick={closeMenu}
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
                onClick={closeMenu}
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
                onClick={closeMenu}
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
        <div>
          <Link
            onClick={closeMenu}
            activeClass="navbar--active--content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="herobutton"
            style={{ cursor: "pointer" }}
          >
            Contact Me
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
