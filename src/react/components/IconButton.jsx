import React, { useState, useEffect, useRef } from "react";
import SVG from 'react-inlinesvg';

const IconButton = (props) => {

    return (
        <div className="icon-button">
            <button onClick={props.onClick}>
                <SVG src={props.icon} style={props.iconStyle}/>
            </button>
            <p>{props.content}</p>
        </div>
    )
}

IconButton.defaultProps = {
    icon: "../../assets/refresh.svg",
    content: "Click me!"
};

export default IconButton;