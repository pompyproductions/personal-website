import React, { Component } from "react";
import AnimText from "../components/AnimText.jsx";

import CanvasBackground from "../components/CanvasBackground.jsx";
import PageGreeting from "../components/PageGreeting.jsx"

const Wip = () => {
    return (
        <>
            <CanvasBackground />
            <PageGreeting />
            <div className="wip-content">
                <p>The website is under construction.</p>
                <p>In the meantime, you can check out the following links:</p>
                <li>
                    <ul>My <a>GitHub profile</a></ul>
                    <ul>My <a>LinkedIn profile</a></ul>
                    <ul>My <a>CodePen profile</a></ul>
                </li>
                <p>Thank you for visiting!{"\n"}— Eren Gazioglu</p>
            </div>
        </>
    )
}

export default Wip;