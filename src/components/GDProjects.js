import React from 'react'
import { Projects } from '../assets/ProjectsInfo';
import { Link } from 'react-router-dom';

const GDProjects = () => {
  return (
    <section className='workPageSection'>
    {Projects.gdprojects.map((work) => {
                return (
                    <article key={JSON.stringify(work)}>
                    <Link to={work.route}>
                        <img src={work.image} alt={work.image} className='projectImage'/>
                    </Link>
                    </article>
                )
            })}
    </section>
  )
}

export default GDProjects