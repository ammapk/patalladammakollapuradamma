import React from 'react'
// import about from "../images/about.svg";
import Common from './Common'
import amma from "../images/image3.jpg";

const Miracle = () => {
    return (
        <>
            <Common 
                name='Welcome to About Page' 
                imgsrc={amma} 
                visit='/contact' 
                btnname="Contact Now" 
            />
        </>
    )
}

export default Miracle
