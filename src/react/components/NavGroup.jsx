import React from "react";
import { useLocation } from "react-router-dom";

import NavItem from "./NavItem.jsx";
import { faCode, faAddressCard, faHome, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const NavGroup = (props) => {
    const location = useLocation();

    return (
        <nav className={props.className}>
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
    )
}

export default NavGroup;