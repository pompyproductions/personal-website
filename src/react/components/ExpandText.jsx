import React, { useState, useEffect, useRef } from "react";

const ExpandText = (props) => {

    const expandContainer = useRef(null);
    
    useEffect(()=>{
        expandContainer.current.children[0].classList.add("constant")
    }, [])
    function handle() {
        for (let elem of expandContainer.current.children) {
            if (!elem.classList.contains("constant")) {
                elem.classList.toggle("hidden");
            }
        }
    }
    return (
        <div className="expand-text" ref={expandContainer}>
            {props.children[0]}
            <span onClick={handle}>More {props.expandIcon.charAt(0)}</span>
            {
                props.children.map((item, i) => {
                    if (i > 0) {
                        return item;
                    }
                })
            }
            <span onClick={handle} className="hidden">Less {props.expandIcon.charAt(1)}</span>
        </div>
    )
}

ExpandText.defaultProps = {
    expandIcon: "▼▲",
    expandText: "More"
};

export default ExpandText;