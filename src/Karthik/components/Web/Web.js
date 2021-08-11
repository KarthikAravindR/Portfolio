import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faLinkedin, faInstagram, faBehance, faDribbble, faGithub} from '@fortawesome/free-brands-svg-icons'

import classes from './Web.module.scss'

const Web = props => {
    return(
        <div className={classes.WebContainer}>
            <h1>More of my works on the Web<img src="https://img.icons8.com/nolan/32/web.png" alt="web" /></h1>
            <div className={classes.WebLinks}>
                <div className={classes.WebLink}>
                    <p>Github</p>
                    <FontAwesomeIcon icon={faGithub} />
                </div>
                <div className={classes.WebLink}>
                    <p>Linkedin</p>
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className={classes.WebLink}>
                    <p>Instagram</p>
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className={classes.WebLink}>
                    <p>Facebook</p>
                    <FontAwesomeIcon icon={faFacebook} />
                </div>
                <div className={classes.WebLink}>
                    <p>Dribbble</p>
                    <FontAwesomeIcon icon={faDribbble} />
                </div>
                <div className={classes.WebLink}>
                    <p>Behance</p>
                    <FontAwesomeIcon icon={faBehance} />
                </div>
            </div>
        </div>
    )
}

export default Web