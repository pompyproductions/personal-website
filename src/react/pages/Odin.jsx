import React from 'react';

import IconButton from '../components/IconButton.jsx';
import Bubbles from '../canvas/Bubbles.jsx';

import odinLogo from "../../assets/odin-logo.png"
import odinAdmin from "../../assets/odin-admin.png"
import odinCalc from "../../assets/odin-calculator.png"
import odinEAS from "../../assets/odin-eas.png"
import odinNewsletter from "../../assets/odin-newsletter.png"
import odinRecipes from "../../assets/odin-recipes.png"
import odinRPS from "../../assets/odin-rps.png"
import odinLanding from "../../assets/odin-landing.png"

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faDisplay } from '@fortawesome/free-solid-svg-icons';

const Odin = () => {
    function handleImageClick(e) {
        e.target.classList.toggle("active");
    }
    return (
        <main className='odin page-container'>
            <article className='content-card'>
                <h2>The Odin Project</h2>
                <p>
                    Page under construction.
                </p>
                <p>
                    In the meantime, you can find some relevant links in the cards that follow.
                </p>
            </article>
            <article className="content-card">
                <Bubbles/>
                <div className="img-wrapper">
                    <img 
                        src={odinLogo} 
                        alt="The Odin Project logo." 
                        onClick={handleImageClick}
                    />
                </div>
                <h2>The Odin Project homepage</h2>
                <p>
                    This is where you can find information about the project, 
                    and view the full curriculum.
                </p>
                <IconButton icon={faGlobe}>Homepage</IconButton>
                <IconButton icon={faGlobe}>Curriculum</IconButton>
            </article>
            <article className="content-card">
                <Bubbles/>
                <div className="img-wrapper">
                    <img 
                        src={odinAdmin} 
                        alt="Portrait of Eren Gazioglu." 
                        onClick={handleImageClick}
                    />
                </div>
                <h2>Assignment 07: Admin Dashboard</h2>
                <p>
                    Project description TBD.
                </p>
                <p>
                    (Make this an EXPAND container).
                </p>
                <IconButton icon={faDisplay}>Live Preview</IconButton>
                <IconButton icon={faGithub}>Github Repository</IconButton>
            </article>
            <article className="content-card">
                <Bubbles/>
                <div className="img-wrapper">
                    <img 
                        src={odinNewsletter} 
                        alt="Portrait of Eren Gazioglu." 
                        onClick={handleImageClick}
                    />
                </div>
                <h2>Assignment 06: Newsletter Form</h2>
                <p>
                    Project description TBD.
                </p>
                <p>
                    (Make this an EXPAND container).
                </p>
                <IconButton icon={faDisplay}>Live Preview</IconButton>
                <IconButton icon={faGithub}>Github Repository</IconButton>
            </article>
            <article className="content-card">
                <Bubbles/>
                <div className="img-wrapper">
                    <img 
                        src={odinCalc} 
                        alt="Portrait of Eren Gazioglu." 
                        onClick={handleImageClick}
                    />
                </div>
                <h2>Assignment 05: Verbose Calculator</h2>
                <p>
                    Project description TBD.
                </p>
                <p>
                    (Make this an EXPAND container).
                </p>
                <IconButton icon={faDisplay}>Live Preview</IconButton>
                <IconButton icon={faGithub}>Github Repository</IconButton>
            </article>
            <article className="content-card">
                <Bubbles/>
                <div className="img-wrapper">
                    <img 
                        src={odinEAS} 
                        alt="Portrait of Eren Gazioglu." 
                        onClick={handleImageClick}
                    />
                </div>
                <h2>Assignment 04: Etch-a-Sketch</h2>
                <p>
                    Project description TBD.
                </p>
                <p>
                    (Make this an EXPAND container).
                </p>
                <IconButton icon={faDisplay}>Live Preview</IconButton>
                <IconButton icon={faGithub}>Github Repository</IconButton>
            </article>
            <article className="content-card">
                <Bubbles/>
                <div className="img-wrapper">
                    <img 
                        src={odinRPS} 
                        alt="Portrait of Eren Gazioglu." 
                        onClick={handleImageClick}
                    />
                </div>
                <h2>Assignment 03: Rock-Paper-Scissors</h2>
                <p>
                    Project description TBD.
                </p>
                <p>
                    (Make this an EXPAND container).
                </p>
                <IconButton icon={faDisplay}>Live Preview</IconButton>
                <IconButton icon={faGithub}>Github Repository</IconButton>
            </article>
            <article className="content-card">
                <Bubbles/>
                <div className="img-wrapper">
                    <img 
                        src={odinLanding} 
                        alt="Portrait of Eren Gazioglu." 
                        onClick={handleImageClick}
                    />
                </div>
                <h2>Assignment 02: Landing Page</h2>
                <p>
                    Project description TBD.
                </p>
                <p>
                    (Make this an EXPAND container).
                </p>
                <IconButton icon={faDisplay}>Live Preview</IconButton>
                <IconButton icon={faGithub}>Github Repository</IconButton>
            </article>
            <article className="content-card">
                <Bubbles/>
                <div className="img-wrapper">
                    <img 
                        src={odinRecipes} 
                        alt="Portrait of Eren Gazioglu." 
                        onClick={handleImageClick}
                    />
                </div>
                <h2>Assignment 01: Recipes</h2>
                <p>
                    Project description TBD.
                </p>
                <p>
                    (Make this an EXPAND container).
                </p>
                <IconButton icon={faDisplay}>Live Preview</IconButton>
                <IconButton icon={faGithub}>Github Repository</IconButton>
            </article>
        </main>
    )
}

export default Odin;