import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [hamShow, sethamShow] = useState(false);
  return (
    <>
      <nav>
        <div className="container">
          <div className="row NavBar">
            <div className="brandname">
              <NavLink className="homeLink" to="/">
                <h2>
                  <span>R</span>oyal<span>P</span>ay
                </h2>
              </NavLink>
            </div>
            <div className="manu">
              <ul className={hamShow && "show"}>
                <li>
                  <NavLink className="navBtn" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navBtn" to="about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navBtn" to="services">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink className="navBtn" to="contact">
                    Contact
                  </NavLink>
                </li>
                <div className="sin_btns">
                  <button className="btn active">Singup</button>
                  <button className="btn">Singin</button>
                </div>
              </ul>
            </div>
            <div className="hamberger" onClick={() => sethamShow(!hamShow)}>
              <MenuIcon className="hamberger_btn" fontSize="large" />
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
