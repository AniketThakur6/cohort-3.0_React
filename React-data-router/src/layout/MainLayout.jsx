import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router';

const MainLayout = ({setisAdmin}) => {
  return (
    <div className='grid grid-cols-[1fr_6fr] h-screen w-full bg-black
    text-white'>
      <Navbar setisAdmin={setisAdmin} />
      <div className='w-full h-full p-5 '>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout