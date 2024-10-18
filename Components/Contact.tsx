import React from 'react'
import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaDiscord,
} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='flex flex-col items-center'>
        <hr className='border-t border-[#ffffff29] mt-36 w-[80%] mx-auto'/>
        <div className='w-[80%] items-start mt-32'>
            <h1 className='text-4xl font-light text-white nav-effect'>Contact</h1>
        </div>
        <div className='w-[80%] flex items-start gap-10 mt-10'>
        <a href="https://github.com/dashleremi" target='_blank' rel='noopener noreferrer'>
            <FaGithub size={35} className='text-[#000000] hover:text-[#ffffff] cursor-pointer'/>
        </a>
        <a href="https://www.linkedin.com/in/ramiaemidashler" target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size={35} className='text-[#2344ff] hover:text-[#ffffff] cursor-pointer'/>
        </a>
        <a href="https://discordapp.com/users/emidashler" target='_blank' rel='noopener noreferrer'>
            <FaDiscord size={35} className='text-[#00e1ff] hover:text-[#ffffff] cursor-pointer'/>
        </a>
        <a href="https://www.instagram.com/emi.dashler" target='_blank' rel='noopener noreferrer'>
            <FaInstagram size={35} className='text-[#f238ff] hover:text-[#ffffff] cursor-pointer'/>
        </a>
        </div>

        <div>

        </div>
    </div>
  )
}

export default Contact