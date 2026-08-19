import React from 'react'

const Header = () => {
  return (
    <div className='p-2 border-b-2 border-zinc-200 w-full h-20 flex justify-between items-center'>
      <h1 className='text-5xl'>Todo</h1>
      <div className='flex gap-2'>
        <div className='flex flex-col leading-5'>
          <h5 className='text-[22px] text-right'>Today</h5>
          <h5 className='flex text-xm [word-spacing:-2px]'>19 Aug 2026</h5>
        </div>
        <div>
          <i className="text-4xl text-blue-600 ri-calendar-event-fill"></i>
        </div>
      </div>
    </div>
  )
}

export default Header