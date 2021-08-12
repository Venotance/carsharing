import React from 'react'
import ob from './OrderPage.module.css'
import Header from '../Header/Header'
import Model from './Model/Model'
import Location from './Location/Location'
import NavbarOrder from './NavbarOrder/NavbarOrder'
import Description from './Description/Description';
import { BrowserRouter, Route } from 'react-router-dom';
import { locparser1 } from './ParserLocation'
import { checkParams } from './CheckParams'

const OrderPage = (props) => {
  const [location1, setStateLocation1] = React.useState('')
  let locationOne = locparser1(1, location1);
  let locationTwo = locparser1(2, location1);
  props.setstatusflag('OrderPage');
  let statusflag = props.statusflag;

  return (
    <div className={ob.content}>
      <div>
        <Header statusflag={statusflag} />
      </div>
      <div></div>
      <NavbarOrder
        geo={checkParams(locationTwo)}
        mdl={checkParams('')}
        adt={checkParams('')}
        ttl={checkParams('')}
      />
      <div className={ob.body}>
        <div className={ob.body_content}>
          <Route exact path='/carsharing/orderpage/location'>
            <Location
              updateLocation1={setStateLocation1}
              location1={locationOne}
              location2={locationTwo}
            />
          </Route>
          <Route exact path='/carsharing/orderpage/model' component={Model} />
          <Description
            location1={locationOne}
            location2={locationTwo}
          />
        </div>
      </div>
    </div>
  )
}

export default OrderPage;