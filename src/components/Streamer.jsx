import React from 'react'

export default function Streamer(props) {

    const { avatar, name, category, viewers, online } = props

    return (
        <div className='flex flex-row gap-2 hover:bg-[#18181a] p-2 rounded-md hover:cursor-pointer justify-between'>
            <div className='flex flex-row gap-2 items-center'>
                <img src={avatar} alt="" className='w-9 h-9 rounded-full' />
                <div className='flex flex-col'>
                    <p className='font-bold'>{name}</p>
                    <p className='text-sm text-gray-300'>{category}</p>
                </div>
            </div>
            <div className='flex flex-row items-start'>
                <div className='flex flex-row items-center gap-1'>
                    {
                        online && <div className='w-2 h-2 bg-red-500 rounded-full'></div> ||
                        Number(viewers) === 0 && <div className='w-2 h-2 bg-gray-500 rounded-full'></div>
                    }
                    {
                        Number(viewers) !== 0 && <p className='text-sm'>{viewers} k</p>
                    }
                </div>
            </div>
        </div>

    )
}
