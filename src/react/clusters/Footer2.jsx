import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faCodepen, faBandcamp } from '@fortawesome/free-brands-svg-icons';

const Footer2 = () => {
    return <footer className='optional'>
        <ul>
            <a href="https://www.linkedin.com/in/erengazioglu/" target="_blank"><li>
                <FontAwesomeIcon icon={faLinkedin}/>
            </li></a>
            <a href="https://github.com/pompyproductions" target="_blank"><li>
                <FontAwesomeIcon icon={faGithub}/>
            </li></a>
            <a href="https://codepen.io/pompyproductions" target="_blank"><li>
                <FontAwesomeIcon icon={faCodepen}/>
            </li></a>
            <a href="https://granoturco.bandcamp.com/" target="_blank"><li>
                <FontAwesomeIcon icon={faBandcamp}/>
            </li></a>
        </ul>
    </footer>
}

export default Footer2;