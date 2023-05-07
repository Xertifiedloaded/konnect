import React, { useContext, useEffect, useState, } from 'react'
import { useLocation } from 'react-router-dom'
import Card from '../../components/card/card'
import { UserContent } from '../../components/contextApi/contextApi'
import classes from './wallet.module.css'
const Wallet = () => {
    // const { user, modal, loading, SetLoader, loadingState, toggleModal } =
    //   useContext(UserContent);
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