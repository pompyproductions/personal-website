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
                <NavItem icon={faHome}>Home</NavItem>
                <NavItem icon={faAddressCard}>About me</NavItem>
                <NavItem icon={faCode}>Portfolio</NavItem>
                <NavItem icon={faPaperPlane}>Get in touch</NavItem>
            </li>
        </nav>
    </>
}

export default HamburgerMenu;