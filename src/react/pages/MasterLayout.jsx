import React from "react";

import Header from "../clusters/Header.jsx";
import HamburgerMenu from "../clusters/HamburgerMenu.jsx";
import Footer from "../clusters/Footer.jsx";

import PageGreeting from "../components/PageGreeting.jsx"


const MasterLayout = () => {

    return (
        <>
            <HamburgerMenu />
            <Header />
            <main>
                <PageGreeting />
                <p>I'm Eren Gazioglu, a self-taught front-end developer with a background in architecture.</p>
                <p>You can find the source code for this webpage following this link. Feel free to copy things or to reach out if you need any clarifications!</p>
            </main>
            <Footer />
        </>
    )
}

export default MasterLayout;