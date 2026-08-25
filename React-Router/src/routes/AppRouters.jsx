import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Details from '../components/Details'
import Contact from '../pages/Contact'

const AppRouters = () => {
  return (
    <div className="flex h-full w-full py-5">
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} >
            <Route path="/about/details" element={<Details />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
  )
}

export default AppRouters