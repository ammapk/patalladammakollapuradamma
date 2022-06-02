import React, { useState, useCallback } from 'react';
import { NavLink } from "react-router-dom";
import pujatime from "../images/poojatimings.png"
import abhishekam from "../images/PataladammaKholpuradamma-Abhishek.png";
import aarti from "../images/PataladammaKholpuradamma-Mangalarthi.png";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import flower from "../images/flower-border.png"

import { photos } from "./photos";

import ReactPlayer from 'react-player'

const Photogallery = ({
    name,
    imgsrc,
    isCompName,
    compName,
    visit,
    btnname
}) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <>
            <section id="alankar" className="d-block d-flex justify-contents-start">
                <div className="container-fluid">
                    <div className="row align-items-start gallerypnl mt-5">
                        <div className="col-lg-10 col-md-8 col-sm-12 offset-1 ">
                            <div className="g-0 pt-3 mt-md-2 mt-lg-5 mt-sm-5 d-flex align-items-start mt-sm-2  mt-md-2  mt-lg-2">
                                <div className="order-1 order-lg-1 mt-5 ">
                                    <p className="blockquote  fs-2 text-start fw-bold">
                                        {name}</p>
                                    <h2 className="fs-6 p-2">
                                        ಈ ದಿನದ ಶ್ರೀ ಪಟ್ಟಲ್ಲದಮ್ಮನ ಮತ್ತು ಶ್ರೀ ಕೊಲ್ಲಾಪುರದಮ್ಮನ ಅಲಂಕಾರ ದೃಶ್ಯ. ಈ ರೀತಿಯ ಹೆಚ್ಚು ಸುಂದರವಾದ ಚಿತ್ರಗಳಿಗಾಗಿ, ಕೆಳಗಿನ ಚಾನಲ್ ಬಟನ್ ಅನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ.
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={visit} >
                                            <button className="glow-on-hover">{btnname}</button>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="order-2 order-lg-2 h-50 w-100 mt-5 order-md-1 animated glow-on-hover">
                                    <Gallery photos={photos} onClick={openLightbox} direction="row" targetRowHeight="100" />
                                    <ModalGateway>
                                        {viewerIsOpen ? (
                                            <Modal onClose={closeLightbox}>
                                                <Carousel
                                                    currentIndex={currentImage}
                                                    views={photos.map(x => ({
                                                        ...x,
                                                        srcset: x.srcSet,
                                                        caption: x.title
                                                    }))}
                                                />
                                            </Modal>
                                        ) : null}
                                    </ModalGateway>
                                </div>
                            </div>

                        </div>

                        {/* <div className='col-lg-5 col-md-8 col-sm-12'>
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
                        </div> */}
                    </div>
                    <div className="order-2 order-lg-2 h-75 w-100 mt-5 mb-0 order-md-1 animated glow-on-hover">
                        <p className="blockquote  fs-2 text-center fw-bold">
                            ದೇವಾಲಯದ ಪೂಜೆ ಮತ್ತು ದರ್ಶನ ವೇಳಾಪಟ್ಟಿ</p>
                        <div className="container-fluid d-flex justify-content-start mt-5">
                            <img src={pujatime} alt="Puja timings" className="flowerfilter" />
                            <div className='col-6 m-1' >
                                <img src={abhishekam} alt="Devi Abhishekam" className="col-12 p-1 flowerfilter" />
                                <img src={aarti} alt="Devi aarti" className="col-12 p-1 flowerfilter" />
                            </div>
                        </div>
                        <div className="container-fluid d-flex justify-content-center">
                            <img src={flower} alt="Home Img" className="flowerfilter" />
                        </div>
                        {/* <p className="blockquote  fs-2 text-center fw-bold  pt-5">
                            ದೇವಾಲಯದ ಪೂಜೆ ಮತ್ತು ದರ್ಶನ ವೇಳಾಪಟ್ಟಿ
                        </p> */}
                        <div className='row'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=EtpKIP7PgLk' className="col-6"/>
                        <ReactPlayer url='https://www.youtube.com/watch?v=uYmiHjm4Wfw' className="col-6"/>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Photogallery;
