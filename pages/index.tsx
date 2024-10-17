import About from '@/Components/About'
import Home from '@/Components/Home'
import MouseEffect from '@/Components/MouseEffect'
import NavBar from '@/Components/NavBar'
import React from 'react'

const index = () => {
  return (
    <div className='overflow-x-hidden'>
      <NavBar/>
      <Home/>
      <About/>
    </div>
  )
}

export default index