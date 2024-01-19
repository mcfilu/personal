import React from 'react'
import Link from 'next/link'

const Cv = () => {
  return (
    <div className='w-full flex flex-col md:flex-row bg-white items-center justify-center gap-10 py-[5vh]'>
        <h2 className='text-[7vh] md:text-[8vh] leading-tight text-black font-display text-center md:text-start'>See my Resume</h2>
        <Link rel="noopener noreferrer" target='_blank' alt="" href="/files/FilipOlszewski_CV.pdf"><button className='bg-black text-white text-2xl px-7 py-5 rounded-xl'>Open File</button></Link>
        {/* <div className='h-full w-1/2 flex flex-row items-center pl-[5vw]'>
            <h2 className='text-[7vh] md:text-[8vh] leading-tight text-black font-display'>Resume</h2>
 
        </div>
        <div className='h-full w-1/2 flex flex-col items-start justify-center pl-[2vw] pr-[2vw]'>
            
            <button className='bg-black text-white text-xl px-4 py-2'>Open File</button>
        </div> */}
    </div>
  )
}

export default Cv