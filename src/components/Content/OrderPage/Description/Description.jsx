import React from 'react'
import Points from './Points/Points'
import PriceButton from './PriceButton/PriceButton'
import ob from './Description.module.css'
import { locparser } from '../ParserLocation'
import { BrowserRouter, Route } from 'react-router-dom';

const Description = (props) => {
  let v = 0;
  let location1 = locparser(1, props);
  let location2 = locparser(2, props);
  let sepatator = (location2 == '') ? '' : ', ';

  function checkParams(value1,value2) {
    if ((value1 == "")||(value1 == null)){
      return [0, value2];
    } else {
      return [1, value2];
    }
  }

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
          {console.log(checkParams(location2), ' ', location2)}
          <PriceButton property={checkParams(location2,'geo')} textbutton='Выбрать модель' />
        </Route>
        <Route exact path='/carsharing/orderpage/model'>
          <PriceButton property={checkParams(1,'mdl')} textbutton='Дополнительно' />
        </Route>
      </div>
    </div>
  )
}

export default Description;