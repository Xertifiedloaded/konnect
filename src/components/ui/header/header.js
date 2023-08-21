import React, { useContext, useEffect, useState } from 'react'
import classes from './header.module.css'
import Logo from '../../../assets/images/Header-logo.png'
import { Link } from 'react-router-dom'
import Close from '../../../assets/images/icon-close-menu.svg'
import Open from '../../../assets/images/icon-menu.svg'
import { UserContent } from '../../contextApi/contextApi'
const Header = () => {
    const { modal, setModal } = useContext(UserContent)
    const [isMobile, setIsmobile] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const toggleMenu = () => {
        setIsmobile(!isMobile)
    }
    useEffect(() => {
        const setDesktopWidth = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('scroll', setDesktopWidth)
    })
    return (
        <>
            <header>
                <div className={classes.main}>
                    <Link to={'/'} className={classes.logo}>
                        <img src={Logo} alt="logo" />
                        <p>wallet connect</p>
                    </Link>
                    <div onClick={toggleMenu} className={classes.mobileMenu}>
                        {
                            (isMobile || windowWidth > 600) ? <img src={Open} alt="" /> : <img src={Close} alt="" />
                        }
                        {/* {isMobile ? <img src={Close} alt="" /> : <img src={Open} alt="" />} */}
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