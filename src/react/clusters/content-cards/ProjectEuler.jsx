import React from 'react';
import euler from "../../../assets/euler.jpg";
import Bubbles from '../../canvas/Bubbles.jsx';
import IconButton from '../../components/IconButton.jsx';
import TextCouple from '../../components/TextCouple.jsx';
import ExpandText from '../../components/ExpandText.jsx';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ProjectEuler = () => {
    function handleButtonClick() {
        window.open("https://github.com/pompyproductions/project-euler", "_blank");
    }

    function handleImageClick(e) {
        e.target.classList.toggle("active");
    }
    return (
        <article className="content-card">
            <Bubbles/>
            <div className="img-wrapper">
                <img 
                    id="euler" 
                    src={euler} 
                    alt="Portrait of Eren Gazioglu." 
                    onClick={handleImageClick}
                />
            </div>
            <section className="content-bit">
                <h2>Project Euler</h2>
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
            </section>
            <div className="flex-spacer"></div>
            <section className="content-bit">
                <IconButton icon={faGithub} onClick={handleButtonClick}>Visit GitHub repository</IconButton>
                <div className="hsep"></div>
                <ul>
                    <li><TextCouple title="Last updated">October 2022</TextCouple></li>
                </ul>
            </section>
        </article>
    )
}

export default ProjectEuler;