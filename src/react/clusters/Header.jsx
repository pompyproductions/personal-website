import React from "react";

import PageLogo from "../components/PageLogo.jsx";
import KnobSelector from "../components/KnobSelector.jsx";
import IconButton from "../components/IconButton.jsx";

import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const toggleHamburger = () => {
        document.querySelectorAll(".hamburger").forEach(elem => {
            elem.classList.toggle("active");
        })
    }

    return <header>
        <PageLogo strokeWeight={1} strokeColor="#fcf0f0"/>
        <KnobSelector />
        <IconButton icon={faBars} 
            className="hamburger" 
            onClick={toggleHamburger}/>
    </header>
}

export default Header;