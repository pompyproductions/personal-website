import React from 'react';
import screenshot from "../../../assets/screenshot-sizematters.png";
import Bubbles from '../../canvas/Bubbles.jsx';
import IconButton from '../../components/IconButton.jsx';
import TextCouple from '../../components/TextCouple.jsx';
import ExpandText from '../../components/ExpandText.jsx';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const SizeMatters = () => {
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
                <IconButton icon={faGithub}>Visit GitHub repository</IconButton>
                <div className="hsep"></div>
                <ul>
                    <li><TextCouple title="Last updated">October 2022</TextCouple></li>
                </ul>
            </section>
        </article>
    )
}

export default SizeMatters;