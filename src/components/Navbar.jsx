import React from 'react'

export default function Navbar() {
    return (
        <nav className='bg-[#18181a] h-14 flex flex-row gap-5 p-3'>

            <img src="https://seeklogo.com/images/T/twitch-logo-4931D91F85-seeklogo.com.png" alt="" className='hover:cursor-pointer' />

            <div className='font-bold hover:text-purple-400 hover:cursor-pointer'>Explorar</div>
        </nav>
    )
}
