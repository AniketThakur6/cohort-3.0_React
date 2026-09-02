import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counterSlice';

const App = () => {
  let dispatch = useDispatch();
  const { count } = useSelector((store)=> store.counter);


  return (
    <div className='text-white p-25 text-2xl flex flex-col gap-5 w-fit
    '>
      <h1>My Count is {count}</h1>
      <button onClick={()=> dispatch(increment())} className='py-2 px-4 bg-blue-700 text-sm w-fit rounded-lg' >increment</button>
      <button onClick={()=> dispatch(decrement())} className='py-2 px-4 bg-blue-700 text-sm w-fit rounded-lg' >decrement</button>
    </div>
  )
}

export default App