import React, {useState} from 'react'
import {
    FaRegUser,
    FaInstagram,
    FaSpotify,
    FaLinkedin,
    FaGithub,
    FaDiscord,
    FaEnvelope,
} from 'react-icons/fa'

const MagicIndicator: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = (): void => {
        setIsOpen(!isOpen);
    };

    // trig calc for 6 icons - positions
    const positions = [
        { x: 0, y: -100 },   // Top (12 o'clock)
        { x: 86.6, y: -50 }, // Top-right (2 o'clock)
        { x: 86.6, y: 50 },  // Bottom-right (4 o'clock)
        { x: 0, y: 100 },    // Bottom (6 o'clock)
        { x: -86.6, y: 50 }, // Bottom-left (8 o'clock)
        { x: -86.6, y: -50 }, // Top-left (10 o'clock)
    ];

  return (
    <div className='relative w-28 h-28'>
    {/* Main User Icon */}
    <button className='w-20 h-20 bg-[#ffffffe4] rounded-full flex items-center justify-center' onClick={toggleMenu}>
        <FaRegUser size={24} className='text-[#c2410c]' />
    </button>

    {/* Circular Menu */}
    <div className='relative'>
        <div className={`absolute w-[180px] h-[180px] transform ${
            isOpen ? 'scale-100' : 'scale-0'
        } transition-transform duration-500 ease-out`}
        style={{ top: '-100px', left: '-100px' }}>
            {/* Circle of icons */}
            {positions.map((pos, index) => (
                <div
                    key={index}
                    className="absolute w-16 h-16"
                    style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
                >
                    {index === 0 && (
                        <a href="https://www.instagram.com/emi.dashler/" target='_blank' rel='noopener noreferrer' className='w-16 h-16 bg-[#ffffff] rounded-full flex items-center justify-center hover:bg-[#ffffff4f] transition-colors'>
                            <FaInstagram size={24} className='text-[#ff1ebf]' />
                        </a>
                    )}
                    {index === 1 && (
                        <a href="https://open.spotify.com/user/kdb6pye33fsroyo3og0i8ijz5" target='_blank' rel='noopener noreferrer' className='w-16 h-16 bg-[#ffffff] rounded-full flex items-center justify-center hover:bg-[#ffffff4f] transition-colors'>
                            <FaSpotify size={24} className='text-[#14b953]' />
                        </a>
                    )}
                    {index === 2 && (
                        <a href="https://github.com/dashleremi" target='_blank' rel='noopener noreferrer' className='w-16 h-16 bg-[#ffffff] rounded-full flex items-center justify-center hover:bg-[#ffffff4f] transition-colors'>
                            <FaGithub size={24} className='text-[#000000]' />
                        </a>
                    )}
                    {index === 3 && (
                        <a href="https://discordapp.com/users/emidashler" target='_blank' rel='noopener noreferrer' className='w-16 h-16 bg-[#ffffff] rounded-full flex items-center justify-center hover:bg-[#ffffff4f] transition-colors'>
                            <FaDiscord size={24} className='text-[#449fff]' />
                        </a>
                    )}
                    {index === 4 && (
                        <a href="https://www.linkedin.com/in/ramiaemidashler" target='_blank' rel='noopener noreferrer' className='w-16 h-16 bg-[#ffffff] rounded-full flex items-center justify-center hover:bg-[#ffffff4f] transition-colors'>
                            <FaLinkedin size={24} className='text-[#2723ff]' />
                        </a>
                    )}
                    {index === 5 && (
                        <a href="mailto:emi.dashlerl@gmail.com" target='_blank' rel='noopener noreferrer' className='w-16 h-16 bg-[#ffffff] rounded-full flex items-center justify-center hover:bg-[#ffffff4f] transition-colors'>
                            <FaEnvelope size={24} className='text-[#9f1818]' />
                        </a>
                    )}
                </div>
            ))}
        </div>
    </div>
</div>
  )
}

export default MagicIndicator