import React from 'react'
import { Projects } from '../../assets/ProjectsInfo';

const GrapaTinta = () => {
  return (
    <>
        <section className='pageProject'>
        <section className='TwoColSection'>
        <div className='col-2'>
            <h2>GRAPA&TINTA</h2>
            <div>
            <p>{Projects.gdprojects[0].description}</p>
            </div>
        </div>
    </section>
           <div className='col-2'>
            <img src={Projects.gdprojects[0].image} alt="prueba" className='MainProjectImg'/>
        </div>
            <img src={Projects.gdprojects[0].image4} alt="grapa&tinta-activitats"/>
            <div className='TwoColSection'>
              <img className='MidImage' src={Projects.gdprojects[0].image2} alt="grapa&tinta-activitats" />
              <img className='MidImage' src={Projects.gdprojects[0].image3} alt="grapa&tinta-activitats" />
            </div>
        </section>
    </>
  )
}

export default GrapaTinta