import React from 'react'

export default function CategoryCard(props) {

    const { image, title, spectators, newCategory } = props

    return (
        <div className='flex flex-col gap-2 hover:text-white p-2 hover:cursor-pointer justify-between'>
            <div className='relative group hover:bg-purple-500 '>
                <div className='gap-2 items-center bottom-0 left-0'>
                    <div className='transition-transform transform group-hover:-translate-y-2 group-hover:translate-x-2'>
                        <img src={image} alt="" className='w-full' />
                        {newCategory && <div className='bg-[#FF75E6] text-black rounded-full px-2 py-1 text-xs absolute top-3 right-3'>NUEVO</div>}
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <p className='font-bold truncate overflow-ellipsis hover:text-purple-400'>{title}</p>
                <p className='text-sm text-gray-400 hover:text-purple-400'>{spectators} espectadores</p>
            </div>
        </div>
    )
}
