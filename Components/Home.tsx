import React from 'react'
import TextEffect from './TextEffect'
import MouseEffect from './MouseEffect'

const Home = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='absolute text-center'>
            <h1 className='text-[9rem] font-semibold'>
                <span className='text-[#ffffff]'>Emi Dashler</span>
            </h1>
            <TextEffect/>
            <MouseEffect/>
        </div>
    </div>
  )
}

export default Home