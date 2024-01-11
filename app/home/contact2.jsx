import React from 'react'

const Contact2 = () => {
  return (
    <div className='w-full h-[70vh] flex flex-row bg-gradient-to-tl from-black via-zinc-800 to-black p-4'>
        <div className='h-full w-[40vw] flex flex-col pl-[5vw] justify-center'>
            <h2 className='text-7xl text-white font-display'>Contact</h2>
            <h2 className='text-7xl text-white font-display'>Me</h2>
            
        </div>
        <div className='w-1/2 h-full flex flex-col border rounded-xl items-center'>
            <input type='mail'  className='rounded-xl'></input>
            <input type='phone'  className='rounded-xl'></input>
            <input type='mail'  className='rounded-xl'></input>
            <input type='mail'  className='rounded-xl'></input>
            <button className='bg-white p-4 text-black text-xl rounded-xl'>Send</button>
        </div>
    </div>
  )
}

export default Contact2