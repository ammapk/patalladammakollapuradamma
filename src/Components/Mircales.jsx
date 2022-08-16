import React from 'react'
// import about from "../images/about.svg";
import Common from './Common'
import amma from "../images/image3.jpg";

const Miracle = () => {
    return (
        <>
            <Common 
                name='ಆಧ್ಯಾತ್ಮಿಕ ಪವಾಡಗಳು' 
                imgsrc={amma} 
                visit='/contact' 
                btnname="ಈಗ ಸಂಪರ್ಕಿಸಿ" 
            />
        </>
    )
}

export default Miracle
