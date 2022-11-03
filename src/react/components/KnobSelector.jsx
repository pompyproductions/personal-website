import React, { useState, useEffect, useRef } from "react";

const KnobSelector = (props) => {
    const needleRef = useRef();
    const containerRef = useRef();
    const [rotation, setRotation] = useState(0);
    
    const handleKnobClick = (e) => {
        setRotation(prev => {
            return prev + 1;
        });
    }
    const handleOptClick = (e) => {
        const optionCount = containerRef.current.querySelectorAll("p").length;
        if (rotation % optionCount != e.target.getAttribute("data-option")) {
            setRotation(prev => 
                prev + 
                (e.target.getAttribute("data-option")
                - (prev % optionCount))
                );
        }
    }
    
    useEffect(() => {
        needleRef.current.style.transform = `rotate(${rotation * 90 + 45}deg)`;
        const options = containerRef.current.querySelectorAll("p");
        options.forEach(opt => {opt.classList.remove("active")});
        options[rotation % options.length].classList.add("active");
    }, [rotation])

    return (
        <div className="theme-knob">
            <p>Theme:</p>
            <div className="knob-container" ref={containerRef}>
                <button className="knob-selector" onClick={handleKnobClick}>
                    <span ref={needleRef}></span>
                </button>
                {
                    props.options.split(" ").map((opt, i) => {
                        return <p key={i} data-option={i} onClick={handleOptClick}>{opt}</p>
                    })
                }
            </div>
        </div>
    )
}

KnobSelector.defaultProps = {
    options: "Dark Light Color Paper"
}

export default KnobSelector;