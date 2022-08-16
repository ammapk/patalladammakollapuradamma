import React from 'react';
import { NavLink } from "react-router-dom"
import flower from "../images/flower-border.png"
import clkhere from "../images/clickhere.png";
import {  Col } from 'react-bootstrap'

const Common = ({
    name,
    imgsrc,
    isCompName,
    compName,
    visit,
    btnname
}) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className='today'>
                    <div className="row">
                        <div className="col-lg-11 col-md-12 col-sm-12 pt-1 pt-lg-0 d-flex justify-content-center flex-column" >
                            <p className="blockquote bg-light fs-6 text-center fw-bold commtitle">
                                {name}</p><p className="fs-2 fw-bold text-center">
                                {isCompName ? <strong className="brand-name  text-center"> {compName}</strong> : ""}
                            </p>
                            <h2 className="fs-6 p-3 textjustified" >
                                ಶ್ರೀಕ್ಷೇತ್ರ ಗಿಡದ ಕೆಂಚನಹಳ್ಳಿ ಶ್ರೀ ಪಟ್ಟಲ್ಲದಮ್ಮ ಕೊಲ್ಲಾಪುರದಮ್ಮನವರ ಸನ್ನಿಧಾನ ಯಾವ ವೈಭವೀಕರಣಕ್ಕೂ ಅತಿಶಯೋಕ್ತಿಗೂ ಅವಕಾಶವಿಲ್ಲದಂತೆ, ಇಂದ್ರಿಯಗಳ ಅನುಭವಕ್ಕೆ
                                ಮೀರಿದುದನ್ನು ಸಾಮಾನ್ಯ ಗ್ರಂಥಕರ್ತನ ಕಲ್ಪನೆಗೂ ಎಟುಕದಂತೆ, ದೇವಿಯ ಅವರು ಶ್ರೀ ಶ್ರೀ ಪಟ್ಲದಮ್ಮ, ಶ್ರೀ ಶ್ರೀ ಕೊಲ್ಲಾಪುರದಮ್ಮ
                                ರೂಪದಲ್ಲಿ, ಜಗತ್ತಿನ ಮಾತೆ ಆದಿಶಕ್ತಿಯ ಅಂಶರೂಪ ಶಕ್ತಿ ನೆಲೆಸಿದೆ. ಅದು ನಮ್ಮೆಲ್ಲರನ್ನೂ ಆಕರ್ಷಿಸುತ್ತಿದೆ. ಮೂಲಶಕ್ತಿಯ ಅಂಶರೂಪಿಗಳು ಇಲ್ಲಿ ನೆಲೆಸಿರುವುದು, ಸಾಮಾನ್ಯರೆಲ್ಲರ ಹೃದಯ ತಟ್ಟುವಂತೆ
                                ಅನುಗ್ರಹಿಸಿದ್ದಾಳೆ. ದೇವಿ ಪಟ್ಟಲದಮ್ಮ ದೇವಿ ಕೊಲ್ಲಾಪುರದಮ್ಮ ದೇವಾಲಯವು ಅತ್ಯಂತ ಶಕ್ತಿಯುತವಾದ ದೇವಾಲಯವಾಗಿದೆ ಮತ್ತು ಅವರ ದೈವಿಕ ಆಶೀರ್ವಾದವನ್ನು ನಮ್ಮ ಮೇಲೆ ಶಾಶ್ವತವಾಗಿ ಕೋರುತ್ತೇವೆ!
                            </h2>
                            <div className="mt-3 d-flex justify-content-center flex-column align-items-center">
                                <NavLink to={visit} className="btn-get-started  text-center glow-on-hover">
                                    {btnname}
                                </NavLink>
                                <Col className="col-sm-1 col-lg-2 col-md-2 order-sm-1 order-lg-1 order-md-1 logoline2 " >
                                    <img src={clkhere} alt="Home Img" className="boxfilter order-md-1 order-sm-1 m-0 p-0 img-fluid " />
                                </Col>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 mt-0">
                            <img src={imgsrc} className="imgmain img-fluid animated " alt="Home Img" />
                        </div>
                    </div>
                    <div className='row flowertop'>
                        <div className="justify-content-center pt-sm-1 mt-sm-1 ">
                            <img src={flower} alt="Home Img" className="flowerfilter" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;
