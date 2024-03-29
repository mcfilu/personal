'use client'
import React from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import { menuContext } from '../context/context'

const Menu = () => {
  const {menuVisibility, setMenu} = useContext(menuContext);


  return (
    <div className={`fixed z-20 w-full h-screen bg-white flex flex-col items-center justify-center ${menuVisibility ? '' : 'hidden'}`}>
      <a href="#about" className='mt-[1vh] text-[8vh] md:text-[10vh] leading-tight text-black font-display' onClick={() => setMenu()}>About Me</a>
      <a href="#projects" className='mt-[1vh] text-[8vh] md:text-[10vh] leading-tight text-black font-display' onClick={() => setMenu()}>Projects</a>
      <Link rel="noopener noreferrer" target='_blank' alt="" href="/files/FilipOlszewski_CV.pdf" className='mt-[1vh] text-[8vh] md:text-[10vh] leading-tight text-black font-display' onClick={() => setMenu()}>Resume</Link>
      <a href="#contact" className='mt-[1vh] text-[8vh] md:text-[10vh] leading-tight text-black font-display' onClick={() => setMenu()}>Contact</a>
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