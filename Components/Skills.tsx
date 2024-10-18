import React from 'react'
import { 
    FaHtml5,
    FaCss3Alt, 
    FaJava, 
    FaJs, 
    FaPython, 
    FaReact, 
    FaVuejs, 
    FaSwift, 
    FaNodeJs, 
    FaGithub, 
    FaSlack, 
    FaSass, 
    FaFigma, 
    FaSketch } from 'react-icons/fa';

import { 
    SiTypescript, 
    SiMongodb, 
    SiPytorch, 
    SiCplusplus, 
    SiFlask, 
    SiPostgresql, 
    SiStorybook, 
    SiTailwindcss, 
    SiAdobexd, 
    SiVercel, 
    SiFlutter } from 'react-icons/si';


const Skills = () => {
  return (
    <div className='flex flex-col items-center text-center'>
        <hr className='border-t border-[#ffffff29] mt-36 w-[80%] mx-auto'/>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-28 w-[80%] items-start mt-32'>
            <div>
                <h2 className='text-white font-normal text-2xl nav-effect'>Technical Skills</h2>
                {/* technical skills, icon + name */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 font-extralight mt-20'>
                    <div className='flex p-2 border border-white rounded-md'>
                        <FaHtml5 size={20} className='mr-2' color='#e34c26'/>
                        <span className='text-white'>HTML</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <FaCss3Alt size={20} className='mr-2' color='#264de4'/>
                        <span className='text-white'>CSS</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <FaJava size={20} className='mr-2' color='#f89820'/>
                        <span className='text-white'>Java</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <FaJs size={20} className='mr-2' color='#f7df1e'/>
                        <span className='text-white'>JavaScript</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <FaPython size={20} className='mr-2' color='#ffde57'/>
                        <span className='text-white'>Python</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <FaReact size={20} className='mr-2' color='#61dafb'/>
                        <span className='text-white'>React</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <FaVuejs size={20} className='mr-2' color='#4dba87'/>
                        <span className='text-white'>Vue.js</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <FaSwift size={20} className='mr-2' color='#FD2020'/>
                        <span className='text-white'>Swift</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <FaNodeJs size={20} className='mr-2' color='#3c873a'/>
                        <span className='text-white'>Node.js</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <FaGithub size={20} className='mr-2' color='#424242'/>
                        <span className='text-white'>Git</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <FaSlack size={20} className='mr-2' color='#e580ff'/>
                        <span className='text-white'>Slack</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <FaSass size={20} className='mr-2' color='#CD6799'/>
                        <span className='text-white'>SASS</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <FaFigma size={20} className='mr-2' color='#ff7667'/>
                        <span className='text-white'>Figma</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <FaSketch size={20} className='mr-2' color='#FDAD00'/>
                        <span className='text-white'>Sketch</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <SiTypescript size={20} className='mr-2' color='#007acc'/>
                        <span className='text-white'>TypeScript</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <SiMongodb size={20} className='mr-2' color='#0cd45b'/>
                        <span className='text-white'>MongoDB</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <SiPytorch size={20} className='mr-2' color='#EE4C2C'/>
                        <span className='text-white'>PyTorch</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <SiCplusplus size={20} className='mr-2' color='#38bdf8'/>
                        <span className='text-white'>C++</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <SiFlask size={20} className='mr-2' color='white'/>
                        <span className='text-white'>Flask</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <SiPostgresql size={20} className='mr-2' color='#008bb9'/>
                        <span className='text-white'>PostgreSQL</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <SiStorybook size={20} className='mr-2' color='#FF4785'/>
                        <span className='text-white'>Storybook</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <SiTailwindcss size={20} className='mr-2' color='#38bdf8'/>
                        <span className='text-white'>TailwindCSS</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <SiAdobexd size={20} className='mr-2' color='#470137'/>
                        <span className='text-white'>Adobe XD</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <SiVercel size={20} className='mr-2' color='white'/>
                        <span className='text-white'>Vercel</span>
                    </div>
                    <div className='flex p-2 border border-white rounded-md'>
                        <SiFlutter size={20} className='mr-2' color='#41d0fd'/>
                        <span className='text-white'>Flutter</span>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-white font-normal text-2xl nav-effect'>Soft Skills</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 font-extralight mt-20 text-white'>
                    <div className='flex items-center justify-center p-2 border border-white rounded-md'>Detail Oriented</div>
                    <div className='flex items-center justify-center p-2 border border-white rounded-md'>Leadership</div>
                    <div className='flex items-center justify-center p-2 border border-white rounded-md'>Communication</div>
                    <div className='flex items-center justify-center p-2 border border-white rounded-md'>Problem-Solving</div>
                    <div className='flex items-center justify-center p-2 border border-white rounded-md'>Critical Thinking</div>
                    <div className='flex items-center justify-center p-2 border border-white rounded-md'>Work Ethic</div>
                    <div className='flex items-center justify-center p-2 border border-white rounded-md'>Collaboration</div>
                    <div className='flex items-center justify-center p-2 border border-white rounded-md'>Adaptability</div>
                    <div className='flex items-center justify-center p-2 border border-white rounded-md'>Creativity</div>
                    <div className='flex items-center justify-center p-2 border border-white rounded-md'>Time Management</div>
                    <div className='flex items-center justify-center p-2 border border-white rounded-md'>Self-Starter</div>
                    <div className='flex items-center justify-center p-2 border border-white rounded-md'>Quick Learner</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills