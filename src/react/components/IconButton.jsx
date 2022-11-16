import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import ConditionalWrapper from "../util/ConditionalWrapper.jsx";

const IconButton = (props) => {

    return (
        <ConditionalWrapper
            condition={props.download}
            wrapper={children => <a href={props.download} download>{children}</a>}
        >
            <div 
                className={`icon-button ${props.className} ${props.strip ? "strip" : ""}`} 
                onClick={props.onClick} 
                data-href={props.href}
            >
                    <button>
                        <FontAwesomeIcon icon={props.icon} />
                    </button>
                    <p>{props.children}</p>
            </div>
        </ConditionalWrapper>
    )
}

IconButton.defaultProps = {
    icon: faBars,
    children: "Click me!",
    strip: false,
    download: false
};

export default IconButton;