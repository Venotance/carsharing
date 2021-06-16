import React from 'react'
import ob from './Body.module.css'

const Body = () => {
  return (
    <section className={ob.content__body}>
      <h1>Каршеринг</h1>
      <h2>Need for drive</h2>
      <p>Поминутная аренда авто твоего города</p>
      <a href="#" className="btn">Забронировать</a>
    </section>
  )
}

export default Body;