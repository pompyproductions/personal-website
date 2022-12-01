import React from 'react';
import { Link } from "react-router-dom";

import PageGreeting from "../components/PageGreeting.jsx";
import Bubbles from "../canvas/Bubbles.jsx";
import ContentCard from '../clusters/ContentCard.jsx';
import TextCouple from '../components/TextCouple.jsx';
import ExpandText from '../components/ExpandText.jsx';
import IconButton from '../components/IconButton.jsx';

// icons
import { faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <main className='home page-container'>
            <article className="content-card">
                <Bubbles />
                <PageGreeting />
                <section>
                    <p>I'm Eren Gazioglu, a self-taught front-end developer with a background in architecture.</p>
                    <p>
                        You can find the source code for this webpage following <a href="https://github.com/pompyproductions/personal-website" target="_blank">this link <i>(opens new window)</i>.</a>&nbsp;
                        Feel free to copy things or to <Link to="/contact">reach out</Link> if you need any clarifications!
                    </p>
                </section>
                <div className="flex-spacer"></div>
                <div className="hsep"></div>
                <TextCouple title="Last updated">
                    December 2022
                </TextCouple>
            </article>
            <ContentCard
                title="Latest news — December 2022"
            >
                <ExpandText>
                    <p>
                        The last month of 2022 is here, and Christmas is right around the corner! 
                        Which means this year's <a href="https://adventofcode.com/" target="_blank">Advent of Code</a> challenge is already underway. 
                    </p>
                    <p className="hidden">
                        For those who don't already know, <a href="https://adventofcode.com/" target="_blank">Advent of Code</a> is a programming challenge that consists of <strong>a series of puzzles laid out as an Advent calendar.</strong> It's great for keeping your skills sharp, and it's an event I look forward to every year.
                    </p>
                    <p className="hidden">
                        So as you may have already guessed, <strong>I'm joining in!</strong> I'll be publishing my solutions as well as my approach in the links below. <Link to="/contact">Get in touch</Link> if you're participating as well — the more the merrier!
                    </p>
                </ExpandText>
                    <div className="flex-spacer"></div>
                    <div className="hsep"></div>
                    <IconButton 
                        icon={faCode}
                        action="link"
                        href="./aoc2022">
                        My solutions
                    </IconButton>
                    <IconButton 
                        icon={faGlobe}
                        action="anchor"
                        href="https://adventofcode.com/">
                        Official website
                    </IconButton>

            </ContentCard>
        </main>
    )
}

export default Home;