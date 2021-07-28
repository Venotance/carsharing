import React from 'react'
import { NavLink } from 'react-router-dom'
import ob from './PriceButton.module.css'

const PriceButton = (props) => {
  let minprice = props.meanprice[0]
  let maxprice = props.meanprice[1]

  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <div>
      <div className={ob.price}>
        <p>Цена</p>
        <p>: от {numberWithSpaces(minprice)} до {numberWithSpaces(maxprice)} ₽</p> 
      </div>
      {/* <NavLink to='/carsharing/orderpage/location' className={ob.button} activeClassName={ob.nav_element_active}>Местоположение</NavLink> */}
      <NavLink to='/carsharing/orderpage/model' className={ob.button}>
        {props.textbutton}
      </NavLink>
    </div>
  )
}

export default PriceButton;