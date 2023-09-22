import React, { useState } from 'react'
import FrontEndProjects from '../components/FrontEndProjects'
import GDProjects from '../components/GDProjects'

const WorkPage = () => {

  const [showComponents, setShowComponents] = useState("allprojects");

  return (
    <>
    <div className='buttonContainer'>
      <button
        className={`mediumSize underlineLink activeButton ${showComponents === "allprojects" ? "active" : "inactiveButton"}`}
        onClick={() => setShowComponents("allprojects")}>Show All
      </button>
      <button
        className={`mediumSize underlineLink activeButton ${showComponents === "frontendprojects" ? "active" : "inactiveButton"}`}
        onClick={() => setShowComponents("frontendprojects")}>Front End
      </button>
    <button
      className={`mediumSize underlineLink activeButton ${showComponents === "gdprojects" ? "active" : "inactiveButton"}`}
      onClick={() => setShowComponents("gdprojects")}>Graphic Design
    </button>
    </div>
    {
    showComponents === "frontendprojects" ?
    (<FrontEndProjects></FrontEndProjects>) :
    showComponents === "gdprojects" ? 
    (<GDProjects></GDProjects>) :
    (<><FrontEndProjects></FrontEndProjects><GDProjects></GDProjects></>)}
    </>
  )
}

export default WorkPage

