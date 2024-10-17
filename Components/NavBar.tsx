import React from 'react'

const NavBar = () => {
  return (
    <div className='fixed w-full top-0 mx-auto rounded-b-lg z-50 h-[12vh] bg-{#0f0f12]'>
      <div className='container mx-auto flex items-center justify-between mt-10'>
        <div className='nav-effect glow-text'>About</div>
        <div className='nav-effect glow-text'>Skills</div>
        <div className='nav-effect glow-text'>Experience</div>
        <div className='nav-effect glow-text'>Projects</div>
        <div className='nav-effect glow-text'>Contact</div>
      </div>
    </div>
  )
}

export default NavBar