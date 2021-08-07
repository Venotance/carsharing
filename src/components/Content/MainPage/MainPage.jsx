import React from 'react'
import Info from './Info/Info'
import Slider from './Slider/Slider'
import ob from './MainPage.module.css'

const MainPage = (props) => {
  props.statusflag('MainPage');
  return (
    <div className={ob.content}>
      <Info />
      <Slider />
    </div>
  )
}

export default MainPage;