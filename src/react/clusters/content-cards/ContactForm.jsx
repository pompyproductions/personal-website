import React from 'react';
import Bubbles from '../../canvas/Bubbles.jsx';
import IconButton from '../../components/IconButton.jsx';
import TextCouple from '../../components/TextCouple.jsx';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ContactForm = () => {
    function handleImageClick(e) {
        e.target.classList.toggle("active");
    }
    return (
        <article className="content-card">
            <Bubbles/>
            <h2>Contact Form</h2>
            <p>Components and utilities I made and published for prototyping and archive purposes.</p>
            <IconButton icon={faPaperPlane}>Visit my Codepen profile</IconButton>
            <div className="hsep"></div>
            <section className="content-bit">
                <ul>
                    <li><TextCouple title="Last updated">October 2022</TextCouple></li>
                </ul>
            </section>
        </article>
    )
}

export default ContactForm;