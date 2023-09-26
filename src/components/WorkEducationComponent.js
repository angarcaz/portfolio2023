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
                        <p className='italic'>{ex.where}</p>
                        <ul className='aboutUl'>
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
                        <p className='italic'>{ed.institution}</p>
                    </article>
                )
            })}
        </div>
    </section>
    <section className='TwoColSec'>
        <article className='HalfContainer'>
            <header>
                <h2 className='h2BigSize'>Hard Skills.</h2>
            </header>
            <div className='educationContainer'>
                {CV.hard_skills.map((hs) => {
                    return (
                        <article className='educationItem' key={JSON.stringify(hs.name)}>
                            <h3 className='mediumSize'>{hs.name}</h3>
                        </article>
                    )
                })}
            </div>
        </article>
        <article className='HalfContainer rightBorder'>
            <header>
                <h2 className='h2BigSize'>Soft Skills.</h2>
            </header>
            <div className='educationContainer'>
                {CV.soft_skills.map((hs) => {
                    return (
                        <article className='educationItem' key={JSON.stringify(hs.name)}>
                            <h3 className='mediumSize'>{hs.name}</h3>
                        </article>
                    )
                })}
            </div>
        </article>
    </section>
    </>
  )
}

export default WorkEducationComponent