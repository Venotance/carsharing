import React from 'react'
import ob from './NavbarOrder.module.css'
import { NavLink } from 'react-router-dom'

const NavbarOrder = (props) => {

  function checkValue(curr_v, prev_v) {
    if (curr_v == 1) {
      return ob.nav_element_visited
    } else if (prev_v == 1) {
      return ob.nav_element_accessible
    } else return ob.nav_element
  }

  function classReturn(name, value) {
    switch (name) {
      case 'geo':  // if (name === 'geo')
        return checkValue(value.geo, 1)

      case 'mdl':
        return checkValue(value.mdl, value.geo)

      case 'adt':
        return checkValue(value.adt, value.mdl)

      case 'ttl':
        return checkValue(value.ttl, value.adt)
    }
  }
  // function checkValue (value, name) {
  //   if (value == 1) {
  //     flag=name;
  //     return ob.nav_element_visited
  //   } else {
  //     return ob.nav_element
  //   }
  // }

  let states_array = [
    { element_name: "geo", element_value: props.geo },
    { element_name: "mdl", element_value: props.mdl },
    { element_name: "adt", element_value: props.adt },
    { element_name: "ttl", element_value: props.ttl }
  ]

  let flag = '';
  let geo = props.geo;
  let mdl = props.mdl;
  let adt = props.adt;
  let ttl = props.ttl;

  console.log(geo, ' ', mdl, ' ', adt, ' ', ttl, ' ', flag)

  return (
    <div className={ob.navbar}>
      <div className={ob.navbar_elements}>
        <div>
          <NavLink to='/carsharing/orderpage/location' className={classReturn('geo', props)} activeClassName={ob.nav_element_active}>Местоположение</NavLink>
          <div className={ob.arrow}></div>
          <NavLink to='/carsharing/orderpage/model' className={classReturn('mdl', props)} activeClassName={ob.nav_element_active}>Модель</NavLink>
          <div className={ob.arrow}></div>
          <NavLink to='/carsharing/orderpage/additionally' className={classReturn('adt', props)} activeClassName={ob.nav_element_active}>Дополнительно</NavLink>
          <div className={ob.arrow}></div>
          <NavLink to='/carsharing/orderpage/total' className={classReturn('ttl', props)} activeClassName={ob.nav_element_active}>Итого</NavLink>
        </div>
      </div>
    </div>
  )
}

export default NavbarOrder;