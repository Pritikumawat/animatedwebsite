import React from "react";
import { NavLink } from "react-router-dom";
const Cards = (props) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-10">
            <div class="card" >
                <img src={props.imgsrc} className="card-img-top imageChnage img-fluid" alt="..." />
                <div className="card-body text-center">
                        <h5 className="card-title">{props.Cardtitle}</h5>
                        

                        <p className="card-text">{props.data}</p>
                    <NavLink to="#" class="btn btn-primary" id="somewhere">Go somewhere</NavLink>
                </div>
                </div>
                </div>
        </>
    );
};

export default Cards;