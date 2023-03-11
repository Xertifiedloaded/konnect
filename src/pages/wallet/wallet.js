import React, { useContext, useEffect, useState, } from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../../components/card/card'
import { UserContent } from '../../layout/mainLayout'
import classes from './wallet.module.css'
import Loader from '../../assets/images/Dual Ring.gif'
const Wallet = () => {
    const {isLoading} =useContext(UserContent)
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