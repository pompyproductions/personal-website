import React from "react";
import PageLogo from "../components/PageLogo.jsx";
import PageGreeting from "../components/PageGreeting.jsx"
import KnobSelector from "../components/KnobSelector.jsx";
import IconButton from "../components/IconButton.jsx";

import cloudImage from "../../assets/CLOUD-03.jpg";


const MasterLayout = () => {
    return (
        <>
            <header>
                <PageLogo strokeWeight={3} strokeColor="#fcf0f0"/>
                <KnobSelector />
                <IconButton />
            </header>
            <main>
                <PageGreeting />
                {/* <img src={cloudImage}></img> */}
                <p>I'm Eren Gazioglu, a self-taught front-end developer with a background in architecture.</p>
                <p>You can find the source code for this webpage following this link. Feel free to copy things or to reach out if you need any clarifications!</p>
            </main>
            <footer>
                <p>Status: Currently under development.</p>
            </footer>
        </>
    )
}

export default MasterLayout;