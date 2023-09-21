import React from 'react'
import { Projects } from '../assets/ProjectsInfo';

//icons
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { DiSass } from 'react-icons/di'
import { SiJavascript } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { FaAngular } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'

import { BsArrowRightShort } from 'react-icons/bs'

//styles
import '../styles/App.css';
import { Link } from 'react-router-dom';

const SelectedWorks = () => {

    const firstThreeProjects = Projects.lastprojects.slice(0, 4);

  return (
    <section className='selectedWorksSection'>
    <h2 className='h2BigSize'>Selection of front-end works</h2>
    <Link to="/work" className='mediumSize underlineLink'>Browse more</Link>
        <div className='WorksBar'>
            <button className="prev">
            <i className="fa fa-angle-left"></i> 
            </button>
            {firstThreeProjects.map((work) => {
                return (
                    <article className='projectArticle' key={JSON.stringify(work)}>
                        <a href={work.main_link} target='_blank' rel="noreferrer">
                            <img src={work.image} alt={work.image} className='projectImage'/>
                        </a>
                        <h3 className='h2BigSize'>{work.title}</h3>
                        <p className='commonParagraph'>{work.description}</p>
                        <ul>
                            {work.technologies.map((techno) => {
                                return (
                                    <li key={techno}>
                                        {techno === "html" ? <FaHtml5 /> :
                                        techno === "css" ? <FaCss3Alt /> :
                                        techno === "sass" ? <DiSass/> :
                                        techno === "angular" ? <FaAngular /> :
                                        techno === "react" ? <FaReact /> :
                                        techno === "javascript" ? <SiJavascript /> :
                                        techno === "typescript" ? <SiTypescript /> :
                                        null
                                        }
                                    </li>
                                )
                            })}
                        </ul>
                        <div>
                            <a href={work.demo} target="_blank" rel="noreferrer" className='underlineLink'>Demo <BsArrowRightShort/></a>
                            <a href={work.repo} target="_blank" rel="noreferrer" className='underlineLink'>Repository <BsArrowRightShort/></a>
                        </div>
                    </article>
                )
            })}
            <button className="next">
            <i className="fa fa-angle-right"></i> 
    </button>
            </div>
    </section>
  )
}

export default SelectedWorks