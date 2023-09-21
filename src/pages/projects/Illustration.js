import React from 'react'
import { Projects } from '../../assets/ProjectsInfo';

const Illustration = () => {

  return (
    <>
      <section className='pageProject illustrationSection'>
      <h2 className='h2BigSize'>Illustration Selection</h2>
        <div className='galleryGrid'>
          <div className='galleryRow'>
            <div className='galleryCol'>
                {Projects.gdprojects[3].images.slice(0,3).map((pic, index) => {
                  return (
                    <a href={pic} target='_blank' rel="noreferrer">
                    <img key={index} src={pic} alt={pic} className='galleryImage'/>
                    </a>
                  )
                })}
            </div>
            <div className='galleryCol'>
                {Projects.gdprojects[3].images.slice(3,7).map((pic, index) => {
                  return (
                    <a href={pic} target='_blank' rel="noreferrer">
                      <img key={index} src={pic} alt={pic} className='galleryImage'/>
                    </a>
                  )
                })}
            </div>
            <div className='galleryCol'>
                {Projects.gdprojects[3].images.slice(7, 12).map((pic, index) => {
                  return (
                    <a href={pic} target='_blank' rel="noreferrer">
                      <img key={index} src={pic} alt={pic} className='galleryImage'/>
                    </a>
                  )
                })}
            </div>
          </div>
        
        </div>
      </section>
    </>
  )
}

export default Illustration