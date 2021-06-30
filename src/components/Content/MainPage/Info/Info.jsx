import React from 'react'
import Header from '../../Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import ob from './Info.module.css'

const Info = () => {
  return (
    <div className={ob.content__info}>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default Info;