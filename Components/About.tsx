import React from 'react'

const About = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-start'>
      <img src='images/IMG_4211.PNG' className='w-64 h-64 rounded-full object-cover'/>

      <div>
        <h1 className='text-4xl font-medium text-white whitespace-nowrap'>Welcome to My Porfolio!</h1>
        <div className='text-xl font-extralight text-white mt-10'>
          <p>I'm Emi, a software engineer passionate about brindging the gap between creativity and technology while having some fun along the way!</p>
          <p className='mt-5'>Alongside a bachelor's degree in computer science, I've self-taught additional programming languages to expand my toolkit including JavaScript/TypeScript, React.js, Node.js, Swift, Flutter, and so much more, driven by a genuine curiosity for learning and growth.</p>
          <p className='mt-5'>Outside of work, you will find me indulging my love for reading or unwinding through art - whether it's drawing, painting, or letting creativity flow in various forms.</p>
          <p className='mt-5'>...what can I say, I love all things creative !</p>
        </div>
      </div>

    </div>
  )
}

export default About