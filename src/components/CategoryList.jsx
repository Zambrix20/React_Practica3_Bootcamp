import React from 'react'
import CategoryCard from './CategoryCard'

export default function CategoryList() {
    return (
        <main className=''>
            <h3 className='font-bold pb-2 pl-4 text-2xl text-purple-300 underline underline-offset-8 hover:text-purple-400 hover:cursor-pointer'>Categorías</h3>
            <div className='grid grid-cols-6 p-2 '>
                <CategoryCard image='https://static-cdn.jtvnw.net/ttv-boxart/2085980140_IGDB-285x380.jpg' title='Lethal Company' spectators='20432' />
                <CategoryCard image='https://static-cdn.jtvnw.net/ttv-boxart/23020_IGDB-285x380.jpg' title='ROBLOX' spectators='3518' />
                <CategoryCard image='https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg' title='Grand Theft Auto V' spectators='355609' />
                <CategoryCard image='https://static-cdn.jtvnw.net/ttv-boxart/1910103699_IGDB-285x380.jpg' title='THE FINALS' spectators='19791' newCategory />
                <CategoryCard image='https://static-cdn.jtvnw.net/ttv-boxart/143106037_IGDB-285x380.jpg' title='EA Sports FC 24' spectators='37.971' />
                <CategoryCard image='https://static-cdn.jtvnw.net/ttv-boxart/386303001_IGDB-285x380.jpg' title='The Exit 8' spectators='149' newCategory />
                <CategoryCard image='https://static-cdn.jtvnw.net/ttv-boxart/509667-285x380.jpg' title='Comida y bebida' spectators='2031' />
                <CategoryCard image='https://static-cdn.jtvnw.net/ttv-boxart/491168_IGDB-285x380.jpg' title='Clash Royale' spectators='982' />
                <CategoryCard image='https://static-cdn.jtvnw.net/ttv-boxart/463447553_IGDB-285x380.jpg' title='Super Mario Bros. Wonder' spectators='1776' />
                <CategoryCard image='https://static-cdn.jtvnw.net/ttv-boxart/497431_IGDB-285x380.jpg' title='Skull and Bones' spectators='172' newCategory />

                <CategoryCard image='https://static-cdn.jtvnw.net/ttv-boxart/818770426_IGDB-285x380.jpg' title='Granblue Fantasy Versus: Rising' spectators='3238' newCategory />
                <CategoryCard image='https://static-cdn.jtvnw.net/ttv-boxart/41917829_IGDB-285x380.jpg' title='Avatar: Frontiers of Pandora' spectators='2443' newCategory />
                <CategoryCard image='https://static-cdn.jtvnw.net/ttv-boxart/1469308723-285x380.jpg' title='Desarrollo de software y juegos' spectators='13274' />
                <CategoryCard image='https://static-cdn.jtvnw.net/ttv-boxart/322503446_IGDB-285x380.jpg' title='Resident Evil 4' spectators='769' />
                <CategoryCard image='https://static-cdn.jtvnw.net/ttv-boxart/1540019723_IGDB-285x380.jpg' title="Five Nights at Freddy's Help Wanted 2" spectators='118' newCategory />
            </div>

        </main>
    )
}
