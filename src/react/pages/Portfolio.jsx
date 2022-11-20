import React from "react";

import tooltips from "../../tooltips.json"

import ContentCard from "../clusters/ContentCard.jsx"
import ExpandText from "../components/ExpandText.jsx";
import IconButton from '../components/IconButton.jsx';
import TextCouple from "../components/TextCouple.jsx";

import odinLogo from "../../assets/odin-logo.png"

import Codepens from "../clusters/content-cards/Codepens.jsx";
import SizeMatters from "../clusters/content-cards/SizeMatters.jsx";
import ProjectEuler from "../clusters/content-cards/ProjectEuler.jsx";

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faDisplay } from '@fortawesome/free-solid-svg-icons';


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
                    href="./the-odin-project"
                    >Projects</IconButton>
                <div className='hsep'></div>
                <ul>
                    <li><TextCouple title="Last updated">October 2022</TextCouple></li>
                </ul>
            </ContentCard>

            <Codepens />
            <ProjectEuler />
            <SizeMatters />
        </main>
    )
}

export default Portfolio;