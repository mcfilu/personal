import React from 'react'

const Location = () => {
  return (
    <div className='w-full flex flex-col md:flex-row bg-white py-[8vh]'>
        <div className='w-full md:w-1/2 flex flex-row items-center pl-[5vw]'>
            <h2 className='text-[7vh] md:text-[8vh] leading-tight text-black font-display text-center md:text-left'>Based In London</h2>
            {/* <h2 className='text-[7vh] md:text-[8vh] leading-tight text-black'>In</h2> */}
            {/* <h2 className='text-[7vh] md:text-[8vh] leading-tight text-black'>London</h2> */}
        </div>
        <div className='h-full w-full md:w-1/2 flex flex-col justify-center pl-[2vw] pr-[2vw] mt-[5vh] md:mt-0 text-black'>
            <h3 className='text-[3vh] text-black font-display'>Working all around the world</h3>
            <p className='mt-[2vh] text-[1.7vh]'>Based in the vibrant hub of London, I collaborate with leading clients situated in the heart of Central London, leveraging the city's dynamic tech ecosystem to fuel innovation and growth. However, my reach extends far beyond the bustling streets of London, as I also partner with clients from around the globe, delivering cutting-edge solutions and services tailored to their unique needs and requirements.</p>
        </div>
    </div>
  )
}

export default Location