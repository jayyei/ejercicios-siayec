import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Ejercicio1} from './Components/Ejercicio1'
import {Ejercicio1V1} from './Components/Ejercicio1V1'
import {Ejercicio1V2} from './Components/Ejercicio1V2'


function App() {
  return (
    <div className="App">
      {/* <Ejercicio1
        n={100}/> */}
      {/* <Ejercicio1V1/> */}
      <Ejercicio1V2/>
    </div>
  );
}

export default App;
