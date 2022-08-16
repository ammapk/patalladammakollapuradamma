import React from 'react';
import { NavLink } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';

const Card = ({ 
    imgsrc,
    title,
    content
}) => {

    return (
        <>
            <div className="col-md-12 col-sm-12 col-lg-12 mx-auto">
                <div className="card">
                    <img src={imgsrc} className="card-img-top" id="coverImg" alt="card" />
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{content}</p>
                        <NavHashLink to="/#poojatime" className="btn btn-primary">Go somewhere</NavHashLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
