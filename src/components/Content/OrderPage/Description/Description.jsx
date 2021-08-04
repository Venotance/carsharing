import React from 'react'
import Points from './Points/Points'
import PriceButton from './PriceButton/PriceButton'
import ob from './Description.module.css'
import { BrowserRouter, Route } from 'react-router-dom';
import { checkParams } from '../CheckParams';

const Description = (props) => {
  let location1 = props.location1;
  let location2 = props.location2;
  let sepatator = (location2 == '') ? '' : ', ';

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
          <PriceButton property={[checkParams(location2),'geo']} textbutton='Выбрать модель' />
        </Route>
        <Route exact path='/carsharing/orderpage/model'>
          <PriceButton property={[checkParams(''),'mdl']} textbutton='Дополнительно' />
        </Route>
      </div>
    </div>
  )
}

export default Description;