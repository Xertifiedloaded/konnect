import React, { createContext, useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import Footer from '../components/ui/footer/footer';
import Header from '../components/ui/header/header';
import Loader from '../assets/images/loader.svg'
import ContextApi from '../components/contextApi/contextApi';
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
            <ContextApi>
                <div>
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </ContextApi>
        </>
    )
};

export default MainLayout;