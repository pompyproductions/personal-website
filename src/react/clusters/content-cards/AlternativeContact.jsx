import React from 'react';
import Bubbles from '../../canvas/Bubbles.jsx';
import IconButton from '../../components/IconButton.jsx';
import TextCouple from '../../components/TextCouple.jsx';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const AlternativeContact = () => {
    function handleImageClick(e) {
        e.target.classList.toggle("active");
    }
    function sendEmail() {
        window.open('mailto:eren.g94@gmail.com?subject=Let\'s get in touch');
    }
    return (
        <article className="content-card">
            <Bubbles/>
            <h2>Alternatives</h2>
            <p>
                You can also reach me through my social media profiles linked below,
                or send me an email directly.
            </p>
            <div className="flex-spacer"></div>
            <section className="content-bit">
                <IconButton icon={faPaperPlane} onClick={sendEmail}>eren.g94@gmail.com</IconButton>
                <div className="hsep"></div>
                <ul>
                    <li>
                        <TextCouple title="LinkedIn">
                            <a href="https://www.linkedin.com/in/erengazioglu/"target="_blank">/erengazioglu/</a>
                        </TextCouple>
                    </li>
                    <li>
                        <TextCouple title="Instagram">
                            <a href="https://www.instagram.com/erengazioglu/" target="_blank">/erengazioglu/</a>
                        </TextCouple>
                    </li>
                    <li>
                        <TextCouple title="Facebook">
                            <a href="https://www.facebook.com/erengazioglu/" target="_blank">/erengazioglu/</a>
                        </TextCouple>
                    </li>
                </ul>
            </section>
        </article>
    )
}

export default AlternativeContact;