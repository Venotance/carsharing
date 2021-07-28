import React from 'react'
import ob from './OrderPage.module.css'
import Header from '../Header/Header'
// import Model from './Model/Model'
import Location from './Location/Location'
import NavbarOrder from './NavbarOrder/NavbarOrder'
import Description from './Description/Description';
import { BrowserRouter, Route } from 'react-router-dom';

const OrderPage = () => {
  let buttonText='';
  const [location1, setStateLocation1] = React.useState('')

  return (
    <div className={ob.content}>
      <Header />
      <div></div>
      <NavbarOrder />
      <div className={ob.body}>
        <div className={ob.body_content}>
          <Route exact path='/carsharing/orderpage/location'>
            <Location 
            updateLocation1={setStateLocation1} 
            location={location1}
            />
          </Route>
          {/* <Route exact path='/carsharing/orderpage/model' component={Model} /> */}
          <Description
            location={location1}
          />
        </div>
      </div>
    </div>
  )
}

export default OrderPage;