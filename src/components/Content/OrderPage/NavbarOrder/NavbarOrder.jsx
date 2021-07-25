import React from 'react'
import ob from './NavbarOrder.module.css'
import { NavLink } from 'react-router-dom'

const NavbarOrder = () => {


    return (
        <div className={ob.navbar}>
        <div className={ob.navbar_elements}>
          <div>
            <NavLink to='/carsharing/orderpage/location' className={ob.nav_element} activeClassName={ob.nav_element_active}>Местоположение</NavLink>
            <div className={ob.arrow}></div>
            <NavLink to='/carsharing/orderpage/model' className={ob.nav_element} activeClassName={ob.nav_element_active}>Модель</NavLink>
            <div className={ob.arrow}></div>
            <NavLink to='/carsharing/orderpage/additionally' className={ob.nav_element} activeClassName={ob.nav_element_active}>Дополнительно</NavLink>
            <div className={ob.arrow}></div>
            <NavLink to='/carsharing/orderpage/total' className={ob.nav_element} activeClassName={ob.nav_element_active}>Итого</NavLink>
          </div>
        </div>
      </div>
    )
}

export default NavbarOrder;