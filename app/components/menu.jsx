import React from 'react'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className='w-full h-screen bg-white flex flex-col items-center justify-center hidden'>
      <a href="#contact" className='mt-[2vh] text-8xl text-black font-display'>About Me</a>
      <a href="#contact" className='mt-[2vh] text-8xl text-black font-display'>Experience</a>
      <a href="#contact" className='mt-[2vh] text-8xl text-black font-display'>Resume</a>
      <a href="#contact" className='mt-[2vh] text-8xl text-black font-display'>Contact</a>
      <div className='flex flex-row gap-4 mt-[4vh]'>
        <Link href="https://github.com/mcfilu/"><i className={`fa-brands fa-github-square text-center text-[7vh] text-black`}></i></Link>
        <Link href="https://www.linkedin.com/in/filip1olszewski/"><i className={`fa-brands fa-linkedin text-center text-[7vh] text-black`}></i></Link>
        <a href="mailto:filip.1olszewski@gmail.com"><i className={`fa-solid fa-square-envelope text-center text-[7vh] text-black`}></i></a>
        <a href="tel:+447988823061"><i className={`fa-solid fa-square-phone-flip text-center text-[7vh] text-black`}></i></a>
      </div>
    </div>
  )
}

export default Menu