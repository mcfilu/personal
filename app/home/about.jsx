import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full h-screen flex flex-row'>
        <div className='w-1/2 h-full relative'>
            <Image fill objectFit='cover' alt="" src="/images/filip_image.jpg" ></Image>
        </div>
        <div className='w-1/2 h-full flex flex-col bg-gradient-to-tl from-black via-zinc-800 to-black justify-center p-10'>
            <h2 className='text-7xl text-white font-display'>Hey</h2>
            <h2 className='text-7xl text-white font-display mt-[1vh]'>I'm Filip</h2>
            <p className='mt-[3vh] text-white'>I am a seasoned software expert who has developed products for enterprise clients such as Intuit, Yale University, and Hewlett-Packard (HP), as well as many venture-backed businesses. I specialize in building applications specific to the business needs of my clients. I have done work in software development, mobile app creation, front-end/back-end web, database/server management, graphic design, and video game development.</p>
            <p className='mt-[3vh] text-white'>I am a seasoned software expert who has developed products for enterprise clients such as Intuit, Yale University, and Hewlett-Packard (HP), as well as many venture-backed businesses. I specialize in building applications specific to the business needs of my clients. I have done work in software development, mobile app creation, front-end/back-end web, database/server management, graphic design, and video game development.</p>
        </div>

    </div>
  )
}

export default About