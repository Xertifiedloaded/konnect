import { React, useState, useEffect, useContext } from 'react'
import classes from './card.module.css'
import CardContent from './cardContent/cardContent'
import { UserContent } from '../../layout/mainLayout'
import Loader from '../../assets/images/loader.svg'
import axios from 'axios'
const Card = () => {
    const { isLoading, setLoading } = useContext(UserContent)

    const [user, setUser] = useState([])
    const FetchApi = async () => {

        try {
            setLoading(true)
            const res = await axios({
                method: "GET",
                url: "data.json",
                headers: {
                    "Content-Type": "application.json",
                    "Accept":"application.json"
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
                {
                    user.map((items, i) => (
                        <CardContent   {...items} key={i} />
                    ))
                }
            </div>

        </>
    )
}

export default Card;