import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../../components/card/card'
import classes from './wallet.module.css'
const Wallet = () => {
    const Location = useLocation()
    return (
        <>
            <div className={`${classes.main} ${Location.pathname === "/wallet" && classes.bg}`}>
                <Card />
            </div>
        </>
    )
}
export default Wallet;