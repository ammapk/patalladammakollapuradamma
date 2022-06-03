import React from "react";
import { NavLink } from "react-router-dom"
import Logo from "../devi.png";
// import flower from "../images/flower-border.png"
const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row  d-flex justify-content-end">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <div className="col-sm-2 col-lg-2 col-md-3 order-1 order-lg-2 order-md-1 header-image md-p-0 md-m-0 d-flex justify-content-end" >
                  <img src={Logo} alt="Home Img" className="boxfilter order-md-2 order-sm-1"  />
                </div>
                <NavLink exact className="navbar-brand " to="/">
                 <p className="text-nowrap d-flex col-sm-2 col-lg-4 col-md-3"> ಶ್ರೀ ಶ್ರೀ ಶ್ರೀ ಪಟ್ಟಲ್ಲದಮ್ಮ <br /> ಕೊಲ್ಲಾಪುರದಮ್ಮ ದೇವಾಲಯ</p>
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" exact
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                      >
                        <span className="navtext">ಮುಖ ಪುಟ</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" exact className="nav-link" to="/services">
                      <span className="navtext">ಪೂಜಾ ಸೇವೆಗಳು</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" exact className="nav-link" to="/about">
                      <span className="navtext">ದೇವಾಲಯದ ಬಗ್ಗೆ</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" exact className="nav-link" to="/contact">
                      <span className="navtext">ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ</span>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="menu_active" exact className="nav-link" to="/miracle">
                      <span className="navtext">ಆಧ್ಯಾತ್ಮಿಕ ಪವಾಡಗಳು</span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
