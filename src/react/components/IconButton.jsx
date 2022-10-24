import React, { useState, useEffect, useRef } from "react";
import RefreshIcon from "../../assets/refresh.svg"

const IconButton = (props) => {

    return (
        <div className="icon-button">
            <button onClick={props.onClick}>
                <props.icon />
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