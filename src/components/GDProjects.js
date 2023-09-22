import React, { useEffect, useState } from 'react';
import { Projects } from '../assets/ProjectsInfo';
import { Link } from 'react-router-dom';

const GDProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const articles = document.querySelectorAll('.project-article');
    
    articles.forEach((article, index) => {
      article.style.animationDelay = `${0.6 * index}s`;
    });
  }, []);

  return (
    <section className='workPageSection'>
      {Projects.gdprojects.map((work, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <article
            key={JSON.stringify(work)}
            className={`project-article fade-in-fwd ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={work.image} alt={work.image} className='projectImage' />
            
            <div className={`hover-article ${isHovered ? 'slide-in-bottom' : 'slide-out-bottom'}`}>
              <h3 className='h2BigSize'>{work.title}</h3>
              <div className='line'></div>
              <h4 className='mediumSize'>{work.subtitle}</h4>
              <p>{work.description}</p>
              <Link className='mediumSize underlineLink' to={work.route}>See more</Link>
            </div>
          
          </article>
        );
      })}
    </section>
  )
}

export default GDProjects;
