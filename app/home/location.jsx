import React from 'react'

const Location = () => {
  return (
    <div className='w-full flex flex-col md:flex-row bg-white py-[10vh]'>
        <div className='w-full md:w-1/2 flex flex-row items-center pl-[5vw]'>
            <h2 className='text-[7vh] md:text-[8vh] leading-tight text-black font-display text-center md:text-left'>Based In London</h2>
            {/* <h2 className='text-[7vh] md:text-[8vh] leading-tight text-black'>In</h2> */}
            {/* <h2 className='text-[7vh] md:text-[8vh] leading-tight text-black'>London</h2> */}
        </div>
        <div className='h-full w-full md:w-1/2 flex flex-col justify-center pl-[2vw] pr-[2vw] mt-[5vh] md:mt-0 text-black'>
            <h3 className='text-[3vh] text-black font-bold'>Working all around the world</h3>
            <p className='mt-[2vh] text-[1.7vh]'>I am a seasoned software expert who has developed products for enterprise clients such as Intuit, Yale University, and Hewlett-Packard (HP), as well as many venture-backed businesses. I specialize in building applications specific to the business needs of my clients. I have done work in software development, mobile app creation, front-end/back-end web, database/server management, graphic design, and video game development.</p>
        </div>
    </div>
  )
}

export default Location