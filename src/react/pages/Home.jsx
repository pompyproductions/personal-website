import React from 'react';
import { Link } from "react-router-dom";

import PageGreeting from "../components/PageGreeting.jsx";
import Bubbles from "../canvas/Bubbles.jsx";

const Home = () => {
    return (
        <main className='page-home'>
            <Bubbles />
            <div>
                <PageGreeting />
                <p>I'm Eren Gazioglu, a self-taught front-end developer with a background in architecture.</p>
                <p>
                    You can find the source code for this webpage following <a href="https://github.com/pompyproductions/personal-website" target="_blank">this link <i>(opens new window)</i>.</a>&nbsp;
                    Feel free to copy things or to <Link to="/contact">reach out</Link> if you need any clarifications!
                </p>
            </div>
        </main>
    )
}

export default Home;