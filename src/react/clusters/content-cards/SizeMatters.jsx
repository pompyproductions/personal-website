import React from 'react';
import screenshot from "../../../assets/screenshot-sizematters.png";
import Bubbles from '../../canvas/Bubbles.jsx';
import IconButton from '../../components/IconButton.jsx';
import TextCouple from '../../components/TextCouple.jsx';
import ExpandText from '../../components/ExpandText.jsx';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

const SizeMatters = () => {
    function handleButtonClick(e) {
        window.open(e.target.getAttribute("data-href"), "_blank");
    }
    function handleImageClick(e) {
        e.target.classList.toggle("active");
    }
    return (
        <article className="content-card">
            <Bubbles/>
            <div className="img-wrapper">
                <img 
                    src={screenshot} 
                    alt="Screenshot of the game." 
                    onClick={handleImageClick}
                />
            </div>
            <section className="content-bit">
                <h2>Size Matters</h2>
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
            </section>
            <div className="flex-spacer"></div>
            <section className="content-bit">
                <IconButton 
                    icon={faGamepad} 
                    href="https://pompyproductions.itch.io/size-matters" 
                    onClick={handleButtonClick}>Play on itch.io</IconButton>
                <IconButton 
                    icon={faGithub}
                    href="https://github.com/pompyproductions/size-matters"
                    onClick={handleButtonClick}>Visit GitHub repository</IconButton>
                <div className="hsep"></div>
                <ul>
                    <li><TextCouple title="Last updated">June 2021</TextCouple></li>
                </ul>
            </section>
        </article>
    )
}

export default SizeMatters;