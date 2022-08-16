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
                    <div className="row g-0 pt-3 mt-md-2 mt-lg-5 mt-sm-2 d-flex align-items-start">

                        {/* <div className=" mt-sm-2  mt-md-2  mt-lg-2 col-lg-12 col-md-6 col-sm-6"> */}
                        <div className=" col-sm-12 order-sm-1" >
                            <p className="blockquote bg-light fs-2 text-center fw-bold">
                                {name}</p>
                            <h2 className="fs-6 p-2 col-12 textjustified">
                                ಈ ದಿನದ ಶ್ರೀ ಪಟ್ಟಲ್ಲದಮ್ಮನ ಮತ್ತು ಶ್ರೀ ಕೊಲ್ಲಾಪುರದಮ್ಮನ ಅಲಂಕಾರ ದೃಶ್ಯ. ದೇವರನ್ನು ಎಲ್ಲಾ ಆಭರಣಗಳು ಮತ್ತು ಅಲಂಕಾರಗಳಿಂದ ಅಲಂಕರಿಸಲಾಗುವುದು. ಈ ಸೇವೆಯನ್ನು ವಿಶೇಷ ಧಾರ್ಮಿಕ ಸೇವೆ ಎಂದು ಪರಿಗಣಿಸಲಾಗಿದೆ.ಈ ರೀತಿಯ ಹೆಚ್ಚು ಸುಂದರವಾದ ಚಿತ್ರಗಳಿಗಾಗಿ, ಕೆಳಗಿನ ಚಾನಲ್ ಬಟನ್ ಅನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.
                            </h2>
                            <div className="mt-3 text-center chnlbtn">
                                <NavLink to={visit} >
                                    <button className="glow-on-hover">{btnname}</button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 h-100 w-100 order-md-1 animated glow-on-hover mt-3 ">
                            <img src={imgsrc} className="imgmain img-fluid  neotoday w-100 h-75 sm-mt-0" alt="Home Img" />
                        </div>
                        {/* </div> */}
                    </div>
                    <div className='row'>
                        <div className="container-fluid d-flex justify-content-center">
                            <img src={flower} alt="Home Img" className="flowerfilter" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12 col-sm-12'>
                            <div className="bsection">
                                <div className="order-1">
                                    <p className="blockquote bg-light fs-2 text-center fw-bold col-12 col-md-12 col-sm-12">
                                        ಪವಿತ್ರ ದೈವಿಕ ವೃಷಭ <br />ಶ್ರೀ ಬಸವಣ್ಣನವರು </p>
                                    <h2 className="fs-6 p-2">
                                        ಈ ಪವಿತ್ರ ಬಸವಣ್ಣನವರು ಸಾಮಾನ್ಯರ ನೋವು ಮತ್ತು ದುಃಖಗಳನ್ನು ಪರಿಹರಿಸುವ ಪವಿತ್ರ ಶಕ್ತಿಯನ್ನು ಹೊಂದಿದ್ದಾರೆ. ಈ ದೇವಾಲಯವನ್ನು ಪೂಜಿಸಲು ಮತ್ತು ಅದರ ದೈವಿಕ ಅನುಗ್ರಹವನ್ನು ಪಡೆಯಲು ಬರುವ ಭಕ್ತರನ್ನು ಬಸವಣ್ಣ ಆಶೀರ್ವದಿಸುತ್ತಾನೆ.
                                    </h2>
                                    <div className="mt-3 col-md-12 col-sm-12 text-center">
                                        <NavLink to={visit} >
                                            <button className="glow-on-hover">{btnname}</button>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="order-2 mt-5 imgmain animated glow-on-hover row ">
                                    <div className='col-sm-12  '>
                                        <img src={basava} className="img-fluid  neotoday h-100 w-100" alt="Home Img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="container-fluid d-flex justify-content-center">
                            <img src={flower} alt="Home Img" className="flowerfilter" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Alankar;
