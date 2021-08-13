import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram, faBehance, faDribbble, faGithub } from '@fortawesome/free-brands-svg-icons'

import classes from './Web.module.scss'

const Web = props => {
    return (
        <div className={classes.WebContainer}>
            <h1>More of my works on the Web<img src="https://img.icons8.com/nolan/32/web.png" alt="web" /></h1>
            <div className={classes.WebLinks}>
                <a href="https://github.com/KarthikAravindR" target="_blank" rel="noreferrer">
                    <div className={classes.WebLink}>
                        <p>Github</p>
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/karthik-aravind-r/" target="_blank" rel="noreferrer">
                    <div className={classes.WebLink}>
                        <p>Linkedin</p>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </a>
                <a href="https://www.instagram.com/karthik_aravind_r/" target="_blank" rel="noreferrer">
                    <div className={classes.WebLink}>
                        <p>Instagram</p>
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </a>
                <a href="https://m.facebook.com/100004549124127/" target="_blank" rel="noreferrer">
                    <div className={classes.WebLink}>
                        <p>Facebook</p>
                        <FontAwesomeIcon icon={faFacebook} />
                    </div>
                </a>
                <a href="https://dribbble.com/karthikaravind" target="_blank" rel="noreferrer">
                    <div className={classes.WebLink}>
                        <p>Dribbble</p>
                        <FontAwesomeIcon icon={faDribbble} />
                    </div>
                </a>
                <a href="https://www.behance.net/karthikaraa274" target="_blank" rel="noreferrer">
                    <div className={classes.WebLink}>
                        <p>Behance</p>
                        <FontAwesomeIcon icon={faBehance} />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Web