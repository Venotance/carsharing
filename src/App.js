import React from 'react'
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <div className="app__wrapper">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
