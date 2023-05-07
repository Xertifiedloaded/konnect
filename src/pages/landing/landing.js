import React, { useEffect, useState, useContext } from 'react'
import About from '../../components/about/about';
import Hero from '../../components/hero/hero';
import Start from '../../components/startCard/start/start';
import classes from './landing.module.css'
import PreLoader from '../../assets/images/loader.svg'
import { UserContent } from '../../components/contextApi/contextApi';
import AnimatedCounDown from '../../components/animatedCountDown/animatedCounDown';


const Landing = () => {
  const { user, modal, loading, SetLoader, loadingState, toggleModal,isLoading } = useContext(UserContent)
  return (
    <>
      <div className={classes.main}>
        {
          isLoading
            ?
            <div className={classes.loader}>
              <img src={PreLoader} />
            </div>
            :
            <div>
              <Hero />
              <AnimatedCounDown end={500} />
              <About />
              <Start />
            </div>
        }
      </div>
    </>
  )
}

export default Landing;