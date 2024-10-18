import React from 'react'

import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaDiscord,
} from 'react-icons/fa'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='flex flex-col items-center mb-60'>
        <hr className='border-t border-[#ffffff29] mt-36 w-[80%] mx-auto'/>
        <div className='w-[80%] items-start mt-32'>
            <h1 className='text-4xl font-light text-white nav-effect'>Contact</h1>
        </div>

        
            <div className='w-[80%] flex gap-10 mt-10'>
                <div className='bg-[#ffffff0d] p-5 rounded-full'>
                    <a href="https://github.com/dashleremi" target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={30} className='text-[#000000] hover:text-[#ffffff] cursor-pointer'/>
                    </a>
                </div>
                <div className='bg-[#ffffff0d] p-5 rounded-full'>
                    <a href="https://www.linkedin.com/in/ramiaemidashler" target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={30} className='text-[#2344ff] hover:text-[#ffffff] cursor-pointer'/>
                    </a>
                </div>

                <div className='bg-[#ffffff0d] p-5 rounded-full'>
                    <a href="https://discordapp.com/users/emidashler" target='_blank' rel='noopener noreferrer'>
                        <FaDiscord size={30} className='text-[#00e1ff] hover:text-[#ffffff] cursor-pointer'/>
                    </a>
                </div>

                <div className='bg-[#ffffff0d] p-5 rounded-full'>
                    <a href="https://www.instagram.com/emi.dashler" target='_blank' rel='noopener noreferrer'>
                        <FaInstagram size={30} className='text-[#f238ff] hover:text-[#ffffff] cursor-pointer'/>
                    </a>
                </div>
            </div>
    <ContactForm/>
    </div>
  )
}

export default Contact