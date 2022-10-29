import React from "react";

// import CanvasBackground from "../components/CanvasBackground.jsx";
import PageGreeting from "../components/PageGreeting.jsx"

const Wip = () => {
    return (
        <>
            {/* <CanvasBackground /> */}
            <PageGreeting />
            <div className="wip-content">
                <p>I'm Eren Gazioglu— a self-taught front end developer with a background in architecture.</p>
                <p>Regrettably, this website is currently under construction. In the meantime, I hope you enjoy this little stand-in instead!</p>
                <p>If you'd like, you can follow these links to find out more about me:</p>
                <li>
                    <ul>My <a href="https://github.com/pompyproductions" target="_blank">GitHub profile</a></ul>
                    <ul>My <a href="https://www.linkedin.com/in/erengazioglu" target="_blank">LinkedIn profile</a></ul>
                    <ul>My <a href="https://codepen.io/pompyproductions" target="_blank">CodePen profile</a></ul>
                </li>
                <p>Thank you for visiting!{"\n"}Eren Gazioglu</p>
            </div>
        </>
    )
}

export default Wip;