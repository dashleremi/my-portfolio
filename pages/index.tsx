import About from '@/Components/About'
import Contact from '@/Components/Contact'
import Experience from '@/Components/Experience'
import Home from '@/Components/Home'
import NavBar from '@/Components/NavBar'
import Projects from '@/Components/Projects'
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
        <Projects/>
      </div>
      <Contact/>
    </div>
  )
}

export default index