import React from 'react'

const NavBar = () => {
  return (
    <div className='fixed w-full top-0 mx-auto rounded-b-lg z-50 h-[12vh] bg-[#0f0f12]'>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <a href='#about' className='nav-effect glow-text'>About</a>
        <a href='#skills' className='nav-effect glow-text'>Skills</a>
        <a href='#experience' className='nav-effect glow-text'>Experience</a>
        <a href='#projects' className='nav-effect glow-text'>Projects</a>
        <a href='#contact' className='nav-effect glow-text'>Contact</a>
      </div>
    </div>
  )
}

export default NavBar