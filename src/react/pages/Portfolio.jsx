import React from "react";
import tooltips from "../../tooltips.json"
import Bubbles from "../canvas/Bubbles.jsx"
import Codepens from "../clusters/content-cards/Codepens.jsx";
import ProjectEuler from "../clusters/content-cards/ProjectEuler.jsx";


const Portfolio = () => {
    console.log(tooltips);
    // return <main>
    //     <h2>{tooltips.logo.title}</h2>
    //     {tooltips.logo.description.map((txt, id) => {
    //         return <p key={id}>{txt}</p>
    //     })}
    // </main>
    return (
        <main className="portfolio page-container">
            <Codepens />
            <ProjectEuler />
        </main>
    )
}

export default Portfolio;