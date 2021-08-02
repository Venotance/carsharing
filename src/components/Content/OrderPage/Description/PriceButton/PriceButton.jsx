import React from 'react'
import { NavLink } from 'react-router-dom'
import ob from './PriceButton.module.css'

const PriceButton = (props) => {
  // let FlagResGeo = props.checkresult[0]
  // let price = [8000, 12000]
  // let minprice = price[0]
  // let maxprice = price[1]

  function priceParams(params) {

  }
  
  function linkParamsFunc(value) {
    let linkV, priceV, classV;

    let linkarray = {
      geo: 'model',
      mdl: 'additionally',
      adt: 'total'
    }

    if (value[1] == 'geo') {
      let price = [8000, 12000]
      if (value[0] == 0) {
        linkV = 'model';
        priceV = '';
        classV = ob.button;
      }
      else {
        linkV = 'model';
        priceV = `от ${numberWithSpaces(price[0])} до ${numberWithSpaces(price[1])} ₽`;
        classV = ob.button_active;
      }
    } else if (value[1] == 'mdl') {
      if (value[0] == 0) {
        linkV = 'additionally';
        priceV = '';
        classV = ob.button;
      }
      else {
        linkV = 'additionally';
        priceV = `от ${numberWithSpaces(1)} до ${numberWithSpaces(2)} ₽`;
        classV = ob.button_active;
      }
    } else if (value[1] == 'adt') {

    } else if (value[1] == 'ttl') {

    }
    return { LinkValue: linkV, PriceValue: priceV, ClassValue: classV }
  }

  let property = linkParamsFunc(props.property)

  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <div className={ob.price_button}>
      <div className={ob.price}>
        <p>Цена</p>
        <p>: {property.PriceValue}</p>
      </div>
      <NavLink to={`/carsharing/orderpage/${property.LinkValue}`} className={property.ClassValue}>
        {props.textbutton}
      </NavLink>
    </div>
  )
}

export default PriceButton;