import React from 'react'
import { Link } from 'react-router-dom'

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
    </nav>
  )
}

export default NavComponent