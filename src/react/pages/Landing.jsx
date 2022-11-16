import React from 'react';
import { Link } from "react-router-dom";

import PageGreeting from "../components/PageGreeting.jsx";
import PageLogo from '../components/PageLogo.jsx';
import IconButton from "../components/IconButton.jsx"

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faFileLines, faGlobe } from '@fortawesome/free-solid-svg-icons';

const Landing = () => {
    return (
        <main className='landing'>
            <div className="container" id="logo">
                <PageLogo />
            </div>
            <div className="container" id="content">
                <PageGreeting />
                <p>
                    If you made it here, it means that you probably followed some sort of link. 
                </p>
                <h2>
                    Thank you for your interest!
                </h2>
                <p>
                    This landing page is still under construction, but
                    <em> all the information that will be displayed here in the future 
                    can be accessed by following the links below.</em>
                </p>
            </div>
            <div className="container" id="links">
                <IconButton strip icon={faGlobe} onClick={()=>{window.open("https://erengazioglu.com")}}>
                    Personal website.
                </IconButton>
                <IconButton strip icon={faGithub} onClick={()=>{window.open("https://github.com/pompyproductions")}}>
                    Github profile (Projects).
                </IconButton>
                <IconButton strip icon={faFileLines} onClick={()=>{window.open("https://issuu.com/erengazioglu")}}>
                    Issuu profile (Print works).
                </IconButton>
                <IconButton strip icon={faDownload}>
                    Download CV.
                </IconButton>
            </div>
        </main>
    )
}

export default Landing;