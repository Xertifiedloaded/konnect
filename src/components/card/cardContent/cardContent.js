import React from 'react'
import classes from './cardContent.module.css'
const CardContent = ({ image, name }) => {
    return (
        <>
            <div className={classes.main}>
                <img src={image} alt="logo" />
                <p>{name}</p>
            </div>
        </>
    )
}

export default CardContent