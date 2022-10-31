import React, { useState, useEffect} from 'react';
import Passions from '../clusters/content-cards/Passions.jsx';
import PersonalInfo from "../clusters/content-cards/PersonalInfo.jsx"

const AboutMe = () => {
    function handleImageClick(e) {
        e.target.classList.toggle("active");
    }
    return (
        <main className="about-me page-container">
            <PersonalInfo />
            <Passions />
        </main>
    )
}

export default AboutMe;