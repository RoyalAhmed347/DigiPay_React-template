import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="main_hero row">
            <div className="hero_left">
              <h1 className="main_heading-hero">
                Online payment made <br />
                Easy for you.
              </h1>
              <p className="para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                corporis repellat pariatur consequatur voluptate, molestias,
                ipsam sunt illum nesciunt molestiae quisquam, maiores beatae.
                Excepturi, cumque. Neque sequi accusamus ex fugit.
              </p>
              <p className="hero_tagline">Give early access for you</p>
              <div className="mail_box">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter yuor email"
                />
                <button className="btn" type="submit">
                  Get it Now
                </button>
              </div>
            </div>
            <div className="hero_rigth">
              <img
                src="./images/hero1.jpg"
                className="firstImg"
                alt=""
                srcset=""
              />
              <img
                src="./images/hero4.jpg"
                className="secondImg"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
