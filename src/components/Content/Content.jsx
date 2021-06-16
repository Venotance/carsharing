import React from 'react'
import Info from './Info/Info' 
import Slider from './Slider/Slider' 
import ob from './Content.module.css'

const Content = () => {
    return (
        <div className={ob.content}>
          <Info />
          <Slider />
        </div>
    )
}

export default Content;