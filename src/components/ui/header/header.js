import React, { useState } from 'react'
import classes from './header.module.css'
import Logo from '../../../assets/images/Header-logo.png'
import { Link } from 'react-router-dom'
import Close from '../../../assets/images/icon-close-menu.svg'
import Open from '../../../assets/images/icon-menu.svg'
const Header = () => {
    const [isMobile, setIsmobile] = useState(false)
    const toggleMenu = () => {
        setIsmobile(!isMobile)
    }
    return (
        <>
            <header>
                <div className={classes.main}>
                    <div className={classes.logo}>
                        <img src={Logo} alt="logo" />
                        <p>wallet connect</p>
                    </div>
                    <div onClick={toggleMenu} className={classes.mobileMenu}>
                        {isMobile ? <img src={Close} alt="" /> : <img src={Open} alt="" />}
                    </div>
                    <nav className={`${isMobile ? classes.open : classes.close} && ${classes.nav}`}>
                        <Link to="/">
                            <button>
                                Connect
                            </button>
                        </Link>
                    </nav>

                </div>
            </header>
        </>
    )
}

export default Header;