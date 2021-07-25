import React from 'react'
import { render } from 'react-dom';
import ob from './OrderPage.module.css'
import Header from '../Header/Header'
import Map from './img/map.jpg';
import { NavLink } from 'react-router-dom'
import Autocomplete from "./Autocomplete";


const OrderPage = () => {
  var state = {
    name: 'Бумеранг не запущен'
  };
  const updateData = (value) => {
    state = { name: value }
    console.log("Value: " + value)
  }
  // const updateData = (value) => {
  //   state = { name: value }
  //   console.log( value )
  // }

  let city = [" Ульяновск",
              " Саранск",
              " Пермь",
              " Астрахань"]

  return (
    <div className={ob.content}>
      <Header />
      <div></div>

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


      <div className={ob.body}>
        <div className={ob.body_content}>
          <div className={ob.geolocation}>
            <div className={ob.select_adress}>
              <div className={ob.city_line}>
                <div><p>Город</p></div>
                <Autocomplete
                  updateData={updateData}
                  placehold='Начните вводить город ...'
                  options={city}
                />
              </div>
              <div className={ob.point_line}>
                <div><p>Пункт выдачи</p></div>
                <Autocomplete
                  updateData={updateData}
                  placehold='Начните вводить пункт ...'
                  options={[
                    "Коммунистическая 24",
                    "Советская 35",
                    "Гагарина 12",
                    "Ломоносова 2"
                  ]}
                />
              </div>
            </div>
            <div className={ob.map}>
              <p>Выбрать на карте:</p>
              <img src={Map} alt="" />
            </div>
          </div>
          <div className={ob.description}>
            <p>{state.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage;