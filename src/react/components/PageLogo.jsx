import React, { useEffect, useRef } from "react";
import EGLogo from "../../assets/eg-logo-03.svg";

const PageLogo = (props) => {

    useEffect(() => {
        const icon = document.getElementById("eg-logo");
        
        let {
            x: startX, 
            y: startY, 
            width: endX,
            height: endY
        } = icon.getBBox();
        startX -= props.strokeWeight / 2;
        startY -= props.strokeWeight / 2;
        endX += props.strokeWeight;
        endY += props.strokeWeight;
        icon.setAttribute("viewBox", `\
            ${startX}, \
            ${startY}, \
            ${endX}, \
            ${endY}`
        );

        const iconStyle = icon.querySelector("style")
        .sheet.cssRules[0].style;
        iconStyle.stroke = props.strokeColor;
        iconStyle.strokeWidth = props.strokeWeight;

    }, [props]);

    console.log(props.strokeWeight);
    console.log(props.strokeColor); // hello
    return (
        <EGLogo id="eg-logo"/>
    )
}

PageLogo.defaultProps = {
    strokeWeight: 2,
    strokeColor: "#fff" 
}

export default PageLogo;