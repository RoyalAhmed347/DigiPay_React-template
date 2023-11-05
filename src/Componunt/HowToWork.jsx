import React from "react";

import wrokData from "./Api/Howtowork";
import WorkCard from "./WorkCard";

const HowToWork = () => {
  return (
    <>
      <div className="how_to_work">
        <div className="container">
          <div className="main_how_to_work row">
            <h1 className="main_heading">How dose it Work</h1>
            <div className="work_box_card row">
              {wrokData.map((elem) => {
                return (
                  <>
                    <WorkCard
                      icon={elem.icon}
                      heading={elem.heading}
                      desc={elem.desc}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToWork;
