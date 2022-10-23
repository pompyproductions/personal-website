import React, { useState, useEffect, useRef } from "react";

const KnobSelector = (props) => {
    const needleRef = useRef();
    const [rotation, setRotation] = useState(0);
    
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
                {props.options.split(" ").map((opt, i) => 
                <p key={i}>{opt}</p>)}
            </div>
        </div>
    )
}

KnobSelector.defaultProps = {
    options: "dark light color paper"
}

export default KnobSelector;