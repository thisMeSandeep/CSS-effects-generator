import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const activeStyle = 'text-lg font-semibold text-[rgba(0,0,0,0.6)] px-5 py-2 underline underline-offset-4';
    const defaultStyle = 'text-lg font-semibold text-[rgba(0,0,0,0.6)] px-5 py-2 ';

    return (
        <div className='w-full border-b shadow-md py-3 flex justify-between items-center px-5 relative'>

            {/* logo */}
            <div className='flex justify-between items-center'>
                <NavLink to='/' className='w-[100px] h-[40px]'>
                    <img src={logo} alt="logo" className='w-full h-full object-cover' />
                </NavLink>
            </div>


            {/* hamburger menu icon for mobile */}

            <RxHamburgerMenu className='text-2xl lg:hidden cursor-pointer' onClick={() => setToggle(prev => !prev)} />

            {/* navbar */}

            <nav className={`w-fit lg:w-auto flex lg:items-center lg:justify-center lg:gap-5 flex-col lg:flex-row absolute lg:relative top-16 right-0 lg:top-0 bg-[#faefef] lg:bg-transparent py-5 lg:py-0 ${toggle ? 'block' : 'hidden'} lg:block  `}>
                <NavLink
                    to='/'
                    className={({ isActive }) => isActive ? activeStyle : defaultStyle}
                    onClick={() => setToggle(false)}
                >
                    Box Shadow
                </NavLink>
                <NavLink
                    to='border-radius'
                    className={({ isActive }) => isActive ? activeStyle : defaultStyle}
                    onClick={() => setToggle(false)}
                >
                    Border Radius
                </NavLink>
                <NavLink
                    to='glassmorphism'
                    className={({ isActive }) => isActive ? activeStyle : defaultStyle}
                    onClick={() => setToggle(false)}
                >
                    Glassmorphism
                </NavLink>
                <NavLink
                    to='text-glow'
                    className={({ isActive }) => isActive ? activeStyle : defaultStyle}
                    onClick={() => setToggle(false)}
                >
                    Text Glow
                </NavLink>
            </nav>
        </div>
    );
}

export default Navbar;
