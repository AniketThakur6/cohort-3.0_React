import React from 'react'

const Usercard = ({ user,deleteUser,setToggle,setIsEdit }) => {

   const updateUser = (user) => {
    setIsEdit(user);
    console.log("updated")
    setToggle(prev => !prev)
   }

  return (
    <div className='rounded-lg flex flex-col p-3 bg-zinc-800 border border-zinc-700 w-55 gap-4'>
      <div className='p-1 rounded-xl border-2 border-zinc-700'><img className='h-40 w-full object-cover rounded-lg' src={user.image} alt="" /></div>
      <div className='text-xl w-50 '>
        <h1 className='font-semibold truncate'>Name - {user.name}</h1>
        <h1 className='truncate'>Email - {user.email} </h1>
        <h1 className='truncate'>Contact - {user.mobile} </h1>
      </div>
      <div className='flex justify-between mb-2'> 
        <button onClick={()=>{
          updateUser(user)
        }} className='py-2 px-4 bg-yellow-600 rounded-lg'>Update</button>
        <button onClick={()=>{
          deleteUser(user.id)
        }} className='py-2 px-4 bg-red-600 rounded-lg'>Delete</button>
      </div>
    </div>
  )
}

export default Usercard