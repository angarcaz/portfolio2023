import React from 'react'
import { Projects } from '../../assets/ProjectsInfo';

const Pels60 = () => {
  return (
    <>
        <section className='pageProject'>
        <section className='TwoColSection'>
        <div className='col-2'>
            <img src={Projects.gdprojects[2].logo} className='galleryLogo' alt="logo"/>
            <div>
            <p>{Projects.gdprojects[2].description}</p>
            <img src={Projects.gdprojects[2].image2} className='galleryImage' alt="pels60-posters"/>
            <img src={Projects.gdprojects[2].image3} className='galleryImage Rounded' alt="pels60-posters"/>
            </div>
        </div>
    </section>
           <div className='col-2'>
            <img src={Projects.gdprojects[2].video} alt="prueba" className='MainProjectImg'/>
        </div>
            <img src={Projects.gdprojects[2].image} alt="pels60-posters"/>
        </section>
    </>
  )
}

export default Pels60