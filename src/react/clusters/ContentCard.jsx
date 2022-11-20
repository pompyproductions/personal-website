import React from 'react';
import Bubbles from '../canvas/Bubbles.jsx';

// Accepts the following attributes:
// title(string), image(array), imageID(string), hidden(bool).
//
// Accepts any element as children, 
// do use div.hsep and div.flex-spacer for nicer layout.
//
// Use imageID to manually position the image if needed.


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
            <div className="img-wrapper">
                <img 
                    src={props.image[0]}
                    alt={props.image[1]}
                    onClick={handleImageClick}
                    className={`${props.hidden ? "active" : ""}`}
                    id={props.imageID}
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
    children: <p>Content goes here!</p>,
    hidden: false
}

export default ContentCard;