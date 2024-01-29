import React from "react";
const HeroSection = () => {
  return (
    <section className="herosection" id="heroSection">
      <div className="container">
        <div className="row">
          {/* leftColumns */}
          <div className="col-md-6 col-sm-6 description">
            <div className="hero--section--content--box">
              <div className="hero--section--content">
                <p className="section--title">Hey 👋, I'm Mayank </p>
                <h1 className="hero--section--title">
                  Full Stack <br /> Developer
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  <br /> sed do eiusmod tempor incididunt ut labore et dolore
                  <br />
                  magna aliqua. Ut enim ad minim veniam,
                </p>
                <a
                  href="https://shahidali2303.github.io/Portfolio/"
                  target="_blank"
                >
                  <div className="hero--button">
                    <button className="herobutton">Download Resume</button>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* rightColums */}
          <div className="col-md-6 col-sm-6">
            <div className="hero--section--img">
              <img src="../../src/assets/img/heroimg.jpg" className="heroimg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
