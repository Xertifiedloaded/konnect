import { React, useContext } from 'react'
import { UserContent } from '../../../layout/mainLayout'
import classes from './cardContent.module.css'
const CardContent = ({ image, name, toggleModal, loading, SetLoader }) => {

    return (
        <>
            <div className={classes.main} onClick={() => {
                toggleModal();
                SetLoader();
            }}>
                <img src={image} alt="" />
                <p>{name}</p>
            </div>
        </>
    )
}

export default CardContent




