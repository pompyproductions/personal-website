import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import EGLogo from "../../assets/eg-logo-03.svg";

const PageLogo = (props) => {
    const closeHamburger = () => {
        document.querySelectorAll(".hamburger").forEach(elem => {
            elem.classList.remove("active");
        })
    }

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
        endX += props.strokeWeight * 2;
        endY += props.strokeWeight * 2;
        icon.setAttribute("viewBox", `${startX}`
            + ` ${startY}`
            + ` ${endX}`
            + ` ${endY}`
        );
        icon.style.stroke = props.strokeColor;
        icon.style.strokeWidth = props.strokeWeight;
        icon.style.fill = "none";
    }, [props]);

    return (
        <Link to="/">
            <EGLogo id="eg-logo" onClick={closeHamburger}/>
        </Link>
    )
}

PageLogo.defaultProps = {
    strokeWeight: 2,
    strokeColor: "#fff" 
}

export default PageLogo;