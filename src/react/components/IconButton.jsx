import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const IconButton = (props) => {

    return (
        <div 
        className={`icon-button ${props.className} ${props.strip ? "strip" : ""}`} 
        onClick={props.onClick} 
        data-href={props.href}>
            <button>
                <FontAwesomeIcon icon={props.icon} />
            </button>
            <p>{props.children}</p>
        </div>
    )
}

IconButton.defaultProps = {
    icon: faBars,
    children: "Click me!",
    strip: false
};

export default IconButton;