import React, { useState } from 'react'
import { Projects } from '../assets/ProjectsInfo';

//icons
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { DiSass } from 'react-icons/di'
import { SiJavascript } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { FaAngular } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'

import { BsArrowRightShort } from 'react-icons/bs'

//styles
import '../styles/App.css';
import { Link } from 'react-router-dom';

//swiper:
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/swiper-bundle.css'
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';


const SelectedWorks = () => {

    const firstThreeProjects = Projects.lastprojects.slice(0, 4);
    const [swiperRef, setSwiperRef] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [hoveredIndexB, setHoveredIndexB] = useState(null);

  return (
    <>
    <section className='selectedWorksSection'>
    <h2 className='h2BMaxSize'>Selection of front-end works</h2>
    <div className='navigationBox'>
        <Link to="/work" className='mediumSize underlineLink'>Browse more</Link>
        <div className='navigationButtons'>
            <button className="custom-swiper-button-prev"><IoIosArrowBack className="iconA"/></button>
            <button className="custom-swiper-button-next"><IoIosArrowForward className="iconA"/></button>
        </div>
    </div>
        <div className='WorksBar'>
            <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={2.3}
            spaceBetween={40}
            freeMode={true}
            navigation={{
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev',
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Navigation]}
            className="mySwiper"
        >
            {firstThreeProjects.map((work, index) => {
                const isHovered = hoveredIndex === index;
                return (
                    <SwiperSlide>
                    <article
                    key={JSON.stringify(work)}
                    className={`projectArticle ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className='project-article'>
                        <img src={work.image} alt={work.image} className='projectImage'/>
                            <div className={`hover-article ${isHovered ? 'slide-in-bottom' : 'slide-out-bottom'}`}>
                            <p>{work.description}</p>
                            <a href={work.demo} target="_blank" rel="noreferrer" className='mediumSize underlineLink'>Demo</a>
                            <a href={work.demo} target="_blank" rel="noreferrer" className='mediumSize underlineLink'>Repo</a>
                            </div>
                        </div>
                       
                        <div className='projectArticleInfoContainer'>
                            <header>
                                <h3 className='h2BigSize'>{work.title}</h3>
                                <h4 className='mediumSize'>{work.subtitle}</h4>
                            </header>
                            <ul>
                                {work.technologies.map((techno) => {
                                    return (
                                        <li key={techno} className='technoIcons'>
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
                        </div>
                    </article>
                    </SwiperSlide>
                )
            })}
            </Swiper>
            </div>
        </section>
    <section className='selectedWorksSection'>  
    <h2 className='h2BMaxSize'>Selection of graphic design works</h2>
    <div className='navigationBox'>
        <Link to="/work" className='mediumSize underlineLink'>Browse more</Link>
        <div className='navigationButtons'>
            <button className="custom-swiperB-button-prev"><IoIosArrowBack className="iconB"/></button>
            <button className="custom-swiperB-button-next"><IoIosArrowForward className="iconB"/></button>
        </div>
    </div>
        <div className='WorksBar'>
            <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={2.3}
            spaceBetween={30}
            freeMode={true}
            navigation={{
                nextEl: '.custom-swiperB-button-next',
                prevEl: '.custom-swiperB-button-prev',
            }}
            pagination={{
                clickable: true,
            }}
            modules={[Navigation]}
            className="mySwiper"
        >
            {Projects.gdprojects.map((project, index) => {
                const isHoveredB = hoveredIndexB === index;
                return (
                    <SwiperSlide>
                    <article
                    key={JSON.stringify(project)}
                    className={`projectArticle ${isHoveredB ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredIndexB(index)}
                    onMouseLeave={() => setHoveredIndexB(null)}
                    >
                        <div className='project-article'>
                            <img src={project.image} alt={project.image} className='projectImage' />
                            <div className={`hover-article ${isHoveredB ? 'slide-in-bottom' : 'slide-out-bottom'}`}>
                            <p>{project.description}</p>
                            <Link to={project.route} className='mediumSize underlineLink'>Watch more</Link>
                            </div>
                        </div>
                        
                        <div className='projectArticleInfoContainer'>
                            <header>
                                <h3 className='h2BigSize'>{project.title}</h3>
                                <h4 className='mediumSize'>{project.subtitle}</h4>
                            </header>
                        </div>
                    </article>
                    </SwiperSlide>
                )
            })}
            </Swiper>
            </div>
    </section>
    </>
  )
}

export default SelectedWorks