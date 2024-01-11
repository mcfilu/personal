import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='w-full h-screen grid grid-cols-3 bg-gradient-to-tl from-black via-zinc-800 to-black items-center justify-center'>
        
        
        <div className='border-2 border rounded-xl h-1/2 m-10 flex flex-col'>
            {/* <span className='w-[1px] h-full bg-white relative left-20'></span> */}
            <div className='flex flex-col items-center justify-center h-full'>
                <div className='w-[10vh] h-[10vh] rounded-full border flex items-center justify-center'>
                    <i className={`fa-brands fa-github text-center text-[4vh] text-white`}></i>
                </div>
                <span className='text-3xl text-white mt-[5vh]'>McFilu</span>
                <span className='text-l text-white mt-[2vh]'>GitHub</span>
            </div>
        </div>
        <div className='border-2 border rounded-xl h-1/2 m-10 flex flex-col'>

            {/* <span className='w-[1px] h-full bg-white relative left-20'></span> */}
            <div className='flex flex-col items-center justify-center h-full'>
                <div className='w-[10vh] h-[10vh] rounded-full border flex items-center justify-center'>
                    <i className={`fa-solid fa-envelope text-center text-[4vh] text-white`}></i>
                </div>
                <span className='text-3xl text-white mt-[5vh]'>filip.1olszewski@gmail.com</span>
                <span className='text-l text-white mt-[2vh]'>Email</span>
            </div>
        </div>
        <div className='border-2 border rounded-xl h-1/2 m-10 flex flex-col'>
            {/* <span className='w-[1px] h-full bg-white relative left-20'></span> */}
            <div className='flex flex-col items-center justify-center h-full'>
                <div className='w-[10vh] h-[10vh] rounded-full border flex items-center justify-center'>
                    <i className={`fa-brands fa-linkedin text-center text-[4vh] text-white`}></i>
                </div>
                <span className='text-3xl text-white mt-[5vh]'>Filip1Olszewski</span>
                <span className='text-l text-white mt-[2vh]'>Linkedin</span>
            </div>
        </div>
        
    </div>
  )
}

export default Contact