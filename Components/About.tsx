import React from 'react'
import HawaiiTime from './HawaiiTime'

const About = () => {
  return (
    <div className='flex flex-col items-center text-center'>
        <h1 className='text-4xl font-normal text-white mt-10'>Welcome to My Portfolio!</h1>
        <img src='images/IMG_4211.PNG' alt='Emi' className='w-56 h-60 object-cover rounded-lg mt-20'/>

        <div className='text-xl font-extralight text-white mt-10'>
            <p className='mt-10'>I'm Emi, a software engineer passionate about bridging the gap between creativity and technology while having some fun along the way!</p>
            <p className='mt-10'>Alongside a bachelor's degree in computer science, I've taught myself additional programming languages to expand my toolkit including JavaScript/TypeScript,
                <br />
                React, Node.js, Next.js, Swift, Flutter, and so much more, driven by a genuine curiosity for learning and growth.
            </p>
            <p className='mt-10'>Outside of work, you will find me indulging my love for reading, or unwinding through art - whether it's drawing, painting, or letting creativity
                <br />
                flow in various forms.
                <br />
                ... what can I say, I love all things creative!
            </p>
        </div>
        <div className='mt-10'><HawaiiTime/></div>
    </div>
  )
}

export default About