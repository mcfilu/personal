import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id="about" className='w-full flex flex-col md:flex-row justify-center'>
        <div className='w-full md:w-1/2  relative bg-gradient-to-br from-black via-zinc-800 to-black'>
            <Image fill objectFit='cover' alt="" src="/images/me_no_bg.png" ></Image>
        </div>
        <div className='w-full md:w-1/2 h-full flex flex-col bg-gradient-to-tl from-black via-zinc-800 to-black justify-center p-10 py-[10vh]'>
            <h2 className='text-[7vh] md:text-[8vh] leading-tight text-white font-display'>Hey</h2>
            <h2 className='text-[7vh] md:text-[8vh] leading-tight text-white font-display mt-[1vh]'>I'm Filip</h2>
            <p className='mt-[3vh] text-white'>Step into the exhilarating realm of Filip, where I'm not just a full-stack developer—I'm a digital wizard! With my expertise forged in the heart of London's bustling tech community, I'm here to revolutionize your digital journey.</p>
            <p className='mt-[1.5vh] text-white'>From Python and Django to JavaScript and React, I orchestrate seamless digital experiences across both backend and frontend realms. Whether sculpting microservices or designing containerized web applications, I thrive on pushing boundaries and seamlessly integrating cloud platforms like AWS.</p>
            <p className='mt-[1.5vh] text-white'>Come aboard as we pioneer innovative solutions, seamlessly merging backend strength with frontend finesse, and together, let's define a new era of digital brilliance!</p>
        </div>
        <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative bg-gradient-to-br from-black via-zinc-800 to-black'>
            <Image fill objectFit='cover' alt="" src="/images/me_no_bg.png" ></Image>
        </div>
    </div>
  )
}

export default About