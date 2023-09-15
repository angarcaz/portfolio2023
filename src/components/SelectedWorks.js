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

const SelectedWorks = () => {

    const firstThreeProjects = Projects.lastprojects.slice(0, 3);

  return (
    <section className='selectedWorksSection'>
    <h2>Selection of front-end works</h2>
    <h3>/ Browse more</h3>
        <div className='WorksBar'>
            {firstThreeProjects.map((work) => {
                return (
                    <article className='projectArticle' key={JSON.stringify(work)}>
                        <img src={work.image} alt={work.image} className='projectImage'/>
                        <h3>{work.title}</h3>
                        <p>{work.description}</p>
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
                            <a href={work.demo} target="_blank" rel="noreferrer">Demo <BsArrowRightShort/></a>
                            <a href={work.repo} target="_blank" rel="noreferrer">Repository <BsArrowRightShort/></a>
                        </div>
                    </article>
                )
            })}
            <article className='projectArticle'>
                <div>
                    <h2>WATCH MORE</h2>
                </div>
            </article>
            </div>
    </section>
  )
}

export default SelectedWorks