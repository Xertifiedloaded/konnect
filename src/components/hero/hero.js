import React from 'react'
import classes from './hero.module.css'
import HeroImg from '../../assets/images/hero-image-laptop.png'
const Hero = () => {
    return (
        <>
            <div className={classes.main}>
                <div className={classes.hero}>
                    <div className={classes.heroContent}>
                        <h3>Link your DApps to mobile wallets</h3>
                        <p>DappsConnects is an open protocol that lets users connect their mobile crypto wallets to your DApp.</p>
                    </div>
                    <div className={classes.heroPicture}>
                        <img src={HeroImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;