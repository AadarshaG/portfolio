import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {BsLinkedin,BsFacebook,BsInstagram} from 'react-icons/bs'

import Logo from '../../../img/logo1.png'

export function Header(){

    const [nav, setNav] = useState(false)

    const handleClick = () => {
        setNav(!nav)
    }

    return(
            <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2a192f] text-gray-300">
                <div>
                    <img src={Logo} alt="" className="w-full h-[50px]"></img>
                </div>
                <div>
                    <ul className="hidden md:flex">
                        <li className="px-4 cursor-pointer">Home</li>
                        <li className="px-4 cursor-pointer">About</li>
                        <li className="px-4 cursor-pointer">Skills</li>
                        <li className="px-4 cursor-pointer">Work</li>
                        <li className="px-4 cursor-pointer">Contact</li>
                    </ul>
                </div>
                {/* Hamburger */}
                <div onClick={handleClick} className="md:hidden z-10">
                   { nav ?  <FaTimes /> :  <FaBars /> }
                </div>
                {/* menu items */}
                <ul className={ nav ? "absolute w-full h-screen top-0 left-0 bg-[#2a192f] flex flex-col justify-center text-center" : "hidden"}>
                    <li className="py-6 text-3xl">Home</li>
                    <li className="py-6 text-3xl">About</li>
                    <li className="py-6 text-3xl">Skills</li>
                    <li className="py-6 text-3xl">Work</li>
                    <li className="py-6 text-3xl">Contact</li>
                </ul>
                {/* social icons */}
                <div className="hidden lg:flex flex-col fixed top-[30%] left-0">
                    <ul>
                        <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-130px] hover:ml-[-2px] duration-300 bg-blue-600">
                            <a className="flex justify-between items-center w-full text-gray-300 " href="">Facebook <BsFacebook size={30} /></a>
                        </li>
                        <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-130px] hover:ml-[-2px] duration-300 bg-blue-600">
                            <a className="flex justify-between items-center w-full text-gray-300 " href=""> Linkedin <BsLinkedin size={30} /></a>
                        </li>
                        <li className="w-[160px] h-[40px] flex justify-between items-center ml-[-130px] hover:ml-[-2px] duration-300 bg-blue-600">
                            <a className="flex justify-between items-center w-full text-gray-300 " href="">Instagram <BsInstagram size={30} /></a>
                        </li>
                    </ul>
                </div>
                
            </div>
    )
}