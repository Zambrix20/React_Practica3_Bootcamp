import React from 'react'
import Navbar from './components/Navbar'
import StreamersList from './components/StreamersList'
import CategoryList from './components/CategoryList'

export default function App() {
  return (
    <main className='bg-black text-white min-h-screen font-sans'>
      <Navbar />
      <div className='grid grid-cols-[250px_auto] '>
        <StreamersList />
        <CategoryList />
      </div>
    </main>
  )
}

