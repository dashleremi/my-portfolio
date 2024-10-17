import React, {useState} from 'react'
import {
    FaRegUser,
    FaInstagram,
    FaSpotify,
    FaWhatsapp,
    FaLinkedin,
    FaGithub,
    FaDiscord,
    FaEnvelope,
} from 'react-icons/fa'

const MagicIndicator: React.FC = () => {
  return (
    <div className='fixed bottom-6 right-6 flex flex-col items-center group'>
        <div className='relative'>
            <button className='w-16 h-16 bg-[#ffffffe4] rounded-full flex items-center justify-center text-[#c2410c]'>
                <FaRegUser size={24}/>
            </button>

            <div className='flex flex-col space-y-4 mt-4 absolute left-1/2 transform -translate-x-1/2
            opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 ease-in-out'>

                <a href="https://www.instagram.com/emi.dashler/" target='_blank' rel='noopener noreferrer' className='w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-[#c2410c]'>
                <FaInstagram size={20}/>
                </a>
                
                <a href="https://open.spotify.com/user/kdb6pye33fsroyo3og0i8ijz5" target='_blank' rel='nooperner noreferrer' className='w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-[#c2410c]'>
                <FaSpotify size={20}/>
                </a>

                <a href="https://github.com/dashleremi" target='_blank' rel='nooperner noreferrer' className='w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-[#c2410c]'>
                <FaGithub size={20}/>
                </a>

                <a href="https://discordapp.com/users/emidashler" target='_blank' rel='nooperner noreferrer' className='w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-[#c2410c]'>
                <FaDiscord size={20}/>
                </a>

                <a href="https://www.linkedin.com/in/ramiaemidashler" target='_blank' rel='nooperner noreferrer' className='w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-[#c2410c]'>
                <FaLinkedin size={20}/>
                </a>

                <a href="mailto:emi.dashlerl@gmail.com" target='_blank' rel='nooperner noreferrer' className='w-12 h-12 bg-[#ffffff] rounded-full flex items-center justify-center text-[#c2410c]'>
                <FaEnvelope size={20}/>
                </a>

            </div>
        </div>
    </div>
  )
}

export default MagicIndicator