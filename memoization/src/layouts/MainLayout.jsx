import React from 'react'
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const Main = () => {
  return (
    <div className='h-screen w-full bg-black text-white text-2xl'>
      <div><Navbar /></div>
      <div className='p-10 flex w-full'><Outlet /></div>
    </div>
  )
}

export default Main;