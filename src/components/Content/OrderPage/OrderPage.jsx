import React from 'react'
import ob from './OrderPage.module.css'
import Header from '../Header/Header'
// import Model from './Model/Model'
import Location from './Location/Location'
import NavbarOrder from './NavbarOrder/NavbarOrder'
import Description from './Description/Description';
import { BrowserRouter, Route } from 'react-router-dom';


const OrderPage = () => {

  
  return (
    <div className={ob.content}>
      <Header />
      <div></div>
      <NavbarOrder />
      <div className={ob.body}>
        <div className={ob.body_content}>
          <Route exact path='/carsharing/orderpage/location' component={Location}/>
          {/* <Route exact path='/carsharing/orderpage/model' component={Model}/> */}
          <Description 
          location={location}
          />
        </div>
      </div>
    </div>
  )
}

export default OrderPage;