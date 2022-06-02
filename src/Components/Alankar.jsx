import React from 'react';
import { NavLink } from "react-router-dom"
import flower from "../images/flower-border.png"
import basava from "../images/basavanna.png"
const Alankar = ({
    name,
    imgsrc,
    isCompName,
    compName,
    visit,
    btnname
}) => {
    return (
        <>
            <section id="alankar" className="d-block d-flex justify-contents-start">
                <div className="container-fluid">
                    <div className="row align-items-start">
                        <div className="col-lg-5 col-md-8 col-sm-12 offset-1">
                            <div className="g-0 pt-3 mt-md-2 mt-lg-5 mt-sm-5 d-flex align-items-start mt-sm-2  mt-md-2  mt-lg-2">
                                <div className="order-1 order-lg-1 mt-5 ">
                                    <p className="blockquote bg-light fs-2 text-center fw-bold">
                                        {name}</p>
                                    <h2 className="fs-6 p-2 col-10">
                                        ಈ ದಿನದ ಶ್ರೀ ಪಟ್ಟಲ್ಲದಮ್ಮನ ಮತ್ತು ಶ್ರೀ ಕೊಲ್ಲಾಪುರದಮ್ಮನ ಅಲಂಕಾರ ದೃಶ್ಯ. ದೇವರನ್ನು ಎಲ್ಲಾ ಆಭರಣಗಳು ಮತ್ತು ಅಲಂಕಾರಗಳಿಂದ ಅಲಂಕರಿಸಲಾಗುವುದು. ಈ ಸೇವೆಯನ್ನು ವಿಶೇಷ ಧಾರ್ಮಿಕ ಸೇವೆ ಎಂದು ಪರಿಗಣಿಸಲಾಗಿದೆ.ಈ ರೀತಿಯ ಹೆಚ್ಚು ಸುಂದರವಾದ ಚಿತ್ರಗಳಿಗಾಗಿ, ಕೆಳಗಿನ ಚಾನಲ್ ಬಟನ್ ಅನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={visit} >
                                            <button className="glow-on-hover">{btnname}</button>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="order-2 order-lg-2 h-100 w-100 mt-5 order-md-1 animated glow-on-hover">
                                    <img src={imgsrc} className="imgmain img-fluid  neotoday w-100" alt="Home Img" />
                                </div>
                            </div>
                            <div className="container-fluid d-flex justify-content-center">
                                <img src={flower} alt="Home Img" className="flowerfilter" />
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-8 col-sm-12'>
                            <div className="g-0 pt-3 mt-md-2 mt-lg-5 mt-sm-5 d-flex align-items-start mt-sm-2  mt-md-2  mt-lg-2">
                                <div className="order-2 order-lg-2 mt-5 ">
                                    <p className="blockquote bg-light fs-2 text-center fw-bold">
                                    ಪವಿತ್ರ ದೈವಿಕ ವೃಷಭ <br/>ಶ್ರೀ ಬಸವಣ್ಣನವರು </p>
                                    <h2 className="fs-6 p-2">
                                    ಈ ಪವಿತ್ರ ಬಸವಣ್ಣನವರು ಸಾಮಾನ್ಯರ ನೋವು ಮತ್ತು ದುಃಖಗಳನ್ನು ಪರಿಹರಿಸುವ ಪವಿತ್ರ ಶಕ್ತಿಯನ್ನು ಹೊಂದಿದ್ದಾರೆ. ಈ ದೇವಾಲಯವನ್ನು ಪೂಜಿಸಲು ಮತ್ತು ಅದರ ದೈವಿಕ ಅನುಗ್ರಹವನ್ನು ಪಡೆಯಲು ಬರುವ ಭಕ್ತರನ್ನು ಬಸವಣ್ಣ ಆಶೀರ್ವದಿಸುತ್ತಾನೆ.
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={visit} >
                                            <button className="glow-on-hover">{btnname}</button>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="order-2 order-lg-2 h-100 w-100 mt-5 order-md-1 animated glow-on-hover">
                                    <img src={basava} className="imgmain img-fluid  neotoday w-100" alt="Home Img" />
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

export default Alankar;
