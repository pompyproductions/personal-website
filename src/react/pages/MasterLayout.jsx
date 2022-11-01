import React from "react";

import { Route, Routes } from "react-router-dom";

import Header from "../clusters/Header.jsx";
import HamburgerMenu from "../clusters/HamburgerMenu.jsx";
import Footer from "../clusters/Footer.jsx";
import Footer2 from "../clusters/Footer2.jsx";

import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import Portfolio from "./Portfolio.jsx";
import Contact from "./Contact.jsx";


const MasterLayout = () => {

    return (
        <>
            <HamburgerMenu />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            <Footer2 />
        </>
    )
}

export default MasterLayout;