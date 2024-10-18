import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { GoDash } from "react-icons/go";
import { HiOutlineLogout } from "react-icons/hi";
import { IoPinOutline } from "react-icons/io5";

const Experience = () => {
  return (
    <div className='flex flex-col items-center'>
        <hr className='border-t border-[#ffffff29] mt-36 w-[80%] mx-auto'/>
        <div className='grid grid-cols-1 gap-x-28 w-[80%] items-start mt-32'><h1 className='text-5xl font-normal nav-effect'>Education</h1></div>
        <div className='grid grid-cols-1 gap-x-28 w-[70%] items-start mt-10'>
            
            <div className='text-white'>
                <h3 className='mt-12 text-2xl font-light hover:text-[#f97316]'><a href="https://www.fiu.edu/" target='_blank' rel='noopener noreferrer'>Florida International University</a></h3>
                <p className='mt-3 flex items-center gap-3 font-extralight text-[#784242]'><IoPinOutline size={20} />Miami, FL</p>
                <div className='flex items-center gap-2 mt-5'><MdKeyboardDoubleArrowRight size={20} className='w-10'/><p className='text-xl font-extralight'>Dec 2025 - <span className='font-normal'>Master of Science</span> - Research Design & Analysis</p><a href="https://fiuonline.fiu.edu/programs/online-graduate-degrees/master-of-science-in-research-design-and-analysis.php" target='_blank' rel='noopener noreferrer' className='text-[#ffffff26] hover:text-[#ffffff]'><HiOutlineLogout size={25}/></a></div>
                <div className='flex items-center gap-2 mt-5'><MdKeyboardDoubleArrowRight size={20} className='w-10'/><p className='text-xl font-extralight'>Dec 2023 - <span className='font-normal'>Bachelor of Arts</span> - Computer Science</p><a href="https://www.cis.fiu.edu/" target='_blank' rel='noopener noreferrer' className='text-[#ffffff26] hover:text-[#ffffff]'><HiOutlineLogout size={25}/></a></div>
            </div>
        </div>
        <div className='grid grid-cols-1 gap-x-28 w-[65%] items-start mt-5 text-white font-extralight'><p><span className='font-light mr-5 text-[#f97316]'>Relevant Courses:</span> Data Structures and Algorithms, Discrete Structures, Computer Architecture, Artificial Intelligence, HCI for Computer Science,
        Systems Programming, Database Management, Software Engineering, Logic for Computer Science</p></div>

        <div className='grid grid-cols-1 gap-x-28 w-[80%] items-start mt-32'><h1 className='text-5xl font-normal nav-effect'>Experience</h1></div>
        <div className='grid grid-cols-1 gap-x-28 w-[70%] items-start mt-10 text-white'>
                <h3 className='mt-12 flex items-center gap-5'><span className='font-light glow-text text-2xl'>Upwork</span><a href="https://www.upwork.com/cat/ai/" target='_blank' rel='noopener noreferrer' className='text-[#ffffff26] hover:text-[#ffffff]'><HiOutlineLogout size={25}/></a><GoDash /><span className='text-white font-extralight text-xl'>Nov. 2023 - Aug. 2024</span></h3>
                <p className='mt-5 flex items-center gap-3 font-extralight text-[#784242]'><IoPinOutline size={20} />Honolulu, HI</p>
                <div className='flex items-center gap-2 mt-5'><MdKeyboardDoubleArrowRight size={20} className='w-10'/><p className='text-xl font-extralight'>Software Engineer Intern</p></div>
                <div className='mt-5 font-extralight'>
                    <p>- Developed and implemented 20+ custom UI components using React.js, Framer, MDX, and TypeScript streamlining application
                    performance and maintainability by reducing JavaScript bundle size by 12%.</p>
                    <p>- Collaborated with a team of 17 UX/UI designers and software Engineers to enhance
                    features through Agile methodologies, leading to increased operational efficiency, and strengthened user experience.</p>
                    <p>- Spearheaded the development and management of a comprehensive full-stack architecture using React, Next.js, Express, and Node.js.</p>
                </div>
                <h3 className='mt-12 flex items-center gap-5'><span className='font-light glow-text text-2xl'>CHANEL</span><a href="https://www.chanel.com/us/fashion/services/chanel-et-moi/" target='_blank' rel='noopener noreferrer' className='text-[#ffffff26] hover:text-[#ffffff]'><HiOutlineLogout size={25}/></a><GoDash /><span className='text-white font-extralight text-xl'>May 2023 - Oct. 2023</span></h3>
                <p className='mt-5 flex items-center gap-3 font-extralight text-[#784242]'><IoPinOutline size={20} />Miami, FL</p>
                <div className='flex items-center gap-2 mt-5'><MdKeyboardDoubleArrowRight size={20} className='w-10'/><p className='text-xl font-extralight'>UX/UI Designer Intern</p></div>
                <div className='mt-5 font-extralight'>
                    <p>- Analyzed and maintained documentation and style guides to ensure consistency across 3 projects, optimizing cross-team communication and 
                    reducing design inconsistencies by 25%.</p>
                    <p>- Modernized existing UX/UI designs based on user feedback and analytics, refining navigation and functionality, boosting client satisfaction
                    by 13% and monthly store sales by 28%.</p>
                    <p>- Conducted user research and usability testing on high-priority projects, identifying key pain points and implementing design solutions that 
                    improved task completion rates by 20% and enhanced overall user satisfaction by 18%.</p>
                </div>
                <h3 className='mt-12 flex items-center gap-5'><span className='font-light glow-text text-2xl'>Anthropologie</span><a href="https://www.urbn.com/home" target='_blank' rel='noopener noreferrer' className='text-[#ffffff26] hover:text-[#ffffff]'><HiOutlineLogout size={25}/></a><GoDash /><span className='text-white font-extralight text-xl'>Aug. 2022 - May 2023</span></h3>
                <p className='mt-5 flex items-center gap-3 font-extralight text-[#784242]'><IoPinOutline size={20} />Honolulu, HI</p>
                <div className='flex items-center gap-2 mt-5'><MdKeyboardDoubleArrowRight size={20} className='w-10'/><p className='text-xl font-extralight'>Frontend Developer Intern</p></div>
                <div className='mt-5 font-extralight'>
                    <p>- Redesigned websites using modern frameworks, implementing change management processes to ensure code integrity and compliance with corporate
                    standards, achieving a 30% improvement in mobile responsiveness and a 10% increase in conversion rates.</p>
                    <p>- Designed, built, and optimized responsive websites using HTML, CSS, and JavaScript for 3 employee-exclusive applications, culminating in  a 20%
                    increase in page load speed and a 15% boost in user engagement.</p>
                    <p>- Collaborated on compliance projects to ensure systems adhered to internal security controls, contributing to 
                    documentation efforts.</p>
                </div>
        </div>
    </div>
  )
}

export default Experience