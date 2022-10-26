import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faCodepen, faBandcamp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return <footer>
        <ul>
            <li><a href="https://www.linkedin.com/in/erengazioglu/" target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a></li>
            <li><a href="https://github.com/pompyproductions" target="_blank"><FontAwesomeIcon icon={faGithub}/></a></li>
            <li><a href="https://codepen.io/pompyproductions" target="_blank"><FontAwesomeIcon icon={faCodepen}/></a></li>
            <li><a href="https://granoturco.bandcamp.com/" target="_blank"><FontAwesomeIcon icon={faBandcamp}/></a></li>
        </ul>
    </footer>
}

export default Footer;