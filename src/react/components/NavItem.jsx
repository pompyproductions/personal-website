import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const NavItem = (props) => {
    const closeHamburger = () => {
        document.querySelectorAll(".hamburger").forEach(elem => {
            elem.classList.remove("active");
        })
    }
    return <ul className="nav-item">
        <FontAwesomeIcon icon={props.icon}/>
        <Link to={props.to} onClick={closeHamburger}>{props.children}</Link>
    </ul>
}

NavItem.defaultProps = {
    icon: faHome,
    children: "Insert Link Text Here",
    to: "/"
}

export default NavItem;