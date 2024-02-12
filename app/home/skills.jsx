import React from 'react'

const Skills = () => {
  return (
    <div className='w-full flex flex-col bg-white'>
        <h2 className='text-[7vh] md:text-[8vh] leading-tight text-black font-display my-[3vh] text-center'>Skils and Tools</h2>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 h-full'>
        <div className='flex flex-col h-full'>
            <div className='bg-white hover:bg-zinc-100 h-full flex items-center justify-center'>
                <div className='flex flex-col w-full h-full px-[2vw] py-[8vh] items-left justify-center'>
                    <h2 className='text-3xl font-display'>01. Back End</h2>
                    <p className='mt-[4vh]'>In the Backend section, I highlight my expertise in building powerful server-side solutions that drive seamless digital experiences, utilizing a range of programming languages and frameworks. </p>
                </div>
            </div>
            <div className='w-full h-full flex flex-col px-[2vw] py-[5vh] hover:bg-zinc-600 bg-zinc-800'>
                <div className='flex flex-row gap-4'>

                    <i class='cib-python text-white text-[7vh]'></i>
                    <i class='cib-js text-white text-[7vh]'></i>
                </div>
                <div className='flex flex-row gap-4 mt-[3vh]'>

                    <i class='cib-django text-white text-[7vh]'></i>
                    <i class='cib-flask text-white text-[7vh]'></i>
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
            <div className='bg-white hover:bg-zinc-100  flex items-center justify-center border-x'>
                <div className='flex flex-col w-full h-full px-[2vw] py-[8vh] items-left justify-center'>
                    <h2 className='text-3xl font-display'>02. Front End</h2>
                    <p className='mt-[4vh]'>Frontend showcases my ability to craft captivating user interfaces and intuitive interactions, creating visually stunning and user-friendly web experiences.</p>
                </div>
            </div>
            <div className='w-full h-full flex flex-col px-[2vw] py-[5vh] hover:bg-zinc-600 bg-zinc-800 border-x'>
                <div className='flex flex-row gap-4'>

                    <i class='cib-html5 text-white text-[7vh]'></i>
                    <i class='cib-css3-shilled text-white text-[7vh]'></i>
                    <i class='cib-js text-white text-[7vh]'></i>
                </div>
                <div className='flex flex-row gap-4 mt-[3vh]'>

                    <i class='cib-jquery text-white text-[7vh]'></i>
                    <i class='cib-react text-white text-[7vh]'></i>
                    <i class='cib-next-js text-white text-[7vh]'></i>
                    <i class='cib-bootstrap text-white text-[7vh]'></i>

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
                <div className='flex flex-col w-full h-full px-[2vw] py-[8vh] items-left justify-center'>
                    <h2 className='text-3xl font-display'>03. Other Tools</h2>
                    <p className='mt-[4vh]'>The Other Tools section demonstrates my proficiency in essential technologies and tools for efficient development and deployment workflows, ensuring smooth project execution from start to finish.</p>
                </div>
            </div>
            <div className='w-full h-full flex flex-col p-8 px-[2vw] py-[5vh] hover:bg-zinc-600 bg-zinc-800'>
                <div className='flex flex-row gap-4'>

                    <i class='cib-amazon-aws text-white text-[7vh]'></i>
                    <i class='cib-digital-ocean text-white text-[7vh]'></i>
                </div>
                <div className='flex flex-row gap-4 mt-[3vh]'>

                    <i class='cib-docker text-white text-[7vh]'></i>
                    <i class='cib-postgresql text-white text-[7vh]'></i>
                    <i class='cib-cc-stripe text-white text-[7vh]'></i>

                </div>
                <div className='flex flex-row gap-4 mt-[3vh]'>
                    <i class='cib-git text-white text-[7vh]'></i>
                    <i class='cib-github text-white text-[7vh]'></i>
                    <i class='cib-gitlab text-white text-[7vh]'></i>
                    <i class='cib-jira text-white text-[7vh]'></i>
                </div>
            </div>
        </div>


        {/* <div className='bg-white hover:bg-zinc-100 h-full flex items-center justify-center border-r border-l'>
            <div className='flex flex-col w-full h-full p-[5vh] items-left justify-center'>
                <h2 className='text-3xl font-display'>02. Front End</h2>
                <p className='mt-[4vh] '>Understand the client’s subject matter completely and build on the knowledge related to it, becoming intimately familiar with the subject matter. Determine methods to address the specific customer’s needs and requirements.</p>
            </div>
        </div>
        <div className='bg-white hover:bg-zinc-100 h-full flex items-center justify-center'>
            <div className='flex flex-col w-full h-full p-[5vh] items-left justify-center'>
                <h2 className='text-3xl font-display'>03. Infrastracture</h2>
                <p className='mt-[4vh]'>Understand the client’s subject matter completely and build on the knowledge related to it, becoming intimately familiar with the subject matter. Determine methods to address the specific customer’s needs and requirements.</p>
            </div>
        </div> */}
        </div>

    </div>
  )
}

export default Skills