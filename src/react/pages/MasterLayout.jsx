import React from "react";

import { Route, Routes } from "react-router-dom";

import Header from "../clusters/Header.jsx";
import HamburgerMenu from "../clusters/HamburgerMenu.jsx";
import Footer from "../clusters/Footer.jsx";

import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";


const MasterLayout = () => {

    return (
        <>
            <HamburgerMenu />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
            </Routes>
            <Footer />
        </>
    )
}

export default MasterLayout;