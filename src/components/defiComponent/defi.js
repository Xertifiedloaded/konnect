import React, { useEffect, useState } from 'react'
import { DefiCard } from '../../constant'
import { Link, useLocation } from 'react-router-dom'
import classes from './defi.module.css'
const Defi = () => {

  return (
    <>
      <div className={classes.main}>
        {
          DefiCard.map((items, i) => (
            < DefiCards {...items} key={i} />
          ))
        }
      </div>
    </>
  )
}
export default Defi;
const DefiCards = ({ name }) => {
  return (
    <>

      <Link to={'/wallet'} className={classes.card}>
        <div className={classes.content}>
          <p>
            {name}
          </p>
        </div>
      </Link>
    </>
  )
}