import React from 'react';
import { ReactTyped } from "react-typed";


export default function Banner() {
  return (
     <div className='bg-blue-500 w-full py-[50px] md:py-[100px]'>
        <div className='max-w-[1240px] mx-auto font-bold text-center'>
        <div className=' text-xl md:text-4xl '>Learn With us</div>
        <div className='text-white text-[40px] md:text-[60px] mt-4'>Grow With us.</div>
        <div className='text-[25px] md:text-[50px] text-white mt-4'>
            Learn <ReactTyped strings={["Web Development","Digital Markting","Ethical Hacking"]} backSpeed={100} typeSpeed={100} loop={"true"} />
        </div>
        <button className='text-center mt-4 w-[150px] p-2 text-[white] rounded bg-[black]'>Get Started</button>
        </div>
     </div>
  )
}
