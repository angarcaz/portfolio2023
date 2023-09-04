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
  return (
    <section className='selectedWorksSection'>
        {Projects.lastprojects.map((work) => {
            return (
                <article className='projectArticle' key={JSON.stringify(work)}>
                    <img src={work.image} alt={work.image} />
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
    </section>
  )
}

export default SelectedWorks