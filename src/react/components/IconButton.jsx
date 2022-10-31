import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const IconButton = (props) => {

    return (
        <div className={`icon-button ${props.className}`}>
            <button onClick={props.onClick}>
                <FontAwesomeIcon icon={props.icon} />

            </button>
            <p>{props.children}</p>
        </div>
    )
}

IconButton.defaultProps = {
    icon: faBars,
    children: "Click me!"
};

export default IconButton;