import React from 'react';
import { NavLink } from "react-router-dom"
import flower from "../images/flower-border.png"

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
            <section id="header" className="d-block d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row g-0 pt-3 mt-3">
                                <div className="col-lg-5 col-md-12 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <p className="blockquote bg-light fs-6 text-center fw-bold">
                                        {name}</p><p className="fs-2 fw-bold">
                                        {isCompName ? <strong className="brand-name"> {compName}</strong> : ""}

                                    </p>
                                    <h2 className="fs-6 p-3">
                                        ಶ್ರೀಕ್ಷೇತ್ರ ಗಿಡದ ಕೆಂಚನಹಳ್ಳಿ ಶ್ರೀ ಪಟ್ಟಲ್ಲದಮ್ಮ ಕೊಲ್ಲಾಪುರದಮ್ಮನವರ ಸನ್ನಿಧಾನ ಯಾವ ವೈಭವೀಕರಣಕ್ಕೂ ಅತಿಶಯೋಕ್ತಿಗೂ ಅವಕಾಶವಿಲ್ಲದಂತೆ, ಇಂದ್ರಿಯಗಳ ಅನುಭವಕ್ಕೆ
                                        ಮೀರಿದುದನ್ನು ಸಾಮಾನ್ಯ ಗ್ರಂಥಕರ್ತನ ಕಲ್ಪನೆಗೂ ಎಟುಕದಂತೆ, ದೇವಿಯ ಅವರು ಶ್ರೀ ಶ್ರೀ ಪಟ್ಲದಮ್ಮ, ಶ್ರೀ ಶ್ರೀ ಕೊಲ್ಲಾಪುರದಮ್ಮ
                                        ರೂಪದಲ್ಲಿ, ಜಗತ್ತಿನ ಮಾತೆ ಆದಿಶಕ್ತಿಯ ಅಂಶರೂಪ ಶಕ್ತಿ ನೆಲೆಸಿದೆ. ಅದು ನಮ್ಮೆಲ್ಲರನ್ನೂ ಆಕರ್ಷಿಸುತ್ತಿದೆ. ಮೂಲಶಕ್ತಿಯ ಅಂಶರೂಪಿಗಳು ಇಲ್ಲಿ ನೆಲೆಸಿರುವುದು, ಸಾಮಾನ್ಯರೆಲ್ಲರ ಹೃದಯ ತಟ್ಟುವಂತೆ
                                        ಅನುಗ್ರಹಿಸಿದ್ದಾಳೆ. ದೇವಿ ಪಟ್ಟಲದಮ್ಮ ದೇವಿ ಕೊಲ್ಲಾಪುರದಮ್ಮ ದೇವಾಲಯವು ಅತ್ಯಂತ ಶಕ್ತಿಯುತವಾದ ದೇವಾಲಯವಾಗಿದೆ ಮತ್ತು ಅವರ ದೈವಿಕ ಆಶೀರ್ವಾದವನ್ನು ನಮ್ಮ ಮೇಲೆ ಶಾಶ್ವತವಾಗಿ ಕೋರುತ್ತೇವೆ!
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={visit} className="btn-get-started ">
                                            {btnname}
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 col-lg-7 order-1 order-lg-2  order-md-1 ">
                                    <img src={imgsrc} className="imgmain img-fluid animated " alt="Home Img" />
                                </div>
                            </div>
                            <div className="container-fluid d-flex justify-content-center">
                                <img src={flower} alt="Home Img" className="flowerfilter" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;
