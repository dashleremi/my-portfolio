import About from '@/Components/About'
import Home from '@/Components/Home'
import NavBar from '@/Components/NavBar'
import React from 'react'

const index = () => {
  return (
    <div className='overflow-x-hidden'>
      <NavBar/>
      <Home/>
      <div>
      <About/>
      </div>
    </div>
  )
}

export default index