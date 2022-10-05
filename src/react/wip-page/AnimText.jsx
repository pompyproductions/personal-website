import React, { useState, useEffect } from "react";

const AnimText = (props) => {
    const [displayed, updateDisplay] = React.useState("");

    let animID;
    useEffect(() => {
        animID = setInterval(typeLetter, props.delay); 
        return () => {
            clearInterval(animID);
            updateDisplay("");
        }
    }, [props.content]); // this make sure it re-renders every time the content changes (return function resets display) 

    const typeLetter = () => {
        updateDisplay(prevText => {
            if (props.content.length <= prevText.length) clearInterval(animID);
            return prevText.concat(props.content.charAt(prevText.length))
        });
    }

    return <props.tag>{displayed}</props.tag>
}

AnimText.defaultProps = {
    content: "Lorem ipsum dolor sit amet.",
    delay: 30,
    tag: "p"
};

export default AnimText;