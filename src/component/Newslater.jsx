import React from 'react'

export default function Newslater() {
    return (
        <div className='w-full bg-blue-500 mt-[30px]'>
            <div className="max-w-[1240px] py-10 text-center md:text-start md:p-[30px] mx-auto md:flex gap-[300px]">
            <div className=' text-white'>
                <h1 className='text-[20px] lg:text-[30px] font-bold'>Want to learn latest I.T skills?</h1>
                <p className='mb-3'>Sign up to newlatter any stay up to data</p>
            </div>
            <div>
                <input className='p-2 w-[200px] lg:w-[300px] rounded mb-5' type="text" placeholder='Enter Email'/> <button className='md:ms-2 md:px-6 px-2 py-2 text-white rounded bg-[black]'>Notify Me</button>
                <div className='text-white'>we care about the production of your data read our </div>
                <div>Privacy Policy</div>
            </div>
            </div>
        </div>
    )
}
