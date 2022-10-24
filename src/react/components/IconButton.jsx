import React, { useState, useEffect, useRef } from "react";
import RefreshIcon from "../../assets/refresh.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const IconButton = (props) => {

    return (
        <div className="icon-button">
            <button onClick={props.onClick}>
                {/* <props.icon /> */}
                <FontAwesomeIcon icon={faBars} />

            </button>
            <p>{props.content}</p>
        </div>
    )
}

IconButton.defaultProps = {
    icon: RefreshIcon,
    content: "Click me!"
};

export default IconButton;