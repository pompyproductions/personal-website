import React from 'react';

import PageGreeting from "../components/PageGreeting.jsx";
import CanvasBackground from "../components/CanvasBackground.jsx";

const Home = () => {
    return (
        <main>
            <CanvasBackground />
            <div>
                <PageGreeting />
                <p>I'm Eren Gazioglu, a self-taught front-end developer with a background in architecture.</p>
                <p>You can find the source code for this webpage following this link. Feel free to copy things or to reach out if you need any clarifications!</p>
            </div>
        </main>
    )
}

export default Home;