import React from 'react';
import profilePicture from "../../../assets/profile.jpg";
import Bubbles from '../../canvas/Bubbles.jsx';
import TextCouple from '../../components/TextCouple.jsx';

const PersonalInfo = () => {
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
            <h2>Personal Information</h2>
            <section className="content-bit">
                <ul>
                    <li><TextCouple title="Name">Eren Gazioglu</TextCouple></li>
                    <li><TextCouple title="Nationality">Turkish</TextCouple></li>
                    <li><TextCouple title="Birth">Istanbul, 21 Nov. 2022</TextCouple></li>
                    <li><TextCouple title="Citizenship">Turkey, Portugal</TextCouple></li>
                </ul>
                <p>Solid HTML+CSS+JS foundation. Some long long text describing me. I'm not sure how to fill so much space up, but I will do it nonetheless.</p>
            </section>
            <div className="hsep"></div>
            <section className="content-bit">
                <ul>
                    <li><TextCouple title="Languages">Turkish (Native)</TextCouple></li>
                    <li><TextCouple title="">English (Bilingual)</TextCouple></li>
                    <li><TextCouple title="">Italian (Bilingual)</TextCouple></li>
                    <li><TextCouple title="">Portuguese (Bilingual)</TextCouple></li>
                    <li><TextCouple title="">French (Advanced)</TextCouple></li>
                    <li><TextCouple title="">Spanish (Advanced)</TextCouple></li>
                </ul>
            </section>
        </article>
    )
}

export default PersonalInfo;