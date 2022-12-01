import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import ContentCard from '../clusters/ContentCard.jsx';
import ExpandText from '../components/ExpandText.jsx';
import TextCouple from '../components/TextCouple.jsx';

import profilePicture from "../../assets/profile.jpg";

import Passions from '../clusters/content-cards/Passions.jsx';

const AdventOfCode = () => {
    return (
        <main className="advent-of-code">
            <article>
                <p>Page under construction.</p>
                <Link to="/">Go back to homepage</Link>
            </article>
        </main>
    )
}

export default AdventOfCode;