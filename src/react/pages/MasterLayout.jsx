import React from "react";

import PageLogo from "../components/PageLogo.jsx";
import PageGreeting from "../components/PageGreeting.jsx"
import KnobSelector from "../components/KnobSelector.jsx";
import IconButton from "../components/IconButton.jsx";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import HamburgerMenu from "../clusters/HamburgerMenu.jsx";


const MasterLayout = () => {
    const toggleHamburger = () => {
        document.querySelectorAll(".hamburger").forEach(elem => {
            elem.classList.toggle("active");
        })
    }

    return (
        <>
            <HamburgerMenu />
            <header>
                <PageLogo strokeWeight={3} strokeColor="#fcf0f0"/>
                <KnobSelector />
                <IconButton icon={faBars} 
                    className="hamburger" 
                    onClick={toggleHamburger}/>
            </header>
            <main>
                <PageGreeting />
                <p>I'm Eren Gazioglu, a self-taught front-end developer with a background in architecture.</p>
                <p>You can find the source code for this webpage following this link. Feel free to copy things or to reach out if you need any clarifications!</p>
            </main>
            <footer>
                <p>Status: Currently under development.</p>
            </footer>
        </>
    )
}

export default MasterLayout;