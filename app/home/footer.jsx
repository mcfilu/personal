import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full  bg-white flex flex-col  px-[5vw] py-[2vh]'>
        <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>
            <h2 className='text-7xl text-black font-display'>Have a</h2>
            <h2 className='text-7xl text-black font-display'>Nice Day</h2>
        </div>
       
        
        <div className='flex flex-row gap-4 mt-[4vh]'>
        <Link href="https://github.com/mcfilu/"><i className={`fa-brands fa-github-square text-center text-[7vh] text-black`}></i></Link>
        <Link href="https://www.linkedin.com/in/filip1olszewski/"><i className={`fa-brands fa-linkedin text-center text-[7vh] text-black`}></i></Link>
        <a href="mailto:filip.1olszewski@gmail.com"><i className={`fa-solid fa-square-envelope text-center text-[7vh] text-black`}></i></a>
        <a href="tel:+447988823061"><i className={`fa-solid fa-square-phone-flip text-center text-[7vh] text-black`}></i></a>
      </div>
    </div>
    <div className='flex flex-col items-center justify-end pt-[1vh]'>
            <p>Filip Olszewski - 2024 All Rights Reserved</p>
            {/* <p>All Rights Reserved</p> */}
        </div>
        
    </div>
  )
}

export default Footer