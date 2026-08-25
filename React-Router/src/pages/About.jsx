import React from 'react'
import { Outlet, useNavigate } from 'react-router'

const About = () => {

  const navigate = useNavigate()

  return (
    <div className='flex flex-col gap-3'>About  this is about pages 
      <button onClick={()=>{navigate('/about/details')}
      }  >this details btn</button>
      <Outlet />
    </div>
  )
}

export default About