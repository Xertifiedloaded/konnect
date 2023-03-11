import React, { createContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../components/ui/footer/footer';
import Header from '../components/ui/header/header';
import Loader from '../assets/images/loader.svg'
export const UserContent = createContext()
const MainLayout = () => {
    // const [loader, setLoader] = useState(false)
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [])
    return (
        <>
            <UserContent.Provider value={{ isLoading, setLoading }}>
                <div>
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </UserContent.Provider>
        </>
    )
};

export default MainLayout;