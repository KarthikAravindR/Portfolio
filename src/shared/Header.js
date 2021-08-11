import React from 'react'

import classes from './Header.module.scss'
import Karthik from '../assets/images/dp.jpg'

const Header = props => {
    let additionalclasses = [classes.DrawerToggle]
    if (props.showsidebar) {
        additionalclasses = [classes.DrawerToggle, classes.Open]
    }
    return (
        <>
            <div className={classes.profilePicture}>
                <img src={Karthik} alt="dp" />
            </div>
            <div className={additionalclasses.join(' ')} onClick={props.clicked}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}

export default Header