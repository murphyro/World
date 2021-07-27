import React from 'react';
import './App.css';
import map from './countries/map.png';
import Europe from './countries/Europe/europe';
import Belmap from './countries/Europe/belarus';
import { BrowserRouter, Route } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
      <div className="map">
        <svg viewBox="0 0 2457.3333 1266.6667">
          <Europe />               
        </svg>
        <img src={map} />
        <Route />
        <Route path="/belarus" component={Belmap}/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
