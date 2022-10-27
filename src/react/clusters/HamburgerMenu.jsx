import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavItem from "../components/NavItem.jsx";

import { faHome, faCode, faAddressCard, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const HamburgerMenu = () => {
    const location = useLocation();
    return <>
        <div className="backdrop hamburger active"></div>
        <nav className="hamburger active">
            <p>
                Current: {
                    {
                        "/": "Home",
                        "/about-me": "About me",
                        "/portfolio": "Portfolio",
                        "/contact": "Contact"
                    }[location.pathname]
                }
            </p>
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