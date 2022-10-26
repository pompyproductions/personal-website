import React from "react";
import tooltips from "../../tooltips.json"


const Portfolio = () => {
    console.log(tooltips);
    return <main>
        <h2>{tooltips.logo.title}</h2>
        {tooltips.logo.description.map(txt => {
            return <p>{txt}</p>
        })}
    </main>
}

export default Portfolio;