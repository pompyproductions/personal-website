import React from 'react';
import profilePicture from "../../../assets/profile.jpg";
import Bubbles from '../../canvas/Bubbles.jsx';
import ExpandText from '../../components/ExpandText.jsx';
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
                    <li><TextCouple title="Birth">Istanbul, 21 Nov. 1994</TextCouple></li>
                    <li><TextCouple title="Citizenships">Turkey, Portugal</TextCouple></li>
                </ul>
                <ExpandText>
                    <p>
                        Born in Istanbul (TR) in 1994, relocated to Milan (IT) in 2012 for architecture studies, and then to Lisbon (PT) in 2015 to finish the master's degree. Currently in the process of transitioning to Paris (FR).
                    </p>
                    <p className="hidden">
                    Originally began learning programming and digital arts for game development (Python, Godot, Blender, Aseprite) during an unintentional break caused by the COVID-19 lockdown in 2019. This gradually developed a broader sense of appreciation and curiosity for programming (especially regarding GUI), which I continued pursuing through frontend development while actively pursuing an architecture career. 
                    </p>
                </ExpandText>
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