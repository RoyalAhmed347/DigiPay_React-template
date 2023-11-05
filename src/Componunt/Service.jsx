import React from "react";
import serviceapi from "./Api/ServicesApi";

const Service = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="main_service row">
            <h1 className="main_heading">How to send money</h1>
            <div className="services_card_box row">
              {serviceapi.map((elem) => {
                return (
                  <>
                    <div className="service_card">
                      <i className={`fa-solid ${elem.logo}`}></i>
                      <h2>{elem.title}</h2>
                      <p className="para">{elem.info}</p>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
