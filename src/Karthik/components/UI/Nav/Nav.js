import React from 'react'

import classes from './Nav.module.scss'
import Resume from '../../../../assets/resume.pdf'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faLinkedin, faInstagram, faBehance, faDribbble, faGithub} from '@fortawesome/free-brands-svg-icons'

const Nav = props => {
    React.useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = 'unset';
    }, [])
    return(
        <div className={classes.SideDrawer}>
            <div className={classes.Navigation}>
                <h1>Navigation</h1>
                <h3 onClick={() => { props.open(); document.getElementById('Home').scrollIntoView({ behavior: 'smooth', block: 'center' }) }}>Home</h3>
                <h3 onClick={() => { props.open(); document.getElementById('Project').scrollIntoView({ behavior: 'smooth' }) }}>Projects</h3>
                <h3 onClick={() => { props.open(); document.getElementById('Contact').scrollIntoView({ behavior: 'smooth', block: 'center' }) }}>Contact</h3>
            </div>
            <div className={classes.Resume}>
                <a href={Resume} download="resume">Resume<img src="https://img.icons8.com/ios-filled/70/000000/open-resume.png" alt="resume download"/></a>
            </div>
            <p className={classes.Inspired}>Design Inspired from <a href="https://adeolaadeoti.netlify.app/">Adeola</a></p>
            <div className={classes.socialmedia}>
                <a href="https://github.com/KarthikAravindR" target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/karthik-aravind-r/" target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.instagram.com/karthik_aravind_r/" target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://m.facebook.com/100004549124127/" target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://dribbble.com/karthikaravind" target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faDribbble} />
                </a>
                <a href="https://www.behance.net/karthikaraa274" target='_blank' rel="noreferrer">
                    <FontAwesomeIcon icon={faBehance} />
                </a>
            </div>
        </div>
    )
}

export default Nav