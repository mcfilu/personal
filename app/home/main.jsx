import React from 'react'
import Link from 'next/link'


  
const Main = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-gradient-to-tr from-orange-500 via-pink-500 to-orange-500">

        
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to- from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      {/* <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      /> */}
      <div className={`absolute inset-0 -z-10  bg-black bg-opacity-85`}></div>
      <h1 className="z-10 text-6xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Filip Olszewski
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-2xl text-zinc-500 ">
        Not Your Average Software Engineer
        </h2>
      </div>
    </div>
  )
}

export default Main