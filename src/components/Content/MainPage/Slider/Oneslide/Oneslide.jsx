import React from 'react'
import ob from './Oneslide.module.css'

const Oneslide = (props) => {
  return (
    <div className={ob.slide}>
      <div>
        <h3>{props.texth3}</h3>
        <p>{props.textbody}</p>
        <a href="#" className={props.myClass}>
          <div>Подробнее</div>
        </a>
      </div>
    </div>
  )
}

export default Oneslide;


