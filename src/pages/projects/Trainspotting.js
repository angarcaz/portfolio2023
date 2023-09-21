import React from 'react'
import { Projects } from '../../assets/ProjectsInfo';

const Trainspotting = () => {
  return (
    <>
      <section className='pageProject'>
        <div className='galleryGrid'>
          <div className='galleryRow'>
            <div className='galleryColBig'>
                {Projects.gdprojects[1].images.slice(0,3).map((pic, index) => {
                  return (
                    <a href={pic} target='_blank' rel="noreferrer">
                    <img key={index} src={pic} alt={pic} className='galleryImage'/>
                    </a>
                  )
                })}
            </div>
            <div className='galleryColBig'>
                {Projects.gdprojects[1].images.slice(4,7).map((pic, index) => {
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

export default Trainspotting