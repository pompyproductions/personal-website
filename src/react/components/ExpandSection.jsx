import React, { useState, useEffect, useRef } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const ExpandSection = (props) => {

    const expandContainer = useRef(null);

    function handle() {
        expandContainer.current.classList.toggle("active")
    }
    return (
        <section className={`expand ${props.className}`} ref={expandContainer}>
            <button className="expand-title" onClick={handle}>
                <h3>{props.title}</h3>
                <FontAwesomeIcon icon={faChevronDown}/>
            </button>
            {props.children}
        </section>
    )
}

ExpandSection.defaultProps = {
    title: "Title",
    children: <p>Content goes here!</p>
};

export default ExpandSection;