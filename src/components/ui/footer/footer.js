import React from 'react'
import { Link } from 'react-router-dom'
import classes from './footer.module.css'
import Instagram from '../../../assets/images/instagram.svg'
import Twitter from '../../../assets/images/twitter.svg'
import Google from '../../../assets/images/google.svg'
import LinkedIn from '../../../assets/images/linked.svg'
const Footer = () => {
    return (
        <>
            <footer>
                <div className={classes.main}>
                    <p>© 2022 Dapps Connect | All rights reserved.</p>
                    <div className={classes.social}>
                        <Link>
                            <img src={Google} alt="google" />
                        </Link>
                        <Link>
                            <img src={Twitter} alt="twitter" />
                        </Link>
                        <Link>
                            <img src={Instagram} alt="instagram" />
                        </Link>
                        <Link>
                            <img src={LinkedIn} alt="linkedIn" />
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer