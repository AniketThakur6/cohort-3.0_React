import React from 'react'
import { Outlet } from 'react-router';

const MainLayouts = () => {
  return (
    <div className='bg-black text-white text-2xl min-h-screen w-full'> 
      <div>navbar</div>
      <Outlet />
    </div>
  )
}

export default MainLayouts;