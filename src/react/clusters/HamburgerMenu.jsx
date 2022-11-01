import React, { useEffect } from "react";

import NavGroup from "../components/NavGroup.jsx";

const HamburgerMenu = () => {
    const closeHamburger = () => {
        document.querySelectorAll(".hamburger").forEach(elem => {
            elem.classList.remove("active");
        })
    }
    return <>
        <div className="backdrop hamburger" onClick={closeHamburger}></div>
        <NavGroup className="hamburger"/>
    </>
}

export default HamburgerMenu;