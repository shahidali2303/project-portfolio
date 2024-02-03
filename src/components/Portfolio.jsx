import React from "react";
import data from "../data/index.json";

const Portfolio = () => {
  return (
    <section className="container portfolio" id="Portfolio">
      <div className="portfolio--container--box">
        <div className="portfolio--container">
          <p className="skills--section--subheading">Recent projects</p>
          <h1 className="skills--section--heading">My Portfolio</h1>
        </div>
        <div className="portfolio--button">
          <a href="https://shahidali2303.github.io/Portfolio/" target="_blank">
            <div className="hero--button">
              <button className="herobutton">Visit My Github</button>
            </div>
          </a>
        </div>
      </div>
      <div className="row pt-4 pb-4">
        {data.portfolio.map((item) => {
          return (
            <div className="col-md-4" key={item.id}>
              <div className="portfolio--section--card">
                <div className="portfolio--section--img">
                  <img src={item.src} alt="" />
                </div>
                <div className="portfolio--section--card--content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="portfolio--link">
                    <a href={item.link}>
                      <p>See Project</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
