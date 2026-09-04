import React from 'react'
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const MainLayouts = () => {
  return (
    <div className='bg-black text-white text-2xl min-h-screen w-full'> 
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayouts;