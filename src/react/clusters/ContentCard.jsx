import React from 'react';
import Bubbles from '../canvas/Bubbles.jsx';

const ContentCard = (props) => {
    function handleImageClick(e) {
        e.target.classList.toggle("active");
    }

    // set up background element
    let bg = null;
    switch (props.bg) {
        case "bubbles":
            bg = <Bubbles />;
            break;
        // eventually add more bg types
    }

    // set up image element
    let image = null;
    if (props.image) {
        image = <>
            <div className='img-wrapper'>
                <img 
                    src={props.image[0]}
                    alt={props.image[1]}
                    onClick={handleImageClick}
                />
            </div>
        </>
    } 
    
    return (
        <article className={`content-card${props.banner ? " banner" : ""}`}>
            {bg}
            {image}
            <h2>{props.title}</h2>
            {props.children}
        </article>
    )
}

ContentCard.defaultProps = {
    bg: "bubbles",
    title: "Title",
    children: <p>Content goes here!</p>
}

export default ContentCard;