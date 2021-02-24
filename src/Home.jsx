import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../src/Img/logo.png";

const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-item-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    If you enjoy! Credit goes to →{" "}
                    <strong className="brand-name"> BIG BEAST ISHANK </strong>
                  </h1>
                  <h2 className="my-3">
                    If you came to this page then click below to play games.
                  </h2>
                  <div className="mt-3 mb-5">
                    <NavLink to="/game" className="btn-main">
                      Browse Some Game
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <NavLink to="./owner">
                    <img src={logo} className="img-fluid animated" alt="..." />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
