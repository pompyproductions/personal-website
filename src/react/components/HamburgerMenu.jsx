import React, { useState, useEffect, useRef } from "react";

const HamburgerMenu = () => {
    return <>
        <div className="backdrop active"></div>
        <nav className="hamburger active">
            <p>Current: Home</p>
            <li>
                <ul><a>Home</a></ul>
                <ul><a>About me</a></ul>
                <ul><a>Portfolio</a></ul>
                <ul><a>Contact</a></ul>
            </li>
        </nav>
    </>
}

export default HamburgerMenu;