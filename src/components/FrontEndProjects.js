import React, { useState } from 'react';
import { Projects } from '../assets/ProjectsInfo';

//icons
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { DiSass } from 'react-icons/di'
import { SiJavascript } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { FaAngular } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'

const FrontEndProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className='workPageSection'>
      {Projects.lastprojects.map((work, index) => {
        const isHovered = hoveredIndex === index;
        return (
          <article
            key={JSON.stringify(work)}
            className={`project-article ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a href={work.main_link} target='_blank' rel="noreferrer">
              <img src={work.image} alt={work.image} className='projectImage' />
            </a>
              <div className={`hover-article ${isHovered ? 'slide-in-bottom' : 'slide-out-bottom'}`}>
                <h3 className='h2BigSize'>{work.title}</h3>
                <div className='line'></div>
                <h4 className='mediumSize'>{work.subtitle}</h4>
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
                <a href={work.demo} target="_blank" rel="noreferrer" className='mediumSize underlineLink'>See more</a>
              </div>
            
          </article>
        );
      })}
    </section>
  );
};

export default FrontEndProjects;
