import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

// FLEXIBLE: can be used for router links, anchor tags, downloads, email.
// refer to "defaultProps" and the switch statement for possible params.

const IconButton = (props) => {
    function sendEmail() {
        window.open('mailto:eren.g94@gmail.com?subject=Let\'s get in touch');
    }
    function toggleHamburger() {
        document.querySelectorAll(".hamburger").forEach(elem => {
            elem.classList.toggle("active");
        })
    }

    let customAction;
    switch (props.href) {
        case "email":
            customAction = sendEmail;
            break;
        case "hamburger":
            customAction = toggleHamburger;
            break;
    }

    const content = 
        <div 
            className={`icon-button ${props.className}`}
            onClick={props.action === "custom" ? customAction : undefined}
        >
            <button>
                <FontAwesomeIcon icon={props.icon} />
            </button>
            <p>{props.children}</p>
        </div>

    let wrapper;
    switch (props.action) {
        case "link":
            wrapper = <Link to={props.href} className="button-wrapper">{content}</Link>;
            break;
        case "download":
            wrapper = <a href={props.href} download className="button-wrapper">{content}</a>;
            break;
        case "anchor":
            wrapper = <a href={props.href} target="_blank" className="button-wrapper">{content}</a>;
            break;
        case "custom":
            wrapper = content;
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