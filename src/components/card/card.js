import React from 'react'
import classes from './card.module.css'
import { Wallet } from '../../constant'
import CardContent from './cardContent/cardContent'
const Card = () => {
    return (
        <>
            <div className={classes.main}>
                {
                    Wallet.map((items, idx) => (
                        <CardContent {...items} key={idx} />
                    ))
                }
           </div>
        </>
  )
}

export default Card;