import React, { useState, useEffect } from "react";

import PageLogo from "../components/PageLogo.jsx";
import KnobSelector from "../components/KnobSelector.jsx";
import IconButton from "../components/IconButton.jsx";

import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    function handleResize() {
        setLogoWeight(window.innerWidth > 720 ? 1 : 2.5);
    };
    const [logoWeight, setLogoWeight] = useState(() => {
        return window.innerWidth > 720 ? 1 : 2.5
    });


    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, []);

    const toggleHamburger = () => {
        document.querySelectorAll(".hamburger").forEach(elem => {
            elem.classList.toggle("active");
        })
    }

    return <header>
        <PageLogo strokeWeight={logoWeight} strokeColor="#fcf0f0"/>
        <h1>erengazioglu.com</h1>
        {/* <KnobSelector /> */}
        <IconButton icon={faBars} 
            className="hamburger" 
            onClick={toggleHamburger}/>
    </header>
}

export default Header;