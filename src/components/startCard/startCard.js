import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classes from './startCard.module.css'
const StartCard = ({ id, title, content }) => {
    const location = useLocation()
    return (
        <>
            <div className={classes.main}>
                <p>{id}</p>
                <h5>{title}</h5>
                <p>{content}</p>
                <div className={classes.btn}>
                    <Link to="/defi">
                        <button>
                            proceed
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default StartCard;