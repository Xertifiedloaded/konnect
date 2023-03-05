import React from 'react'
import About from '../../components/about/about';
import Hero from '../../components/hero/hero';
import Start from '../../components/startCard/start/start';
import classes from './landing.module.css'
const Landing = () => {
  return (
    <>
      <div className={classes.main}>
        <Hero />
        <About />
        <Start />
      </div>
    </>
  )
}

export default Landing;