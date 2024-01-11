'use client'
import React from 'react'
import { useContext } from 'react'
import { menuContext } from '../context/context'

const Navigation = () => {
    const {menuVisibility, setMenu} = useContext(menuContext);
  return (
    <div className='z-30 w-full h-[15vh] fixed pr-[5vw] flex items-center justify-end'>
        <i className={`text-[5vh] fa-solid ${menuVisibility ? 'text-black fa-x ' : 'text-white fa-bars'} animate-fade-in`} onClick={() => {setMenu(!menuVisibility)}}></i>
    </div>
  )
}

export default Navigation