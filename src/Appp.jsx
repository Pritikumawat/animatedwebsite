import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Wavbar from './Wavbar';
import Footer from './Footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
   
  } from "react-router-dom";

const Appp = () => {
    return (
        <>
              <Wavbar/>
        <Routes>
            
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/service" Component={Service} />
            <Route path="/contact" Component={Contact} />
         
        </Routes>
          <Footer/>
            </>
    );
};

export default Appp;
