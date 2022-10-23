import React, { useState, useEffect, useRef } from "react";

const KnobSelector = (props) => {
    return (
        <div class="theme-knob">
            <p>Theme:</p>
            <div class="knob-container">
                <button class="knob-selector">
                    <span></span>
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