import React, { useState, useEffect } from "react";

const AnimText = (props) => {
    const [displayed, updateDisplay] = React.useState(() => {
        return "";
    });

    let animID;
    useEffect(() => {animID = setInterval(typeLetter, props.delay)}, [])

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