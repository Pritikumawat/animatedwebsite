import React from "react";
import web from "./images/homee.jpeg";
import {NavLink} from "react-router-dom";
import Common from "./Common";
const About = () => {
    return (
        <>
      <Common name="Welcome to About page" imgsrc={web} visit="/contact" btn="contact now"/>
    
    </>
    );
};

export default About;