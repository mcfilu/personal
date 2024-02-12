import React from 'react'

const Experience = () => {
  return (
    <div className='w-full flex flex-col bg-white px-[5vw] md:px-[10vw] '>
        <h2 className='text-[7vh] md:text-[8vh] leading-tight font-display text-black mt-[5vh] mb-[5vh] text-center'>My Experience</h2>
        <div className='w-full  flex flex-row justify-center'>
            <div className='hidden md:flex w-1/5 h-full mt-[2vh] '>October 2021 - Current</div>
            {/* <div className='h-full border'></div> */}
            <div class="flex flex-col justify-center items-center">
                <i class="fa-solid fa-circle my-[3vh]"></i>
                <div class="h-full border-black border-l-2"></div>
            </div>
            <div className='w-full md:w-[70%] h-full flex flex-col mt-[2vh] pl-[2vw]'>
                <h2 className='text-[3vh] font-display'>Full Stack Developer</h2>
                <p className='flex md:hidden'>October 2021 - Current</p>
                <h2 className=''>Papagrin</h2>
                <p className='mt-[3vh] text-[1.7vh]'>My primary focus has been on backend development using Python, Django, Linux, Nginx, and cloud infrastructure, coupled with PostgreSQL. I took charge of reviving a critical legacy application, incorporating Docker containerization, and establishing functional environments with CI/CD pipelines.</p>
                <p className='mt-[1vh] text-[1.7vh]'>Additionally, my responsibilities extended to frontend development using Django templates, HTML, and CSS. Moreover, I played a significant role in business process mapping and contributed to product development.</p>
                <div className='w-full flex flex-wrap gap-2 md:gap-4 mt-[2vh] text-[1.7vh]'>
                    <div className='bg-black text-white rounded-xl px-4 py-2'>Python</div>
                    <div className='bg-black text-white rounded-xl px-4 py-2'>Django</div>
                    <div className='bg-black text-white rounded-xl px-4 py-2'>Unix</div>
                    <div className='bg-black text-white rounded-xl px-4 py-2'>AWS</div>
                    <div className='bg-black text-white rounded-xl px-4 py-2'>PostgreSQL</div>
                    <div className='bg-black text-white rounded-xl px-4 py-2'>Jinja2</div>
                </div>
            </div>
        </div>

        <div className='w-full  flex flex-row justify-center mt-[5vh]'>
            <div className='hidden md:flex w-1/5 h-full mt-[2vh] '>December 2023 - Current</div>
            {/* <div className='h-full border'></div> */}
            <div class="flex flex-col justify-center items-center">
                <i class="fa-solid fa-circle my-[3vh]"></i>
                <div class="h-full border-black border-l-2"></div>
            </div>
            <div className='w-full md:w-[70%] h-full flex flex-col mt-[2vh] pl-[2vw]'>
                <h2 className='text-[3vh] font-display'>Research Python Developer</h2>
                <p className='flex md:hidden'>December 2023 - Current</p>
                <h2 className=''>Cracow University of Economics</h2>
                <p className='mt-[3vh] text-[1.7vh]'>Spearheaded a multidisciplinary research project alongside distinguished professors in economics, sociology, and law, necessitating not just expertise in Python but also the application of creative problem-solving.</p>
                <p className='mt-[1vh] text-[1.7vh]'>This involved deploying a diverse skill set encompassing specific areas such as web scraping, data mining, and the implementation of machine learning techniques and large language models.</p>
                <div className='w-full flex flex-wrap gap-2 md:gap-4 mt-[2vh] text-[1.7vh]'>
                    <div className='bg-black text-white rounded-xl px-4 py-2'>Python</div>
                    <div className='bg-black text-white rounded-xl px-4 py-2'>Selenium</div>
                    <div className='bg-black text-white rounded-xl px-4 py-2'>OpenAI</div>
                    <div className='bg-black text-white rounded-xl px-4 py-2'>LLM</div>
                    <div className='bg-black text-white rounded-xl px-4 py-2'>ML</div>
                    {/* <div className='bg-black text-white rounded-xl px-4 py-2'></div> */}
                </div>
            </div>
        </div>

        <div className='w-full  flex flex-row justify-center mt-[5vh]'>
            <div className='hidden md:flex w-1/5 h-full mt-[2vh] '>May 2021 - October 2021</div>
            {/* <div className='h-full border'></div> */}
            <div class="flex flex-col justify-center items-center">
                <i class="fa-solid fa-circle my-[3vh]"></i>
                <div class="h-full border-black border-l-2"></div>
            </div>
            <div className='w-full md:w-[70%] h-full flex flex-col mt-[2vh] pl-[2vw]'>
                <h2 className='text-[3vh] font-display'>Full Stack Developer</h2>
                <p className='flex md:hidden'>May 2021 - October 2021</p>
                <h2 className=''>ITRun</h2>
                <p className='mt-[3vh] text-[1.7vh]'>Actively contributed to the design, development, and maintenance of the application, utilising my expertise in Python and associated technologies. My role encompassed optimising system performance, crafting robust code, and ensuring the flawless operation of the back-end infrastructure.</p>
                <p className='mt-[1vh] text-[1.7vh]'>Led a successful migration of the application from Django to REST framework, ensuring a smooth transition. This transformation not only modernised the platform but also enabled seamless integration with contemporary front-end solutions.</p>
                <div className='w-full flex flex-wrap gap-2 md:gap-4 mt-[2vh] text-[1.7vh]'>
                    <div className='bg-black text-white rounded-xl px-4 py-2'>Python</div>
                    <div className='bg-black text-white rounded-xl px-4 py-2'>Django</div>
                    <div className='bg-black text-white rounded-xl px-4 py-2'>REST Api</div>
                    <div className='bg-black text-white rounded-xl px-4 py-2'>AWS</div>
                    <div className='bg-black text-white rounded-xl px-4 py-2'>PostgreSQL</div>
                    <div className='bg-black text-white rounded-xl px-4 py-2'>Docker</div>
                </div>
            </div>
        </div>

        <div className='w-full  flex flex-row justify-center mt-[5vh]'>
            <div className='hidden md:flex w-1/5 h-full mt-[2vh] '>May 2020 - October 2020</div>
            {/* <div className='h-full border'></div> */}
            <div class="flex flex-col justify-center items-center">
                <i class="fa-solid fa-circle my-[3vh]"></i>
                <div class="h-full border-black border-l-2"></div>
            </div>
            <div className='w-full md:w-[70%] h-full flex flex-col mt-[2vh] pl-[2vw]'>
                <h2 className='text-[3vh] font-display'>Python SQL Developer</h2>
                <p className='flex md:hidden'>May 2020 - October 2020</p>
                <h2 className=''>DEMO Effective Launching</h2>
                <p className='mt-[3vh] text-[1.7vh]'>Orchestrated cross-functional collaborations to identify sales trends, driving the development of successful marketing strategies that expanded the audience by an impressive 12%.</p>
                <p className='mt-[1vh] text-[1.7vh]'> Proactively engaged in data-driven decision-making processes, leveraging Python and SQL to conduct indepth analysis of extensive datasets. Extracted actionable insights that played a pivotal role in shaping and optimising marketing strategies.</p>
                <div className='w-full flex flex-wrap gap-2 md:gap-4 mt-[2vh] text-[1.7vh]'>
                    <div className='bg-black text-white rounded-xl px-4 py-2'>Python</div>
                    <div className='bg-black text-white rounded-xl px-4 py-2'>SQL</div>
                    {/* <div className='bg-black text-white rounded-xl px-4 py-2'>Unix</div> */}
                    <div className='bg-black text-white rounded-xl px-4 py-2'>AWS</div>
                    {/* <div className='bg-black text-white rounded-xl px-4 py-2'>PostgreSQL</div> */}
                    {/* <div className='bg-black text-white rounded-xl px-4 py-2'>Jinja2</div> */}
                </div>
            </div>
        </div>
        
        

        


    </div>
  )
}

export default Experience