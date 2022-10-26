import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faCodepen, faBandcamp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return <footer>
        <ul>
            <li><a href=""><FontAwesomeIcon icon={faLinkedin}/></a></li>
            <li><a href=""><FontAwesomeIcon icon={faGithub}/></a></li>
            <li><a href=""><FontAwesomeIcon icon={faCodepen}/></a></li>
            <li><a href=""><FontAwesomeIcon icon={faBandcamp}/></a></li>
        </ul>
    </footer>
}

export default Footer;