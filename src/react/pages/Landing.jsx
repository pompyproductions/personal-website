import React from 'react';

import PageGreeting from "../components/PageGreeting.jsx";
import PageLogo from '../components/PageLogo.jsx';
import IconButton from "../components/IconButton.jsx"

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faFileLines, faGlobe } from '@fortawesome/free-solid-svg-icons';

import fileCv from "../../assets/eren-gazioglu-cv-2022.pdf";

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
                <IconButton icon={faGlobe} href="/" strip>
                    Personal website.
                </IconButton>
                <IconButton icon={faGithub} action="anchor" href="https://github.com/pompyproductions" strip>
                    Github profile (Projects).
                </IconButton>
                <IconButton icon={faFileLines} action="anchor" href="https://issuu.com/erengazioglu" strip>
                    Issuu profile (Print works).
                </IconButton>
                <IconButton icon={faDownload} action="download" href={fileCv} strip>
                    Download CV.
                </IconButton>
            </div>
        </main>
    )
}

export default Landing;