import React from 'react';
import codepenPicture from "../../../assets/screenshot-codepen.png";
import Bubbles from '../../canvas/Bubbles.jsx';
import IconButton from '../../components/IconButton.jsx';
import TextCouple from '../../components/TextCouple.jsx';
import { faCodepen } from '@fortawesome/free-brands-svg-icons';

const Codepens = () => {
    function handleImageClick(e) {
        e.target.classList.toggle("active");
    }
    return (
        <article className="content-card">
            <Bubbles/>
            <div className="img-wrapper">
                <img 
                    src={codepenPicture} 
                    alt="Screenshot of a codepen." 
                    onClick={handleImageClick}
                />
            </div>
            <h2>Codepens</h2>
            <p>Components and utilities I made and published for prototyping and archive purposes.</p>
            <div className="flex-spacer"></div>
            <section className="content-bit">
                <IconButton 
                    icon={faCodepen} 
                    action="anchor" 
                    href="https://codepen.io/pompyproductions"
                >
                    Visit my Codepen profile
                </IconButton>
                <div className="hsep"></div>
                <ul>
                    <li><TextCouple title="Last updated">October 2022</TextCouple></li>
                </ul>
            </section>
        </article>
    )
}

export default Codepens;