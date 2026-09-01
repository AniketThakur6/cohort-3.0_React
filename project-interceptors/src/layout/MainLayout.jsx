import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='grid bg-black text-white gap-2 grid-cols-[1fr_6fr] h-screen'>
      <div><Navbar /></div>
      <div className='p-3 overflow-auto'><Outlet /></div>
    </div>
  )
}

export default MainLayout