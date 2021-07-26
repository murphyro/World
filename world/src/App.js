import React from 'react';
import './App.css';
import map from './countries/map.png';
import Europe from './countries/Europe/europe';
import BorderBelarus from './countries/Europe/bel';
import Belmap from './countries/Europe/belarus';
import { BrowserRouter, Route } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
      <div className="map">
        <svg viewBox="0 0 2457.3333 1266.6667">
          <BorderBelarus />
        
        </svg>
        <Route path="/belarus" component={Belmap}/>
        <img src={map} alt="map" />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
