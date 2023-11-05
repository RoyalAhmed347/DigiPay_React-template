import React from "react";
import howToUseApp from "./Api/HoeToUse";

const Appuse = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="main_appuse row">
            <div className="use_left">
              <img src="./images/hero3.jpg" alt="" srcset="" />
            </div>
            <div className="use_rigth">
              <p className="use_heading">
                --Avvaelab at Gooal and iso app store
              </p>
              <h1 className="">How to use the app</h1>
              {howToUseApp.map((elem, ind) => {
                return (
                  <>
                    <div className="list">
                      <div>{ind + 1}</div>
                      <p>{elem.title}</p>
                    </div>
                    <p className="para">{elem.info}</p>
                  </>
                );
              })}

              <button className="btn">Learn More</button>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="container">
          <div className="main_appuse main_appuse-1 row">
            <div className="use_rigth">
              <p className="use_heading">--support in any language</p>
              <h1 className="">
                world class support avelebal <br /> is 24/7{" "}
              </h1>
              {howToUseApp.map((elem, ind) => {
                return (
                  <>
                    <div className="list">
                      <div>{ind + 1}</div>
                      <p>{elem.title}</p>
                    </div>
                    <p className="para">{elem.info}</p>
                  </>
                );
              })}
              <button className="btn">Learn More</button>
            </div>
            <div className="use_left">
              <img src="./images/callcenter.jpg" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appuse;
