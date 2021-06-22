import React from 'react'
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import MainPage from './components/Content/MainPage/MainPage';
import OrderPage from './components/Content/OrderPage/OrderPage';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="app-wrapper">
        <Sidebar />
        <div className="app-wrapper__content">
          <Route exact path='/carsharing' component={MainPage}/>
          <Route  path='/carsharing/order' component={OrderPage}/>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
