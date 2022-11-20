import React from 'react';

import ContentCard from '../clusters/ContentCard.jsx';
import TextCouple from '../components/TextCouple.jsx';
import IconButton from '../components/IconButton.jsx';

import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <main className="contact page-container">
            <ContentCard
                banner
                title="Contact Form"
            >
                <section className="content-bit">
                    <p>
                        This contact form is currently under development. 
                        Please consider reaching me by the alternative means described in the next card.
                    </p>
                    <div className="flex-spacer"></div>
                    <div className="hsep"></div>
                    <ul>
                        <li><TextCouple title="Status">Under development</TextCouple></li>
                        <li><TextCouple title="Scheduled">November 2022</TextCouple></li>
                    </ul>
                </section>
            </ContentCard>
            <ContentCard
                title="Alternatives"
            >
                <section className='content-bit'>
                    <p>
                        You can also reach me through my social media profiles linked below,
                        or send me an email directly.
                    </p>
                    <IconButton icon={faPaperPlane} action="email">eren.g94@gmail.com</IconButton>
                    <div className="flex-spacer"></div>
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
            </ContentCard>
        </main>
    )
}

export default Contact;