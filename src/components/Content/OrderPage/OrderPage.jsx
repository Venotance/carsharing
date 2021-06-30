import React from 'react'
import ob from './OrderPage.module.css'
import Header from '../Header/Header'
import { NavLink } from 'react-router-dom'

const OrderPage = () => {
  return (
    <div className={ob.content}>
      <Header />
      <div></div>

      <div className={ob.navbar}>
        <div className={ob.navbar_elements}>
          <div>
            <NavLink to='/carsharing/orderpage/location'>Местоположение</NavLink>
            <div class={ob.arrow}></div>
            <NavLink to='/carsharing/orderpage/model'>Модель</NavLink>
            <div class={ob.arrow}></div>
            <NavLink to='/carsharing/orderpage/additionally'>Дополнительно</NavLink>
            <div class={ob.arrow}></div>
            <NavLink to='/carsharing/orderpage/total'>Итого</NavLink>
          </div>
        </div>
      </div>


      <div className={ob.body}>
        <div className={ob.mestopoloz}>
          <div>
            
          </div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage;