import React, { useState, useEffect, useRef } from "react";

const KnobSelector = (props) => {
    const needleRef = useRef();
    const [rotation, setRotation] = useState(0);

    console.log(props.options);
    
    const handleKnobClick = () => {
        setRotation(prev => {
            return prev + 1;
        });
    }
    
    useEffect(() => {
        needleRef.current.style.transform = `rotate(${rotation * 90 + 45}deg)`;
        console.log(rotation);
    }, [rotation])

    return (
        <div className="theme-knob">
            <p>Theme:</p>
            <div className="knob-container">
                <button className="knob-selector" onClick={handleKnobClick}>
                    <span ref={needleRef}></span>
                </button>
                <p>One</p>
                <p>Two</p>
                <p>Three</p>
                <p>Four</p>
            </div>
        </div>
    )
}

KnobSelector.defaultProps = {
    options: "dark light color paper"
}

export default KnobSelector;