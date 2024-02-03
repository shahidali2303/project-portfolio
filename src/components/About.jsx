import React from "react";

const About = () => {
  return (
    <section className="about--section container" id="AboutMe">
      <div className="row">
        <div className="col-md-6">
          <div className="about--section--img">
            <img src="../../src/assets/img/about-me.jpg" alt="" />
          </div>
        </div>
        <div className="col-md-6 pt-4">
          <div className="about--description">
            <p className="skills--section--subheading">About</p>
            <h1 className="skills--section--heading">About Me</h1>
          </div>
          <div className="pt-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="pt-3">
            <button className="herobutton">Download Resume</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
