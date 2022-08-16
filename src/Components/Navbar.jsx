import React from "react";
import { NavLink } from "react-router-dom"
import Logo from "../devi.png";
import { Row, Col } from 'react-bootstrap'

// import flower from "../images/flower-border.png"
const Navbar = () => {
  return (
    <>
      <div className="container-fluid navbarwrapper">
        <Row className="ml-4 row nav_bg">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Col className="col-sm-1 col-lg-2 col-md-2 order-sm-1 order-lg-1 order-md-1  m-0 p-0 justify-content-end logoline" >
              <img src={Logo} alt="Home Img" className="boxfilter order-lg-1  order-md-1 order-sm-1 m-0 p-0 img-fluid" />
            </Col>
            <NavLink exact className="navbar-brand" to="/">
              <p className="fs-5 text-nowrap text-center d-flex col-sm-4 col-lg-10 col-md-4 justify-content-center"> ಶ್ರೀ ಶ್ರೀ ಶ್ರೀ ಪಟ್ಟಲ್ಲದಮ್ಮ <br /> ಕೊಲ್ಲಾಪುರದಮ್ಮ ದೇವಾಲಯ</p>
            </NavLink>
            <button
              className="navbar-toggler col-sm-1"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="col-sm-6 col-lg-3 col-md-6" >
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-1">
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

        </Row>
      </div>
    </>
  );
};

export default Navbar;
