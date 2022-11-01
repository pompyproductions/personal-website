import React from 'react';
import profilePicture from "../../../assets/profile.jpg";
import Bubbles from '../../canvas/Bubbles.jsx';
import IconButton from '../../components/IconButton.jsx';
import TextCouple from '../../components/TextCouple.jsx';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectEuler = () => {
    function handleImageClick(e) {
        e.target.classList.toggle("active");
    }
    return (
        <article className="content-card">
            <Bubbles/>
            <div className="img-wrapper">
                <img 
                    src={profilePicture} 
                    alt="Portrait of Eren Gazioglu." 
                    onClick={handleImageClick}
                />
            </div>
            <h2>Project Euler</h2>
            <p>
                <i>From the official website:</i>
            </p>
            <p>
                Project Euler is a series of challenging mathematical/computer programming problems that will require more than just mathematical insights to solve. Although mathematics will help you arrive at elegant and efficient methods, the use of a computer and programming skills will be required to solve most problems.
            </p>
            <IconButton icon={faGithub}>Visit GitHub repository</IconButton>
            <div className="hsep"></div>
            <section className="content-bit">
                <ul>
                    <li><TextCouple title="Last updated">October 2022</TextCouple></li>
                </ul>
            </section>
        </article>
    )
}

export default ProjectEuler;