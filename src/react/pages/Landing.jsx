import React from 'react';
import { Link } from "react-router-dom";

import PageGreeting from "../components/PageGreeting.jsx";
import PageLogo from '../components/PageLogo.jsx';

const Landing = () => {
    return (
        <main className='landing'>
            <PageLogo />
            <div>
                <PageGreeting />
            </div>
            <div>
                <p>
                    If you made it here, it means that you probably followed some sort of link. 
                </p>
                <h2>Thank you for your interest!</h2>
                <p>
                    This landing page is still under construction, but
                    <em> all the information that will be displayed here in the future 
                    can be accessed by following the links below.</em>
                </p>
            </div>
        </main>
    )
}

export default Landing;