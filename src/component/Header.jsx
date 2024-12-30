import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


export default function Header() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='bg-blue-500 p-4'>
            <div className='max-w-[1240px] mx-auto flex items-center py-10 justify-between '>
                <div className='text-3xl font-bold'>
                    WsCube Tech
                </div>
                {
                    toggle ?
                    <IoClose onClick={() =>setToggle(!toggle)} className=' md:hidden block text-white text-2xl' /> 
                    :
                    <IoMenu onClick={() => setToggle(!toggle)} className=' md:hidden block text-white text-2xl' />
                }

                <ul className='hidden md:flex gap-10 text-white'>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contect</li>
                </ul>
                {/* resposive menu*/}
                <ul className={` duration-300 md:hidden w-full h-screen gap-10 text-white  bg-[black] fixed top-[148px]
                 ${toggle? 'left-0':'left-[-100%]'} `}>
                    <li className='p-5'>Home</li>
                    <li className='p-5'>Company</li>
                    <li className='p-5'>Resources</li>
                    <li className='p-5'>About</li>
                    <li className='p-5'>Contect</li>
                </ul>
            </div>
        </div>
    )
}
