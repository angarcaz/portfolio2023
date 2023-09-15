import React from 'react'
import SelectedWorks from '../components/SelectedWorks'
import HeroComponent from '../components/HeroComponent'
import GraphicDesignWorks from '../components/GraphicDesignWorks'

const HomePage = () => {
  return (
    <>
        <HeroComponent></HeroComponent>
        <SelectedWorks></SelectedWorks>
        <GraphicDesignWorks></GraphicDesignWorks>
    </>
  )
}

export default HomePage