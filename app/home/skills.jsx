import React from 'react'

const Skills = () => {
  return (
    <div className='w-full h-[50vh] flex flex-row grid grid-cols-3'>
        <div className='bg-white hover:bg-slate-200 h-full flex items-center justify-center'>
            <div className='flex flex-col w-full h-full p-[5vh] items-left justify-center'>
                <h2 className='text-3xl'>01. Back End</h2>
                <p className='mt-[2vh]'>Understand the client’s subject matter completely and build on the knowledge related to it, becoming intimately familiar with the subject matter. Determine methods to address the specific customer’s needs and requirements.</p>
            </div>
        </div>
        <div className='bg-white hover:bg-slate-200 h-full flex items-center justify-center border-r border-l'>
            <div className='flex flex-col w-full h-full p-[5vh] items-left justify-center'>
                <h2 className='text-3xl'>02. Front End</h2>
                <p className='mt-[2vh] '>Understand the client’s subject matter completely and build on the knowledge related to it, becoming intimately familiar with the subject matter. Determine methods to address the specific customer’s needs and requirements.</p>
            </div>
        </div>
        <div className='bg-white hover:bg-slate-200 h-full flex items-center justify-center'>
            <div className='flex flex-col w-full h-full p-[5vh] items-left justify-center'>
                <h2 className='text-3xl'>03. Infrastracture</h2>
                <p className='mt-[2vh]'>Understand the client’s subject matter completely and build on the knowledge related to it, becoming intimately familiar with the subject matter. Determine methods to address the specific customer’s needs and requirements.</p>
            </div>
        </div>

    </div>
  )
}

export default Skills