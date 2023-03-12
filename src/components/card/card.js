import { React, useState, useEffect, useContext } from 'react'
import classes from './card.module.css'
import CardContent from './cardContent/cardContent'
import { UserContent } from '../../layout/mainLayout'
import Loader from '../../assets/images/loader.svg'
import axios from 'axios'
import Modal from '../modal/modal'
const Card = () => {
    const { isLoading, setLoading } = useContext(UserContent)
    const [loading, SetLoader] = useState(false)
    const loadingState = () => {
        SetLoader(true)
        setTimeout(() => {
            SetLoader(false)
        }, 3000)
    }
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }
    if (modal) {
        document.body.classList.add(".add")
    } else {
        document.body.classList.remove("remove")
    }
    const [user, setUser] = useState([])
    const FetchApi = async () => {

        try {
            setLoading(true)
            const res = await axios({
                method: "GET",
                url: "data.json",
                headers: {
                    "Content-Type": "application.json",
                    "Accept": "application.json"
                }
            })
            setUser(res.data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)

        }
    }

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
        FetchApi()

    }, [])
    return (

        <>
            <div className={classes.main}>
                <div className={classes.card}>
                    {
                        user.map((items, i) => (
                            <CardContent SetLoader={loadingState} loading={loading} modal={modal} toggleModal={toggleModal}  {...items} key={i} />
                        ))
                    }
                </div>
                <div className={classes.modal}>
                    {
                        modal && (
                            <Modal SetLoader={loadingState} loading={loading} closeModal={toggleModal} />
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default Card;