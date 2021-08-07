import React from 'react'
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import MainPage from './components/Content/MainPage/MainPage';
import OrderPage from './components/Content/OrderPage/OrderPage';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  const [statusflag, setStateStatusflag] = React.useState('');

  return (
    <BrowserRouter>
    <div className="App">
      <div className="app-wrapper">
        <Sidebar statusflag={statusflag}/>
        <div className="app-wrapper__content">
          <Route exact path='/carsharing' >
            <MainPage statusflag={setStateStatusflag} />
          </Route>
          <Route  path='/carsharing/orderpage'>
            <OrderPage statusflag={setStateStatusflag} />
          </Route>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
