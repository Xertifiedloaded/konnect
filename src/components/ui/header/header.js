import React from 'react'
import classes from './header.module.css'
import Logo from '../../../assets/images/Header-logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <header>
                <div className={classes.main}>
                    <div className={classes.logo}>
                        <img src={Logo} alt="logo" />
                        <p>wallet connect</p>
                    </div>
                    <nav>
                        <Link to="">
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