import React from "react";
import data from "../data/index.json";

const Myskills = () => {
  return (
    <>
      <section className="skills--section container" id="mySkills">
        <div className="">
          <p className="skills--section--subheading">My Skills</p>
          <h1 className="skills--section--heading">My Expertise</h1>
        </div>
        <div className="row pt-4">
          {data.skills.map((item) => {
            return (
              <div className="col-md-3 col-sm-6" key={item.id}>
                <div className="skills--section--card">
                  <div className="skills-section--img">
                    <img src={item.src} alt="" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Myskills;
