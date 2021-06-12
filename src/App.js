import React from 'react'
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="app__wrapper">
        <Sidebar />
        <div className="content">
          <div className="content__info"></div>
          <div className="content__slider"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
