import React from "react";

// future implementation?
// import tooltips from "../../tooltips.json"

// components
import ContentCard from "../clusters/ContentCard.jsx"
import ExpandText from "../components/ExpandText.jsx";
import IconButton from '../components/IconButton.jsx';
import TextCouple from "../components/TextCouple.jsx";

// images
import odinLogo from "../../assets/odin-logo.png"
import codepenPicture from "../../assets/screenshot-codepen.png";
import euler from "../../assets/euler.jpg";
import screenshot from "../../assets/screenshot-sizematters.png";

// icons
import { faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faDisplay, faGamepad } from '@fortawesome/free-solid-svg-icons';


const Portfolio = () => {
    return (
        <main className="portfolio page-container">
            <ContentCard hidden
                title="The Odin Project"
                image={[odinLogo, "The Odin Project logo."]}
            >
                <ExpandText>
                    <p>
                        Mini-project assignments built while following the Odin Project curriculum.
                    </p>
                    <p className='hidden'>
                        A free and open-source learning platform, The Odin Project is the one resource I heavily relied on for learning about web development.
                    </p>
                </ExpandText>
                <div className="flex-spacer"></div>
                <IconButton 
                    icon={faGlobe}
                    action="link"
                    href="./the-odin-project">
                    Projects
                </IconButton>
                <div className='hsep'></div>
                <ul>
                    <li><TextCouple title="Last updated">October 2022</TextCouple></li>
                </ul>
            </ContentCard>

            <ContentCard hidden
                title="Codepens"
                image={[codepenPicture, "Screenshot of a codepen."]}
            >
                <p>Components and utilities I made and published for prototyping and archive purposes.</p>
                <div className="flex-spacer"></div>
                <IconButton 
                    icon={faCodepen} 
                    action="anchor" 
                    href="https://codepen.io/pompyproductions">
                    Visit my Codepen profile
                </IconButton>
                <div className="hsep"></div>
                <ul>
                    <li><TextCouple title="Last updated">October 2022</TextCouple></li>
                </ul>
            </ContentCard>

            <ContentCard hidden
                title="Project Euler"
                image={[euler, "Portrait of Leonhard Euler."]}
                imageID="euler"
            >
                <ExpandText>
                    <p>
                        Problem-solving exercises that combine maths and programming.
                    </p>
                    <p className="hidden">
                        <i>From the official website:</i>
                    </p>
                    <p className="hidden">
                        <i>
                            Project Euler is a series of challenging mathematical/computer programming problems that will require more than just mathematical insights to solve.
                            Although mathematics will help you arrive at elegant and efficient methods,
                            the use of a computer and programming skills will be required to solve most problems.
                        </i>
                    </p>
                </ExpandText>
                <div className="flex-spacer"></div>
                <IconButton 
                    icon={faGithub} 
                    action="anchor"
                    href="https://github.com/pompyproductions/project-euler">
                    Visit GitHub repository
                </IconButton>
                <div className="hsep"></div>
                <ul>
                    <li><TextCouple title="Last updated">September 2022</TextCouple></li>
                </ul>
            </ContentCard>

            <ContentCard hidden
                title="Size Matters"
                image={[screenshot, "A screenshot from the game Size Matters."]}
            >
                <ExpandText>
                        <p>
                            A pixel-art game prototype made in Godot.
                        </p>
                        <p className="hidden">
                            A prototype made in a single weekend during the #GoGodotJam hosted on itch.io.
                        </p>
                        <p className="hidden">
                            Although it is unfinished as a game, I achieved my primary objective before shelving it for the time being:
                            hand-drawn pixel animations that look good, all made with just Godot and Aseprite.
                        </p>
                </ExpandText>
                <div className="flex-spacer"></div>
                <IconButton 
                    icon={faGamepad} 
                    action="anchor"
                    href="https://pompyproductions.itch.io/size-matters">
                    Play on itch.io
                </IconButton>
                <IconButton 
                    icon={faGithub}
                    action="anchor"
                    href="https://github.com/pompyproductions/size-matters">
                    Visit GitHub repository
                </IconButton>
                <div className="hsep"></div>
                <ul>
                    <li><TextCouple title="Last updated">June 2021</TextCouple></li>
                </ul>
            </ContentCard>
        </main>
    )
}

export default Portfolio;