import React from 'react'
import { useNavigate } from 'react-router'

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-5 w-100 p-20' >
      <h1>Register</h1>
      <button className='p-2 bg-blue-700' onClick={()=> navigate('/login')}> login page  </button>
    </div>
  )
}

export default RegisterPage