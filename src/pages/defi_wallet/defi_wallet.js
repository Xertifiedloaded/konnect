import React from 'react'
import { useLocation } from 'react-router-dom';
import Defi from '../../components/defiComponent/defi';
import classes from './defi_wallet.module.css'
const DefiWallet = () => {
  const Location = useLocation()
  return (
    <>
      <div className={`${classes.main} ${Location.pathname === "/defi" && classes.bg}`}>
        <Defi />
      </div>
    </>
  )
}

export default DefiWallet;