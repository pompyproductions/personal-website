import React from "react";
import PageLogo from "../components/PageLogo.jsx";
import PageGreeting from "../components/PageGreeting.jsx"
import KnobSelector from "../components/KnobSelector.jsx";
import IconButton from "../components/IconButton.jsx";


const MasterLayout = () => {
    return (
        <>
            <header>
                <PageLogo strokeWeight={2} strokeColor="#fcf0f0"/>
                <KnobSelector />
                <IconButton />
            </header>
            <main>
                <PageGreeting />
                <p>Master layout in construction.</p>
            </main>
        </>
    )
}

export default MasterLayout;