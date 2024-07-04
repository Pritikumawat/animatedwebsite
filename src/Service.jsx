import React from "react";
import web from "./images/web.jpeg";
import app from "./images/app.jpeg";
import Software from "./images/software.jpeg";
import digital from "./images/digital.jpeg";
import graphic from "./images/graphic.png";
import  android from "./images/android.jpeg";
import Cards from "./Cards";

const Service = () => {
    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Our Services</h1>
        </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5">
                        
                            <Cards
                                Cardtitle="Web Development"
                                imgsrc={web}
                                data=""
                            />
                            <Cards
                                Cardtitle="App Devlopment"
                                imgsrc={app}
                                data=""
                            />
                            <Cards
                                Cardtitle="Software Development"
                                imgsrc={Software}
                                data=""
                            />
                            <Cards
                                Cardtitle="Digital Marketing"
                                imgsrc={digital}
                                data=""
                            />
                            <Cards
                                Cardtitle="Android development"
                                imgsrc={android}
                                data=""
                            />
                            <Cards
                                Cardtitle="Graphic Designing"
                                imgsrc={graphic}
                                data=""
                                />
                            
                        </div>

                    </div>
                </div>
        </div>
        </>
    );
};

export default Service;