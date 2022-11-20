import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

// FLEXIBLE: can be used for router links, anchor tags, downloads.
// refer to "defaultProps" and the switch statement for possible params.

const IconButton = (props) => {

    const content = 
        <div 
            className={`icon-button ${props.className} ${props.strip ? "strip" : ""}`}
        >
            <button>
                <FontAwesomeIcon icon={props.icon} />
            </button>
            <p>{props.children}</p>
        </div>

    let wrapper;
    switch (props.action) {
        case "link":
            wrapper = <Link to={props.href}>{content}</Link>;
            break;
        case "download":
            wrapper = <a href={props.href} download>{content}</a>;
            break;
        case "anchor":
            wrapper = <a href={props.href} target="_blank">{content}</a>;
            break;
    }

    return wrapper;
}

IconButton.defaultProps = {
    icon: faBars,
    children: "Click me!",
    action: "link",
    strip: false,
};

export default IconButton;