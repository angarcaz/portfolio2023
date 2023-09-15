import React from 'react'
import { Projects } from '../assets/ProjectsInfo';

//styles
import '../styles/App.css';

const GraphicDesignWorks = () => {
  return (
    <section className='selectedWorksSection'>
    <h2>Selection of graphic design works</h2>
        <div className='WorksBar'>
            {Projects.gdprojects.map((project) => {
                return (
                    <article className='projectArticle' key={JSON.stringify(project)}>
                        <img src={project.image} alt={project.image} className='projectImage' />
                        <h3>{project.title}</h3>
                        <p>{project.year}</p>
                        <p>{project.tag}</p>
                        <p>{project.description}</p>
                    </article>
                )
            })}
        </div>
    </section>
  )
}

export default GraphicDesignWorks