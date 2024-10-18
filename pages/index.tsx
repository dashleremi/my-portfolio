import About from '@/Components/About'
import Experience from '@/Components/Experience'
import Home from '@/Components/Home'
import NavBar from '@/Components/NavBar'
import Skills from '@/Components/Skills'
import React from 'react'

const index = () => {
  return (
    <div className='overflow-x-hidden'>
      <NavBar/>
      <Home/>
      <div>
      <About/>
      <Skills/>
      <Experience/>
      </div>
    </div>
  )
}

export default index