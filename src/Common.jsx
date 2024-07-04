import React from "react";
import web from "./images/homee.jpeg";
import {NavLink} from "react-router-dom";

const Common = (props) => {
    return (
        <>
        <section id="header" className="">
            <div className="container-fluid nav_bg">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-10 my-5 " id="flexing">
                        <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 text-center">
                            <h1>
                               {props.name} <strong className="Brand-name">Prestech</strong>
                            </h1>
                            <h2 className="my-3">
                                we are the team of talented developer making websites
                            </h2>
                            <div className="mt-3">
                                        <NavLink to={props.visit} className="btnn " >{props.btn}</NavLink>
                            </div>
                        </div>
                        <div className="col-md-6 order-1 order-lg-2 d-flex justify-content-center align-items-center header-img">
                                <img src={props.imgsrc} className="img-fluid animated"  alt=""/>
                        </div>
                            </div>
                            </div>
                    
                </div>
            </div>
    </section>
    
    </>
    );
};

export default Common;