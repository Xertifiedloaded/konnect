import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import emailjs from 'emailjs-com'
export const UserContent = createContext()

const sendEmail = (e) => {
    e.preventDefault()
    alert("submitted")
    emailjs.sendForm('service_nx9di5h', 'template_vybjxoi', e.target, 'tr6MisctBi3oaO8ec')
  
}
export const ContextApi = ({ children }) => {
    const [isLoading, setIsLoading ] = useState(false)
    const [loading, SetLoader] = useState(false)
    const loadingState = () => {
        SetLoader(true)
        setTimeout(() => {
            SetLoader(false)
        }, 10000)
    }
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }
    const [user, setUser] = useState([])
    const FetchApi = async () => {
        try {
            const res = await axios({
                method: "GET",
                url: "data.json",
                headers: {
                    "Content-Type": "application.json",
                    "Accept": "application.json"
                }
            })
            setUser(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        FetchApi()

    }, [])
    const value = {
        modal, user, loadingState, sendEmail, toggleModal, setUser, isLoading, setIsLoading, setModal
    }
    return (
        <UserContent.Provider value={value}>
            {children}
        </UserContent.Provider>
    )
}

export default ContextApi;