import React from 'react';
import ContactForm from '../clusters/content-cards/ContactForm.jsx';
import AlternativeContact from '../clusters/content-cards/AlternativeContact.jsx';

const Contact = () => {
    return (
        <main className="contact page-container">
            <ContactForm />
            <AlternativeContact />
        </main>
    )
}

export default Contact;