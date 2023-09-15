/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import AboutImage from "../assets/img/about.png"


const AboutComponent = () => {
  return (
    <section className='TwoColSection'>
        <div className='col-2'>
            <h2>Hello! I'm a graphic designer & a front-end developer wannabe</h2>
            <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum nibh, tincidunt vitae rutrum molestie, tincidunt fringilla eros. 
            Praesent est orci, fermentum eu ultrices in, iaculis in lacus. Maecenas eget nibh quis ante ultrices tristique sed eu purus. Praesent tincidunt quam ac dolor rhoncus finibus. 
            Vestibulum vestibulum lacus ut commodo semper. Aliquam rutrum leo vitae maximus pellentesque. Maecenas interdum commodo nisi, ut dapibus elit.</p>
            <a href="#">Download my CV</a>
            </div>
        </div>
       <div className='col-2'>
            <img src={AboutImage} alt="prueba" className='AboutImage'/>
       </div>
    </section>
  )
}

export default AboutComponent