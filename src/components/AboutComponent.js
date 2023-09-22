/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import AboutImage from "../assets/img/about.png"
import CvAngela from "../assets/CV_AngelaEN2023B.pdf"


const AboutComponent = () => {
  return (
    <section className='TwoColSection'>
        <div className='col-2'>
            <h2 className='h2BigSize'>Hello! I'm a graphic designer & a front-end developer wannabe</h2>
            <div>
            <p>I'm all about the creative process, from brainstorming to bringing ideas to life. I'm methodical, a bit of a perfectionist, and endlessly curious. I'm into constantly learning new things.
                I'm a firm believer in the power of design and tech to make life easier and better. I'm also big on drawing and totally into photography.
                I've picked up skills in graphic arts, web design, and user experience along the way. I've done web design, made cool stuff for online campaigns, and even dabbled in social media content.
                Right now, I'm on an exciting journey to become a front-end developer. Let's make amazing things happen! </p>
            <a href={CvAngela} className='underlineLink mediumSize'>Download my CV</a>
            </div>
        </div>
       <div className='col-2'>
            <img src={AboutImage} alt="prueba" className='AboutImage'/>
       </div>
    </section>
  )
}

export default AboutComponent