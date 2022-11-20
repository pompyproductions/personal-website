import React from 'react';

import IconButton from '../components/IconButton.jsx';
import ExpandText from '../components/ExpandText.jsx';
import ContentCard from "../clusters/ContentCard.jsx";
import TextCouple from "../components/TextCouple.jsx";

import odinLogo from "../../assets/odin-logo.png";
import odinAdmin from "../../assets/odin-admin.png";
import odinNewsletter from "../../assets/odin-newsletter.png";
import odinCalc from "../../assets/odin-calculator.png";
import odinEAS from "../../assets/odin-eas.png";
import odinRPS from "../../assets/odin-rps.png";
import odinLanding from "../../assets/odin-landing.png";
import odinRecipes from "../../assets/odin-recipes.png";

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faDisplay } from '@fortawesome/free-solid-svg-icons';

const Odin = () => {
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
                <IconButton 
                    className="strip" 
                    icon={faGlobe}
                    action="anchor"
                    href="https://www.theodinproject.com/">Homepage
                </IconButton>
                <IconButton 
                    className="strip" 
                    icon={faGlobe}
                    action="anchor"
                    href="https://www.theodinproject.com/paths">Curriculum
                </IconButton>
            </ContentCard>

            <ContentCard
                title="Assignment 07: Admin Dashboard"
                image={[odinAdmin, "Screenshot from Admin Dashboard."]}
            >
                <ExpandText>
                    <p>
                        A full Dashboard mock-up page, relying on CSS Grid as much as possible.
                    </p>
                    <p className='hidden'>
                        Used SASS for the first time. Implemented responsive design and some interactivity to the elements involved.
                    </p>
                </ExpandText>
                <div className='flex-spacer'></div>
                <IconButton 
                    icon={faDisplay}
                    action="anchor"
                    href="https://pompyproductions.github.io/odin-admin/dist/index.html">Live Preview</IconButton>
                <IconButton 
                    icon={faGithub}
                    action="anchor"
                    href="https://github.com/pompyproductions/odin-admin">Github Repository</IconButton>
                <div className='hsep'></div>
                <ul>
                    <li><TextCouple title="Last updated">October 2022</TextCouple></li>
                </ul>
            </ContentCard>

            <ContentCard
                title="Assignment 06: Newsletter Form"
                image={[odinNewsletter, "Screenshot from Sign-up Form."]}
            >
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
                <IconButton 
                    icon={faDisplay}
                    action="anchor"
                    href="https://pompyproductions.github.io/odin-form/">Live Preview</IconButton>
                <IconButton 
                    icon={faGithub}
                    action="anchor"
                    href="https://github.com/pompyproductions/odin-form">Github Repository</IconButton>
                <div className='hsep'></div>
                <ul>
                    <li><TextCouple title="Last updated">September 2022</TextCouple></li>
                </ul>
            </ContentCard>

            <ContentCard
                title="Assignment 05: Verbose Calculator"
                image={[odinCalc, "Screenshot from Verbose Calculator."]}
            >
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
                <IconButton 
                    icon={faDisplay}
                    action="anchor"
                    href="https://pompyproductions.github.io/odin-calc/">Live Preview</IconButton>
                <IconButton 
                    icon={faGithub}
                    action="anchor"
                    href="https://github.com/pompyproductions/odin-calc">Github Repository</IconButton>
                <div className='hsep'></div>
                <ul>
                    <li><TextCouple title="Last updated">October 2022</TextCouple></li>
                </ul>
            </ContentCard>

            <ContentCard
                title="Assignment 04: Verbose Calculator"
                image={[odinEAS, "Screenshot from Odin Etch-a-Sketch project."]}
            >
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
                <IconButton 
                    icon={faDisplay}
                    action="anchor"
                    href="https://pompyproductions.github.io/odin-eas/">Live Preview</IconButton>
                <IconButton 
                    icon={faGithub}
                    action="anchor"
                    href="https://github.com/pompyproductions/odin-eas">Github Repository</IconButton>
                <div className='hsep'></div>
                <ul>
                    <li><TextCouple title="Last updated">August 2022</TextCouple></li>
                </ul>
            </ContentCard>

            <ContentCard
                title="Assignment 03: Rock-Paper-Scissors"
                image={[odinRPS, "Screenshot from Odin Etch-a-Sketch project."]}
            >
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
                <IconButton 
                    icon={faDisplay}
                    action="anchor"
                    href="https://pompyproductions.github.io/odin-rps/">Live Preview</IconButton>
                <IconButton 
                    icon={faGithub}
                    action="anchor"
                    href="https://github.com/pompyproductions/odin-rps">Github Repository</IconButton>
                <div className='hsep'></div>
                <ul>
                    <li><TextCouple title="Last updated">June 2022</TextCouple></li>
                </ul>
            </ContentCard>

            <ContentCard
                title="Assignment 02: Landing"
                image={[odinLanding, "Screenshot from Odin Landing page project."]}
            >
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
                <IconButton 
                    icon={faDisplay}
                    action="anchor"
                    href="https://pompyproductions.github.io/odin-landing/">Live Preview</IconButton>
                <IconButton 
                    icon={faGithub}
                    action="anchor"
                    href="https://github.com/pompyproductions/odin-landing">Github Repository</IconButton>
                <div className='hsep'></div>
                <ul>
                    <li><TextCouple title="Last updated">July 2022</TextCouple></li>
                </ul>
            </ContentCard>

            <ContentCard
                title="Assignment 01: Recipes"
                image={[odinRecipes, "Screenshot from Odin Recipe page project."]}
            >
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
                <IconButton 
                    icon={faDisplay}
                    action="anchor"
                    href="https://pompyproductions.github.io/odin-recipes/">Live Preview</IconButton>
                <IconButton 
                    icon={faGithub}
                    action="anchor"
                    href="https://github.com/pompyproductions/odin-recipes">Github Repository</IconButton>
                <div className='hsep'></div>
                <ul>
                    <li><TextCouple title="Last updated">May 2022</TextCouple></li>
                </ul>
            </ContentCard>

        </main>
    )
}

export default Odin;