import React from 'react'

const Contact2 = () => {
  return (
    <div className='w-full h-[70vh] flex flex-row bg-gradient-to-tl from-black via-zinc-800 to-black p-4'>
        <div className='h-full w-[40vw] flex flex-col pl-[5vw] justify-center'>
            <h2 className='text-7xl text-white font-display'>Contact</h2>
            <h2 className='text-7xl text-white font-display'>Me</h2>
            
        </div>
        <div className='w-1/3 h-full flex flex-col border rounded-xl items-center justify-between p-6'>
            <form className='w-full flex flex-col items-center justify-center'>
                <label for="" className='text-white text-xl'>Name</label>
                <input type='mail'  className='rounded-xl bg-transparent border w-3/4 mt-[1vh]'></input>
                <label for="" className='text-white text-xl mt-[3vh]'>Email</label>
                <input type='phone'  className='rounded-xl bg-transparent border w-3/4'></input>
                <label for="" className='text-white text-xl mt-[3vh]'>Subject</label>
                <input type='mail'  className='rounded-xl bg-transparent border w-3/4'></input>
                <label for="" className='text-white text-xl mt-[3vh]'>Content</label>
                <input type='text'  className='rounded-xl bg-transparent border w-3/4'></input>
                <button className='bg-white px-6 py-3 text-black text-xl rounded-xl mt-[5vh]'>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Contact2