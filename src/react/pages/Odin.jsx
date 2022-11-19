import React from 'react';

import IconButton from '../components/IconButton.jsx';
import Bubbles from '../canvas/Bubbles.jsx';
import ExpandText from '../components/ExpandText.jsx';
import ContentCard from "../clusters/ContentCard.jsx";

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

            <ContentCard 
                banner
                title="The Odin Project"
                image={[odinLogo, "The Odin Project logo."]}
            >
                <p>
                    Page under construction.
                </p>
                <p>
                    In the meantime, you can find some relevant links in the cards that follow.
                </p>
                <div className='flex-spacer'></div>
                <div className='hsep'></div>
                <IconButton strip icon={faGlobe}>Homepage</IconButton>
                <IconButton strip icon={faGlobe}>Curriculum</IconButton>
            </ContentCard>

            {/* <ContentCard
                title="The Odin Project homepage"
                image={[odinLogo, "The Odin Project logo."]}
            >
                <p>
                    This is where you can find information about the project, 
                    and view the full curriculum.
                </p>

            </ContentCard> */}

            <ContentCard
                title="Assignment 07: Admin Dashboard"
                image={[odinAdmin, "Screenshot from Admin Dashboard."]}
            >
                <section className='content-bit'>
                    <ExpandText>
                        <p>
                            A full Dashboard mock-up page, relying on CSS Grid as much as possible.
                        </p>
                        <p className='hidden'>
                            Used SASS for the first time. Implemented responsive design and some interactivity to the elements involved.
                        </p>
                    </ExpandText>
                    <div className='flex-spacer'></div>
                    <div className='hsep'></div>
                    <IconButton icon={faDisplay}>Live Preview</IconButton>
                    <IconButton icon={faGithub}>Github Repository</IconButton>
                </section>
            </ContentCard>

            <ContentCard
                title="Assignment 06: Newsletter Form"
                image={[odinNewsletter, "Screenshot from Sign-up Form."]}
            >
                <section className='content-bit'>
                    <ExpandText>
                        <p>
                            A sign-up form mock-up for an imaginary service.
                        </p>
                        <p className='hidden'>
                            While a design file was provided by The Odin Project, the final design diverges from the original in a few points.
                            Implemented a ribbon with a "background blurring effect", added a tinted cover image that I made myself, and
                            changed the look and feel of the form itself.
                        </p>
                    </ExpandText>
                    <div className='flex-spacer'></div>
                    <div className='hsep'></div>
                    <IconButton icon={faDisplay}>Live Preview</IconButton>
                    <IconButton icon={faGithub}>Github Repository</IconButton>
                </section>
            </ContentCard>

            <ContentCard
                title="Assignment 05: Verbose Calculator"
                image={[odinCalc, "Screenshot from Verbose Calculator."]}
            >
                <section className='content-bit'>
                    <ExpandText>
                        <p>
                            On-screen calculator project using vanilla JS.
                        </p>
                        <p className='hidden'>
                            While this project was mainly to consolidate basic JavaScript knowledge, I tried to make something more
                            complex and meaningful for this app. I decided to divide the screen into parts and have a section that
                            prints out the operations, effectively serving as an "operation history" module.
                        </p>
                        <p className='hidden'>
                            At a certain point, I decided to stop working on it and move on with my learning, since it was taking a lot of time
                            to hunt all the bugs and develop features in my then-limited JS knowledge.
                        </p>
                    </ExpandText>
                    <div className='flex-spacer'></div>
                    <div className='hsep'></div>
                    <IconButton icon={faDisplay}>Live Preview</IconButton>
                    <IconButton icon={faGithub}>Github Repository</IconButton>
                </section>
            </ContentCard>

            <ContentCard
                title="Assignment 04: Verbose Calculator"
                image={[odinEAS, "Screenshot from Odin Etch-a-Sketch project."]}
            >
                <section className='content-bit'>
                    <ExpandText>
                        <p>
                            An on-screen sketchpad, copying the functionality of a classic Etch-a-Sketch.
                        </p>
                        <p className='hidden'>
                            Instead of sticking to a fixed x:y ratio, I went with a customizeable version while making sure that
                            it'll <em>always fit in the screen</em>.
                        </p>
                    </ExpandText>
                    <div className='flex-spacer'></div>
                    <div className='hsep'></div>
                    <IconButton icon={faDisplay}>Live Preview</IconButton>
                    <IconButton icon={faGithub}>Github Repository</IconButton>
                </section>
            </ContentCard>

            <ContentCard
                title="Assignment 03: Rock-Paper-Scissors"
                image={[odinRPS, "Screenshot from Odin Etch-a-Sketch project."]}
            >
                <section className='content-bit'>
                    <ExpandText>
                        <p>
                            Rock-Paper-Scissors game against simple AI.
                        </p>
                        <p className='hidden'>
                            This project had two stages: the first step was to implement the game logic (purely JS on the browser console),
                            and the second was to design a UI for interactivity. I tried my hand at scene-switching
                            and dynamically generating pages <em>on vanilla JS,</em> which ended with me shelving the project
                            on account on how messy it got.
                        </p>
                    </ExpandText>
                    <div className='flex-spacer'></div>
                    <div className='hsep'></div>
                    <IconButton icon={faDisplay}>Live Preview</IconButton>
                    <IconButton icon={faGithub}>Github Repository</IconButton>
                </section>
            </ContentCard>

            <ContentCard
                title="Assignment 02: Landing"
                image={[odinLanding, "Screenshot from Odin Landing page project."]}
            >
                <section className='content-bit'>
                    <ExpandText>
                        <p>
                            A landing page mock-up for an imaginary service.
                        </p>
                        <p className='hidden'>
                            While a design file was provided with by The Odin Project, I added some tweaks here and there, and also
                            tried my hand at hover and click animations. It is not responsive, since it was an assignment at a
                            very early stage in the curriculum.
                        </p>
                    </ExpandText>
                    <div className='flex-spacer'></div>
                    <div className='hsep'></div>
                    <IconButton icon={faDisplay}>Live Preview</IconButton>
                    <IconButton icon={faGithub}>Github Repository</IconButton>
                </section>
            </ContentCard>

            <ContentCard
                title="Assignment 01: Recipes"
                image={[odinRecipes, "Screenshot from Odin Recipe page project."]}
            >
                <section className='content-bit'>
                    <ExpandText>
                        <p>
                        A quick-and-dirty HTML page for cooking recipes.
                        </p>
                        <p className='hidden'>
                            Intended as an early HTML exercise, it was meant to have no CSS styling at all; though it felt a bit sad, 
                            so I ended up adding a font and a color anyway.
                        </p>
                    </ExpandText>
                    <div className='flex-spacer'></div>
                    <div className='hsep'></div>
                    <IconButton icon={faDisplay}>Live Preview</IconButton>
                    <IconButton icon={faGithub}>Github Repository</IconButton>
                </section>
            </ContentCard>

        </main>
    )
}

export default Odin;