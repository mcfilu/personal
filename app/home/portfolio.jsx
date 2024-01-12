import React from 'react'
import Image from 'next/image'

const Portfolio = () => {
  return (
    <div className='w-full  flex flex-col items-center justify-center bg-gradient-to-tl from-black via-zinc-800 to-black px-[10vw] pb-[10vh]'>
        <h2 className='text-7xl text-white font-display mb-[10vh] mt-[5vh]'>Proffesional Projects</h2>
        <div className='w-full h-[50vh] flex flex-row'>
            <div className='w-[55%] h-full relative '>
                <Image alt="" src="/images/oshot.png" fill objectFit='cover' className='rounded'></Image>
            </div>
            <div className='w-[45%] h-full flex flex-col items-end justify-center'>
                <p className='text-white text-l'>Featured Project</p>
                <h2 className='text-white text-4xl mt-[1vh] font-display'>OShot Website Redesign</h2>
                <div className='w-[110%] relative bg-black py-[3vh] px-[2vw] mt-[3vh] rounded'>
                    <p className='text-white text-right'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                    <p className='text-white text-right mt-[1vh]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                </div>
                <div className='flex flex-row gap-4 text-white mt-[3vh]'>
                    <p>JavaScript</p>
                    <p>NextJs</p>
                    <p>TailwindCSS</p>
                    <p>Figma</p>
                    <p>HTML/5</p>
                </div>
                <div className='flex flex-row gap-4 mt-[2vh]'>
                    <i className='fa-brands fa-github text-white text-[4vh]'></i>
                    <i className='fa-solid fa-arrow-up-right-from-square text-white text-[4vh]'></i>
                </div>
            </div>
        </div>

        <div className='w-full h-[50vh] flex flex-row mt-[10vh]'>
            
            <div className='w-[45%] h-full flex flex-col items-start justify-center z-5'>
                <p className='text-white text-l'>Featured Project</p>
                <h2 className='text-white text-4xl mt-[1vh] font-display'>qLegal Podcast Application</h2>
                <div className='w-[110%] relative bg-black py-[3vh] px-[2vw] mt-[3vh] rounded'>
                    <p className='text-white text-left'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                    <p className='text-white text-left mt-[1vh]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                </div>
                <div className='flex flex-row gap-4 text-white mt-[3vh]'>
                    <p>JavaScript</p>
                    <p>NextJs</p>
                    <p>TailwindCSS</p>
                    <p>Figma</p>
                    <p>HTML/5</p>
                </div>
                <div className='flex flex-row gap-4 mt-[2vh] z-5'>
                    <i className='fa-brands fa-github text-white text-[4vh]'></i>
                    <i className='fa-solid fa-arrow-up-right-from-square text-white text-[4vh]'></i>
                </div>
            </div>
            <div className='w-[55%] h-full relative z-4'>
                <Image alt="" src="/images/qlegal.png" fill objectFit='cover' className='rounded z-4'></Image>
            </div>
        </div>

        <div className='w-full h-[50vh] flex flex-row mt-[10vh]'>
            <div className='w-[55%] h-full relative '>
                <Image alt="" src="/images/zerowait.png" fill objectFit='cover' className='rounded'></Image>
            </div>
            <div className='w-[45%] h-full flex flex-col items-end justify-center'>
                <p className='text-white text-l'>Featured Project</p>
                <h2 className='text-white text-4xl mt-[1vh] font-display'>ZeroWait Mapbox DB Integration</h2>
                <div className='w-[110%] relative bg-black py-[3vh] px-[2vw] mt-[3vh] rounded'>
                    <p className='text-white text-right'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                    <p className='text-white text-right mt-[1vh]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                </div>
                <div className='flex flex-row gap-4 text-white mt-[3vh]'>
                    <p>JavaScript</p>
                    <p>NextJs</p>
                    <p>TailwindCSS</p>
                    <p>Figma</p>
                    <p>HTML/5</p>
                </div>
                <div className='flex flex-row gap-4 mt-[2vh]'>
                    <i className='fa-brands fa-github text-white text-[4vh]'></i>
                    <i className='fa-solid fa-arrow-up-right-from-square text-white text-[4vh]'></i>
                </div>
            </div>
        </div>

        <div className='w-full h-[50vh] flex flex-row mt-[10vh]'>
            
            <div className='w-[45%] h-full flex flex-col items-start justify-center z-5'>
                <p className='text-white text-l'>Featured Project</p>
                <h2 className='text-white text-4xl mt-[1vh] font-display'>Papagrin Production Application</h2>
                <div className='w-[110%] relative bg-black py-[3vh] px-[2vw] mt-[3vh] rounded'>
                    <p className='text-white text-left'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                    <p className='text-white text-left mt-[1vh]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                </div>
                <div className='flex flex-row gap-4 text-white mt-[3vh]'>
                    <p>JavaScript</p>
                    <p>NextJs</p>
                    <p>TailwindCSS</p>
                    <p>Figma</p>
                    <p>HTML/5</p>
                </div>
                <div className='flex flex-row gap-4 mt-[2vh] z-5'>
                    <i className='fa-brands fa-github text-white text-[4vh]'></i>
                    <i className='fa-solid fa-arrow-up-right-from-square text-white text-[4vh]'></i>
                </div>
            </div>
            <div className='w-[55%] h-full relative z-4'>
                <Image alt="" src="/images/papagrin1.webp" fill objectFit='cover' className='rounded z-4'></Image>
            </div>
        </div>

        <div className='w-full h-[50vh] flex flex-row mt-[10vh]'>
            <div className='w-[55%] h-full relative '>
                <Image alt="" src="/images/skillsbite.png" fill objectFit='cover' className='rounded'></Image>
            </div>
            <div className='w-[45%] h-full flex flex-col items-end justify-center'>
                <p className='text-white text-l'>Featured Project</p>
                <h2 className='text-white text-4xl mt-[1vh] font-display'>SkillsBite</h2>
                <div className='w-[110%] relative bg-black py-[3vh] px-[2vw] mt-[3vh] rounded'>
                    <p className='text-white text-right'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                    <p className='text-white text-right mt-[1vh]'>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                </div>
                <div className='flex flex-row gap-4 text-white mt-[3vh]'>
                    <p>JavaScript</p>
                    <p>NextJs</p>
                    <p>TailwindCSS</p>
                    <p>Figma</p>
                    <p>HTML/5</p>
                </div>
                <div className='flex flex-row gap-4 mt-[2vh]'>
                    <i className='fa-brands fa-github text-white text-[4vh]'></i>
                    <i className='fa-solid fa-arrow-up-right-from-square text-white text-[4vh]'></i>
                </div>
            </div>
        </div>

        {/* <div className='w-full h-[40vh] border rounded-xl flex flex-row p-2'>
            <div className='w-1/2 h-full relative '>
                <Image alt="" src="/images/oshot.png" fill objectFit='cover' className='rounded-xl'></Image>
            </div>
            <div className='w-1/2 h-full flex flex-col'>
                <h2 className='text-white text-2xl'>OShot</h2>
            </div>
        </div>
        <div></div>
        <div></div>
        <button className='bg-white rounded-xl text-xl p-4 '>Discover More</button> */}
    </div>
  )
}

export default Portfolio