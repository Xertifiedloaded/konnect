import React from 'react'
import classes from './about.module.css'
const About = () => {
    return (
        <>
            <div className={classes.main}>
                <p>About & How it works here</p>
                <div className={classes.about}>
                    <div className={classes.aboutContent}>
                        <h3>About</h3>
                        <p>DappsConnects is an open source protocol for connecting decentralised applications to mobile wallets with QR code scanning or deep linking. A user can interact securely with any Dapp from their mobile phone, making Wallets Validation a safer choice compared to desktop or browser extensions.</p>
                    </div>
                    <div className={classes.aboutValidation}>
                        <h3>What is Wallet Validation</h3>
                        <p>DappsConnects connects web applications to supported mobile wallets. Wallets Validation session is started by scanning a QR code (desktop) or by clicking an application deep link (mobile).</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;