import React from 'react'

export default function Export() {
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='bg-[white] grid grid-cols-1 md:grid-cols-3'>
                    <div>
                        <img src="https://github.com/bhagirath-wscubetech/tailwind-wsucbe-app/blob/main/src/assets/laptop.jpg?raw=true" alt="" />
                    </div>
                    <div className='md:col-span-2 flex flex-col justify-center gap-2'>
                        <h1 className='font-bold text-green-400'>LEARN FROM EXPERTS</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quae, provident
                            pariatur inventore a harum facere sed odio laudantium aliquid. Cum, ab rem.
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quae, provident
                            pariatur inventore a harum facere sed odio laudantium aliquid. Cum, ab rem.
                        </p>
                        <p className='mt-4 w-[150px] text-center p-2 text-[white] rounded bg-[black]'>Get Started</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
