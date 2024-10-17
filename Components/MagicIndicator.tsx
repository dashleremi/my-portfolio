import {useRef, useState, useEffect} from 'react'
import {
    FaRegUser,
    FaInstagram,
    FaSpotify,
    FaLinkedin,
    FaGithub,
    FaDiscord,
    FaEnvelope,
    FaGit
} from 'react-icons/fa'

const MagicIndicator = () => {
    const [isOpen, seteIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => {
        if (!isOpen) {
            setIsHovered(false);
        }
    }

    const handleClick = () => seteIsOpen(!isOpen);
    const handleClickOutside = (event: MouseEvent) => {
        if(menuRef.current && !menuRef.current.contains(event.target as Node)) {
            seteIsOpen(false);
        }
    }

    useEffect(() => {
        if(isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [isOpen])

  return (
    <div className='sticky transform -translate-y-1/2'>
        <div className='relative flex items-center justify-center' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div onClick={handleClick} className='w-20 h-20 flex items-center justify-center cursor-pointer bg-[#373737] p-3 rounded-full'>
                <FaRegUser size={20} className='text-[#ffa667]'/>
            </div>

            <div className={`absolute bottom-24 flex flex-col justify-center items-center gap-10 p-10 rounded-lg bg-[#ffffff] bg-opacity-30 backdrop-blur-lg transition-all duration-300
                ${
                    isHovered || isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6 pointer-events-none'
                }`}>
                    <a href="https://www.instagram.com/emi.dashler" target='_blank' rel='noopener noreferrer'>
                        <FaInstagram size={35} className='text-[#f238ff] hover:text-[#ffffff] cursor-pointer'/>
                    </a>
                    <a href="https://open.spotify.com/user/kdb6pye33fsroyo3og0i8ijz5" target='_blank' rel='noopener noreferrer'>
                        <FaSpotify size={35} className='text-[#15ce50] hover:text-[#ffffff] cursor-pointer'/>
                    </a>
                    <a href="https://www.linkedin.com/in/ramiaemidashler" target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin size={35} className='text-[#2344ff] hover:text-[#ffffff] cursor-pointer'/>
                    </a>
                    <a href="https://github.com/dashleremi" target='_blank' rel='noopener noreferrer'>
                        <FaGithub size={35} className='text-[#000000] hover:text-[#ffffff] cursor-pointer'/>
                    </a>
                    <a href="https://discordapp.com/users/emidashler" target='_blank' rel='noopener noreferrer'>
                        <FaDiscord size={35} className='text-[#00e1ff] hover:text-[#ffffff] cursor-pointer'/>
                    </a>
                    <a href="mailto:emi.dashler@gmail.com" target='_blank' rel='noopener noreferrer'>
                        <FaEnvelope size={35} className='text-[#ff8c8c] hover:text-[#ffffff] cursor-pointer'/>
                    </a>
            </div>
        </div>
    </div>
  )
}

export default MagicIndicator