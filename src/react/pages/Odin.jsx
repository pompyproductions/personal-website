import React from 'react';

import IconButton from '../components/IconButton.jsx';
import Bubbles from '../canvas/Bubbles.jsx';

import odinLogo from "../../assets/odin-logo.png"
import odinAdmin from "../../assets/odin-admin.png"
import odinNewsletter from "../../assets/odin-newsletter.png"
import odinCalc from "../../assets/odin-calculator.png"
import odinEAS from "../../assets/odin-eas.png"
import odinRPS from "../../assets/odin-rps.png"
import odinLanding from "../../assets/odin-landing.png"
import odinRecipes from "../../assets/odin-recipes.png"

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
                    A full Dashboard mock-up page, relying on CSS Grid as much as possible.
                </p>
                <p>
                    Used SASS for the first time. Implemented responsive design and some interactivity to the elements involved.
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
                    A sign-up form mock-up for an imaginary service. 
                </p>
                <p>
                    While a design file was provided by The Odin Project, the final design diverges from the original in a few points. 
                    Implemented a ribbon with a "background blurring effect", added a tinted cover image that I made myself, and 
                    changed the look and feel of the form itself.
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
                    On-screen calculator project with vanilla JS.
                </p>
                <p>
                    While this project was mainly to consolidate basic JavaScript knowledge, I tried to make something more 
                    complex and meaningful for this app. I decided to divide the screen into parts and have a section that 
                    prints out the operations, effectively serving as an "operation history" module.
                </p>
                <p>
                    At a certain point, I decided to stop working on it and move on with my learning, since it was taking a lot of time
                    to hunt all the bugs and develop features in my then-limited JS knowledge.
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
                    An on-screen sketchpad, copying the functionality of a classic Etch-a-Sketch.
                </p>
                <p>
                    Instead of sticking to a fixed x:y ratio, I went with a customizeable version while making sure that 
                    it'll <em>always fit in the screen</em>.
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
                    Rock-Paper-Scissors game against simple AI.
                </p>
                <p>
                    This project had two stages: the first step was to implement the game logic (purely JS on the browser console), 
                    and the second was to design a UI for interactivity. I tried my hand at scene-switching 
                    and dynamically generating pages <em>on vanilla JS,</em> which ended with me shelving the project 
                    on account on how messy it got.
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
                    A landing page mock-up for an imaginary service.
                </p>
                <p>
                    While a design file was provided with by The Odin Project, I added some tweaks here and there, and also 
                    tried my hand at hover and click animations. It is not responsive, since it was an assignment at a 
                    very early stage in the curriculum.
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
                    A quick-and-dirty HTML page for cooking recipes.
                </p>
                <p>
                    Intended as an early HTML exercise, it was meant to have no CSS styling at all; though it felt a bit sad, 
                    so I ended up adding a font and a color anyway.
                </p>
                <IconButton icon={faDisplay}>Live Preview</IconButton>
                <IconButton icon={faGithub}>Github Repository</IconButton>
            </article>
        </main>
    )
}

export default Odin;