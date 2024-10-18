import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Experience = () => {
  return (
    <div className='flex flex-col items-center'>
        <hr className='border-t border-[#ffffff29] mt-36 w-[80%] mx-auto'/>
        <div className='grid grid-cols-1 gap-x-28 w-[80%] items-start mt-32'>
            <div className='text-white'>
                <h1 className='text-5xl font-normal nav-effect'>Education</h1>
                <h3 className='mt-12 text-2xl font-light'>Florida International University</h3>
                <div className='flex items-center gap-2 mt-5'><MdKeyboardDoubleArrowRight size={20} className='w-10'/><p className='text-xl font-extralight'>Master of Science - Research Design & Analysis</p></div>
                <div className='flex items-center gap-2 mt-5'><MdKeyboardDoubleArrowRight size={20} className='w-10'/><p className='text-xl font-extralight'>Bachelor of Arts - Computer Science</p></div>
            </div>
            <div className='mt-32 text-white'>
                <h1 className='text-5xl font-normal nav-effect'>Experience</h1>
                <h3 className='mt-12 text-2xl font-light glow-text'>Upwork</h3>
                <div className='flex items-center gap-2 mt-5'><MdKeyboardDoubleArrowRight size={20} className='w-10'/><p className='text-xl font-extralight'>Software Engineer Intern</p></div>
                <h3 className='mt-12 text-2xl font-light glow-text'>CHANEL</h3>
                <div className='flex items-center gap-2 mt-5'><MdKeyboardDoubleArrowRight size={20} className='w-10'/><p className='text-xl font-extralight'>UX/UI Designer Intern</p></div>
                <h3 className='mt-12 text-2xl font-light glow-text'>Anthropologie</h3>
                <div className='flex items-center gap-2 mt-5'><MdKeyboardDoubleArrowRight size={20} className='w-10'/><p className='text-xl font-extralight'>Frontend Developer Intern</p></div>
            </div>
        </div>
    </div>
  )
}

export default Experience