import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/App.css'

const NavComponent = () => {
  return (
    <nav>
        <h1><Link to="/">Ángela GC</Link></h1>
        <h2>Graphic Designer & Front-End Developer</h2>
        <ul>
            <li><Link to="">Work</Link></li>
            <li><Link to="">About</Link></li>
            <li><Link to="">Contact</Link></li>
        </ul>
        <p><a href="mailto:'angarcaz93@gmail.com'">angarcaz93@gmail.com</a></p>
    </nav>
  )
}

export default NavComponent