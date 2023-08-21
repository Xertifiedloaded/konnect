import React from 'react'
import StartCard from '../startCard'
import classes from './start.module.css'
import { cardDetails } from '../../../constant'
import { Link } from 'react-router-dom'
const Start = () => {
    return (
        <>
            <section>
                <p className={classes.para}>Quick Start</p>
                <div className={classes.main}>

                    <div className={classes.card}>
                        {
                            cardDetails.map((items, i) => (
                                <StartCard {...items} key={i} />
                            ))
                        }
                    </div>

                </div>
                <p className={classes.para}>Get started with Dapps Connect today</p>

                <div className={classes.btn}>
                    <Link to={'/wallet'}>
                        <button>
                            proceed
                        </button>
                  </Link>
                </div>
            </section>


        </>
    )
}
export default Start;