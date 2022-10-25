import React from "react";

import Header from "../clusters/Header.jsx";
import HamburgerMenu from "../clusters/HamburgerMenu.jsx";
import Footer from "../clusters/Footer.jsx";
import Home from "../pages/Home.jsx";


const MasterLayout = () => {

    return (
        <>
            <HamburgerMenu />
            <Header />
            <Home />
            <Footer />
        </>
    )
}

export default MasterLayout;