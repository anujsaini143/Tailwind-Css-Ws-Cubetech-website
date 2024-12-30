import React from 'react'

export default function Threecolumn() {
    return (
        <div className='w-full mb-[100px]'>
            <div className='max-w-[1240px] mx-auto mt-20  md:grid grid-cols-3 gap-10'>
                <div className='rounded p-2 text-center flex flex-col items-center gap-4 shadow-2xl mt-[20px] duration-300 hover:scale-105'>
                    <img className='w-[100px]' src="https://github.com/bhagirath-wscubetech/tailwind-wsucbe-app/blob/main/src/assets/single.png?raw=true" alt="" />
                    <h1 className=' text-[30px] font-bold'>Web development</h1>
                    <h1 className='text-[30px] font-bold'>$149</h1>
                    <p>Lorem ipsum is simply</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ducimus</p>
                    <p>Lorem ipsum is Simply domen</p>
                    <button className='bg-green-400 px-20 py-2 rounded font-bold'>Start Trial</button>
                </div>
                <div className='rounded p-2 text-center flex flex-col items-center bg-gray-300 gap-4 mt-[20px] duration-300 hover:scale-105'>
                    <img className='w-[100px]' src="https://github.com/bhagirath-wscubetech/tailwind-wsucbe-app/blob/main/src/assets/double.png?raw=true" alt="" />
                    <h1 className=' text-[30px] font-bold'>Web development</h1>
                    <h1 className='text-[30px] font-bold'>$149</h1>
                    <p>Lorem ipsum is simply</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ducimus</p>
                    <p>Lorem ipsum is Simply domen</p>
                    <button className='bg-[black] text-white px-20 py-2 rounded font-bold'>Start Trial</button>
                </div>
                <div className='rounded p-2 text-center flex flex-col items-center gap-4 shadow-2xl mt-[20px] duration-300 hover:scale-105'>
                    <img className='w-[100px]' src="https://github.com/bhagirath-wscubetech/tailwind-wsucbe-app/blob/main/src/assets/triple.png?raw=true" alt="" />
                    <h1 className=' text-[30px] font-bold'>Web development</h1>
                    <h1 className='text-[30px] font-bold'>$149</h1>
                    <p>Lorem ipsum is simply</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ducimus</p>
                    <p>Lorem ipsum is Simply domen</p>
                    <button className='bg-green-400 px-20 py-2 rounded font-bold'>Start Trial</button>
                </div>


            </div>
        </div>
    )
}
