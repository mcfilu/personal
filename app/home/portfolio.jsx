import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-gradient-to-tl from-black via-zinc-800 to-black px-[10vw]'>

        <div className='w-full h-[40vh] border rounded-xl flex flex-row p-2'>
            <div className='w-1/2 h-full relative '>
                <Image alt="" src="/images/oshot.png" fill objectFit='cover' className='rounded-xl'></Image>
            </div>
            <div className='w-1/2 h-full flex flex-col'>
                <h2 className='text-white text-2xl'>OShot</h2>
            </div>
        </div>
        <div></div>
        <div></div>
        <button className='bg-white rounded-xl text-xl p-4 '>Discover More</button>
    </div>
  )
}

export default Portfolio