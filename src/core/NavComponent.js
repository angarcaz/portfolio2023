import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/App.css'

const NavComponent = () => {
  return (
    <nav>
        <h1><Link to="/">Ángela GC</Link></h1>
        <ul>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </nav>
  )
}

export default NavComponent