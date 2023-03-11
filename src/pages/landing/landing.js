import React, { useEffect, useState } from 'react'
import About from '../../components/about/about';
import Hero from '../../components/hero/hero';
import Start from '../../components/startCard/start/start';
import classes from './landing.module.css'
import PreLoader from '../../assets/images/loader.svg'
import { UserContent } from '../../layout/mainLayout';
import { useContext } from 'react';

const Landing = () => {
  const { isLoading } = useContext(UserContent)
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
              <About />
              <Start />
            </div>
        }
      </div>
    </>
  )
}

export default Landing;