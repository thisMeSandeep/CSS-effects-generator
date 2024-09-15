import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Layout = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
        }, 5000)
    }, [])

    return (
        <>
            <div className='flex flex-col h-[100dvh] relative'>

                {visible ? <p className='lg:hidden w-[95%] mx-auto absolute  top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] bg-amber-500 p-5 rounded-xl shadow-xl  text-white flex justify-center items-center text-xl'>Please open this  App on Desktop for better visuals !</p> : ''}

                <Navbar />

                <div className='flex-1 w-[95%] mx-auto '>



                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout