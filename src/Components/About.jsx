import React from 'react'
import amma from "../images/SripattalladammaSriKollapuradamma.png";
import alankara from '../images/sripattlladammakollapuradamma.jpg';
import utsav from "../images/UtsavMurthy.jpg";
import shivaskandh from "../images/SriShivaSkandha.png";
import basavanna from "../images/basavanna.png";

// import Common from './Common'
import '../timeline.scss';
import Temple from './temple';

const About = () => {
    return (
        <>
            <section id="timeline">

                <div className="tl-item">

                    <div className="tl-bg" style={{ backgroundImage: 'url(' + amma + ')' }}></div>

                    <div className="tl-year">
                        <p className="f3 heading--sanSerif">ಮುಖ್ಯ ದೇವರು</p>
                    </div>

                    <div className="tl-content">
                        <h1 className="fs4 text--accent ttu">ಶ್ರೀ ಪಟ್ಟಲ್ಲದಮ್ಮ ಶ್ರೀ ಕೊಲ್ಲಾಪುರದಮ್ಮ</h1>
                        <p className="fs6">
                            ಈ ದೇವಾಲಯವು ದೈವಿಕ ಪವಿತ್ರ ಕ್ಷೇತ್ರವಾಗಿದೆ.
                            ಇಲ್ಲಿ ಶ್ರೀ ಪಟ್ಟಲ್ಲದಮ್ಮ ಮತ್ತು ಶ್ರೀ ಕೊಲ್ಲಾಪುರದಮ್ಮ ಎಂದು ಪಾರವತಿ ಮತ್ತು ಲಕ್ಷ್ಮಿ ದೇವಿಯನ್ನು ಪೂಜಿಸಲಾಗುತ್ತದೆ.
                            ಅದು ಸ್ವಯಂಬು ದೇವಾಲಯ. ಇದಕ್ಕೆ ಸುಮಾರು 25 ವರ್ಷಗಳ ಇತಿಹಾಸವಿದೆ.
                        </p>
                    </div>

                </div>

                <div className="tl-item">

                    <div className="tl-bg" style={{ backgroundImage: 'url(' + utsav + ')' }}></div>

                    <div className="tl-year">
                        <p className="f2 heading--sanSerif">ಶ್ರೀ ಮಾರಮ್ಮದೇವಿ</p>
                    </div>

                    <div className="tl-content">
                        <h1 className="fs4 text--accent ttu">ಶ್ರೀ ಮಾರಮ್ಮದೇವಿ ಮತ್ತು ಶ್ರೀ ಪಟ್ಟಲ್ಲದಮ್ಮ ಶ್ರೀ ಕೊಲ್ಲಾಪುರದಮ್ಮ</h1>
                        <p className="fs6">
                            ಶ್ರೀ ಮಾರಿಯಮ್ಮ ದೇವಾಲಯವು ಈ ದೈವಿಕ ಪವಿತ್ರ ಕ್ಷೇತ್ರ ವ್ಯಾಪ್ತಿಯಲ್ಲಿದೆ. ಶ್ರೀ ಪಟ್ಟಲ್ಲದಮ್ಮ ಶ್ರೀ ಕೊಲ್ಲಾಪುರದಮ್ಮ ದೇವಸ್ಥಾನಕ್ಕೆ ಭಕ್ತರು ಆಗಮಿಸಿದಾಗ ದೇವರ ಆಶೀರ್ವಾದ ಪಡೆಯಲು ಶ್ರೀ ಮಾರಿಯಮ್ಮ ದೇವಸ್ಥಾನಕ್ಕೆ ಭೇಟಿ ನೀಡುತ್ತಾರೆ.
                        </p>
                    </div>

                </div>

                <div className="tl-item">

                    <div className="tl-bg" style={{ backgroundImage: 'url(' + shivaskandh + ')' }}></div>

                    <div className="tl-year">
                        <p className="f2 heading--sanSerif">ಶ್ರೀ ಸ್ಕಂದ ಶಿವ</p>
                    </div>

                    <div className="tl-content">
                        <h1 className="fs4 text--accent ttu">ಭಗವಾನ್ ಶ್ರೀ ಸ್ಕಂದ ಮತ್ತು ಭಗವಾನ್ ಶ್ರೀ ಶಿವ</h1>
                        <p className="fs6">ಸುಬ್ರಹ್ಮಣ್ಯ ಮತ್ತು ಶಿವನ ಆಶೀರ್ವಾದವನ್ನೂ ಪಡೆಯಿರಿ. ಈ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಸ್ಥಾನವು ಕುಕ್ಕೆ ಸುಬ್ರಹ್ಮಣ್ಯ ದೇವಸ್ಥಾನದಷ್ಟು ಶಕ್ತಿಶಾಲಿಯಾಗಿದೆ. ಭಕ್ತರು ಆಶೀರ್ವಾದ ಪಡೆದಿದ್ದಾರೆ ಮತ್ತು ಅವರ ಸಮಸ್ಯೆಗಳಿಂದ ಮುಕ್ತಿ ಪಡೆದಿದ್ದಾರೆ.</p>
                    </div>

                </div>

                <div className="tl-item">

                    <div className="tl-bg" style={{ backgroundImage: 'url(' + basavanna + ')' }}></div>

                    <div className="tl-year">
                        <p className="f2 heading--sanSerif">ಶ್ರೀ ಬಸವಣ್ಣ</p>
                    </div>

                    <div className="tl-content">
                        <h1 className="fs4 text--accent ttu">ಭಗವಾನ್ ಶ್ರೀ ಬಸವಣ್ಣ</h1>
                        <p className="fs6">ಚಿಕರಸಿನಕೆರೆ ಕಾಲಭೈರವೇಶ್ವರ ದೇವಸ್ಥಾನದಲ್ಲಿ ಬಸಪ್ಪನ ಕುರಿತು ಹಲವು ಪವಾಡಗಳಿವೆ. ಈ ದೇವಾಲಯದ ಸ್ವಾಮಿ ಬಸವಣ್ಣ ಕೂಡ ಕಾಲಭೈರವೇಶ್ವರ ದೇವಾಲಯದ ಬಸಪ್ಪನಂತೆ ದೈವಿಕರಾಗಿದ್ದಾರೆ. ಇದು ಅನೇಕ ಭಕ್ತರನ್ನು ಆಶೀರ್ವದಿಸಿದೆ ಮತ್ತು ಅವರ ಪಾಪಗಳಿಂದ ಅವರನ್ನು ಗುಣಪಡಿಸಿದೆ.</p>
                    </div>

                </div>
            </section>
            <Temple
                name='ದೇವಾಲಯದ ಸಂಕ್ಷಿಪ್ತ ಅವಲೋಕನ'
                imgsrc={alankara}
                visit='/contact'
                btnname="Contact Now"
            />
        </>
    )
}

export default About
