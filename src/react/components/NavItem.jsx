import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const NavItem = (props) => {
    return <ul className="nav-item">
        <FontAwesomeIcon icon={props.icon}/>
        <a>{props.children}</a>
    </ul>
}

NavItem.defaultProps = {
    icon: faHome,
    children: "Insert Link Text Here"
}

export default NavItem;