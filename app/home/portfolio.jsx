import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div id='projects' className='w-full  flex flex-col items-center justify-center bg-gradient-to-tl from-black via-zinc-800 to-black px-[5vw] md:px-[10vw] pb-[10vh]'>
        <h2 className='text-[7vh] md:text-[8vh] leading-tight  text-white font-display mb-[5vh] md:mb-[10vh] mt-[5vh] text-center'>Proffesional Projects</h2>
        <div className='w-full flex flex-row'>
            <div className='hidden md:flex w-[55%] h-[50vh] relative '>
                <Image alt="" src="/images/oshot.png" fill objectFit='cover' className='rounded'></Image>
            </div>
            <div className='w-full md:w-[45%] flex flex-col items-start md:items-end justify-center'>
                <p className='text-white '>Featured Project</p>
                <h2 className='text-white text-[4vh] md:text-[5vh] leading-tight mt-[1vh] font-display'>OShot Website Redesign</h2>
                <div className='flex  md:hidden w-full h-[30vh] relative mt-[1vh] md:mt-0'>
                    <Image alt="" src="/images/oshot.png" fill objectFit='cover' className='rounded'></Image>
                </div>
                <div className='w-full md:w-[110%] relative bg-black py-[3vh] px-[2vw] mt-[2vh] md:mt-[3vh] rounded'>
                    <p className='text-white text-left md:text-right'>Revamped the websites for the globally recognised medical treatment, creating a seamless and user-friendly experience that resonated with thousands worldwide. </p>
                    <p className='text-white text-left md:text-right mt-[1vh]'>Pioneered the implementation of Next.js for the front-end development, achieving an exceptional 25% reduction in page load times, translating into a remarkable 15% surge in user engagement. </p>
                </div>
                <div className='w-full flex flex-wrap gap-4 md:justify-end text-white mt-[1vh] md:mt-[2vh]'>
                    <p>JavaScript</p>
                    <p>NextJs</p>
                    <p>TailwindCSS</p>
                    <p>Figma</p>
                    <p>HTML/5</p>
                </div>
                <div className='flex flex-row gap-4 mt-[1vh]'>
                    <a rel="noopener noreferrer" target='_blank' href="https://github.com"><i className='fa-brands fa-github text-white text-[4vh] cursor-pointer'></i></a>
                    <Link href="https://oshot.uk" target="_blank"><i className='fa-solid fa-arrow-up-right-from-square text-white text-[4vh] cursor-pointer'></i></Link>
                </div>
            </div>
        </div>

        <div className='w-full flex flex-row mt-[10vh]'>
            
            <div className='w-full md:w-[45%] flex flex-col items-start justify-center'>
                <p className='text-white '>Featured Project</p>
                <h2 className='text-white text-[4vh] md:text-[5vh] leading-tight mt-[1vh] font-display'>ZeroWait Mapbox DB Integration</h2>
                <div className='flex  md:hidden w-full h-[30vh] relative mt-[1vh] md:mt-0'>
                    <Image alt="" src="/images/zerowait.png" fill objectFit='cover' className='rounded'></Image>
                </div>
                <div className='z-10 w-full md:w-[110%] relative bg-black py-[3vh] px-[2vw] mt-[2vh] md:mt-[3vh] rounded'>
                    <p className='text-white text-left '>Supervised the technical development of a multifaceted full-stack application. Collaborated effectively with a diverse and geographically dispersed team to achieve seamless integration between custom APIs and Webflow-generated front end. Leveraged Mapbox and jQuery to create an interactive and dynamic user interface that effectively presented data.</p>
                    {/* <p className='text-white text-left  mt-[1vh]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p> */}
                </div>
                <div className='w-full flex flex-wrap gap-4 text-white mt-[1vh] md:mt-[2vh]'>
                    <p>JavaScript</p>
                    <p>NextJs</p>
                    <p>TailwindCSS</p>
                    <p>Figma</p>
                    <p>HTML/5</p>
                </div>
                <div className='flex flex-row gap-4 mt-[1vh]'>
                    <i className='fa-brands fa-github text-white text-[4vh]'></i>
                    <Link href="https://zerowait.webflow.com" target="_blank"><i className='fa-solid fa-arrow-up-right-from-square text-white text-[4vh]'></i></Link>
                </div>
            </div>
            <div className='hidden md:flex w-[55%] h-[50vh] relative '>
                <Image alt="" src="/images/zerowait.png" fill objectFit='cover' className='rounded'></Image>
            </div>
        </div>

        <div className='w-full flex flex-row mt-[10vh]'>
            <div className='hidden md:flex w-[55%] h-[50vh] relative '>
                <Image alt="" src="/images/parish.png" fill objectFit='cover' className='rounded'></Image>
            </div>
            <div className='w-full md:w-[45%] flex flex-col items-start md:items-end justify-center'>
                <p className='text-white '>Featured Project</p>
                <h2 className='text-white text-[4vh] md:text-[5vh] leading-tight mt-[1vh] font-display text-right'>St. Andrew Parish Multimedia App</h2>
                <div className='flex  md:hidden w-full h-[30vh] relative mt-[1vh] md:mt-0'>
                    <Image alt="" src="/images/parish.png" fill objectFit='cover' className='rounded'></Image>
                </div>
                <div className='w-full md:w-[110%] relative bg-black py-[3vh] px-[2vw] mt-[2vh] md:mt-[3vh] rounded'>
                    <p className='text-white text-left md:text-right'>Effectively guided a team of 10 stakeholders in crafting the desired functionality for a multimedia application encompassing 25 subpages. Executed multiple design phases and developed a cutting-edge Next.js front end seamlessly integrated with a custom-built CMS platform, ensuring the consistent and seamless delivery of content.</p>
                    {/* <p className='text-white text-left md:text-right mt-[1vh]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p> */}
                </div>
                <div className='w-full flex flex-wrap gap-4 md:justify-end text-white mt-[1vh] md:mt-[2vh]'>
                    <p>JavaScript</p>
                    <p>NextJs</p>
                    <p>TailwindCSS</p>
                    <p>Figma</p>
                    <p>HTML/5</p>
                </div>
                <div className='flex flex-row gap-4 mt-[1vh]'>
                    <a rel="noopener noreferrer" target='_blank' href="https://github.com"><i className='fa-brands fa-github text-white text-[4vh] cursor-pointer'></i></a>
                    <Link href="https://parish.vercel.app" target="_blank"><i className='fa-solid fa-arrow-up-right-from-square text-white text-[4vh] cursor-pointer'></i></Link>
                </div>
            </div>
        </div>

        <div className='w-full flex flex-row mt-[10vh]'>
            
            <div className='w-full md:w-[45%] flex flex-col items-start justify-center'>
                <p className='text-white '>Featured Project</p>
                <h2 className='text-white text-[4vh] md:text-[5vh] leading-tight mt-[1vh] font-display'>qLegal Podcast Application</h2>
                <div className='flex  md:hidden w-full h-[30vh] relative mt-[1vh] md:mt-0'>
                    <Image alt="" src="/images/qlegal.png" fill objectFit='cover' className='rounded'></Image>
                </div>
                <div className='z-10 w-full md:w-[110%] relative bg-black py-[3vh] px-[2vw] mt-[2vh] md:mt-[3vh] rounded'>
                    <p className='text-white text-left '>Collaborated with interdisciplinary stakeholders to gather requirements for the website and back-end architecture. Led the creation of a React.js app and implemented a custom CMS in Django-REST. Ensured real-time data presentation through seamless synchronisation using a RESTful API.</p>
                    {/* <p className='text-white text-left  mt-[1vh]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p> */}
                </div>
                <div className='w-full flex flex-wrap gap-4 text-white mt-[1vh] md:mt-[2vh]'>
                    <p>JavaScript</p>
                    <p>NextJs</p>
                    <p>TailwindCSS</p>
                    <p>Figma</p>
                    <p>HTML/5</p>
                </div>
                <div className='flex flex-row gap-4 mt-[1vh]'>
                    <i className='fa-brands fa-github text-white text-[4vh]'></i>
                    <Link href="https://yourslawfully.co.uk" target="_blank"><i className='fa-solid fa-arrow-up-right-from-square text-white text-[4vh]'></i></Link>
                </div>
            </div>
            <div className='hidden md:flex w-[55%] h-[50vh] relative '>
                <Image alt="" src="/images/qlegal.png" fill objectFit='cover' className='rounded'></Image>
            </div>
        </div>

        <div className='w-full flex flex-row mt-[10vh]'>
            <div className='hidden md:flex w-[55%] h-[50vh] relative '>
                <Image alt="" src="/images/papagrin1.webp" fill objectFit='cover' className='rounded'></Image>
            </div>
            <div className='w-full md:w-[45%] flex flex-col items-start md:items-end justify-center'>
                <p className='text-white '>Featured Project</p>
                <h2 className='text-white text-[4vh] md:text-[5vh] leading-tight mt-[1vh] font-display text-right'>Papagrin Production Application</h2>
                <div className='flex  md:hidden w-full h-[30vh] relative mt-[1vh] md:mt-0'>
                    <Image alt="" src="/images/papagrin1.webp" fill objectFit='cover' className='rounded'></Image>
                </div>
                <div className='w-full md:w-[110%] relative bg-black py-[3vh] px-[2vw] mt-[2vh] md:mt-[3vh] rounded'>
                    <p className='text-white text-left md:text-right'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                    <p className='text-white text-left md:text-right mt-[1vh]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                </div>
                <div className='w-full flex flex-wrap gap-4 md:justify-end text-white mt-[1vh] md:mt-[2vh]'>
                    <p>JavaScript</p>
                    <p>NextJs</p>
                    <p>TailwindCSS</p>
                    <p>Figma</p>
                    <p>HTML/5</p>
                </div>
                <div className='flex flex-row gap-4 mt-[1vh]'>
                    {/* <a rel="noopener noreferrer" target='_blank' href="https://github.com"><i className='fa-brands fa-github text-white text-[4vh] cursor-pointer'></i></a> */}
                    {/* <Link href="https://yourslawfully.co.uk" target="_blank"><i className='fa-solid fa-arrow-up-right-from-square text-white text-[4vh] cursor-pointer'></i></Link> */}
                </div>
            </div>
        </div>

        <div className='w-full flex flex-row mt-[10vh]'>
            
            <div className='w-full md:w-[45%] flex flex-col items-start justify-center'>
                <p className='text-white '>Featured Project</p>
                <h2 className='text-white text-[4vh] md:text-[5vh] leading-tight mt-[1vh] font-display'>SkillsBite</h2>
                <div className='flex  md:hidden w-full h-[30vh] relative mt-[1vh] md:mt-0'>
                    <Image alt="" src="/images/skillsbite.png" fill objectFit='cover' className='rounded'></Image>
                </div>
                <div className='z-10 w-full md:w-[110%] relative bg-black py-[3vh] px-[2vw] mt-[2vh] md:mt-[3vh] rounded'>
                    <p className='text-white text-left '>Supervised the technical development of a multifaceted full-stack application. Collaborated effectively with a diverse and geographically dispersed team to achieve seamless integration between custom APIs and Webflow-generated front end. Leveraged Mapbox and jQuery to create an interactive and dynamic user interface that effectively presented data. </p>
                    {/* <p className='text-white text-left  mt-[1vh]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p> */}
                </div>
                <div className='w-full flex flex-wrap gap-4 text-white mt-[1vh] md:mt-[2vh]'>
                    <p>JavaScript</p>
                    <p>NextJs</p>
                    <p>TailwindCSS</p>
                    <p>Figma</p>
                    <p>HTML/5</p>
                </div>
                <div className='flex flex-row gap-4 mt-[1vh]'>
                    {/* <i className='fa-brands fa-github text-white text-[4vh]'></i> */}
                    <Link href="https://landing-page-skillsbite.vercel.app/" target='_blank'><i className='fa-solid fa-arrow-up-right-from-square text-white text-[4vh]'></i></Link>
                </div>
            </div>
            <div className='hidden md:flex w-[55%] h-[50vh] relative '>
                <Image alt="" src="/images/skillsbite.png" fill objectFit='cover' className='rounded'></Image>
            </div>
        </div>

        

    </div>
  )
}

export default Portfolio