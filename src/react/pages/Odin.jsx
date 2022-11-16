import React from 'react';
import IconButton from '../components/IconButton.jsx';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Odin = () => {
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
                <h2>The Odin Project homepage</h2>
                <p>
                    This is where you can find information about the project, 
                    and view the full curriculum.
                </p>
                <IconButton icon={faGlobe}>Homepage</IconButton>
                <IconButton icon={faGlobe}>Curriculum</IconButton>
            </article>
            <article className="content-card">
                <h2>Assignment repositories</h2>
                <p>
                    The Odin Project gives a lot of project assignments to consolidate the knowledge learned throughout the chapters.
                </p>
                <p>
                    These are set up as GitHub repositories and are also accessible through Live Previews (that you can find in the respective README.md file of each project).
                </p>
                
                <IconButton icon={faGlobe}>01 - Recipes</IconButton>
                <IconButton icon={faGlobe}>02 - Blabla</IconButton>
            </article>
        </main>
    )
}

export default Odin;