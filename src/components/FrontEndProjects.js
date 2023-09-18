import React from 'react'
import { Projects } from '../assets/ProjectsInfo';

const FrontEndProjects = () => {
  return (
    <section className='workPageSection'>
    {Projects.lastprojects.map((work) => {
                return (
                    <article key={JSON.stringify(work)}>
                        <a href={work.main_link} target='_blank' rel="noreferrer">
                          <img src={work.image} alt={work.image} className='projectImage'/>
                        </a>
                    </article>
                )
            })}
    </section>
  )
}

export default FrontEndProjects