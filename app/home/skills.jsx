import React from 'react'

const Skills = () => {
  return (
    <div className='w-full h-[50vh] flex flex-col bg-white'>
        <h2 className='text-7xl text-black font-display my-[3vh] text-center'>Skils and Tools</h2>
        <div className='w-full grid grid-cols-3 h-full'>

        <div className='bg-white hover:bg-zinc-100 h-full flex items-center justify-center'>
            <div className='flex flex-col w-full h-full p-[5vh] items-left justify-center'>
                <h2 className='text-3xl font-display'>01. Back End</h2>
                <p className='mt-[2vh]'>Understand the client’s subject matter completely and build on the knowledge related to it, becoming intimately familiar with the subject matter. Determine methods to address the specific customer’s needs and requirements.</p>
            </div>
        </div>
        <div className='bg-white hover:bg-zinc-100 h-full flex items-center justify-center border-r border-l'>
            <div className='flex flex-col w-full h-full p-[5vh] items-left justify-center'>
                <h2 className='text-3xl font-display'>02. Front End</h2>
                <p className='mt-[2vh] '>Understand the client’s subject matter completely and build on the knowledge related to it, becoming intimately familiar with the subject matter. Determine methods to address the specific customer’s needs and requirements.</p>
            </div>
        </div>
        <div className='bg-white hover:bg-zinc-100 h-full flex items-center justify-center'>
            <div className='flex flex-col w-full h-full p-[5vh] items-left justify-center'>
                <h2 className='text-3xl font-display'>03. Infrastracture</h2>
                <p className='mt-[2vh]'>Understand the client’s subject matter completely and build on the knowledge related to it, becoming intimately familiar with the subject matter. Determine methods to address the specific customer’s needs and requirements.</p>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Skills