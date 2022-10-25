import React from "react";

import Header from "../clusters/Header.jsx";
import HamburgerMenu from "../clusters/HamburgerMenu.jsx";
import Footer from "../clusters/Footer.jsx";
import Home from "../pages/Home.jsx";
import AboutMe from "./AboutMe.jsx";


const MasterLayout = () => {

    return (
        <>
            <HamburgerMenu />
            <Header />
            <AboutMe />
            <Footer />
        </>
    )
}

export default MasterLayout;