import React, { useState, useEffect, useRef } from "react";
import NavItem from "../components/NavItem.jsx";

import { faHome, faCode, faAddressCard, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const HamburgerMenu = () => {
    return <>
        <div className="backdrop hamburger active"></div>
        <nav className="hamburger active">
            <p>Current: Home</p>
            <li>
                <div className="hsep"></div>
                <NavItem icon={faHome} to="/">Home</NavItem>
                <NavItem icon={faAddressCard} to="/about-me">About me</NavItem>
                <NavItem icon={faCode} to="/portfolio">Portfolio</NavItem>
                <NavItem icon={faPaperPlane} to="/contact">Get in touch</NavItem>
            </li>
        </nav>
    </>
}

export default HamburgerMenu;