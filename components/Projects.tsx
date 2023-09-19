import React from 'react'
import SectionHeading from './SectionHeading'
import { projectsData } from '@/lib/data'
import { type } from 'os'
import Image from 'next/image'

function Projects() {
  return (
    <section>
        <SectionHeading>My Projects</SectionHeading>
        <div>

            {projectsData.map((project,index)=>(
                <React.Fragment key={index}>
                <Project {...project}/>
                </React.Fragment>

            ))}
        </div>
    </section>
  )
}

type ProjectProps = (typeof projectsData)[number];
function Project({
    title,
    description,
    tags,
    imageUrl,
}: ProjectProps){
    return <section className='bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8'>
        <h3 className=' text-2xl font-semibold'>{title}</h3>
        <p className=' mt-2 leading-relaxed text-gray-700'>{description}</p>
        <ul className=' flex flex-wrap mt-4 gap-2'>
            {tags.map((tag,index)=>(
                <li key={index} className=' bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wide text-white rounded-full

                '>{tag}</li>
            ))}
        </ul>
        <Image src={imageUrl} alt={title} quality={95} />


    </section>
}
export default Projects