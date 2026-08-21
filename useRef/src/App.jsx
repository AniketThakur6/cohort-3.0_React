import React from 'react'
import Form from './components/Form'
import FormuseRef from './components/FormuseRef'
import RHF from './components/RHF'


// to optimize the rendering of form when input is captured 
const App = () => {
  return (
    <div className='text-white text-xl bg-black w-full h-screen flex justify-center items-center'>
      <RHF />
    </div>
  )
}

export default App