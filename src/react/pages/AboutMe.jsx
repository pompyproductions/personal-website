import React, { useState, useEffect} from 'react';

import ContentCard from '../clusters/ContentCard.jsx';
import ExpandText from '../components/ExpandText.jsx';
import TextCouple from '../components/TextCouple.jsx';

import profilePicture from "../../assets/profile.jpg";

import Passions from '../clusters/content-cards/Passions.jsx';

const AboutMe = () => {
    return (
        <main className="about-me page-container">
            <ContentCard
                title="Personal Information"
                image={[profilePicture, "A black-and-white photo of Eren Gazioglu."]}
            >
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
                <div className="flex-spacer"></div>
                <div className="hsep"></div>
                <ul>
                    <li><TextCouple title="Languages">Turkish (Native)</TextCouple></li>
                    <li><TextCouple title="">English (Bilingual)</TextCouple></li>
                    <li><TextCouple title="">Italian (Bilingual)</TextCouple></li>
                    <li><TextCouple title="">Portuguese (Bilingual)</TextCouple></li>
                    <li><TextCouple title="">French (Advanced)</TextCouple></li>
                    <li><TextCouple title="">Spanish (Advanced)</TextCouple></li>
                </ul>
            </ContentCard>

            <Passions />
        </main>
    )
}

export default AboutMe;