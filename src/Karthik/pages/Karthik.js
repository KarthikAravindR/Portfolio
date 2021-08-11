import React from 'react'

import classes from './Karthik.module.scss'
import Header from '../../shared/Header'
import Floating from '../components/UI/Floating/Floating'
import Nav from '../components/UI/Nav/Nav'
import Projects from '../components/Projects/Projects'
import Web from '../components/Web/Web'

const Karthik = props => {
    const [showsidebar, setshowsidebar] = React.useState(false)
    const sidebarshowhandler = (props) => {
        setshowsidebar(showsidebar => !showsidebar)
    }
    return (
        <div className={classes.container}>
            <Header clicked={sidebarshowhandler} showsidebar={showsidebar} />
            {showsidebar && <Nav open={sidebarshowhandler}/>}
            <div className={classes.banner} id='Home'>
                <Floating />
                <div className={classes.bannerTitle}>
                    <p>I'm</p>
                    <p>Karthik.</p>
                    <div></div>
                    <p>Full Stack Developer.<img src="https://img.icons8.com/nolan/32/developer.png" alt="developer" /></p>
                    <p>I'm a Chennai-based software engineer specializing in building (and occasionally designing) exceptional Web Applications with great User Experience.</p>
                    <button onClick={() => {document.getElementById('Contact').scrollIntoView({ behavior: 'smooth', block: 'center' }) }}>Get In Touch</button>
                </div>
                <div className={classes.greeting}>Hello, There.</div>
            </div>
            <Projects />
            <Web />
            <div className={classes.ContactContainer} id="Contact">
                <h1>Contact<img src="https://img.icons8.com/nolan/32/business-contact.png" alt="Contact" /></h1>
                <div className={classes.Contacts}>
                    <div className={classes.Contact}>
                        <p>Email <img src="https://img.icons8.com/bubbles/16/000000/email--v1.png" alt="Email" /></p>
                        <a href="mailto:karthikaravindpmc@gmail.com"><p>karthikaravindpmc@gmail.com</p></a>
                    </div>
                    <div className={classes.Contact}>
                        <p>Phone <img src="https://img.icons8.com/bubbles/16/000000/phone.png" alt="Phone" /></p>
                        <a href="tel:909-471-3179"><p>+(91) 9094713179</p></a>
                    </div>
                </div>
            </div>
            <div className={classes.InfoContainer}>
                <p>Karthik Aravind &reg;</p>
                <p>Hope.</p>
            </div>
        </div>
    )
}

export default Karthik