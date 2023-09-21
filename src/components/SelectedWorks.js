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

  return (
    <section className='selectedWorksSection'>
    <h2 className='h2BigSize'>Selection of front-end works</h2>
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
            spaceBetween={30}
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
            {firstThreeProjects.map((work) => {
                return (
                    <SwiperSlide>
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
                    </SwiperSlide>
                )
            })}
            </Swiper>
            </div>

    <h2 className='h2BigSize'>Selection of graphic design works</h2>
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
            {Projects.gdprojects.map((project) => {
                return (
                    <SwiperSlide>
                    <article className='projectArticle' key={JSON.stringify(project)}>
                        <Link to={project.route}>
                            <img src={project.image} alt={project.image} className='projectImage' />
                        </Link>
                        <h3 className='h2BigSize'>{project.title}</h3>
                        <p className='commonParagraph'>{project.description}</p>
                        <Link to={project.route} className='underlineLink'>Watch more <BsArrowRightShort/></Link>
                    </article>
                    </SwiperSlide>
                )
            })}
            </Swiper>
            </div>
    </section>
  )
}

export default SelectedWorks