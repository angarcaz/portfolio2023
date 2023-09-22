import React from 'react'
import {CV} from '../assets/Cv';

const WorkEducationComponent = () => {
  return (
    <>
    <section className='educationSection'>
    <h2 className='h2BigSize'>Experience.</h2>
        <div className='educationContainer'>
            {CV.experience.map((ex) => {
                return (
                    <article className='educationItem' key={JSON.stringify(ex.title)}>
                        <h3 className='mediumSize'>{ex.title}</h3>
                        <p>{ex.date}</p>
                        <p>{ex.where}</p>
                        <ul>
                            {ex.tasks.map((t) => (
                            <li key={t}>{t}</li>
                            ))}
                        </ul>
                    </article>
                )
            })}
        </div>
    </section>
    <section className='educationSection'>
    <h2 className='h2BigSize'>Education.</h2>
        <div className='educationContainer'>
            {CV.education.map((ed) => {
                return (
                    <article className='educationItem' key={JSON.stringify(ed.title)}>
                        <h3 className='mediumSize'>{ed.title}</h3>
                        <p>{ed.date}</p>
                        <p>{ed.institution}</p>
                    </article>
                )
            })}
        </div>
    </section>
    </>
  )
}

export default WorkEducationComponent