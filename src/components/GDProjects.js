import React from 'react'
import { Projects } from '../assets/ProjectsInfo';

const GDProjects = () => {
  return (
    <section className='workPageSection'>
    {Projects.gdprojects.map((work) => {
                return (
                    <article key={JSON.stringify(work)}>
                        <img src={work.image} alt={work.image} className='projectImage'/>
                    </article>
                )
            })}
    </section>
  )
}

export default GDProjects