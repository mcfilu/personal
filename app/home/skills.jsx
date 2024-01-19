import React from 'react'

const Skills = () => {
  return (
    <div className='w-full flex flex-col bg-white'>
        <h2 className='text-[7vh] md:text-[8vh] leading-tight text-black font-display my-[3vh] text-center'>Skils and Tools</h2>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 h-full'>
        <div className='flex flex-col h-full'>
            <div className='bg-white hover:bg-zinc-100 h-full flex items-center justify-center'>
                <div className='flex flex-col w-full h-full p-[5vh] items-left justify-center'>
                    <h2 className='text-3xl font-display'>01. Back End</h2>
                    <p className='mt-[2vh]'>Understand the client’s subject matter completely and build on the knowledge related to it, becoming intimately familiar with the subject matter. Determine methods to address the specific customer’s needs and requirements.</p>
                </div>
            </div>
            <div className='w-full h-full flex flex-col p-8 py-[5vh] hover:bg-zinc-600 bg-zinc-800'>
                <div className='flex flex-row gap-4'>

                    <i class='cib-python text-white text-[7vh]'></i>
                    <i class='cib-js text-white text-[7vh]'></i>
                </div>
                <div className='flex flex-row gap-4 mt-[3vh]'>

                    <i class='cib-django text-white text-[7vh]'></i>
                    <i class='cib-postgresql text-white text-[7vh]'></i>
                    <i class='cib-strapi text-white text-[7vh]'></i>

                </div>
                <div className='flex flex-row gap-4 mt-[3vh]'>
                    <i class='cib-linux text-white text-[7vh]'></i>
                    <i class='cib-ubuntu text-white text-[7vh]'></i>
                    <i class='cib-nginx text-white text-[7vh]'></i>
                </div>
            </div>
        </div>
        <div className='flex flex-col h-full'>
            <div className='bg-white hover:bg-zinc-100 h-full flex items-center justify-center border-x'>
                <div className='flex flex-col w-full h-full p-[5vh] items-left justify-center'>
                    <h2 className='text-3xl font-display'>02. Front End</h2>
                    <p className='mt-[2vh]'>Understand the client’s subject matter completely and build on the knowledge related to it, becoming intimately familiar with the subject matter. Determine methods to address the specific customer’s needs and requirements.</p>
                </div>
            </div>
            <div className='w-full h-full flex flex-col p-8 py-[5vh] hover:bg-zinc-600 bg-zinc-800 border-x'>
                <div className='flex flex-row gap-4'>

                    <i class='cib-python text-white text-[7vh]'></i>
                    <i class='cib-js text-white text-[7vh]'></i>
                </div>
                <div className='flex flex-row gap-4 mt-[3vh]'>

                    <i class='cib-django text-white text-[7vh]'></i>
                    <i class='cib-postgresql text-white text-[7vh]'></i>
                    <i class='cib-strapi text-white text-[7vh]'></i>

                </div>
                <div className='flex flex-row gap-4 mt-[3vh]'>
                    <i class='cib-linux text-white text-[7vh]'></i>
                    <i class='cib-ubuntu text-white text-[7vh]'></i>
                    <i class='cib-nginx text-white text-[7vh]'></i>
                </div>
            </div>
        </div>
        <div className='flex flex-col h-full'>
            <div className='bg-white hover:bg-zinc-100 h-full flex items-center justify-center'>
                <div className='flex flex-col w-full h-full p-[5vh] items-left justify-center'>
                    <h2 className='text-3xl font-display'>01. Back End</h2>
                    <p className='mt-[2vh]'>Understand the client’s subject matter completely and build on the knowledge related to it, becoming intimately familiar with the subject matter. Determine methods to address the specific customer’s needs and requirements.</p>
                </div>
            </div>
            <div className='w-full h-full flex flex-col p-8 py-[5vh] hover:bg-zinc-600 bg-zinc-800'>
                <div className='flex flex-row gap-4'>

                    <i class='cib-python text-white text-[7vh]'></i>
                    <i class='cib-js text-white text-[7vh]'></i>
                </div>
                <div className='flex flex-row gap-4 mt-[3vh]'>

                    <i class='cib-django text-white text-[7vh]'></i>
                    <i class='cib-postgresql text-white text-[7vh]'></i>
                    <i class='cib-strapi text-white text-[7vh]'></i>

                </div>
                <div className='flex flex-row gap-4 mt-[3vh]'>
                    <i class='cib-linux text-white text-[7vh]'></i>
                    <i class='cib-ubuntu text-white text-[7vh]'></i>
                    <i class='cib-nginx text-white text-[7vh]'></i>
                </div>
            </div>
        </div>


        {/* <div className='bg-white hover:bg-zinc-100 h-full flex items-center justify-center border-r border-l'>
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
        </div> */}
        </div>

    </div>
  )
}

export default Skills