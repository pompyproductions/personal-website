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
            <p>
                This contact form is currently under development. 
                Please consider reaching me by the alternative means described right below.
            </p>
            <div className="hsep"></div>
            <section className="content-bit">
                <ul>
                    <li><TextCouple title="Status">Under development</TextCouple></li>
                    <li><TextCouple title="Scheduled">November 2022</TextCouple></li>
                </ul>
            </section>
        </article>
    )
}

export default ContactForm;