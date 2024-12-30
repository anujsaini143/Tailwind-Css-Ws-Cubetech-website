import React from 'react';
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { SiGoogleadmob } from "react-icons/si"; 
 
export default function Footer() {
    return (
        <div className='w-full bg-blue-600 py-[30px]'>
            <div className='max-w-[1240px] mx-auto hidden lg:grid grid-cols-4' >
                <div>
                    <h1 className='font-bold text-[25px]'>WsCube Tech.</h1>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, alias voluptatum quas, rem obcaecati </p>
                    <div className='flex  mt-[20px] gap-5'>
                        <RiFacebookBoxFill />
                        <FaInstagram />
                        <FaSquareTwitter/>
                        <SiGoogleadmob/>
                    </div>
                </div>
                <div>
                    <ul className='flex flex-col gap-3 text-white'>
                        <li className='font-bold text-black'>Solution</li>
                        <li>Home</li>
                        <li>About</li>
                        <li>Company</li>
                        <li>Resource</li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-3 text-white'>
                        <li className='font-bold text-black'>Support</li>
                        <li>Pinning</li>
                        <li>Collection</li>
                        <li>CaseSas</li>
                        <li>Ajs Seats</li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-3 text-white'>
                        <li className='font-bold text-black'>Company</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Jobs</li>
                        <li>Press</li>
                        <li>Corses</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
