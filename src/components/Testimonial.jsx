import React from "react";
import { Star } from "@phosphor-icons/react";
import data from "../data/index.json";

const Testimonial = () => {
  return (
    <section className="testimonial" id="testimonials">
      <div className="container">
        <div className="portfolio--container">
          <p className="skills--section--subheading">Clients Feedback</p>
          <h1 className="skills--section--heading">Customer Feedback</h1>
        </div>
        <div className="row pt-4">
          {data.testimonials.map((item) => {
            return (
              <div className="col-md-4" key={item.id}>
                <div className="testimonial--card">
                  <Star color="#5e3bee" weight="fill" size={24} />
                  <Star color="#5e3bee" weight="fill" size={24} />
                  <Star color="#5e3bee" weight="fill" size={24} />
                  <p className="pt-4">{item.description}</p>
                  <div className="author">
                    <div className="author-img">
                      <img src={item.src} alt="" />
                    </div>
                    <div className="author-details">
                      <h5>{item.author_name}</h5>
                      <p>{item.author_designation}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
