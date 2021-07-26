import React from 'react';
import './App.css';
import map from './countries/map.png';
import Europe from './countries/Europe/europe';


const App = () => {
  return (
    
      <div className="map">
        <svg viewBox="0 0 2457.3333 1266.6667">
          <Europe />
        </svg>
        <img src={map} alt="map" />
      </div>
    
  );
}

export default App;
