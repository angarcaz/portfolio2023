import React from 'react'
import { Projects } from '../assets/ProjectsInfo';

//styles
import '../styles/App.css';
import { Link } from 'react-router-dom'
import { BsArrowRightShort } from 'react-icons/bs';

const GraphicDesignWorks = () => {
  return (
    <section className='selectedWorksSection'>
    <h2 className='h2BigSize'>Selection of graphic design works</h2>
    <Link to="/work" className='mediumSize underlineLink'>Browse more</Link>
        <div className='WorksBar'>
            {Projects.gdprojects.map((project) => {
                return (
                    <article className='projectArticle' key={JSON.stringify(project)}>
                        <Link to={project.route}>
                            <img src={project.image} alt={project.image} className='projectImage' />
                        </Link>
                        <h3 className='h2BigSize'>{project.title}</h3>
                        <p className='commonParagraph'>{project.description}</p>
                        <Link to={project.route} className='underlineLink'>Watch more <BsArrowRightShort/></Link>
                    </article>
                )
            })}
        </div>
    </section>
  )
}

export default GraphicDesignWorks