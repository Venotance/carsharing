import React from 'react'
import Points from './Points/Points'
import PriceButton from './PriceButton/PriceButton'
import ob from './Description.module.css'
import { locparser } from '../ParserLocation'
import { BrowserRouter, Route } from 'react-router-dom';

const Description = (props) => {
  let location1 = locparser(1, props);
  let location2 = locparser(2, props);
  let sepatator = (location2 == '') ? '' : ', ';
  let price = [8000,12000]

  return (
    <div className={ob.description}>
      <div>
        <p>Ваш заказ:</p>
        <div className={ob.order_details}>
          <p>Пункт выдачи</p>
          <Points />
          <div>
            <p>{location1}{sepatator}</p>
            <p>{location2}</p>
          </div>
        </div>
        <Route exact path='/carsharing/orderpage/location'>
          <PriceButton meanprice={price} textbutton='Выбрать модель' />
        </Route>
        <Route exact path='/carsharing/orderpage/model'>
          <PriceButton meanprice={price} textbutton='Дополнительно' />
        </Route>
      </div>
    </div>
  )
}

export default Description;