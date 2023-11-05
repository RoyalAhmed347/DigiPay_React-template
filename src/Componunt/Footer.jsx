import React from "react";
// import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="main_footer row">
            <div className="f_link_box">
              <h2>Company</h2>
              <ul>
                <li>About</li>
                <li>About</li>
                <li>About</li>
                <li>About</li>
              </ul>
            </div>
            <div className="f_link_box">
              <h2>Suport</h2>
              <ul>
                <li>About</li>
                <li>About</li>
                <li>About</li>
                <li>About</li>
              </ul>
            </div>
            <div className="f_link_box">
              <h2>Services</h2>
              <ul>
                <li>About</li>
                <li>About</li>
                <li>About</li>
                <li>About</li>
              </ul>
            </div>
            <div className="f_link_box social">
              <h2>Follow</h2>
              <ul>
                <li>
                  <i class="fa-brands fa-instagram"></i>
                </li>
                <li>
                  <i class="fa-brands fa-facebook"></i>
                </li>
                <li>
                  <i class="fa-brands fa-linkedin"></i>
                </li>
                <li>
                  <i class="fa-brands fa-whatsapp"></i>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyrigth">
            <p className="para">Copyrigth 2023</p>
          </div>
        </div>
      </footer>
      {/* <Outlet /> */}
    </>
  );
};

export default Footer;
